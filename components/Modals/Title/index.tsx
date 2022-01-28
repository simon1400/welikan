import { ChangeEvent, FC, useState } from "react"
import Input from "../../Input"

interface TitleAuthProps {
  title: string,
  subTitle?: string,
  search?: boolean
}


const TitleAuth: FC<TitleAuthProps> = ({
  title,
  subTitle = false,
  search = false
}) => {

  const [searchValue, setSearchValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="title">
      <div>
        <h2>{title}</h2>
        {subTitle && <span>{subTitle}</span>}
      </div>
      {search && <div className="search-modal">
        <Input 
          placeholder="Поиск..."
          value={searchValue}
          img="/assets/search.svg"
          radius
          small
          onChange={e => handleChange(e)}
          name="search"/>
      </div>}
    </div>
  )
}

export default TitleAuth