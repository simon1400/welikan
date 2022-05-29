import fs from 'fs'
// import clinicsLinks from '../scribing/urlClinics.json'

interface IResult {
  title: string,
  logo: string,
  description: string,
  address: string,
  phone: string,
  specializations: string[],
  galery: string[],
  oppening_hours: string[],
  oppening_days: string[],
  price_medical_name: string[],
  price_medical: string[],
  price_diagnostics_name: string[],
  price_diagnostics: string[],
  doctors: string[],
  specialists_in_clinics: string[],
  licence: string[],
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


// const isElementVisible = async (page, cssSelector) => {
//   let visible = true;
//   await page
//     .waitForSelector(cssSelector, { visible: true, timeout: 2000 })
//     .catch(() => {
//       visible = false;
//     });
//   return visible;
// };

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
              waitUntil: 'domcontentloaded',
              timeout: 0
            });
            
            const control = await newPage.$('.clinic__reg');
            
            if(control !== null){
              resolve({notFound: true});
              await newPage.close();
              return
            }

            let dataObj: IResult = {
              title: "",
              logo: "",
              description: "",
              address: "",
              phone: "",
              specializations: [],
              galery: [],
              oppening_hours: [],
              oppening_days: [],
              price_medical_name: [],
              price_medical: [],
              price_diagnostics_name: [],
              price_diagnostics: [],
              doctors: [],
              specialists_in_clinics: [],
              licence: [],
            }
            dataObj.title = await newPage.$eval('h1', (text: any) => text?.innerText);
            dataObj.logo = await newPage.$eval('.ClinicPagePhotoGallery__logo_3A-X img', (img: any) => img?.src);
            dataObj.description = await newPage.$eval('p.ClinicPageDescription__text_S5-m', (text: any) => text?.innerText);
            dataObj.address = await newPage.$eval('div.ClinicPageMapInfo__address_GP8N', (text: any) => text?.innerText);

            let [button] = await newPage.$x("//button[contains(., 'Показать телефон')]");
            if(button) {
              await button.click();
              let [phoneEl] = await newPage.$x("//a[contains(@class, 'clinic__phone')]")
              if(phoneEl) {
                dataObj.phone = await newPage.$eval('a.clinic__phone.hidden-mobile', (text: any) => text?.innerText);
              }
            }
            
            dataObj.specializations = await newPage.$$eval('.ClinicPageInfoBlock__specialities-text_3iQq a', (items: any) => items.map((el: any) => el?.innerText));
            dataObj.galery = await newPage.$$eval('div[data-test-id="clinic-page-photo-gallery"] li:not(.is-clone) > div', (items: any) => items.map((el: any) => getComputedStyle(el).getPropertyValue("background-image")))
            
            dataObj.oppening_hours = await newPage.$$eval('div.ClinicWorkTime__item_3pKW div.ClinicWorkTime__time_3PmZ', (items: any) => items.map((el: any) => el?.innerText))
            dataObj.oppening_days = await newPage.$$eval('div.ClinicWorkTime__item_3pKW div.ClinicWorkTime__day_2HEf', (items: any) => items.map((el: any) => el?.innerText))

            let priceMedicalButtons = await newPage.$$eval('div[data-test-id="clinic-page-services__type-doctor"] div.ClinicPageServices__service_1gpa', (items: any) => items.map((el: any) => el?.innerText))
            for(let m = 0; m < priceMedicalButtons.length; m++) {
              await newPage.click(`div[data-test-id="clinic-page-services__type-doctor"] div.ClinicPageServices__service_1gpa:nth-child(${m+1})`);
              dataObj.price_medical_name.push(await newPage.$$eval('div.ClinicPagePriceBlock__price-item_3prZ div[data-test-id="clinic-page-price-block__price-name"]', (items: any) => items.map((el: any) => el?.innerText)))
              dataObj.price_medical.push(await newPage.$$eval('div.ClinicPagePriceBlock__price-item_3prZ div.ClinicPagePriceBlock__price-value_3Dot', (items: any) => items.map((el: any) => el?.innerText)))
            }
            
            let priceDiagnosticsButtons = await newPage.$$eval('div[data-test-id="clinic-page-services__type-diagnostic"] div.ClinicPageServices__service_1gpa', (items: any) => items.map((el: any) => el?.innerText))
            for(let m = 0; m < priceDiagnosticsButtons.length; m++) {
              await newPage.click(`div[data-test-id="clinic-page-services__type-diagnostic"] div.ClinicPageServices__service_1gpa:nth-child(${m+1})`);
              dataObj.price_diagnostics_name.push(await newPage.$$eval('div.ClinicPagePriceBlock__price-item_3prZ div[data-test-id="clinic-page-price-block__price-name"]', (items: any) => items.map((el: any) => el?.innerText)))
              dataObj.price_diagnostics.push(await newPage.$$eval('div.ClinicPagePriceBlock__price-item_3prZ div.ClinicPagePriceBlock__price-value_3Dot', (items: any) => items.map((el: any) => el?.innerText)))
            }
            
            // let loadMoreVisible = await isElementVisible(newPage, "button.async-cards__button");
            // while (loadMoreVisible) {
            //   await newPage
            //     .click("button.async-cards__button")
            //     .catch(() => {});
            //   loadMoreVisible = await isElementVisible(newPage, "button.async-cards__button");
            // }

            dataObj.doctors = await newPage.$$eval('.doctor-list-page-card .doctor-list-page-card__details--normal a', (items: any) => items.map((el: any) => el?.innerText))
            dataObj.specialists_in_clinics = await newPage.$$eval('div[data-test-id="adaptive-tabs__content"] div[data-test-id="clinic-page-specialists__specialist-list"] a', (items: any) => items.map((el: any) => el?.innerText))
            dataObj.licence = await newPage.$$eval('li:not(.is-clone) .ClinicPageCertificate__slide_1yZ0 img', (items: any) => items.map((el: any) => el?.src))

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

    let data = await scrapeCurrentPage([]);
    fs.writeFile(`scribing/clinics1.json`, JSON.stringify({dataResult: data.dataResult}), (err) => {
      if (err) throw err;
      console.log(`File clinics.json is created successfully.`);
    });
    fs.writeFile(`scribing/clinics-crash.json`, JSON.stringify({dataCrash: data.dataCrash}), (err) => {
      if (err) throw err;
      console.log(`File clinics.json is created successfully.`);
    });

    
    return data;
	}
}



export default scraperObject;