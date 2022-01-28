import { FC } from "react"
import CallModal from "../../layout/Modals/Call"
import ReviewModal from "../../layout/Modals/Review"
import Stars from "../Stars"

interface ShortItemProps {
  small?:boolean,
  big?: boolean,
  xsmall?: boolean,
  review?: boolean,
  stars?: boolean,
  time?: boolean,
  labels?: boolean,
  descr?: boolean,
  address?: boolean,
  email?: boolean,
  phone?: boolean,
}

const ShortItem: FC<ShortItemProps> = ({
  big = false,
  small = false,
  xsmall = false,
  review = false,
  stars = false,
  time = false,
  labels = false,
  descr = false,
  address = false,
  email = false,
  phone = false,
}) => {
  return (
    <div className={`short-item item ${big ? "big" : small ? 'small' : xsmall ? "xsmall" : ''}`}>
      <div className="img-wrap">
        <img src="/assets/stock-item.jpg" alt="Some photo" />
        {review && <a href="#modal-review" uk-toggle="" className={`button accent${small ? " small" : ""}`}>Оставить отзыв</a>}
      </div>
      <div className="item-content">
        <div>
          <div className="top-item-content">
            {(small || big || xsmall) ? <h5>Фамилия Имя Отчество Врача</h5> : <h2>Фамилия Имя Отчество Врача</h2>}
            {stars && <Stars />}
            {time && <time>до 20.07.2021</time>}
          </div>
          {labels && <div className="labels-wrap">
            <label htmlFor="" className="uk-label bare">Педиатрия</label>
            <label htmlFor="" className="uk-label bare">Педиатрия</label>
            <label htmlFor="" className="uk-label bare">Педиатрия</label>
          </div>}
          {descr && <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit,..</p>
          </div>}
        </div>
        <div className="item-content-control">
          {address && <div>
            <a href="/asd" className={`${(!big && !xsmall) ? "button small" : ''}`}>Клиника “Нова”, г.Москва</a>
          </div>}
          <div>
            {email && <a href="email:email@gmal.com" className={`button${small ? " icon" : big ? " uk-margin-small-right" : ""}`}>
              {small ? <img src="/assets/envelope.svg" alt="Envelope" uk-svg="" /> : "оставить заявку"}
            </a>}
            {phone && <a href="#modal-call" className={`button${small ? " icon" : big ? " bare" : ""}`} uk-toggle="">
              <img src="/assets/phone.svg" alt="Phone" uk-svg="" />
              {big && "позвонить"}
            </a>}
          </div>
        </div>
      </div>
      {review && <ReviewModal />}
      {phone && <CallModal />}
    </div>
  )
}

export default ShortItem