import fs from 'fs'
import clinicsLinks from '../scribing/urlClinics.json'

interface IResult {
  title: string;
  galery: string[]
}

const blocked_domains = [
  'googlesyndication.com',
  'adservice.google.com',
  'aprtx.com',
  'jsdelivr.net',
  'cdn.docdoc.ru',
  'google-analytics.com',
  'googleoptimize.com',
  'yagla.ru',
  'acstat.com',
  'vk.com',
  'mail.ru',
  'googletagmanager.com',
  'yandex.ru',
  'gdeslon.ru',
  'indoleads.com',
  'dmrtx.com',
  'yastatic.net',
  'gdeslon.ru',
  'aprtn.com',
  'dpartaptm.com',
  'dpartaptm.com',
  'yandex.net',
];

const blockResources = [
  'image', 
  "imageset", 
  "media", 
  "object", 
  "object_subrequest", 
  "sub_frame", 
  "web_manifest", 
  'font',
  'texttrack', 
  'beacon', 
  'csp_report'
]

const scraperObject = {
  // @ts-ignore
	async scraper(browser){
    async function scrapeCurrentPage(data: any[]): Promise<any> {
      const dataResult: any[] = [];
      const dataCrash: any[] = [];
      let successLength = 0
      function pagePromise(link: string) {
        return new Promise( async (resolve, reject) => {
          let newPage = await browser.newPage();
          try{
            await newPage.setRequestInterception(true)
            await newPage.on('request', async (request: any) => {
              const url = request.url()
              if (blockResources.indexOf(request.resourceType()) !== -1 || blocked_domains.some(domain => url.includes(domain))) {
                await request.abort();
              }else{
                await request.continue();
              }
            })
            await newPage.goto(link, {
              waitUntil: 'networkidle2',
              timeout: 0
            });
            
            const control = await newPage.$('.clinic__reg');
            
            if(control !== null){
              resolve({notFound: true});
              await newPage.close();
              return
            }

            let dataObj: IResult = {
              title: '',
              galery: [],
            }
            dataObj.title = await newPage.$eval('h1', (text: any) => text?.innerText);
            dataObj.galery = await newPage.$$eval('div[data-test-id="clinic-page-photo-gallery"] li:not(.is-clone) > div', (items: any) => items.map((el: any) => getComputedStyle(el).getPropertyValue("background-image")))

            resolve(dataObj);
            await newPage.close();
          }catch (err) {
            dataCrash.push(link)
            console.log("link --- ", link);
            console.log("ERROR --- ", err);
            resolve({notFound: true});
            await newPage.close();
          }
        });
      }

      let dataLength = data.length
            
      // for(let a = 0; a < dataLength; a++){
      //   if(!!data[a]){
      //     let currentPageData = await pagePromise(data[a]);          
      //     if(!currentPageData?.notFound) {                        
      //       dataResult.push(currentPageData);
      //       successLength++
      //     }
      //   }
      //   process.stdout.write(`\r${a+1}/${dataLength} - done ${successLength}`)
      // }

      console.log(`\nSuccess doctors ${successLength} from ${dataLength}`);
      
      return {dataResult, dataCrash};
    }

    let data = await scrapeCurrentPage(clinicsLinks[0].links);
    fs.writeFile(`scribing/clinicsGalery.json`, JSON.stringify({dataResult: data.dataResult}), (err) => {
      if (err) throw err;
      console.log(`File clinics.json is created successfully.`);
    });
    fs.writeFile(`scribing/clinics-galery-crash.json`, JSON.stringify({dataCrash: data.dataCrash}), (err) => {
      if (err) throw err;
      console.log(`File clinics.json is created successfully.`);
    });

    
    return data;
	}
}



export default scraperObject;