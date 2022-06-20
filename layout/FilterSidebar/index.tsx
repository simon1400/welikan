import { ChangeEvent, FC, useState } from "react"
import Input from "../../components/Input"
import MultiCheckbox from "../../components/MultiCheckbox"
import StockItem from "../../components/StockItem"
import t from '../../data/translations.json'

const FilterSidebar: FC = () => {

  const [search, setSearch] = useState<string>('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="filter-sidebar">
      <h5>Район/метро</h5>
      <Input 
        placeholder={`${t.search}...`}
        img="/assets/search.svg"
        value={search} 
        onChange={e => handleSearchChange(e)} 
        name="search"  />
      <h5>{t.specialization}</h5>
      <MultiCheckbox />
      <h5>{t.typeInstitution}</h5>
      <MultiCheckbox />
      <h3>{t.promotions}</h3>
      {/* <StockItem />
      <StockItem />
      <StockItem /> */}
    </div>
  )
}

export default FilterSidebar