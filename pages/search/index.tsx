import { NextPage } from "next"
import { Configure, InstantSearch } from "react-instantsearch-hooks-web"
import FullSearch from "../../components/FullSearch"
import Pagination from "../../components/Pagination"
import Select from "../../components/Select"
import ShortItem from "../../components/ShortItem"
import Page from "../../layout/Page"
import searchClient from "../../utility/meilisearch"
import {
  useHits,
  UseHitsProps,
} from 'react-instantsearch-hooks-web';
import { useConnector } from 'react-instantsearch-hooks-web';
import connectStats from 'instantsearch.js/es/connectors/stats/connectStats';

import type {
  StatsConnectorParams,
  StatsWidgetDescription,
} from 'instantsearch.js/es/connectors/stats/connectStats';

export type UseStatsProps = StatsConnectorParams;


const Search: NextPage = () => {

  return (
    <Page>
      <InstantSearch 
        searchClient={searchClient} 
        indexName="institution"
      >

        <FullSearch />

        <Configure
          hitsPerPage={5}
        />
        
        <section>
          <div className="uk-container">
            <div className="section-top">
              <Stats />
              <div>
                <Select />
              </div>
            </div>
            <Hits />
            <Pagination />
          </div>
        </section>
      </InstantSearch>
    </Page>
  )
}

const useStats = (props?: UseStatsProps) => {
  return useConnector<StatsConnectorParams, StatsWidgetDescription>(
    connectStats,
    props
  );
}

const Stats = (props: UseStatsProps) => {
  const { nbHits } = useStats(props);

  return <h2>Найдено {nbHits} учреждений по вашему запросу</h2>;
}

const Hits = (props: UseHitsProps) => {

  const { hits } = useHits(props);

  const currentHits: any = hits
  
  return (
    <>
      {currentHits.map((item: any, index: number) => 
        <ShortItem 
          key={index}
          big 
          review 
          stars={4}
          slug={`/company/${item.slug}`}
          image={item.logo}
          title={item.title}
          content={item.content}
          labels={item?.specialisations}
          address={item?.address}
          // email={item?.contact?.email}
          phone={item.phone}
        />)}
    </>
  );
}

export default Search