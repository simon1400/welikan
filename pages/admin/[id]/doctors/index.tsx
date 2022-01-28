import { NextPage } from "next"
import DoctorItem from "../../../../components/AdminShortItem"
import Page from "../../../../layout/Page"

const Doctors: NextPage = () => {
  return (
    <Page admin>
      <div className="uk-margin-medium-bottom">
        <a href="" className="button small">+ Добавить врача</a>
      </div>
      <div className="uk-grid uk-child-width-1-4" uk-grid="">
        <div><DoctorItem /></div>
        <div><DoctorItem /></div>
        <div><DoctorItem /></div>
        <div><DoctorItem /></div>
        <div><DoctorItem /></div>
      </div>
    </Page>
  )
}

export default Doctors