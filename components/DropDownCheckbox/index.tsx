import { FC } from "react"

const DropDownCheckbox: FC = () => {
  return (
    <div className="dropdown-checkbox">
      <input id="someId" type="checkbox" />
      <label htmlFor="someId">Офтальмология <img src="/assets/check.svg" alt="" uk-svg="" /></label>
    </div>
  )
}

export default DropDownCheckbox