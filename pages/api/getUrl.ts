// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../functions/sitemapPars2.json'
import fs from 'fs'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const dataLinks = data.urlset.url.map(item => item.loc)

  const linksJson = [
    {
      links: dataLinks
    }
  ]

  fs.writeFile('scribing/urlDoctors2.json', JSON.stringify(linksJson), (err) => {
    if (err) throw err;
    console.log('File is created successfully.');
  });
  

  res.status(200).json({ name: 'John Doe' })
}
