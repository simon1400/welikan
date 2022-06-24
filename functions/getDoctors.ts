import axios from "axios"
import slugify from 'slugify';

const API = 'http://localhost:1341'
// const API = 'https://strapi.wellikan.com'

const doctors = async (doctors: string[]): Promise<number[]> => {

  const doctorsIds = []

  for(let a = 0; a < doctors.length; a++) {
    const resData: any = await axios.get(`${API}${encodeURI(`/api/doctors?filters[slug][$eq]=${slugify(doctors[a], {
        lower: true,
        strict: true,
        locale: 'ru',
        remove: /[*+~´,.()'"!:@]/g
      })}`)}`
    ).catch(err => console.error("Doctors Get", err))

    if(resData.data.data.length) {
      doctorsIds.push(resData.data.data[0].id)
    }
  }

  return doctorsIds
}

export default doctors