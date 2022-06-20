import { ChangeEvent, FC, useState } from "react"
import Input from "../../../../Input"
import Select from "../../../../Select"
import ContainerAuth from "../../Container"
import t from '../../../../../data/translations.json'

const Step2: FC = () => {

  const [values, setValues] = useState({
    name: '',
    password: '',
    description: ''
  })
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <ContainerAuth title={t.enterInfo}>
      <div className="modal-input"><Input placeholder={t.fullName} name="name" onChange={handleChange} value={values.name} /></div>
      <div className="modal-input"><Input placeholder={t.fullName} name="name" onChange={handleChange} value={values.name} /></div>
      <div className="modal-input"><Select /></div>
      <div className="modal-input"><Select /></div>
    </ContainerAuth>
  )
}

export default Step2