import { FC } from "react"

const Pagination: FC = () => {
  return (
    <div className="pagination">
      <ul className="uk-pagination" uk-margin="">
        <li><a href="#"><img src="/assets/angle-left.svg" alt="" uk-svg="" /></a></li>
        <li><a href="#">1</a></li>
        <li className="uk-disabled"><span>...</span></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li className="uk-active"><span>7</span></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">10</a></li>
        <li className="uk-disabled"><span>...</span></li>
        <li><a href="#">20</a></li>
        <li><a href="#"><img src="/assets/angle-right.svg" alt="" uk-svg="" /></a></li>
      </ul>
    </div>
  )
}

export default Pagination