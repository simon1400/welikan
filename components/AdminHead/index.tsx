import { ChangeEvent, FC, useState } from "react"
import Input from "../Input"

import t from '../../data/translations.json'

const AdminHead: FC = () => {

  const [search, setSearch] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="admin-head">
      <div>
        <div>
          <h1>{t.info}</h1>
        </div>
        <div>
          <Input 
            placeholder="Поиск..."
            value={search}
            img="/assets/search.svg"
            radius
            small
            onChange={e => handleChange(e)}
            name="search"/>
        </div>
      </div>
      <div className="login-control">
        <div className="notification-icon">
          <img src="/assets/bell.svg" alt="" uk-svg="" />
        </div>
        <div className="login-info">
          <div className="login-logo">
            <img src="/assets/logo-login.png" alt="" />
          </div>
          <div>
            <span>Клиника “Нова”</span>
            <a href="">{t.logOut}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHead