// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import slugify from 'slugify';
import doctors from '../../functions/getDoctors';
import parseImgWithType from '../../functions/parseImgWithType';
import spec from '../../functions/specifications';
import clinicsData from '../../scribingoriginal-new/combineClinics.json'

// const API = 'https://strapi.wellikan.com'
const API = 'http://localhost:1341'

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

    for(let i = 0; i < length; i++) {

      specIds = await spec(clinics[i].specializations)

      const galeryIds = await getImageIds(clinics[i].galery, 1)
      const licenceIds = await getImageIds(clinics[i].licence, 2)
      
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

      const services = servicesNames.map((item: any, idx: number) => ({
        title: item,
        price: servicesPrices[idx]
      }))

      const doctorsIds = await doctors(clinics[i].doctors)

      const open = clinics[i].oppening_hours.map((item: any, idx: number) => ({
        time: item,
        days: clinics[i].oppening_days[idx]
      }))
      
      const data = {
        title: clinics[i].title,
        slug: slugify(clinics[i].title, {
          lower: true,
          locale: 'ru',
          strict: true, 
          remove: /[*+~´,.()'"!:@]/g
        }),
        content: clinics[i].description,
        address: clinics[i].address,
        contact: {
          phone: clinics[i].phone
        },
        specialisations: specIds,
        images: galeryIds,
        licences: licenceIds,
        services: services,
        doctors: doctorsIds,
        open: open
      }
      
      await axios.post(`${API}/api/institutions`, { data: data }).then(res => {        
        successLength++;
      }).catch(err => {
        errorClinics.push(clinics[i].title)
        if(err.response?.data){
          console.log("Error create clinics 1 --", err.response.data)
        }else{
          console.log("Error create clinics 2 --", err.response)
        }
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
const getImageIds = async (imageUrls, delimeter: number) => {

  const imgIds = []
  if(imageUrls[0] !== null) {
    
    for(var i = 0; i < (imageUrls.length / delimeter); i++) {
      
      const imgName = await parseImgWithType(imageUrls[i])
      const resImg = await axios.get(`${API}/api/upload/files?filters[name][$eq]=${imgName}`)
  
      if(resImg.data.length) {
        imgIds.push(resImg.data[0].id)
      }
    }
    
  }
  return imgIds

}