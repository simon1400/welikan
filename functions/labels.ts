import axios from "axios"
import slugify from 'slugify';

// const API = 'http://localhost:1341'
const API = 'https://strapi.wellikan.com'

const labels = async (labels: string[]): Promise<number[]> => {

  const labelsIds = []

  for(let a = 0; a < labels.length; a++) {
    const resData: any = await axios.get(`${API}${encodeURI(`/api/labels?filters[slug][$eq]=${slugify(labels[a], {
      lower: true,
      locale: 'ru',
      strict: true, 
      remove: /[*+~´,.()'"!:@]/g
      })}`)}`
    ).catch(err => console.error("Labels Get", err))        

    if(resData.data.data.length) {
      labelsIds.push(resData.data.data[0].id)
    }else{
      const resCreate: any = await axios.post(`${API}/api/labels`, { data: {
        title: labels[a],
        slug: slugify(labels[a], {
          lower: true,
          locale: 'ru',
          strict: true, 
          remove: /[*+~´,.()'"!:@]/g
        })
      }}).catch(err => console.log("error create labels", err?.response.data.error))

      labelsIds.push(resCreate.data.data.id)
    }
  }

  return labelsIds
}

export default labels