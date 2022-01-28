import { NextPage } from "next"
import Order from "../../../../components/Order"
import Select from "../../../../components/Select"
import Page from "../../../../layout/Page"

const Orders: NextPage = () => {

  return (
    <Page admin>
      <div className="admin-head-button">
        <div>
          <a href="" className="button bare square small">Активные</a>
          <a href="" className="button bare square small">Завершенные</a>
        </div>
        <div>
          <Select />
        </div>
      </div>
      <div>
        <Order />
        <Order />
        <Order />
      </div>
    </Page>
  )
}

export default Orders