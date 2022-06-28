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
import getDoctorQuery from "../../queries/doctor"
import { client } from "../../utility/graphql"

// @ts-ignore
export async function getServerSideProps(ctx) {
  const { data } = await client.query({
    query: getDoctorQuery,
    variables: {
      slug: ctx.query.slug
    }
  });

  return {
    props: {
      data: data.doctors.data[0].attributes
    },
 };
}

const Doctor: NextPage = ({
  // @ts-ignore
  data
}) => {

  console.log(data);
  

  return (
    <Page>
      <div className="uk-container">
        <Breadcrumbs />
      </div>
      <section>
        <div className="uk-container">
          <div className="layout layout-rightbar">
            <div className="content-layout">
              <FullHeadItem 
                square 
                title={data.title}
                image={data.image.data.attributes}
                content={data.content}
                labelsBottom={data.labels.data}
              />
              <NavContent />
              {(!!data.educations || !!data.experience?.length) && <h2>Информация</h2>}
              <div className="info-wrap">
                {!!data.education && <div className="block">
                  <h5>Образование</h5>
                  <div className="content-info" dangerouslySetInnerHTML={{__html: data.education}} />
                </div>}
                {!!data.experience?.length && <div className="block">
                  <h5>Опыт работы</h5>
                  <div className="content-info" dangerouslySetInnerHTML={{__html: data.experience}} />
                </div>}
              </div>
              {!!data.reviews.data.length && <h2>Отзывы</h2>}
              {!!data.reviews.data.length && data.reviews.data.map((item: any, index: number) => <ReviewItem 
                key={index}
                name={item.attributes.userName}
                content={item.attributes.content}
              />)}
              {/* <div className="uk-text-center uk-margin-large-top"><a className="button bare" href="/asd">Еще +20</a></div> */}
              {!!data.services.length && <h2>Прайс-лист</h2>}
              {!!data.services.length && <table className="uk-table uk-table-divider">
                <thead>
                  <tr>
                    <th className="uk-table-expand">Услуга</th>
                    <th className="uk-table-shrink">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {data.services.map((item: any, index: number) => <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>)}
                </tbody>
              </table>}
              {/* <div className="uk-text-center uk-margin-large-top"><a className="button bare" href="/asd">Еще +20</a></div> */}
              {!!data.galery.data.length && <h2>Фотографии</h2>}
              {!!data.galery.data.length && <SlideShow data={data.galery.data}/>}
            </div>
            <div className="rightbar">
              <div className="block">
                <h5>Как добраться?</h5>
                <p>{data.address}</p>
              </div>
              {/* <div className="uk-margin-bottom">
                <Map />
              </div> */}
              {/* <div className="button-wrap two">
                <div>
                  <a href="" className="button">оставить заявку</a>
                </div>
                <div>
                  <a href="" className="button bare">оставить заявку</a>
                </div>
              </div> */}
              {/* <h2>Акции</h2> */}
              {/* <StockItem />
              <StockItem />
              <StockItem />
              <StockItem /> */}
              {!!data.licence.data.length && <h2>Лицензии</h2>}
              {data.licence.data.map((item: any, index: number) => <Certificates
                key={index}
                image={item.attributes}
              />)}
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Doctor