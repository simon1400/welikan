import {FC, useState} from 'react'
import Link from 'next/link'
import MobileMenu from '../../components/MobileMenu'
import Hamburger from '../../components/Hamburger'

const Header: FC = () => {

  const [menu, setMenu] = useState(false)

  return (
    <header>
      <div className="uk-container">
        <div className="header-wrap">
          <Link href="/">
            <a className="logo">
              <img src="/assets/logo.png" alt="" />
            </a>
          </Link>
          <nav className="desktopMenu">
            <ul className="uk-visible@m">
              <li><Link href="/admin/123"><a>Больница</a></Link></li>
              {/* <li><Link href="/client/123"><a>Клиент</a></Link></li> */}
              <li><Link href="/company"><a>Комп</a></Link></li>
              <li><Link href="/doctor"><a>Док</a></Link></li>
              <li><Link href="/proposing"><a>Предл</a></Link></li>
              <li><Link href="/search"><a>Поиск</a></Link></li>
              {/* <li><Link href="/stock"><a>Акции</a></Link></li> */}
            </ul>
            <div><a href="/ad" className="button accent">Заказать услугу</a></div>
            <div className="contact-top uk-visible@m">
              <a href="/asd" className="button link">8 (800) 999 99 99</a>
              <a href="/asd">Заказать звонок</a>
            </div>
          </nav>
          <div className="control-top">
            <ul>
              <li>
                <a href="#modal-login" className="button link" uk-toggle="">
                  <img src="/assets/user-alt.svg" alt="" uk-svg="" />
                  <span className="uk-visible@m">войти</span>
                </a>
              </li>
              <li><a href="#modal-local" uk-toggle="">RU</a></li>
              <li className="uk-visible@m">
                <a href="#modal-local" uk-toggle="">
                  <img src="/assets/russia.png" alt="" />
                  Россия
                </a>
              </li>
              <li className="uk-hidden@m">
                <Hamburger handle={setMenu} menu={menu} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MobileMenu show={menu}/>
    </header>
  )
}

export default Header