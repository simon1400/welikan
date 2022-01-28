import { FC } from "react";

const Checkbox: FC = () => {
  return(
    <div className="checkbox">
      <label>
        <input className="uk-checkbox" type="checkbox" />
        Согласен с Политикой конфиденциальности
      </label>
    </div>
  )
}

export default Checkbox