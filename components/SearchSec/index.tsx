import { FC } from "react"
import BaseSearchLine from "../BaseSearchLine"
import Range from '../Range'

const SearchSec: FC = () => {
  return (
    <section className="search-sec">
      <div className="uk-container">
        <h1>Расширенный поиск</h1>
        <BaseSearchLine />
        <div className="range-wrap">
          <Range />
          <Range />
        </div>
        <div>
          <a href="" className="button accent">НАЙТИ</a>
        </div>
      </div>
    </section>
  )
}

export default SearchSec