import Page from "../../layout/Page"

import Breadcrumbs from '../../components/Breadcrumbs'
import FullHeadItem from "../../components/FullHeadItem"
import NavContent from "../../components/NavContent"
import ReviewItem from "../../components/ReviewItem"
import SlideShow from "../../components/Slideshow"
import Map from "../../components/Map"
import StockItem from "../../components/StockItem"
import Certificates from "../../components/Certificates"
import { NextPage } from "next"
import { useRouter } from 'next/router'
import { client } from '../../lib/api'
import { doctorQuery } from '../../queries/doctors/doctor'
import { FC } from 'react'



export async function getServerSideProps({ query }) {
  const { data } = await client.query({
    query: doctorQuery,
    variables: query
  });

  return {
    props: {
     doctor: data.doctors.data[0].attributes
    }
 };
}

const Doctor: NextPage<FC> = ({doctor}) => {
  const reviews = doctor?.reviews?.data;

  return (
    <Page>
      <div className="uk-container">
        <Breadcrumbs />
      </div>
      <section>
        <div className="uk-container">
          <div className="layout layout-rightbar">
            <div className="content-layout">
              <FullHeadItem square type={'doctor'} data={doctor}/>
              <NavContent />
              <h2>Информация</h2>
              <div className="info-wrap">
                <div className="block">
                  <h5>Образование</h5>
                  <div className="content-info">
                  <p dangerouslySetInnerHTML={{__html: doctor.education}}></p>
                  </div>
                </div>
                <div className="block">
                  <h5>Опыт работы</h5>
                  <div className="content-info">
                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li>Sed dignissim ex neque, quis rutrum sapien eleifend ac.</li>
                      <li>Vestibulum hendrerit tellus risus.</li>
                    </ul>
                  </div>
                </div>
              </div>

             { !!reviews.length && <>
                <h2>Отзывы</h2>
                  {reviews.map((review, index) =>
                    <ReviewItem key={index}
                      userName={review.attributes.userName}
                      content={review.attributes.content}
                      publishedAt={review.attributes.publishedAt}
                      rating={review.attributes.rating}/>
                  )}

                  <div className="uk-text-center uk-margin-large-top">
                    <a className="button bare" href="/asd">Еще +20</a>
                  </div>
              </>
            }

            { !!doctor?.service?.length && <>
              <h2>Прайс-лист</h2>
              <table className="uk-table uk-table-divider">
                <thead>
                  <tr>
                    <th className="uk-table-expand">Услуга</th>
                    <th className="uk-table-shrink">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {doctor.services.map((service, index) =>
                    <tr key={index}>
                      <td>{service.title}</td>
                      <td>{service.price}</td>
                    </tr>
                  )}

                </tbody>
              </table>
              <div className="uk-text-center uk-margin-large-top">
                <a className="button bare" href="/asd">Еще +20</a>
              </div>
            </>}
              <h2>Фотографии</h2>
              <SlideShow />
            </div>
            <div className="rightbar">
              <div className="block">
                <h5>Как добраться?</h5>
                {/* <p>г. Москва, ул. Сталелитейная, д.15, корп.2В</p> */}
                <p>{`г. ${doctor?.address?.city} ул. ${doctor?.address?.street} д.${doctor?.address?.houseNr}`}</p>

              </div>
              <div className="uk-margin-bottom">
                <Map />
              </div>
              <div className="button-wrap two">
                <div>
                  <a href="" className="button">оставить заявку</a>
                </div>
                <div>
                  <a href="" className="button bare">оставить заявку</a>
                </div>
              </div>
              <h2>Акции</h2>
              <StockItem />
              <StockItem />
              <StockItem />
              <StockItem />
              <h2>Лицензии</h2>
              <Certificates />
              <Certificates />
              <Certificates />
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Doctor