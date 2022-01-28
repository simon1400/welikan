import { FC } from "react"
import Stars from "../Stars"

const AuctionPropos: FC = () => {
  return (
    <div className="auction-prop">
      <div>
        <div className="img-wrap">
          <img src="/assets/stock-item.jpg" alt="Some photo" />
        </div>
        <span className="price">50 000 руб.</span>
      </div>
      <div className="item-content">
        <div>
          <div className="top-item-content">
            <h5>Название этой клиники помещается в две строки</h5>
            <Stars small />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit,..</p>
          </div>
        </div>
        <div className="item-content-control">
          <div>
            <a href="" className="button uk-margin-right">Принять</a>
            <a href="" className="button bare">Откдлонить</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuctionPropos