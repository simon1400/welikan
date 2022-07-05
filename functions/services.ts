import axios from "axios"
import slugify from 'slugify';
// @ts-ignore
import qs from 'qs'

const API = 'http://localhost:1341'
// const API = 'https://strapi.wellikan.com'

const query = (title: string, price: string) =>  {

  return qs.stringify({
    filters: {
      title: {
        $eq: title,
      },
      price: {
        $eq: price,
      },
    },
  }, {
    encodeValuesOnly: true,
  });
}



const service = async (services: any[]): Promise<number[]> => {

  const serviceIds = []

  for(let a = 0; a < services.length; a++) {

    const resData: any = await axios.get(`${API}${encodeURI(`/api/services?${query(services[a].title, services[a].price)}`)}`)
      .catch(err => console.error("Services Get", err))

    if(resData.data.data.length) {
      serviceIds.push(resData.data.data[0].id)
    }else{
      const resCreate: any = await axios.post(`${API}/api/services`, { data: {
        title: services[a].title,
        price: services[a].price
      }}).catch(err => console.log("error create services", err?.response.data.error))

      serviceIds.push(resCreate.data.data.id)
    }
  }

  return serviceIds
}

export default service