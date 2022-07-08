import { ChangeEvent, FC, FormEvent, SyntheticEvent, useContext, useState } from "react"
import Input from "../../../components/Input"
import ModalClose from "../../../components/Modals/Close"
import TitleAuth from "../../../components/Modals/Title"
import Modal from 'react-modal';
import { useGlobalState } from "../../../context/dataStateContext";
import createCallRequest from "../../../queries/call";
import { useMutation } from "@apollo/client";

const CallModal: FC = () => {

  const { state, setState } = useGlobalState();
  const [createCall] = useMutation(createCallRequest);

  const [values, setValues] = useState({
    phone: '',
    name: ''
  })

  const handleClose = () => {
    setState({modal: ''})
  }
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    await createCall({variables: {
      input: {
        name: values.name,
        phone: values.phone
      }
    }})

    setState({modal: ''})
    
  }

  return(
    <Modal
      isOpen={state.modal === 'call'}
      preventScroll={true}
      overlayClassName={"modal-overlay"}
      className={"modal xsmall-modal"}
      onRequestClose={handleClose}
      // bodyOpenClassName={"ReactModal__Body--open"}
      // htmlOpenClassName={"ReactModal__Html--open"}
    >
      <div className="modal-content xsmall-modal uk-flex-top">
        <ModalClose />
        <TitleAuth title="Заказать звонок" subTitle="Введите ваши данные и мы перезвоним" />
        <form onSubmit={submitForm}>
          <div className="modal-input">
            <Input placeholder="Телефон" name="phone" onChange={handleChange} value={values.phone} />
          </div>
          <div className="modal-input">
            <Input placeholder="Имя" name="name" onChange={handleChange} value={values.name} />
          </div>
          <div className="footer-modal">
            <button type="submit" className="button">Заказать</button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default CallModal