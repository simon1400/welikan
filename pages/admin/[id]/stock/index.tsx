import { NextPage } from "next"
import AdminShortItem from "../../../../components/AdminShortItem"
import Page from "../../../../layout/Page"

const Stock: NextPage = () => {
  return(
    <Page admin>
      <div className="admin-head-button">
        <div>
          <a href="" className="button bare square small">Активные</a>
          <a href="" className="button bare square small">Завершенные</a>
          <a href="" className="button small">+ Добавить акцию</a>
        </div>
      </div>
      <div className="uk-grid uk-child-width-1-4" uk-grid>
        <div><AdminShortItem /></div>
        <div><AdminShortItem /></div>
        <div><AdminShortItem /></div>
        <div><AdminShortItem /></div>
        <div><AdminShortItem /></div>
      </div>
    </Page>
  )
}

export default Stock