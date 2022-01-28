import { FC } from "react"

interface NumberBox {
  icon: string,
  number: string,
  text: string
}

const NumberBox: FC<NumberBox> = ({
  icon,
  number,
  text
}) => {
  return(
    <div className="number-box">
      <div>
        <img src={icon} alt={text} uk-svg="" />
        <span>{number}</span>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default NumberBox