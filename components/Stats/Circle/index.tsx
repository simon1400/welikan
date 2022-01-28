import { FC } from "react";
import CheckItem from "../CheckItem";
import Pie from "../Pie";
import PieDataObjProps from '../../../interfaces/stats'

interface CircleStatsProps {
  price?: string,
  data: PieDataObjProps[]
}

const Circle: FC<CircleStatsProps> = ({
  price = false,
  data
}) => {
  return (
    <div className="circle-stats">
      <h2>Статистика отзывов, %</h2>
      <div className="uk-grid uk-child-width-1-2">
        <div>
          <div className="pie-wrap">
            <Pie price={price} data={data} />
            {!!price && <div className="pie-info">
              <span>32%</span>
              <p>{price}</p>
            </div>}
          </div>
        </div>
        <div>
          <CheckItem />
          <CheckItem />
          <CheckItem />
          <CheckItem />
        </div>
      </div>
    </div>
  )
}

export default Circle