// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import slugify from 'slugify';
import labels from '../../functions/labels';
import parseImageName from '../../functions/parseImg';
import parseImageType from '../../functions/parseImgtype';
import spec from '../../functions/specifications';
import doctor1 from '../../scribingoriginal-new/doctors1.json'

const API = 'https://strapi.wellikan.com'
// const API = 'http://localhost:1341'

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Doctor[]>
) {
  if(req.method === 'POST') {

    const length = doctor1.length;

    let specIds: number[] = [], imgName, imgType, expirience, labelIds;

    let successLength = 0, errorDoctor: any = []

    for(let i = 0; i < length; i++) {

      let imgID = []

      specIds = await spec(doctor1[i].specializations)
      labelIds = await labels(doctor1[i].labels)

      imgName = await parseImageName(doctor1[i].imageUrl)
      imgType = await parseImageType(doctor1[i].imageUrl)
      let resImg = await axios.get(`${API}/api/upload/files?filters[name][$eq]=${imgName}.${imgType}`)
      
      if(resImg.data.length) {
        imgID = resImg.data[0].id
      }
      expirience = doctor1[i].expirience_years.map((item, index) => `${item} - ${doctor1[i].expirience[index]}`)

      await axios.post(`${API}/api/doctors`, { data: {
        title: doctor1[i].name,
        slug: slugify(doctor1[i].name, {
          lower: true,
          locale: 'ru',
          strict: true, 
          remove: /[*+~´,.()'"!:@]/g
        }),
        content: doctor1[i].description,
        experience: expirience.join('\n'),
        labels: labelIds,
        specialisations: specIds,
        image: imgID,
        address: doctor1[i].address.join('')
      }
      }).then(res => {        
        successLength++;
      }).catch(err => {
        errorDoctor.push(doctor1[i].name)
        if(err.response?.data){
          console.log("Error create doctor --", err.response.data.error.details.errors)
        }else{
          console.log("Error create doctor --", err.response)
        }
      })

      process.stdout.write(`\r${i+1}/${length} - done ${successLength}`)
    }

    console.log(errorDoctor);
    
    res.status(200).end()
  }else{
    res.status(200).end()
  }
  
}
