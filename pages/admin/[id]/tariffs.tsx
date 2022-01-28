import TariffItem from "../../../components/TariffItem"
import Page from "../../../layout/Page"

const Tariffs = () => {
  return(
    <Page admin>
      <div className="uk-grid uk-child-width-1-2">
        <div><TariffItem blue /></div>
        <div><TariffItem yellow /></div>
      </div>
    </Page>
  )
}

export default Tariffs