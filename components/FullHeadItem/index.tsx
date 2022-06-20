import { FC } from "react"
import Stars from "../Stars"

import t from '../../data/translations.json'

interface FullHeadItemProps {
  square?: boolean
}

const FullHeadItem: FC<FullHeadItemProps> = ({square = false}) => {
  return (
    <div className="full-head-item item">
      <div className={`img-wrap ${square ? 'square' : ''}`}>
        <img src="/assets/stock-item.jpg" alt="Stock" />
        {/* <a href="" className="button accent">Оставить отзыв</a> */}
      </div>
      <div className="item-content">
        <div className="labels-wrap">
          <label htmlFor="" className="uk-label bare">Бесплатный прием</label>
          <label htmlFor="" className="uk-label bare">Бесплатный прием</label>
        </div>
        <div className="top-item-content">
          <div>
            <time>до 20.07.2021</time>
            <h1>Название этой акци помещается в две строки</h1>
          </div>
          {/* <Stars /> */}
        </div>
        {/* <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ex neque, quis rutrum sapien eleifend ac. Vestibulum hendrerit tellus risus. Proin convallis fermentum consectetur. Sed dictum blandit enim, non tincidunt massa tincidunt quis. Curabitur pulvinar erat in bibendum rhoncus. Curabitur tempus diam a lobortis iaculis. Praesent eget dui eros. Curabitur ac tempus sem.</p>
        </div> */}
        <div>
          <a href="" className="button">{t.enroll}</a>
        </div>
        {/* <div className="labels-wrap">
          <label htmlFor="" className="uk-label bare">Бесплатный прием</label>
          <label htmlFor="" className="uk-label bare">Бесплатный прием</label>
        </div> */}
      </div>
    </div>
  )
}

export default FullHeadItem