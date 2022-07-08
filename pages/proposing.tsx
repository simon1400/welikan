import Pagination from "../components/Pagination"
import Select from "../components/Select"
import ShortItem from "../components/ShortItem"
import Page from "../layout/Page"

import FilterSidebar from '../layout/FilterSidebar'
import ModalMap from "../components/ModalMap"
import { NextPage } from "next"

const Proposing: NextPage = () => {
  return (
    <Page>
      <section>
        <div className="uk-container">
          <div className="layout layout-leftbar">
            <FilterSidebar />
            <div className="content-layout">
              <div className="section-top">
                <div>
                  <h2>Найдено 555 учреждений по вашему запросу</h2>
                  <a href="#" uk-toggle="target: #modal-map" className="button uk-margin-small-top">показать на карте</a>
                </div>
                <div>
                  {/* <Select /> */}
                </div>
              </div>
              {/* <ShortItem big descr address email phone labels stars review />
              <ShortItem big descr address email phone labels stars review />
              <ShortItem big descr address email phone labels stars review />
              <ShortItem big descr address email phone labels stars review /> */}
              {/* <Pagination /> */}
            </div>
          </div>
        </div>
        <ModalMap />
      </section>
    </Page>
  )
}

export default Proposing
