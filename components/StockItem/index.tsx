import { FC } from "react"
import Link from 'next/link'
import Stars from "../Stars"

interface StockItemProps {
  skydka: string
  head: string
  content: string
  stars?: number
  slug: string
}

const StockItem: FC<StockItemProps> = ({
  skydka, 
  head, 
  content,
  slug,
  stars = 0
}) => {

  return (
    <li className="wrap-promo">
      <Link href={slug}>
        <a className="stock-item">
          <div className="img-wrap">
            <img src="/assets/stock-item.jpg" alt="Stock item base" />
            {!!stars && <Stars />}
          </div>
          <div className="uk-flex uk-flex-between">
            <h4>{head}</h4>
            <div><label htmlFor="" className="uk-label bare">{skydka}</label></div>
          </div>
          <div dangerouslySetInnerHTML={{__html: content}} />
        </a>
      </Link>
    </li>
  )
}

export default StockItem