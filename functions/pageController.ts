// import pageScraper from './pageScraper';
import pageScraper from './scraperClinics';

// @ts-ignore
async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		await pageScraper.scraper(browser);	
		
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}
// @ts-ignore
const scrape = (browserInstance) => scrapeAll(browserInstance)

export default scrape