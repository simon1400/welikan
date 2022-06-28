import { NextPage } from "next"
import Breadcrumbs from "../../components/Breadcrumbs"
import ShortItem from "../../components/ShortItem"
import Page from "../../layout/Page"
import allStockQuery from "../../queries/stock";
import { client } from "../../utility/graphql";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: allStockQuery
  });

  return {
    props: {
      data: data.promotions.data
    },
 };
}

const Stock: NextPage = ({
  // @ts-ignore
  data
}) => {  

  return(
    <Page>
      <div className="uk-container">
        <Breadcrumbs />
      </div>
      <section>
        <div className="uk-container">
          {data.map((item: any, index: number) => <ShortItem 
            key={index}
            title={item.attributes.title}
            time={item.attributes.to}
            slug={`/stock/${item.attributes.slug}`}
            content={item.attributes.content} 
            email={"emai@email.com"}
          />)}
        </div>
      </section>
    </Page>
  )
}

export default Stock