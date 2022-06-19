import { NextPage } from "next"
import Pagination from "../../components/Pagination"
import SearchSec from "../../components/SearchSec"
import Select from "../../components/Select"
import ShortItem from "../../components/ShortItem"
import Page from "../../layout/Page"

const Search: NextPage = () => {
  return (
    <Page>
      <SearchSec />
      <section>
        <div className="uk-container">
          <div className="section-top">
            <h2>Найдено 555 учреждений по вашему запросу</h2>
            <div>
              <Select />
            </div>
          </div>
          {/* <ShortItem big descr address email phone labels stars review /> */}
          <Pagination />
        </div>
      </section>
    </Page>
  )
}

export default Search