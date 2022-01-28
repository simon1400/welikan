import { FC } from "react"

const Breadcrumbs: FC = () => {
  return (
    <div className="breadcrumbs">
      <ul className="uk-breadcrumb">
        <li><a href="#">Главная</a></li>
        <li><a href="#">Клиника Нова</a></li>
        <li><span>Акции</span></li>
      </ul>
    </div>
  )
}

export default Breadcrumbs