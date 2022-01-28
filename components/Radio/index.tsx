import { FC } from "react"

const Radio: FC = () => {
  return (
    <div className="radio uk-form-controls">
      <label>
        <input className="uk-radio" type="radio" name="radio1" />
        Option 01
      </label>
    </div>
  )
}

export default Radio