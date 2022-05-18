import { useQuery } from '@apollo/client'
import {FC} from 'react'
import { NavigationLinks } from '../../interfaces/page'
import { navigationQuery } from '../../queries/navigation'

interface FooterProps {
  links: NavigationLinks | undefined
}



const Footer: FC<FooterProps> = () => {

  const {data, loading, error} = useQuery(navigationQuery)

  if(loading || data === undefined) {
    return null
  }

  console.log('*footerData', data);
  // const footerNav = data.navigation.data.attributes



  const seoLinks = data.navigation.data.attributes.footerSeoLinks;
  const menuLinks = data.navigation.data.attributes.menuLinks;
  const socLinks =  data.navigation.data.attributes.footerIconLinks;

  return (
    <footer>
      <div className="uk-container">
        <div className="uk-grid uk-child-width-1-4" uk-grid="">
          <div>
            <div className="logo">
              <img src="/assets/logo-foot.png" alt="" />
            </div>
            <ul>
              { seoLinks?.map((item, index) =>
                <li key={index}><a href={item.link}>{item.label}</a></li>
              )}
            </ul>
          </div>

          { menuLinks?.map((item, index) =>
            <div key={`menu-${index+1}`}>
              <nav>
                <ul>
                  <li>{item.menuTitle}</li>
                  { item.links.map((item, index) =>
                    <li key={`link-${index+1}`}><a href={item.link}>{item.label}</a></li>
                  )}
                </ul>
              </nav>
            </div>
          )}

          <div>
            <nav className="soc-nav">
              <ul>
              { socLinks?.map((item, index) =>
                <li key={index} title={item.label}>
                  <a href={item.link}>
                    <img src={item.iconLink} alt={item.label} uk-svg="" />
                  </a>
                </li>
              )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer