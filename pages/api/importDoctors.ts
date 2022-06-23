// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import slugify from 'slugify';
import labels from '../../functions/labels';
import parseImageName from '../../functions/parseImg';
import parseImageType from '../../functions/parseImgtype';
import spec from '../../functions/specifications';
import doctor2 from '../../scribingoriginal-new/doctors2.json'
import doctor3 from '../../scribingoriginal-new/doctors3.json'
import doctor4 from '../../scribingoriginal-new/doctors4.json'
import doctor5 from '../../scribingoriginal-new/doctors5.json'
import doctor6 from '../../scribingoriginal-new/doctors6.json'
import doctor7 from '../../scribingoriginal-new/doctors7.json'
import doctor8 from '../../scribingoriginal-new/doctors8.json'
import doctor9 from '../../scribingoriginal-new/doctors9.json'

// const API = 'https://strapi.wellikan.com'
const API = 'http://localhost:1341'

type Doctor = {
  name: string;
  slug: string;
  content: string;
  expirience: string;
  labels: string;
  img: string;
  phone: string;
  address: string;
}

const importDoctor = async (doctors: any) => {
    const length = doctors.length;

    let specIds: number[] = [], imgName, imgType, expirience, labelIds;

    let successLength = 0, errorDoctor: any = []

    for(let i = 0; i < length; i++) {

      let imgID = []

      specIds = await spec(doctors[i].specializations)
      labelIds = await labels(doctors[i].labels)

      imgName = await parseImageName(doctors[i].imageUrl)
      imgType = await parseImageType(doctors[i].imageUrl)
      let resImg = await axios.get(`${API}/api/upload/files?filters[name][$eq]=${imgName}.${imgType}`)
      
      if(resImg.data.length) {
        imgID = resImg.data[0].id
      }
      expirience = doctors[i].expirience_years.map((item: any, index: number) => `${item} - ${doctors[i].expirience[index]}`)

      await axios.post(`${API}/api/doctors`, { data: {
        title: doctors[i].name,
        slug: slugify(doctors[i].name, {
          lower: true,
          locale: 'ru',
          strict: true, 
          remove: /[*+~´,.()'"!:@]/g
        }),
        content: doctors[i].description,
        experience: expirience.join('\n'),
        labels: labelIds,
        specialisations: specIds,
        image: imgID,
        address: doctors[i].address.join('')
      }
      }).then(res => {        
        successLength++;
      }).catch(err => {
        errorDoctor.push(doctors[i].name)
        if(err.response?.data){
          console.log("Error create doctor --", err.response.data.error.details.errors)
        }else{
          console.log("Error create doctor --", err.response)
        }
      })

      process.stdout.write(`\r${i+1}/${length} - done ${successLength}`)
    }

    console.log(errorDoctor);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Doctor[]>
) {
  if(req.method === 'POST') {

    const doctorArr = [
      doctor2,
      doctor3,
      doctor4,
      doctor5,
      doctor6,
      doctor7,
      doctor8,
      doctor9,
    ]

    for(var i = 0; i < doctorArr.length; i++) {
      await importDoctor(doctorArr[i])
    }
    
    res.status(200).end()
  }else{
    res.status(200).end()
  }
  
}
