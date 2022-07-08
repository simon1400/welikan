import type { NextPage } from 'next'
import Map from '../components/Map'
import ShortItem from '../components/ShortItem'
import StockItem from '../components/StockItem'
import Slider from '../components/Slider'
import Page from '../layout/Page'
import { client } from '../utility/graphql'
import homepageQuery from '../queries/homepage'
import { ChangeEvent, FormEvent, useState } from 'react'
import t from '../data/translations.json'
import Input from '../components/Input'
import { useRouter } from 'next/router'
import getDirectionsQuery from '../queries/directions'
import Directions from '../components/Directions'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: homepageQuery
  });
  const { data: directions } = await client.query({
    query: getDirectionsQuery,
    variables: {
      page: 1
    }
  });

  return {
    props: {
      data: data.homePage.data.attributes,
      directions: directions.labels
    },
 };
}

const Home: NextPage = ({
  // @ts-ignore
  data, directions
}) => {

  const router = useRouter()
  
  const [city, setCity] = useState("Москва")
  // const [geo, setGeo] = useState(false)

  // const successfulLookup = position => {
  //   const { latitude, longitude } = position.coords;
  //   fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=fd84f67cf2234e2eae9afc10cc6c3cf6`)
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result);
  //       setCity(result.results[0].components.suburb)
  //       setGeo(position.coords)
  //     }); 
  // }

  // useEffect(() => {
  //   if(typeof window !== 'undefined') {
  //     navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
  //   }
  // }, [])

  const [search, setSearch] = useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/search?institution[query]=${search}&institution[range][rating]=0:5`)
  }
  
  return (
    <Page>
      <section className="search blue-bg">
        <div className="uk-container uk-container-small">
          <h1>{data.title} {city}</h1>
          <div className="form-wrap">
            <form onSubmit={submitSearch}>
              <Input 
                name="service"
                img="/assets/search.svg"
                placeholder={t.searchService} 
                onChange={handleSearch} 
                value={search} 
              />
              <button type="submit" className="button accent">{t.find}</button>
            </form>
          </div>
        </div>
      </section>
      <div className="uk-visible@m">
        <Map />
      </div>
      <section className="small-sec uk-visible@m">
        {!!data.promotions.data.length && <div className="uk-container">
          <Slider>
            {data.promotions.data.map((item: any, index: number) => <StockItem 
              key={index} 
              slug={`/stock/${item.attributes.slug}`}
              head={item.attributes.title} 
              content={item.attributes.content}
              skydka={item.attributes.metkis?.data[0].attributes.title} />)}
          </Slider>
        </div>}
      </section>
      <Directions data={directions} />
       <section>
       {!!data.doctors.data.length && <div className="uk-container">
          <div className="section-head">
            <h2>Врачи</h2>
            {/* <a href="/asd">Полный список</a> */}
          </div>
          <div className="uk-grid uk-child-width-1-2" uk-height-match="target: > div > div" uk-grid="">
            {data.doctors.data.map((item: any, index: number) => <div key={index}>
              <ShortItem 
                small 
                review
                slug={`/doctor/${item.attributes.slug}`}
                title={item.attributes.title}
                image={item.attributes.image.data.attributes}
                content={item.attributes.content}
                labels={item.attributes.labels.data}
                address={item.attributes.address}
                email={item.attributes.contact?.email}
                phone={item.attributes.contact?.phone}
              />
            </div>)}
          </div>
        </div>}
      </section>
      <section>
        {!!data.institutions.data.length && <div className="uk-container">
          <div className="section-head">
            <h2>Клиники</h2>
            {/* <a href="/asd">Полный список</a> */}
          </div>
          <div className="uk-grid uk-child-width-1-2" uk-height-match="target: > div > div" uk-grid="">
            {data.institutions.data.map((item: any, index: number) => <div key={index}>
              <ShortItem 
                small 
                review 
                slug={`/company/${item.attributes.slug}`}
                image={item.attributes.images.data[0].attributes}
                title={item.attributes.title}
                content={item.attributes.content}
                labels={item.attributes?.specialisations?.data}
                address={item.attributes?.address}
                email={item.attributes?.contact?.email}
                phone={item.attributes?.contact?.phone}
              />
            </div>)}
          </div>
        </div>}
      </section>
    </Page>
  )
}

export default Home
