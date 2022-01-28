import { FC } from "react"
import Stars from "../Stars"

const ReviewItem: FC = () => {
  return (
    <div className="review-item">
      <div className="top">
        <h5>Имя клиента</h5>
        <Stars />
      </div>
      <time>05.06.2020</time>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia assumenda explicabo laborum. Suscipit nihil ipsa amet doloremque? Quam facere provident quia. Voluptates, corporis laboriosam voluptatibus ipsam illum recusandae quidem maxime?</p>
      </div>
    </div>
  )
}

export default ReviewItem