import Link from 'next/link'
import { FC } from "react"
import CallModal from "../../layout/Modals/Call"
import ReviewModal from "../../layout/Modals/Review"
import { getStrapiMedia, Media } from '../../lib/api'
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
  title?: string
  city?:string
  img?: Media
  services? : any[]
  link?: string;
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
  title,
  city,
  img,
  services,
  link
}) => {


  return (
    <div className={`short-item item ${big ? "big" : small ? 'small' : xsmall ? "xsmall" : ''}`}>
      <div className="img-wrap">
        {/* Add correct link */}
        <img src={`${img && getStrapiMedia(img)}`} alt={title} />
        {review && <a href="#modal-review" uk-toggle="" className={`button accent${small ? " small" : ""}`}>Оставить отзыв</a>}
      </div>
      <div className="item-content">

        {link && <Link href={link}>
          <a>
            <div className="top-item-content">
              {(small || big || xsmall) ? <h5>{title}</h5> : <h2>{title}</h2>}
              {stars && <Stars />}
              {time && <time>до 20.07.2021</time>}
            </div>
            {services && <div className="labels-wrap">
              {services.map((service) =>
                <label key={service.id} htmlFor="" className="uk-label bare">{service.title}</label>
              )}
            </div>}
            {descr && <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit,..</p>
            </div>}
          </a>
        </Link>}

        <div className="item-content-control">
          {address && <div>
            <a href="/asd" className={`${(!big && !xsmall) ? "button small" : ''}`}>Клиника “Нова”, г.{city}</a>
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