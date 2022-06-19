// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../scribing/clinicsGalery.json'
import fs from 'fs'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // const dataResult = []

  // const dataLinksGalery = data.dataResult.map(item => {
  //   const object = {
  //     title: item.title,
  //     galery: item.galery.splice(0, item.galery.length / 2)
  //   }
  //   dataResult.push(object)
  // })

  // fs.writeFile('scribing/uniqGaleryImg.json', JSON.stringify(dataResult), (err) => {
  //   if (err) throw err;
  //   console.log('File is created successfully.');
  // });
  

  res.status(200).json({ name: 'John Doe' })
}
