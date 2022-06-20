import { FC } from "react"
import Map from "../Map"
import MultiCheckbox from "../MultiCheckbox"
import ShortItem from "../ShortItem"

import t from '../../data/translations.json'

const ModalMap: FC = () => {
  return (
    <div id="modal-map" className="modal-map uk-flex-top" uk-modal="">
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        <div className="modal-left">
          <h2>2344 {t.medicalInstitutions} г.Москва</h2>
          <div className="left-content">
            <div>
              <MultiCheckbox />
            </div>
            <div className="map-modal-result">
              <ShortItem xsmall />
              <ShortItem xsmall />
              <ShortItem xsmall />
              <ShortItem xsmall />
              <ShortItem xsmall />
              <ShortItem xsmall />
            </div>
          </div>
        </div>
        <div className="content-modal">
          <Map />
        </div>
      </div>
    </div>
  )
}

export default ModalMap