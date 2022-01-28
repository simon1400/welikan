import { FC } from "react"

const Steps: FC = () => {
  return (
    <div className="steps">
      <div className="step">
        <div>
          <b>Заказ создан</b>
          <time>20.07.2021</time>
        </div>
        <div className="number">
          <span>1</span>
        </div>
      </div>
      <div className="step">
        <div>
          <b>Заказ создан</b>
          <time>20.07.2021</time>
        </div>
        <div className="number">
          <span>2</span>
        </div>
      </div>
      <div className="step">
        <div>
          <b>Заказ создан</b>
          <time>20.07.2021</time>
        </div>
        <div className="number">
          <span>3</span>
        </div>
      </div>
        
    </div>
  )
}

export default Steps