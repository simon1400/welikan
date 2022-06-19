import { NextPage } from "next"
import Breadcrumbs from "../../components/Breadcrumbs"
import ShortItem from "../../components/ShortItem"
import Page from "../../layout/Page"

const News: NextPage = () => {
  return(
    <Page className="novyny">
      <div className="uk-container">
        <Breadcrumbs />
      </div>
      <section>
        <div className="uk-container">
          {/* <ShortItem time descr address /> */}
        </div>
      </section>
    </Page>
  )
}

export default News