// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import clinicsData from '../../scribingoriginal-new/clinics1.json'
import galery from '../../scribingoriginal-new/uniqGaleryImg.json'
import fs from 'fs'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method === 'POST') {

  // @ts-ignore
  const clinics = clinicsData.dataResult

  for(var i = 0; i < clinics.length; i++){
    const findGalery = galery.find(item => {
      if(item.title === clinics[i].title) {
        return true
      }else{
        return false
      }
    })
    if(findGalery) {
      findGalery.galery = findGalery.galery.map(item => item.split('"')[1])
      clinics[i].galery = findGalery.galery
    }    
  }

  fs.writeFile('scribingoriginal-new/combineClinics.json', JSON.stringify({dataResult: clinics}), (err) => {
    if (err) throw err;
    console.log('File is created successfully.');
  });

  res.status(200).end()
  }else{
    res.status(200).end()
  }
}
