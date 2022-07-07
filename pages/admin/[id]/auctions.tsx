import { NextPage } from "next"
import Pagination from "../../../components/Pagination"
import Select from "../../../components/Select"
import ShortItem from "../../../components/ShortItem"
import Page from "../../../layout/Page"

const Auctions: NextPage = () => {
  return (
    <Page admin>
      <div className="admin-head-button">
        <div>
          <a href="" className="button bare square small">Все</a>
          <a href="" className="button bare square small">Сохраненные</a>
          <a href="" className="button bare square small">Выигранные</a>
        </div>
        <div>
          {/* <Select /> */}
        </div>
      </div>
      {/* <ShortItem descr labels email time/>
      <ShortItem descr labels email time/>
      <ShortItem descr labels email time/> */}
      {/* <Pagination /> */}
    </Page>
  )
}

export default Auctions