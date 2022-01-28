import { FC } from "react";
import Steps from "../Steps";

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
          <a href="" className="button bare small">Статус: Выполняется</a>
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