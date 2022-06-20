import { FC } from "react"

import t from '../../data/translations.json'

const NavContent: FC = () => {
  return (
    <nav className="nav-in-content">
      <ul>
        <li><a href="">{t.doctors}</a></li>
        <li><a href="">{t.services}</a></li>
        <li><a href="">{t.reviews}</a></li>
        <li><a href="">{t.priceList}</a></li>
        <li><a href="">{t.photos}</a></li>
      </ul>
    </nav>
  )
}

export default NavContent