import type { NextApiRequest, NextApiResponse } from 'next'
// import doctor from '../../scribing/clinicLicence.json'
// import fs from 'fs';
// import request from 'request';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if(req.method === 'POST') {

  //   const length = doctor.length

  //   const doSomething = (value: number) => {
  //     return new Promise((resolve, reject) => {
  //         try{
  //           const parseImgUrl = doctor[value].split('/')
  //           const parseImgName = parseImgUrl[parseImgUrl.length - 1].split('.')
  //           const imgType = parseImgName[parseImgName.length - 1].split('?')[0]
  //           const imgName = parseImgName[0]
  //           parseImgUrl[parseImgUrl.length - 1] = imgName+"."+imgType
  //           const imgUrl = parseImgUrl.join("/")

  //           request(imgUrl, (error) => {
  //             if(error) {
  //               console.log("error request: ", error);
  //               reject(error)
  //             }
  //           }).pipe(fs.createWriteStream(`./downloadImage/licence/${imgName}.${imgType}`)).on('close', () => {
  //             resolve(value === (length - 1) ? "ok": 'no')
  //           })
  //         }catch(err) {
  //           console.log("error", doctor[value]);
  //           reject(err)
  //         }
  //     })
  //   }

  //   const loop = (value: number) => {
  //     return doSomething(value).then(result => {
  //       process.stdout.write(`\r${value}/${length} - ${doctor[value]}`)
  //       if (result === 'ok') {
  //         console.log('all done');      
  //       } else {
  //         return loop(value + 1)
  //       }
  //     }).catch(err => console.error(err))
  //   }

  //   loop(0).then(() => console.log('all done!'))
    
  //   res.status(200).send("done")
  // }else{
  //   res.status(200).end()
  // }
  
}
