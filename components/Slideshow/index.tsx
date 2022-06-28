import { FC } from "react"

interface ISlideshow {
  data: any
}

const APP_API = process.env.APP_API

const SlideShow: FC<ISlideshow> = ({
  data
}) => {
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="min-height: 300; max-height: 470; animation: push">
      <ul className="uk-slideshow-items">
        {data.map((item: any, index: number) => <li key={index}>
          <img src={`${APP_API}${item.attributes.url}`} alt="" uk-cover="" />
        </li>)}
      </ul>
      <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
    </div>
  )
}

export default SlideShow