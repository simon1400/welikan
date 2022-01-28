import { FC } from "react"

const CheckItem: FC = () => {
  return (
    <div className="check-stats-item">
      <label>
        <input type="checkbox" hidden />
        <div></div>
        <div className="color-check"></div>
        <span>5*</span>
      </label>
    </div>
  )
}

export default CheckItem