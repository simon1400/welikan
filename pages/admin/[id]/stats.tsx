import { NextPage } from "next";
import Box from "../../../components/Box";
import Select from "../../../components/Select";
import AreaChart from "../../../components/Stats/Area";
import BarComponent from "../../../components/Stats/Bar";
import Circle from "../../../components/Stats/Circle";
import NumberBox from "../../../components/Stats/NumberBox";
import Page from "../../../layout/Page";

const Stats: NextPage = () => {

  const dataReviews = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const dataAuction = [
    { name: 'Group A', value: 1000 },
    { name: 'Group B', value: 300 },
  ];

  return (
    <Page admin>
      <div className="uk-grid" uk-grid="">
        <div className="uk-width-2-5">
          <Box head="Выберите период">
            <Select />
          </Box>
        </div>
        <div className="uk-width-1-5">
          <NumberBox 
            icon="/assets/users-medical.svg"
            number="200k"
            text="Посетителей"
          />
        </div>
        <div className="uk-width-1-5">
          <NumberBox 
            icon="/assets/thumbs-up.svg"
            number="4.5"
            text="Средняя оценка"
          />
        </div>
        <div className="uk-width-1-5">
          <NumberBox 
            icon="/assets/comment-alt-dots.svg"
            number="1500"
            text="Заявок с сайта"
          />
        </div>
      </div>
      <div className="uk-grid uk-child-width-1-2" uk-grid="">
        <div>
          <Circle data={dataReviews} />
        </div>
        <div>
          <Circle price="380 500 р." data={dataAuction} />
        </div>
      </div>
      <AreaChart />
      <BarComponent />
      <BarComponent />
    </Page>
  )
}

export default Stats