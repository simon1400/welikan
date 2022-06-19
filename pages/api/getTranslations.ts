import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET') {
    axios.get('http://localhost:1341/api/translation')
      .then(res => {
        fs.writeFile('data/translations.json', JSON.stringify(res.data.data.attributes), (err) => {
          if (err) throw err;
          console.log('File translation is created successfully.');
        });
      })
      .catch(err => console.log(err?.response?.data?.error))

    res.status(200).end()

  }else{
    res.status(200).end()
  }
}
