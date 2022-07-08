import { FC } from "react"
import CallModal from "../../layout/Modals/Call"
import ReviewModal from "../../layout/Modals/Review"
import Stars from "../Stars"
import t from '../../data/translations.json'
import Link from "next/link"

const APP_API = process.env.APP_API

interface ShortItemProps {
  small?:boolean
  big?: boolean
  xsmall?: boolean
  review?: boolean
  stars?: number
  time?: string
  labels?: any[]
  content?: string
  title?: string
  address?: any
  email?: string
  phone?: string
  image?: any,
  slug: string
}

const ShortItem: FC<ShortItemProps> = ({
  big = false,
  small = false,
  xsmall = false,
  review = false,
  labels = [],
  title,
  content,
  stars,
  time,
  address = false,
  email,
  phone,
  image,
  slug
}) => {
  
  return (
    <Link href={slug}>
      <a className={`short-item item ${big ? "big" : small ? 'small' : xsmall ? "xsmall" : ''}`}>
        {image && <div className="img-wrap">
          {image && <img src={`${APP_API}${image.url}`} alt="Some photo" />}
          {review && <a href="#modal-review" uk-toggle="" className={`button accent${small ? " small" : ""}`}>{t.leaveReview}</a>}
        </div>}
        <div className="item-content">
          <div>
            <div className="top-item-content">
              {(small || big || xsmall) ? <h5>{title}</h5> : <h2>{title}</h2>}
              {stars && <Stars />}
              {time && <time>до 20.07.2021</time>}
            </div>
            {!!labels?.length && <div className="labels-wrap">
              {labels.splice(0, 3).map((item, index) => <label key={index} className="uk-label bare">{item?.attributes?.title || item}</label>)}
            </div>}
            {content && <div dangerouslySetInnerHTML={{__html: content.substring(0, 100)+"..."}}/>}
          </div>
          <div className="item-content-control">
            {address && <div>
              <a href="/asd" className={`${(!big && !xsmall) ? "button small" : ''}`}>{address}</a>
            </div>}
            <div>
              {email && <a href={`mailto:${email}`} className={`button${small ? " icon" : big ? " uk-margin-small-right" : ""}`}>
                {small ? <img src="/assets/envelope.svg" alt="Envelope" uk-svg="" /> : t.leaveRequest}
              </a>}
              {phone && <a href="#modal-call" className={`button${small ? " icon" : big ? " bare" : ""}`} uk-toggle="">
                <img src="/assets/phone.svg" alt="Phone" uk-svg="" />
                {big && t.call}
              </a>}
            </div>
          </div>
        </div>
        {/* {review && <ReviewModal />} */}
        {/* {phone && <CallModal />} */}
      </a>
    </Link>
  )
}

export default ShortItem