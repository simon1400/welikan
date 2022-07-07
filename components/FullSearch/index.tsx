import { ChangeEvent, FC, useState } from "react"
import Range from '../Range'
import t from '../../data/translations.json'
import Input from "../Input"
import Select from "../Select"
import SearchInput from "./SearchInput"
import SearchSelect from "../SearchSelect"

interface SearchProps {
  service: string,
  place: string
}

const FullSearch: FC = () => {

  const [search, setSearch] = useState<SearchProps>({
    service: "",
    place: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({
      ...search, 
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="search-sec">
      <div className="uk-container">
        <h1>{t.advancedSearch}</h1>
        <div className="base-search-line">
          <form action="">
            <SearchInput />
            <SearchSelect attribute="city" placeholder="Город, Страна" />
            <SearchSelect attribute="type" placeholder="Вид учреждения" />
          </form>
        </div>
        <div className="range-wrap">
          <Range attribute="rating" />
          {/* <Range /> */}
        </div>
        {/* <div>
          <a href="" className="button accent">{t.find}</a>
        </div> */}
      </div>
    </section>
  )
}

export default FullSearch