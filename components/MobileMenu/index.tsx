import { FC } from "react"

interface MobileMenuProps {
  show: boolean
}

const MobileMenu: FC<MobileMenuProps> = ({
  show
}) => {
  return(
    <div className={`mobile-menu${show ? ' active-menu' : ''}`}>
      <nav>
        <ul className="menu">
          <li><a href="">Пункт меню</a></li>
          <li><a href="">Пункт меню</a></li>
          <li><a href="">Пункт меню</a></li>
          <li><a href="">Пункт меню</a></li>
          <li><a href="">Пункт меню</a></li>
          <li><a href="">Пункт меню</a></li>
        </ul>
        <ul className="info-menu">
          <li><a href="">8 (800) 999 99 99</a></li>
          <li><a href="">Заказать звонок</a></li>
        </ul>
        <ul className="soc-nav">
          <li><a href=""><img src="/assets/twitter.svg" alt="" uk-svg="" /></a></li>
          <li><a href=""><img src="/assets/facebook.svg" alt="" uk-svg="" /></a></li>
          <li><a href=""><img src="/assets/github.svg" alt="" uk-svg="" /></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu