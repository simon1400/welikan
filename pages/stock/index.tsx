import { NextPage } from "next"
import Breadcrumbs from "../../components/Breadcrumbs"
import ShortItem from "../../components/ShortItem"
import Page from "../../layout/Page"

const Stock: NextPage = () => {
  return(
    <Page>
      <div className="uk-container">
        <Breadcrumbs />
      </div>
      <section>
        <div className="uk-container">
          {/* <ShortItem time descr email /> */}
        </div>
      </section>
    </Page>
  )
}

export default Stock