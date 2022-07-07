import {FC, useEffect, useState} from 'react'
// import t from '../../data/translations.json'
import Select from 'react-select'
import { useMenu } from 'react-instantsearch-hooks-web'

const SearchSelect = (props: any) => {

  const {placeholder} = props

  const { items, refine } = useMenu(props);

  const [options, setOptions] = useState<any>([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    if(items.length && !update){
      setOptions(items)
      setUpdate(true)
    }
  }, [items])

  const handleChange = (item: any) => {
    refine(item?.label)
  }

  return (
    <div className="uk-inline search-select-wrap">
      <Select 
        options={options}
        onChange={handleChange}
        classNamePrefix="search-select"
        components={{DropdownIndicator}}
        isClearable
        isSearchable
        placeholder={placeholder}
      />
    </div>
  )
}

const DropdownIndicator = (props: any) => {
  return <div className="search-select__arrow-open">
    <img src="/assets/angle-down.svg" alt="Angle down" uk-svg="" />
  </div>;
};

export default SearchSelect