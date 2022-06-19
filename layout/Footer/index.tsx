import {FC} from 'react'
import { useQuery } from '@apollo/client'
import footerQuery from '../../queries/footer';

const Footer: FC = () => {

  const { loading, error, data } = useQuery(footerQuery);

  if(loading) {
    return null
  }

  const footerNav = data.global.data.attributes.footerNav
  const techLinks = data.global.data.attributes.techLinks

  return (
    <footer>
      <div className="uk-container">
        <div className="uk-grid uk-child-width-1-4" uk-grid="">
          <div>
            <div className="logo">
              <img src="/assets/logo-foot.png" alt="" />
            </div>
            <ul>
              <li><a href="/asd">Условия договора покупателя</a></li>
              <li><a href="/asd">Условия договора предлагающего</a></li>
              <li><a href="/asd">Политика конфиденциальности</a></li>
            </ul>
          </div>
          {footerNav.map((item: any, index: number) => <div key={index}>
            <nav>
              <ul>
                <li>{item.title}</li>
                {item.item.map((itemNav: any, indexNav: number) => <li key={"item-"+indexNav}><a href={itemNav.url}>{itemNav.title}</a></li>)}
              </ul>
            </nav>
          </div>)}
          <div>
            <nav className="soc-nav">
              <ul>
                <li><a href=""><img src="/assets/twitter.svg" alt="" uk-svg="" /></a></li>
                <li><a href=""><img src="/assets/facebook.svg" alt="" uk-svg="" /></a></li>
                <li><a href=""><img src="/assets/github.svg" alt="" uk-svg="" /></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer