import { NextPage } from "next"
import ReviewItem from "../../../components/ReviewItem"
import Select from "../../../components/Select"
import Page from "../../../layout/Page"

const Reviews: NextPage = () => {
  return (
    <Page admin>
      <div className="admin-head-button">
        <div>
          <h2>555 отзывов о клинике “Нова”</h2>
        </div>
        <div>
          <Select />
        </div>
      </div>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <div className="uk-text-center">
        <a href="" className="button bare">+ еще 10</a>
      </div>
    </Page>
  )
}

export default Reviews