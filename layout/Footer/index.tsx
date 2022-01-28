import {FC} from 'react'

const Footer: FC = () => {
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
          <div>
            <nav>
              <ul>
                <li>Menu Title</li>
                <li><a href="">Text Texttext</a></li>
                <li><a href="">Text Texttext</a></li>
                <li><a href="">Text Texttext</a></li>
                <li><a href="">Text Texttext</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul>
                <li>Menu Title</li>
                <li><a href="">Text Texttext</a></li>
                <li><a href="">Text Texttext</a></li>
                <li><a href="">Text Texttext</a></li>
                <li><a href="">Text Texttext</a></li>
              </ul>
            </nav>
          </div>
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