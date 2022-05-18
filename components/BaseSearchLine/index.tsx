import { ChangeEvent, FC, useState } from "react"
import Input from "../Input"
import Select from "../Select"

interface BaseSearchLineProps {
  home?: boolean
  setSearchQuery: Function
}
interface SearchProps {
  service: string,
  place: string
}

const BaseSearchLine: FC<BaseSearchLineProps> = ({
  home = false,
  setSearchQuery
}) => {

  const [search, setSearch] = useState<SearchProps>({
    service: "",
    place: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })

    setSearchQuery(e.target.value);
  }

  return (
    <div className={`base-search-line${home ? ' home' : ''}`}>
      <form action="">
        <Input
          name="service"
          img="/assets/search.svg"
          placeholder="Услуга, город, название клиники..."
          onChange={handleChange}
          value={search.service} />
        {!home && <Input
          name="place"
          img="/assets/search.svg"
          placeholder="Город, Страна"
          onChange={handleChange}
          value={search.place} />}
        {!home && <Select />}
      </form>
    </div>

  )
}

export default BaseSearchLine