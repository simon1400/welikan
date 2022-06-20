import {FC} from 'react'
import t from '../../data/translations.json'

const Select: FC = () => {
  return (
    <div className="uk-inline select">
      <button type="button">{t.typeInstitution} <img src="/assets/angle-down.svg" alt="Angle down" uk-svg="" /></button>
      <div className="dropdown-select" uk-dropdown="mode: click; pos: bottom-justify; offset: 3">
        <ul className="uk-nav uk-dropdown-nav">
          <li><a href="/asd">Клиника</a></li>
          <li><a href="/asd">Лаборатория <img src="/assets/check.svg" alt="Check" uk-svg="" /></a></li>
          <li><a href="/asd">Другое учреждение</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Select