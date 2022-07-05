// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import slugify from 'slugify';
import doctors from '../../functions/getDoctors';
import parseImgWithType from '../../functions/parseImgWithType';
import service from '../../functions/services';
import spec from '../../functions/specifications';
import clinicsData from '../../scribingoriginal-new/combineClinics.json'

const API = 'http://localhost:1341'
// const API = 'https://strapi.wellikan.com'

type Contact = {
  phone: string;
  email: string;
}

type Clinics = {
  title: string;
  content: string;
  contact: Contact;
  doctors: number[];
  specializations: number[];
  services: number[];
  images: number[];
  licences: number[];
  slug: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'POST') {

    const errorDoctors = []
    // @ts-ignore
    const clinics = clinicsData.dataResult
      
    const length = clinics.length;

    let specIds: number[] = [];

    let successLength = 0, errorClinics: any = []

    const lengthArr = []

    for(let i = 0; i < length; i++) {

      specIds = await spec(clinics[i].specializations)
      
      const medicalNames = [], medicalPrice = []
      for(let a = 0; a < clinics[i].price_medical_name.length; a++) {
        medicalNames.push(...clinics[i].price_medical_name[a])
        medicalPrice.push(...clinics[i].price_medical[a])
      }
      
      const diagnosticsNames = [], diagnosticsPrice = []
      for(let a = 0; a < clinics[i].price_diagnostics_name.length; a++) {
        diagnosticsNames.push(...clinics[i].price_diagnostics_name[a])
        diagnosticsPrice.push(...clinics[i].price_diagnostics[a])
      }

      const servicesNames = [...medicalNames, ...diagnosticsNames]
      const servicesPrices = [...medicalPrice, ...diagnosticsPrice]

      const servicesData = servicesNames.map((item: any, idx: number) => ({
        title: item,
        price: servicesPrices[idx]
      }))

      const servicesIds = await service(servicesData)
      
      const data = {
        specialisations: specIds,
        services: servicesIds,
      }

      await axios.get(`${API}/api/institutions?filters[slug][$eq]=${slugify(clinics[i].title, {
        lower: true,
        locale: 'ru',
        strict: true, 
        remove: /[*+~´,.()'"!:@]/g
      })}`).then(res => {
        axios.put(`${API}/api/institutions/${res.data.data[0].id}`, { data: data }).then(() => {        
          successLength++;
        }).catch(err => {
          errorClinics.push(clinics[i].title)
          if(err.response?.data){
            console.log("Error create clinics 1 --", err.response?.data?.error?.details?.errors)
          }else{
            console.log("Error create clinics 2 --", err.response)
          }
        })
      })

      process.stdout.write(`\r${i+1}/${length} - done ${successLength}`)
    }
    
    console.log(errorClinics);
    
    res.status(200).end()
  }else{
    res.status(200).end()
  }
  
}

// @ts-ignore
// const getImageIds = async (imageUrls, delimeter: number) => {

//   const imgIds = []
    
//   for(var i = 0; i < (imageUrls.length / delimeter); i++) {
//     if(imageUrls[i]){
//       const imgName = parseImgWithType(imageUrls[i])      
//       const resImg = await axios.get(`${API}/api/upload/files?filters[name][$eq]=${imgName}`)

//       if(resImg.data.length) {
//         imgIds.push(resImg.data[0].id)
//       }
//     }
//   }
    
//   return imgIds

// }