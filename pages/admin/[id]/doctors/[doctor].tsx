import { NextPage } from "next"
import { ChangeEvent, useState } from "react"
import AddressInput from "../../../../components/AddressInput"
import Box from "../../../../components/Box"
import DragDrop from "../../../../components/DragDrop"
import ImageShortItem from "../../../../components/ImageShortItem"
import Input from "../../../../components/Input"
import Map from "../../../../components/Map"
import Textarea from "../../../../components/Textarea"
import Page from "../../../../layout/Page"

const Doctor: NextPage = () => {

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
            <div className="uk-width-1-2">
              <Input label="Название организации" name="name" onChange={handleChange} value={values.name} />
            </div>
            <div className="uk-width-1-2">
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
          <a href="" className="button bare uk-width-1-1 uk-margin-top">Договор №0089129</a>
        </div>
      </div>
      <div className="uk-grid uk-child-width-1-2">
        <div>
          <Textarea label="Образование" name="description" onChange={handleChangeTextarea} value={values.description} />
        </div>
        <div>
          <Textarea label="Опыт работы" name="description" onChange={handleChangeTextarea} value={values.description} />
        </div>
      </div>
      <Box head="Специализации">
        <div className="labels">
          <label htmlFor="" className="uk-label bare">Косметология</label>
          <a href="" className="button small">+ Добавить</a>
        </div>
      </Box>
      <Box head="Адреса">
        <div className="uk-grid uk-child-width-1-2">
          <div>
            <AddressInput />
            <AddressInput />
            <AddressInput />
            <div className="uk-text-center">
              <a href="" className="button small">+ Добавить</a>
            </div>
          </div>
          <div>
            <Map />
          </div>
        </div>
      </Box>
      <Box head="Прайс-лист">
        <div>
          <table className="uk-table uk-table-divider">
            <thead>
              <tr>
                <th className="uk-table-expand">Услуга</th>
                <th className="uk-table-shrink">Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                <td>2000</td>
              </tr>
            </tbody>
          </table>
          <a href="" className="button small">+ Добавить</a>
        </div>
      </Box>
      <Box head="Фотографии">
        <div className="uk-grid uk-child-width-1-5" uk-grid="">
          <div><ImageShortItem img="/assets/stock-item.jpg" /></div>
          <div><ImageShortItem img="/assets/stock-item.jpg" /></div>
          <div><ImageShortItem img="/assets/stock-item.jpg" /></div>
          <div><ImageShortItem img="/assets/stock-item.jpg" /></div>
          <div>
            <DragDrop
              text="или перетащите сюда"
              height="100%"
              parrentHeight="100%"
              buttonText="+ Добавить" />
          </div>
        </div>
      </Box>
      <Box head="Лицензии">
        <div className="uk-grid uk-child-width-1-5" uk-grid="">
          <div><ImageShortItem img="/assets/stock-item.jpg" /></div>
          <div><ImageShortItem img="/assets/stock-item.jpg" /></div>
          <div><ImageShortItem img="/assets/stock-item.jpg" /></div>
          <div><ImageShortItem img="/assets/stock-item.jpg" /></div>
          <div>
            <DragDrop
              text="или перетащите сюда"
              height="100%"
              parrentHeight="100%"
              buttonText="+ Добавить" />
          </div>
        </div>
      </Box>
    </Page>
  )
}
export default Doctor