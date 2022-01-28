import { NextPage } from "next"
import { ChangeEvent, useState } from "react"
import Box from "../../../../components/Box"
import DatePicker from "../../../../components/DatePicker"
import DragDrop from "../../../../components/DragDrop"
import Input from "../../../../components/Input"
import Textarea from "../../../../components/Textarea"
import Page from "../../../../layout/Page"


const StockCurrent: NextPage = () => {

  const [values, setValues] = useState({
    name: '',
    password: '',
    description: ''
  })

  const [value, onChange] = useState([new Date(), new Date()]);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  
  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return(
    <Page admin>
      <div className="uk-grid" uk-grid="">
        <div className="uk-width-1-2">
          <Input label="Название организации" name="name" onChange={handleChange} value={values.name} />
        </div>
        <div className="uk-width-1-2">
          <Input label="Пароль" name="name" type="password" onChange={handleChange} value={values.name} />
        </div>
        <div className="uk-width-1-1">
          <Textarea label="Описание" name="description" onChange={handleChangeTextarea} value={values.description} />
        </div>
        <div className="uk-width-1-2">
          <DragDrop
            text=""
            parrentHeight="100%"
            height="100%"
            buttonText="Добавить фото" />
        </div>
        <div className="uk-width-1-2">
          <Box head="Даты проведения">
            <DatePicker />
          </Box>
        </div>
      </div>
    </Page>
  )
}

export default StockCurrent