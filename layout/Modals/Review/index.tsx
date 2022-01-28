import { ChangeEvent, FC, useState } from "react"
import Input from "../../../components/Input"
import ModalClose from "../../../components/Modals/Close"
import DoneItem from "../../../components/Modals/DoneItem"
import TitleAuth from "../../../components/Modals/Title"
import Stars from "../../../components/Stars"
import Textarea from "../../../components/Textarea"

const ReviewModal: FC = () => {

  const [reviewDone, setReviewDone] = useState<boolean>(true)

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

  return(
    <div id="modal-review" className="uk-flex-top" uk-modal="">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <ModalClose />
        <TitleAuth title="Оставить отзыв о Клиника “Нова”" />
        {!reviewDone && <div className="content-modal">
          <div className="uk-grid" uk-grid="">
            <div className="uk-width-1-2">
              <div className="modal-input"><Input placeholder="ФИО" name="name" onChange={handleChange} value={values.name} /></div>
              <div className="modal-input"><Input placeholder="ФИО" name="name" onChange={handleChange} value={values.name} /></div>
            </div>
            <div className="uk-width-1-2">
              <Stars />
            </div>
            <div className="uk-width-1-1">
              <Textarea name="name" value={values.name} onChange={handleChangeTextarea} />
            </div>
          </div>
          <div className="footer-modal">
            <a href="/asd" className="button" onClick={e => {e.preventDefault(); setReviewDone(true)}}>Опубликовать</a>
          </div>
        </div>}
        {reviewDone && <div className="content-modal-center">
          <div>
            <DoneItem />
            <h2>Благодарим за Вашу оценку!</h2>
            <p>Отзыв появится на сайте после прохождения модерации.</p>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default ReviewModal