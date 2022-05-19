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
import { filteredDoctorListQuery } from '../queries/doctors/filteredDoctors'
import { client } from '../lib/api'
import { homePageQuery } from '../queries/homePage'



export async function getServerSideProps() {
  const { data } = await client.query({
    query: homePageQuery
  });

  return {
    props: {
      title: data.homePage.data.attributes.title,
      doctors: data.homePage.data.attributes.doctors.data,
      promotions: data.homePage.data.attributes.promotions.data,
      institutions: data.homePage.data.attributes.institutions.data
    },
 };
}



const Home: NextPage = ({title, doctors, promotions, institutions}) => {

  console.log('doctors', doctors);
  console.log('*institutions', institutions);

  const searchCity: string = "г.Москва";

  const [searchString, setSearchString] = useState<string>('');
  let searchQuery: string = "";

  const setSearchQuery = (query: string) => {
    searchQuery = query;
  }

  const search = () => {
    setSearchString(searchQuery);
  }

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
          {promotions.map((item, index) => 
              <StockItem key={index}
                head={item.attributes.title}
                content={item.attributes.content}
                img={item.attributes.image.data.attributes}
                stars={item.attributes.rating}
                metka={item.attributes.metkis.data[0]?.attributes.title}
                slug={item.attributes.slug}
              />
            )}
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
