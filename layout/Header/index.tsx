import {FC, useState} from 'react'
import Link from 'next/link'
import MobileMenu from '../../components/MobileMenu'
import Hamburger from '../../components/Hamburger'
import topNavQuery from '../../queries/topNav'
import { useQuery } from '@apollo/client'
import t from '../../data//translations.json'
import { useGlobalState } from '../../context/dataStateContext'

const Header: FC = () => {

  const { setState } = useGlobalState();
  const { loading, data } = useQuery(topNavQuery);
  const [menu, setMenu] = useState(false)

  if(loading) {
    return null
  }

  const topNav = data.global.data.attributes.topNav
  const phone = data.global.data.attributes.phone

  const handleModal = (e: any, modal: string) => {
    e.preventDefault()
    setState({modal})
  }

  return (
    <header>
      <div className="uk-container">
        <div className="header-wrap">
          <a href="/" className="logo">
            <img src="/assets/logo.png" alt="" />
          </a>
          <nav className="desktopMenu">
            <ul className="uk-visible@m">
              {topNav.map((item: any, index: number) => <li key={index}>
                <Link href={item.url}>
                  <a>{item.title}</a>
                </Link>
              </li>)}
            </ul>
            <div><a href="/ads" className="button accent">{t.orderService}</a></div>
            <div className="contact-top uk-visible@m">
              <a href={`tel:${phone}`} className="button link">{phone}</a>
              <a href="/" onClick={e => handleModal(e, 'call')}>{t.orderCall}</a>
            </div>
          </nav>
          <div className="control-top">
            <ul>
              <li>
                <a href="#modal-login" className="button link" uk-toggle="">
                  <img src="/assets/user-alt.svg" alt="" uk-svg="" />
                  <span className="uk-visible@m">{t.login}</span>
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