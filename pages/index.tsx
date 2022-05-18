import type { NextPage } from 'next'
import BaseSearchLine from '../components/BaseSearchLine'
import DirectionList from '../components/DirectionList'
import Map from '../components/Map'
import ShortItem from '../components/ShortItem'
import StockItem from '../components/StockItem'
import Slider from '../components/Slider'
import Page from '../layout/Page'
import { useLazyQuery, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { filteredDoctorListQuery } from '../queries/filteredDoctors'
import { client, getStrapiURL } from '../lib/api'
import { homePageQuery } from '../queries/homePage'



export async function getServerSideProps() {
  const { data } = await client.query({
    query: homePageQuery
  });

  return {
    props: {
      title: data.homePage.data.attributes.title,
      doctors: data.homePage.data.attributes.doctors.data
      // footer: data.homepage.data.attributes.footer
    },
 };
}



const Home: NextPage = ({title, doctors}) => {

  console.log('doctors', doctors);

  const searchCity: string = "г.Москва";

  const [searchString, setSearchString] = useState<string>('');
  let searchQuery: string = "";

  const setSearchQuery = (query: string) => {
    searchQuery = query;
  }

  const search = () => {
    setSearchString(searchQuery);
  }

  // let { loading, error, data } = useQuery(navigationQuery); // global
  let [getDoctors, {data: dataDoctors}] = useLazyQuery(filteredDoctorListQuery); // doctors

  // useEffect(() => {
  //   if(!loading) {
  //     console.log('*data', data.navigation.data.attributes);
  //   }
  // }, [loading])

  useEffect(() => {
    getDoctors({variables:{query: searchString}})
    console.log('dataDcotors', dataDoctors);
  }, [searchString])

  // if(loading) {
  //   // return spinner
  //   return <></>
  // }

  // if(error) {
  //   console.error('index.tsx fetch data', error)
  //   return <></>
  // }

  return (
    <Page >
      <section className="search blue-bg">
        <div className="uk-container uk-container-small">
          <h1>{title} {searchCity}</h1>
          <div className="form-wrap">
            <BaseSearchLine home setSearchQuery={setSearchQuery}/>
            <div><a href="#" className="button accent" onClick={search}>Найти</a></div>
          </div>
        </div>
      </section>
      <div className="uk-visible@m">
        <Map />
      </div>
      <section className="small-sec uk-visible@m">
        <div className="uk-container">
          <Slider>
            <StockItem head="trusu" content="faini" skydka="10%" />
            <StockItem head="miki" stars={3} content="super" skydka="20" />
            <StockItem head="tuzik" content="loh" skydka="324" />
            <StockItem head="golf" content="vin" skydka="24" />
            <StockItem head="golf" content="vin" skydka="24" />
            <StockItem head="golf" content="vin" skydka="24" />
            <StockItem head="golf" content="vin" skydka="24" />
            <StockItem head="golf" content="vin" skydka="24" />
          </Slider>
        </div>
      </section>
      <section className="bg-grey">
        <div className="uk-container">
          <div className="section-head">
            <h2>Направления</h2>
            <a href="/abs"><label htmlFor="" className="uk-label">Россия<img src="/assets/times.svg" uk-svg="" /></label></a>
            <a href="/abs"><label htmlFor="" className="uk-label">Москва<img src="/assets/times.svg" uk-svg="" /></label></a>
          </div>
          <DirectionList />
          <div className="uk-text-center uk-margin-top"><a className="button bare" href="/asd">Еще +20</a></div>
        </div>
      </section>
      <section>
        <div className="uk-container">
          <div className="section-head">
            <h2>Врачи</h2>
            <a href="/asd">Полный список</a>
          </div>
          <div className="uk-grid uk-child-width-1-2" uk-grid="">

          {/* { socLinks?.map((item, index) =>
                <li key={index} title={item.label}>
                  <a href={item.link}>
                    <img src={item.iconLink} alt={item.label} uk-svg="" />
                  </a>
                </li>
              )} */}

           {doctors.map((item, index) => 
            <div key={index}>
              <ShortItem
                title={item.attributes.title}
                city={item.attributes.city}
                img={item.attributes.image.data.attributes}
                services={item.attributes.services}
                link={`doctor/${item.attributes.slug}`}
                small review stars labels address phone email descr/>
            </div>
            )}

            {/* <div><ShortItem small review stars labels address phone email descr/></div>
            <div><ShortItem small review stars labels address phone email descr/></div>
            <div><ShortItem small review stars labels address phone email descr/></div> */}
          </div>
        </div>
      </section>
      <section>
        <div className="uk-container">
          <div className="section-head">
            <h2>Клиники</h2>
            <a href="/asd">Полный список</a>
          </div>
          <div className="uk-grid uk-child-width-1-2" uk-grid="">
            <div><ShortItem small review stars labels address phone email descr/></div>
            <div><ShortItem small review stars labels address phone email descr/></div>
            <div><ShortItem small review stars labels address phone email descr/></div>
            <div><ShortItem small review stars labels address phone email descr/></div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Home
