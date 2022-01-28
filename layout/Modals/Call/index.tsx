import { ChangeEvent, FC, useState } from "react"
import Input from "../../../components/Input"
import ModalClose from "../../../components/Modals/Close"
import TitleAuth from "../../../components/Modals/Title"

const CallModal: FC = () => {

  const [values, setValues] = useState({
    name: '',
    password: '',
    description: ''
  })
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return(
    <div id="modal-call" className="auth-modal xsmall-modal uk-flex-top" uk-modal="">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <ModalClose />
        <TitleAuth title="Заказать звонок" subTitle="Введите ваши данные и мы перезвоним" />
        <div className="modal-input"><Input placeholder="ФИО" name="name" onChange={handleChange} value={values.name} /></div>
        <div className="modal-input"><Input placeholder="ФИО" name="name" onChange={handleChange} value={values.name} /></div>
        <div className="footer-modal">
          <a href="" className="button">Заказать</a>
        </div>
      </div>
    </div>
  )
}

export default CallModal