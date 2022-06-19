import axios from "axios"
import slugify from 'slugify';

const API = 'http://localhost:1341'

const spec = async (spec: string[]): Promise<number[]> => {

  const specIds = []

  for(let a = 0; a < spec.length; a++) {
    const resData: any = await axios.get(`${API}${encodeURI(`/api/specialisations?filters[slug][$eq]=${slugify(spec[a].split(';')[0].split('.')[0], {
        lower: true,
        remove: /[*+~´,ь.()'"!:@]/g
      })}`)}`
    ).catch(err => console.error("Specialization Get", err))        

    if(resData.data.data.length) {
      specIds.push(resData.data.data[0].id)
    }else{
      const resCreate: any = await axios.post(`${API}/api/specialisations`, { data: {
        title: spec[a].split(';')[0].split('.')[0],
        slug: slugify(spec[a].split(';')[0].split('.')[0], {
          lower: true,
          remove: /[*+~´,ь.()'"!:@]/g
        })
      }}).catch(err => console.log("error create spec", err?.response.data.error))

      specIds.push(resCreate.data.data.id)
    }
  }

  return specIds
}

export default spec