import { NextPage } from "next"
import Breadcrumbs from "../../components/Breadcrumbs"
import FullHeadItem from "../../components/FullHeadItem"
import Page from "../../layout/Page"
import { getStockQuery } from "../../queries/stock";
import { client } from "../../utility/graphql";

// @ts-ignore
export async function getServerSideProps(ctx) {
  const { data } = await client.query({
    query: getStockQuery,
    variables: {
      slug: ctx.query.slug
    }
  });

  return {
    props: {
      data: data.promotions.data[0].attributes
    },
 };
}

const StockFull: NextPage = ({
  // @ts-ignore
  data
}) => {
  
  return (
    <Page>
      <div className="uk-container">
        <Breadcrumbs />
        <FullHeadItem  
          title={data.title}
          image={data.image?.data?.attributes}
          // content={data.content}
          enroll
          review={false}
          time
          labelsTop={data.metkis.data}
        />
        <div className="content" dangerouslySetInnerHTML={{__html: data.content}} />
      </div>
    </Page>
  )
}

export default StockFull