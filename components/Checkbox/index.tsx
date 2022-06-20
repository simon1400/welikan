import { FC } from "react";
import t from '../../data/translations.json'

const Checkbox: FC = () => {
  return(
    <div className="checkbox">
      <label>
        <input className="uk-checkbox" type="checkbox" />
        {t.agreePrivacy}
      </label>
    </div>
  )
}

export default Checkbox