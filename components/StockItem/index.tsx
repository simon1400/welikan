import { FC } from "react"
import Link from 'next/link'
import Stars from "../Stars"
import { getStrapiMedia } from '../../lib/api'

interface StockItemProps {
  metka: string
  head: string
  content: string
  stars?: number
  img: any;
  slug: string;
}

const StockItem: FC<StockItemProps> = ({
  metka,
  head,
  content,
  stars = 0,
  img,
  slug,
}) => {
  return (
    <li>
      <Link href={`/stock/${slug}`}>
        <a className="stock-item">
          <div className="img-wrap">
          <img src={`${img && getStrapiMedia(img)}`} alt={head} />
            {!!stars && <Stars />}
          </div>
          <div className="uk-flex uk-flex-between">
            <h4>{head}</h4>
            { metka &&<div><label htmlFor="" className="uk-label bare">{metka}</label></div>}
          </div>
          <div>
          <p dangerouslySetInnerHTML={{__html: content}}></p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default StockItem