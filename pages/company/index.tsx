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

const Company: NextPage = () => {
  return (
    <Page>
      <div className="uk-container">
        <Breadcrumbs />
      </div>
      <section>
        <div className="uk-container">
          <div className="layout layout-rightbar">
            <div className="content-layout">
              <FullHeadItem square />
              <NavContent />
              <h2>Врачи</h2>
              <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s" uk-grid="">
                <div><ShortItem small review descr address /></div>
                <div><ShortItem small review descr address /></div>
                <div><ShortItem small review descr address /></div>
                <div><ShortItem small review descr address /></div>
              </div>
              <div className="uk-text-center uk-margin-large-top"><a className="button bare" href="/asd">Еще +20</a></div>
              <h2>Услуги</h2>
              <div className="labels">
                <label htmlFor="" className="uk-label bare">Косметология</label>
              </div>
              <h2>Отзывы</h2>
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <div className="uk-text-center uk-margin-large-top"><a className="button bare" href="/asd">Еще +20</a></div>
              <h2>Прайс-лист</h2>
              <table className="uk-table uk-table-divider">
                <thead>
                  <tr>
                    <th className="uk-table-expand">Услуга</th>
                    <th className="uk-table-shrink">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                    <td>2000</td>
                  </tr>
                </tbody>
              </table>
              <div className="uk-text-center uk-margin-large-top"><a className="button bare" href="/asd">Еще +20</a></div>
              <h2>Фотографии</h2>
              <SlideShow />
            </div>
            <div className="rightbar">
              <div className="block">
                <h5>Как добраться?</h5>
                <p>г. Москва, ул. Сталелитейная, д.15, корп.2В</p>
                <h5>Это Ваша компания?</h5>
                <a href="">Подтвердить права</a>
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
              <h2>Лицензии</h2>
              <Certificates />
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Company