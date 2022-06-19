import type { NextApiRequest, NextApiResponse } from 'next'
// import doctor from '../../scribingoriginal/doctors9.json'
import fs from 'fs';
import request from 'request';

interface IDoctorData {
  name: string;
  description: string;
  imageUrl: string;
  labels: string[];
  expirience_years: string[];
  expirience: string[];
  specializations: string[];
  address: string[];
}

  // const combineData = {
    //   title: doctors[0].name,
    //   address: doctors[0].address.join(" "),
    //   content: doctors[0].description,
    //   labels: string[];
    //   expirience_years: string[];
    //   expirience: string[];
    //   specializations: string[];
    // }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'POST') {

    // const doctors: IDoctorData[] = doctor
    // const length = doctors.length

    // const doSomething = (value: number) => {
    //   return new Promise((resolve, reject) => {
    //     // setTimeout(() => {

    //       try{
    //         const parseImgUrl = doctors[value].imageUrl.split('/')
    //         const parseImgName = parseImgUrl[parseImgUrl.length - 1].split('.')
    //         // const imgType = parseImgName[parseImgName.length - 1].split('?')[0]
    //         const imgName = parseImgName[0]
    //         parseImgUrl[parseImgUrl.length - 1] = imgName+".jpg"
    //         const imgUrl = parseImgUrl.join("/")

    //         request(imgUrl, (error) => {
    //           if(error) {
    //             console.log("error request: ", error);
    //             reject(error)
    //           }
    //         }).pipe(fs.createWriteStream(`./downloadImage/doctors9/${imgName}.jpg`)).on('close', () => {
    //           resolve(value === (length - 1) ? "ok": 'no')
    //         })
    //       }catch(err) {
    //         console.log("error", doctors[value].imageUrl);
    //         reject(err)
    //       }

    //     // }, 500)
    //   })
    // }

    // const loop = (value: number) => {
    //   return doSomething(value).then(result => {
    //     process.stdout.write(`\r${value}/${length} - ${doctors[value].imageUrl}`)
    //     if (result === 'ok') {
    //       console.log('all done');      
    //     } else {
    //       return loop(value + 1)
    //     }
    //   }).catch(err => console.error(err))
    // }

    // loop(0).then(() => console.log('all done!'))
    
    res.status(200).send("done")
  }else{
    res.status(200).end()
  }
  
}
