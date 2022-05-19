import { NextPage } from "next"
import Breadcrumbs from "../../components/Breadcrumbs"
import FullHeadItem from "../../components/FullHeadItem"
import Page from "../../layout/Page"
import { client } from '../../lib/api';
import { promotionQuery } from '../../queries/promotions/promotion';

export async function getServerSideProps({ query }) {
  const { data } = await client.query({
    query: promotionQuery,
    variables: query
  });

  return {
    props: {
      promotion: data.promotions.data[0].attributes
    }
 };
}

const StockFull: NextPage = ({promotion}) => {

  console.log('promotions', promotion);

  return (
    <Page>
      <div className="uk-container">
        <Breadcrumbs />
        <FullHeadItem type='promotion' data={promotion}/>
        <div className="content">
          <p>Условия акции:</p>
          <p dangerouslySetInnerHTML={{__html: promotion.content}}></p>
        </div>
      </div>
    </Page>
  )
}

export default StockFull