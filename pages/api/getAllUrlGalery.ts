// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import data from '../../scribing/uniqGaleryImg.json'
import fs from 'fs'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // const dataResult = []

  // data.map(item => {
  //   item.galery.map(url => dataResult.push(url.split('"')[1]))
  // })

  // fs.writeFile('scribing/allGaleryImg.json', JSON.stringify(dataResult), (err) => {
  //   if (err) throw err;
  //   console.log('File is created successfully.');
  // });
  

  res.status(200).json({ name: 'John Doe' })
}
