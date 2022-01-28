import type { NextPage } from 'next'
import BaseSearchLine from '../components/BaseSearchLine'
import DirectionList from '../components/DirectionList'
import Map from '../components/Map'
import ShortItem from '../components/ShortItem'
import StockItem from '../components/StockItem'
import Slider from '../components/Slider'
import Page from '../layout/Page'

const Home: NextPage = () => {

  return (
    <Page>
      <section className="search blue-bg">
        <div className="uk-container uk-container-small">
          <h1>Поиск врачей, клиник и медицинских услуг в г.Москва</h1>
          <div className="form-wrap">
            <BaseSearchLine home />
            <div><a href="/asd" className="button accent">Найти</a></div>
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
            <div><ShortItem small review stars labels address phone email descr/></div>
            <div><ShortItem small review stars labels address phone email descr/></div>
            <div><ShortItem small review stars labels address phone email descr/></div>
            <div><ShortItem small review stars labels address phone email descr/></div>
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
