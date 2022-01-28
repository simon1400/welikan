import { NextPage } from "next"
import { ChangeEvent, useState } from "react"
import DragDrop from "../../../components/DragDrop"
import Input from "../../../components/Input"
import Select from "../../../components/Select"
import Page from "../../../layout/Page"

const ClientInfo: NextPage = () => {

  const [values, setValues] = useState({
    name: '',
    password: '',
    description: ''
  })
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <Page admin>
      <div className="edit-wrap">
        <div>
          <div className="uk-grid" uk-grid="">
            <div className="uk-width-1-1">
              <Input label="ФИО" name="name" onChange={handleChange} value={values.name} />
            </div>
            <div className="uk-width-1-2">
              <Input label="Пароль" name="name" type="password" onChange={handleChange} value={values.name} />
            </div>
            <div className="uk-width-1-2">
              <Input label="Пароль" name="name" type="password" onChange={handleChange} value={values.name} />
            </div>
            <div className="uk-width-1-2">
              <Select />
            </div>
            <div className="uk-width-1-2">
              <Select />
            </div>
          </div>
        </div>
        <div className="edit-foto-wrap">
          <DragDrop
            text=""
            height="280px"
            buttonText="Добавить фото" />
        </div>
      </div>
      <div>
        <a href="" className="button big">сохранить</a>
      </div>
    </Page>
  )
}

export default ClientInfo