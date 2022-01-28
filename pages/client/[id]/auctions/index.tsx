import { NextPage } from "next"
import Pagination from "../../../../components/Pagination"
import Select from "../../../../components/Select"
import ShortItem from "../../../../components/ShortItem"
import Page from "../../../../layout/Page"

const Auctions: NextPage = () => {
  return (
    <Page admin>
      <div className="admin-head-button">
        <div>
          <a href="" className="button bare square small">Активные</a>
          <a href="" className="button bare square small">Завершенные</a>
          <a href="" className="button bare small">Завершенные</a>
        </div>
        <div>
          <Select />
        </div>
      </div>
      <ShortItem time descr address />
      <Pagination />
    </Page>
  )
}

export default Auctions