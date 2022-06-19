import { NextPage } from "next"
import AuctionPropos from "../../../../components/AuctionPropItem"
import ShortItem from "../../../../components/ShortItem"
import Page from "../../../../layout/Page"

const AuctionFull: NextPage = () => {
  return (
    <Page admin>
      {/* <ShortItem time descr address /> */}
      <div className="uk-grid uk-child-width-1-2">
        <div>
          <AuctionPropos />
        </div>
        <div>
          <AuctionPropos />
        </div>
        <div>
          <AuctionPropos />
        </div>
        <div>
          <AuctionPropos />
        </div>
      </div>
    </Page>
  )
}

export default AuctionFull