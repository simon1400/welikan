// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import slugify from 'slugify';
import parseImageName from '../../functions/parseImg';
import spec from '../../functions/specifications';
import doctor1 from '../../scribingoriginal/doctors1.json'

// const API = 'https://welikan-strapi.pechunka.com'
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

const example = {
  "name":"Скакунов Ярослав Игоревич",
  "description":"Проводит удаление зубов любой сложности (в том числе зубов мудрости), пластику перфорации верхнечелюстной пазухи, вскрытие абсцессов, иссечение капюшона, удаление доброкачественных образований. ",
  "imageUrl":"https://cdn.docdoc.ru/doctor/1050682_20220520173821.162x162.jpg?1653451654",
  "labels":[
    "Стоматолог-хирург"
  ],
  "expirience_years":[
    "2020"
  ],
  "expirience":[
    "Имплантолог, ЭлефантМосква"
  ],
  "specializations":[
    "удаление зубов любой сложности; ",
    "зубосохраняющие операции; ",
    "удаление мелких доброкачественных новообразований слизистой оболочки полости рта; ",
    "хирургическое лечение кист челюстей; ",
    "операции дентальной имплантации; ",
    "костнопластические операции при недостаточности объема костной ткани; ",
    "лечение воспалительных заболеваний полости рта; ",
    "лечение заболеваний слюнных желез; ",
    "лечение заболеваний височно-нижнечелюстного сустава."
  ],
  "address":["г. Москва, ","ул. Ломоносовский пр-т, д. 25, корп. 3"]
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Doctor[]>
) {
  if(req.method === 'POST') {

    const length = doctor1.length;

    let specID: number[] = [], imgName, expirience;

    for(let i = 0; i < 1; i++) {

      // specID = await spec(doctor1[i].specializations)

      imgName = parseImageName(doctor1[i].imageUrl)

      let resImg = await axios.get(`${API}/upload/files`)

      console.log(resImg.data);
      
      // expirience = doctor1[i].expirience_years.map((item, index) => `${item} - ${doctor1[i].expirience[index]}`)
      // await axios.post('http://localhost:1334/api/doctors', {
      //   name: doctor1[i].name,
      //   slug: slugify(doctor1[i].name, {
      //     lower: true,
      //     remove: /[*+~´,.()'"!:@]/g
      //   }),
      //   content: doctor1[i].description,
      //   expirience: expirience.join('\n'),
      //   image: resImg.data[0].id,
      //   address: doctor1[i].address.join(' ')
      // }).then(res => {
      //   console.log('Success update --', res.data.title)
      // }).catch(err => {
      //   if(err.response?.data){
      //     console.log(err.response.data)
      //   }else{
      //     console.log(err.response)
      //   }
      // })
    }
    
    res.status(200).end()
  }else{
    res.status(200).end()
  }
  
}
