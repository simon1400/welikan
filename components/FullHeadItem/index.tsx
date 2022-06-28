import { FC } from "react"
import Stars from "../Stars"

import t from '../../data/translations.json'

const APP_API = process.env.APP_API

interface FullHeadItemProps {
  square?: boolean
  title?: string
  time?: boolean
  image?: any,
  labelsBottom?: any[],
  labelsTop?: any[],
  content?: string,
  enroll?: boolean,
  review?: boolean
}

const FullHeadItem: FC<FullHeadItemProps> = ({
  square = false,
  title = "asdasdasd",
  time = false,
  image,
  labelsBottom = [],
  labelsTop = [],
  content = "",
  enroll = false,
  review = true
}) => {
  return (
    <div className="full-head-item item">
      <div className={`img-wrap ${square ? 'square' : ''}`}>
        <img src={`${APP_API}${image?.url}`} alt="Stock" />
        {review && <a href="" className="button accent">Оставить отзыв</a>}
      </div>
      <div className="item-content">
        {!!labelsTop.length && <div className="labels-wrap">
          {labelsTop.map((item, index) => <label key={index} htmlFor="" className="uk-label bare">{item.attributes.title}</label>)}
        </div>}
        <div className="top-item-content">
          <div>
            {time && <time>до 20.07.2021</time>}
            <h1>{title}</h1>
          </div>
          <Stars />
        </div>
        {!!content.length && <div dangerouslySetInnerHTML={{__html: content}} />}
        {enroll && <div>
          <a href="" className="button">{t.enroll}</a>
        </div>}
        {!!labelsBottom.length && <div className="labels-wrap">
          {labelsBottom.map((item, index) => <label key={index} htmlFor="" className="uk-label bare">{item.attributes.title}</label>)}
        </div>}
      </div>
    </div>
  )
}

export default FullHeadItem