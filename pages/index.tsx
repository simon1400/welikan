import type { NextPage } from 'next'
import BaseSearchLine from '../components/BaseSearchLine'
// import DirectionList from '../components/DirectionList'
import Map from '../components/Map'
import ShortItem from '../components/ShortItem'
import StockItem from '../components/StockItem'
import Slider from '../components/Slider'
import Page from '../layout/Page'
import { client } from '../utility/graphql'
import homepageQuery from '../queries/homepage'
import { useEffect, useState } from 'react'
// import axios from 'axios'
// import doctor1 from '../../scribingoriginal/doctors1.json'
import t from '../data/translations.json'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: homepageQuery
  });

  return {
    props: {
      data: data.homePage.data.attributes
    },
 };
}

const Home: NextPage = ({
  // @ts-ignore
  data
}) => {
  
  const [city, setCity] = useState("Москва")
  const [geo, setGeo] = useState(false)

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
  
  return (
    <Page>
      <section className="search blue-bg">
        <div className="uk-container uk-container-small">
          <h1>{data.title} {city}</h1>
          <div className="form-wrap">
            <BaseSearchLine home />
            <div><a href="/asd" className="button accent">{t.find}</a></div>
          </div>
        </div>
      </section>
      <div className="uk-visible@m">
        <Map />
      </div>
      <section className="small-sec uk-visible@m">
        {!!data.promotions.data.length && <div className="uk-container">
          <Slider>
            {/* @ts-ignore */}
            {data.promotions.data.map((item, index) => <StockItem 
              key={index} 
              slug={`/stock/${item.attributes.slug}`}
              head={item.attributes.title} 
              content={item.attributes.content}
              skydka={item.attributes.metkis?.data[0].attributes.title} />)}
          </Slider>
        </div>}
      </section>
      {/* <section className="bg-grey">
        <div className="uk-container">
          <div className="section-head">
            <h2>Направления</h2>
            <a href="/abs"><label htmlFor="" className="uk-label">Россия<img src="/assets/times.svg" uk-svg="" /></label></a>
            <a href="/abs"><label htmlFor="" className="uk-label">Москва<img src="/assets/times.svg" uk-svg="" /></label></a>
          </div>
          <DirectionList />
          <div className="uk-text-center uk-margin-top"><a className="button bare" href="/asd">Еще +20</a></div>
        </div>
      </section> */}
       <section>
       {!!data.doctors.data.length && <div className="uk-container">
          <div className="section-head">
            <h2>Врачи</h2>
            <a href="/asd">Полный список</a>
          </div>
          <div className="uk-grid uk-child-width-1-2" uk-height-match="target: > div > div" uk-grid="">
            {/* @ts-ignore */}
            {data.doctors.data.map((item, index) => <div key={index}>
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
            <a href="/asd">Полный список</a>
          </div>
          <div className="uk-grid uk-child-width-1-2" uk-height-match="target: > div > div" uk-grid="">
            {/* @ts-ignore */}
            {data.institutions.data.map((item, index) => <div key={index}>
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
