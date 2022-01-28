import { FC } from "react"
import Checkbox from "../DropDownCheckbox"

const MultiCheckbox: FC = () => {
  return (
    <div className="multi-checkbox">
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </div>
  )
}

export default MultiCheckbox