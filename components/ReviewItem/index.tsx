import { FC } from "react"
import Stars from "../Stars"

export interface review {
  userName : string;
  content: string;
  publishedAt: string;
  rating: string;
}


const ReviewItem: FC<review> = ({userName, content, publishedAt, rating}) => {

  return (
    <div className="review-item">
      <div className="top">
        <h5>{userName}</h5>
        <Stars />
      </div>
      <time>{publishedAt}</time>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ReviewItem