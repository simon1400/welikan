import { ChangeEvent, FC, useState } from "react";
import Input from "../../../../components/Input";
import TitleAuth from "../../../../components/Modals/Title";
import ModalClose from "../../../../components/Modals/Close";
import WrapModal from "../../Wrap";
import t from "../../../../data/translations.json"

const Login: FC = () => {

  const [values, setValues] = useState({
    name: '',
    password: '',
    description: ''
  })
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleClose = () => {
    console.log(111);
  }

  return (
    <WrapModal
      className="auth-modal"
      size = "xsmall-modal"
      id="modal-login"
      footer={<a href="" className="button">{t.login}</a>}
    >
      <TitleAuth title="Вход" subTitle="Еще не зарегистрированы? Регистрация" />
      <div className="modal-input"><Input placeholder="ФИО" name="name" onChange={handleChange} value={values.name} /></div>
      <div className="modal-input"><Input placeholder="ФИО" name="name" onChange={handleChange} value={values.name} /></div>
    </WrapModal>
  )
}

export default Login