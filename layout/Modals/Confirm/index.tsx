import { ChangeEvent, useState } from "react"
import Input from "../../../components/Input"
import ModalClose from "../../../components/Modals/Close"
import TitleAuth from "../../../components/Modals/Title"

const ConfirmModal = () => {

  const [values, setValues] = useState({
    name: '',
    password: '',
    description: ''
  })
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return(
    <div id="modal-local" className="uk-flex-top" uk-modal="">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <ModalClose />
        <TitleAuth title="Подтвердить права на организацию" subTitle="На официальный номер организации поступит звонок с номера 8 (900) 000-00-00. В поле ниже впишите код, который назовет робот и нажмите “Подтвердить”" />
        <div className="content-modal">
          <div>
            <a href="" className="button big bare">я готов принять звонок</a>
            <div className="modal-input"><Input placeholder="ФИО" name="name" onChange={handleChange} value={values.name} /></div>
            <div className="footer-modal">
              <a href="" className="button">подтвердить</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal