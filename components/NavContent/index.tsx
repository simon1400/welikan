import { FC } from "react"

const NavContent: FC = () => {
  return (
    <nav className="nav-in-content">
      <ul>
        <li><a href="">врачи</a></li>
        <li><a href="">услуги</a></li>
        <li><a href="">отзывы</a></li>
        <li><a href="">прайс-лист</a></li>
        <li><a href="">фотографии</a></li>
      </ul>
    </nav>
  )
}

export default NavContent