import fs from 'fs'
// import linksDoctors1 from '../scribing/urlDoctors.json'
// import linksDoctors2 from '../scribing/urlDoctors2.json'
// import linksDoctors3 from '../scribing/urlDoctors3.json'

interface IResult {
  name: string;
  description: string;
  imageUrl: string;
  labels: string[];
  expirience_years: string[];
  expirience: string[];
  specializations: string[];
  address: string[];
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
    // const dataArr = [
    //   // linksDoctors1[0].links,
    //   // linksDoctors2[0].links,
    //   // linksDoctors3[0].links,
    // ]
    async function scrapeCurrentPage(data: any[]): Promise<any> {
      const dataResult: any[] = [];
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
              waitUntil: 'domcontentloaded',
              timeout: 0
            });
            
            const control = await newPage.$('div[data-testid="doctor-card__wrapper"] section header');
            
            if(control !== null){
              resolve({notFound: true});
              await newPage.close();
              return
            }

            let dataObj: IResult = {
              name: "",
              description: "",
              imageUrl: "",
              labels: [],
              expirience_years: [],
              expirience: [],
              specializations: [],
              address: []
            }
            dataObj.name = await newPage.$eval('h1[data-testid="doctor-card__name"]', (text: any) => text.textContent);
            dataObj.description = await newPage.$eval('div[itemprop="description"] span', (text: any) => text.textContent);
            dataObj.imageUrl = await newPage.$eval('picture[data-testid="avatar"] img', (img: any) => img.src);
            dataObj.labels = await newPage.$$eval('div[data-testid="doctor-page-card__speciality"] li > a', (label: any) => label.map((el: any) => el.textContent));
            dataObj.expirience_years = await newPage.$$eval('div[data-testid="doctor-card__experience"] li > div:nth-child(2)', (experience: any) => experience.map((el: any) => el.textContent))
            dataObj.expirience = await newPage.$$eval('div[data-testid="doctor-card__experience"] li > div:last-child', (experience: any) => experience.map((el: any) => el.textContent));
            dataObj.specializations = await newPage.$$eval('div[data-test-id="specialization"] li', (specialization: any) => specialization.map((el: any) => el.textContent));
            dataObj.address = await newPage.$$eval('div[itemprop="address"] span', (address: any) => address.map((el: any) => el.textContent));          
            // console.log(dataObj);
            resolve(dataObj);
            await newPage.close();
          }catch {
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
      
      return dataResult;
    }
    let data;
    // for(let i = 0; i < dataArr.length; i++) {
    //   data = await scrapeCurrentPage(dataArr[i]);
    //   fs.writeFile(`scribing/doctors${i+1}.json`, JSON.stringify(data), (err) => {
    //     if (err) throw err;
    //     console.log(`File doctors${i+1}.json is created successfully.`);
    //   });
    // }

    
    return data;
	}
}



export default scraperObject;