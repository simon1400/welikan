import { NextPage } from "next"
import { ChangeEvent, useState } from "react"
import DragDrop from "../../../components/DragDrop"
import Input from "../../../components/Input"
import Textarea from "../../../components/Textarea"
import Page from "../../../layout/Page"

const Advertising: NextPage = () => {

  const [values, setValues] = useState({
    name: '',
    password: '',
    description: ''
  })
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  
  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <Page admin>
      <div className="edit-wrap">
        <div>
          <div className="uk-grid" uk-grid="">
            <div className="uk-width-1-3">
              <Input label="Название организации" name="name" onChange={handleChange} value={values.name} />
            </div>
            <div className="uk-width-1-3">
              <Input label="Пароль" name="name" type="password" onChange={handleChange} value={values.name} />
            </div>
            <div className="uk-width-1-3">
              <Input label="Пароль" name="name" type="password" onChange={handleChange} value={values.name} />
            </div>
            <div className="uk-width-1-1">
              <Input label="Пароль" name="name" type="password" onChange={handleChange} value={values.name} />
            </div>
            <div className="uk-width-1-1">
              <Textarea label="Описание" name="description" onChange={handleChangeTextarea} value={values.description} />
            </div>
          </div>
        </div>
        <div className="edit-foto-wrap">
          <DragDrop
            text=""
            height="280px"
            buttonText="Добавить фото" />
          <a href="" className="button uk-width-1-1 uk-margin-top">Заказать и оплатить</a>
        </div>
      </div>
    </Page>
  )
}

export default Advertising