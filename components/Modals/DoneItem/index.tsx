import { FC } from "react"

const DoneItem: FC = () => {
  return (
    <div className="done-item">
      <div className="img-wrap">
        <img src="/assets/stock-item.jpg" alt="" />
      </div>
      <div className="done-content">
        <div>
          <span>Вы оценили</span>
          <div className="star-wrap">
            <span>4</span>
            <img src="/assets/star-solid.svg" alt="Star" uk-svg="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoneItem