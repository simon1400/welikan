import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import getDirectionsQuery from "../../queries/directions";
import DirectionList from "../DirectionList"

const Directions = ({
  // @ts-ignore
  data
}) => {

  const [directionsData, setDirectionsData] = useState(data.data)
  const [page, setPage] = useState(data.meta.pagination.page)

  const [loadDirections] = useLazyQuery(getDirectionsQuery);

  const loadMore = async () => {
    const loadDirectionsData = await loadDirections({variables: {page: page + 1}})
    setDirectionsData([...directionsData, ...loadDirectionsData.data.labels.data])
    setPage(page + 1)
  }

  return (
    <section className="bg-grey">
      <div className="uk-container">
        <div className="section-head">
          <h2>Направления</h2>
          {/* <a href="/abs"><label htmlFor="" className="uk-label">Россия<img src="/assets/times.svg" uk-svg="" /></label></a>
          <a href="/abs"><label htmlFor="" className="uk-label">Москва<img src="/assets/times.svg" uk-svg="" /></label></a> */}
        </div>
        <DirectionList data={directionsData} />
        <div className="uk-text-center uk-margin-top">
          <button className="button bare" onClick={() => loadMore()}>Еще +20</button>
        </div>
      </div>
    </section>
  )
}

export default Directions