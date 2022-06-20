import { ChangeEvent, FC, useState } from "react"
import Checkbox from "../../../../Checkbox"
import CheckIcon from "../../../../CheckIcon"
import Input from "../../../../Input"
import ContainerAuth from "../../Container"
import t from '../../../../../data/translations.json'

const Step3: FC = () => {

  const [values, setValues] = useState({
    name: '',
    password: '',
    description: ''
  })
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <ContainerAuth title={t.contactInfo}>
      <div className="modal-input multi">
        <Input placeholder={t.fullName} name="name" onChange={handleChange} value={values.name} />
        {/* <div><a href="" className="button bare">подтвердить</a></div> */}
        <CheckIcon />
      </div>
      <div className="modal-input multi">
        <Input placeholder={t.fullName} name="name" onChange={handleChange} value={values.name} />
        <div><a href="" className="button bare">{t.confirm}</a></div>
      </div>
      <Checkbox />
    </ContainerAuth>
  )
}

export default Step3