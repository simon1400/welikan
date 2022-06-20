import { FC } from "react";
import Steps from "../Steps";

import t from '../../data/translations.json'

interface StepsProps {
  title: String,
  date: String,
  step: number
}

interface OrderProps {
  content?: String,
  steps?: StepsProps
}

const Order: FC<OrderProps> = ({
  content = false,
  steps = false
}) => {
  return (
    <div className="order">
      <div className="order-top">
        <div>
          <time>20.07.2021</time>
          <h2>Общий анализ крови - Заказ № 365</h2>
        </div>
        <div>
          <a href="" className="button bare small">{t.status}: {t.inProgress}</a>
        </div>
      </div>
      <div className="order-content">
        <Steps />
        {content ?? <div>{content}</div>}
      </div>
    </div>
  )
}

export default Order