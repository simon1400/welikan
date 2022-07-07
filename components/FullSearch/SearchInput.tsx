import Input from "../Input"
import t from '../../data/translations.json'
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks-web'
import { useState } from "react";

const SearchInput = (props: UseSearchBoxProps) => {

  const { refine } = useSearchBox(props);
  
  const [value, setValue] = useState('')

  const handleChange = (e: any) => {
    refine(e.target.value)
    setValue(e.target.value)
  }

  return (
    <Input 
      name="service"
      img="/assets/search.svg"
      placeholder={t.searchService} 
      onChange={handleChange} 
      value={value} 
    />
  )
}

export default SearchInput