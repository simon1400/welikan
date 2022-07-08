import Input from "../Input"
import t from '../../data/translations.json'
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks-web'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SearchInput = (props: UseSearchBoxProps) => {

  const { refine } = useSearchBox(props);

  const router = useRouter()
  const [value, setValue] = useState<string>('')
  const [firstUpdate, setFirstUpdate] = useState(false)

  const handleChange = (e: any) => {
    refine(e.target.value)
    setValue(e.target.value)
  }

  useEffect(() => {
    if(router.query['institution[query]'] && !firstUpdate) {
      refine(router.query['institution[query]'] as string)
      setValue(router.query['institution[query]'] as string)
      setFirstUpdate(true)
    }
  }, [router])

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