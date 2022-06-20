import { FC } from "react"
import BaseSearchLine from "../BaseSearchLine"
import Range from '../Range'
import t from '../../data/translations.json'

const SearchSec: FC = () => {
  return (
    <section className="search-sec">
      <div className="uk-container">
        <h1>{t.advancedSearch}</h1>
        <BaseSearchLine />
        <div className="range-wrap">
          <Range />
          <Range />
        </div>
        <div>
          <a href="" className="button accent">{t.find}</a>
        </div>
      </div>
    </section>
  )
}

export default SearchSec