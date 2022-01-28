import { NextPage } from "next";
import ReviewItem from "../../../components/ReviewItem";
import Page from "../../../layout/Page";

const Reviews: NextPage = () => {
  return (
    <Page admin>
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