import ShortItem from "../../components/ShortItem"
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
import { client } from "../../utility/graphql"
import getClinicsQuery from "../../queries/clinics"

// @ts-ignore
export async function getServerSideProps(ctx) {
  const { data } = await client.query({
    query: getClinicsQuery,
    variables: {
      slug: ctx.query.slug
    }
  });

  return {
    props: {
      data: data.institutions.data[0].attributes
    },
 };
}

const Company: NextPage = ({
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
                image={{url: "/uploads/162738_103048.jpg"}}
                content={data.content}
                labelsBottom={data.specialisations.data}
              />
              <NavContent />
              {!!data.doctors.data.length && <h2>Врачи</h2>}
              {!!data.doctors.data.length && <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s" uk-height-match="target: > div > div" uk-grid="">
                {data.doctors.data.map((item: any, index: number) => <div key={index}>
                  <ShortItem 
                    xsmall 
                    // review
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
              </div>}
              {/* <div className="uk-text-center uk-margin-large-top"><a className="button bare" href="/asd">Еще +20</a></div> */}
              {!!data.specialisations.data.length && <h2>Услуги</h2>}
              <div className="labels">
                {data.specialisations.data.map((item: any, index: number) => <label key={index} htmlFor="" className="uk-label bare">{item.attributes.title}</label>)}
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
              {!!data.images.data.length && <h2>Фотографии</h2>}
              {!!data.images.data.length && <SlideShow data={data.images.data}/>}
            </div>
            <div className="rightbar">
              <div className="block">
                <h5>Как добраться?</h5>
                <p>{data.address}</p>
                {/* <h5>Это Ваша компания?</h5>
                <a href="">Подтвердить права</a> */}
              </div>
              {/* <div className="uk-margin-bottom">
                <Map />
              </div>
              <div className="button-wrap two">
                <div>
                  <a href="" className="button">оставить заявку</a>
                </div>
                <div>
                  <a href="" className="button bare">оставить заявку</a>
                </div>
              </div> */}
              {!!data.promotions.data.length && <h2>Акции</h2>}
              {!!data.promotions.data.length && data.promotions.data.map((item: any, index: number) => <StockItem 
                key={index} 
                slug={`/stock/${item.attributes.slug}`}
                head={item.attributes.title} 
                content={item.attributes.content}
                skydka={item.attributes.metkis?.data[0].attributes.title} 
              />)}
              {!!data.licences.data.length && <h2>Лицензии</h2>}
              {data.licences.data.map((item: any, index: number) => <Certificates
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

export default Company