// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import browserObject from '../../functions/browser';
import scraperController from '../../functions/pageController';

type Doctor = {
  name: string;
  img: string;
  phone: string;
  address: string;
}

const url = 'https://docdoc.ru/doctor/order/rating/page/1';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Doctor[]>
) {
  if(req.method === 'GET') {
    //Start the browser and create a browser instance
    // @ts-ignore
    let browserInstance = browserObject.startBrowser();

    // Pass the browser instance to the scraper controller
    scraperController(browserInstance)
    
    res.status(200).end()
  }else{
    res.status(200).end()
  }
  
}
