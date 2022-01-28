import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import Box from "../../../../components/Box";
import DatePicker from "../../../../components/DatePicker";
import DragDrop from "../../../../components/DragDrop";
import Input from "../../../../components/Input";
import Textarea from "../../../../components/Textarea";
import Page from "../../../../layout/Page";

const AuctionCreate: NextPage = () => {

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
            <div className="uk-width-1-1">
              <Input label="Название организации" name="name" onChange={handleChange} value={values.name} />
            </div>
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
              <Input label="Пароль" name="name" type="password" onChange={handleChange} value={values.name} />
            </div>
            <div className="uk-width-1-2">
              <Box head="Даты проведения">
                <DatePicker />
              </Box>
            </div>
          </div>
        </div>
        <div className="edit-foto-wrap">
          <DragDrop
            text=""
            height="280px"
            buttonText="Добавить фото" />
          <a href="" className="button big uk-width-1-1 uk-margin-top">Опубликовать</a>
        </div>
      </div>
    </Page>
  )
}

export default AuctionCreate