import { FC } from "react"
import Stars from "../Stars"

interface Rewiew {
  name?: string;
  content?: string;
}

const ReviewItem: FC<Rewiew> = ({
  name="",
  content=""
}) => {
  return (
    <div className="review-item">
      <div className="top">
        <h5>{name}</h5>
        <Stars />
      </div>
      <time>05.06.2020</time>
      <div className="content" dangerouslySetInnerHTML={{__html: content}} />
    </div>
  )
}

export default ReviewItem