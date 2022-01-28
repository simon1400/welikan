import { FC } from "react";

interface TarifItemProps {
  blue?: boolean,
  yellow?: boolean
}

const TariffItem: FC<TarifItemProps> = ({
  blue,
  yellow
}) => {
  return(
    <div className={`tariff-item${blue ? ' blue' : yellow ? ' yellow' : ''}`}>
      <div className="tariff-content">
        <div className="head">
          <div>
            <span>Ваш текущий тариф</span>
            <h2>Бесплатный тариф</h2>
          </div>
          <div>
            <label htmlFor="" className="uk-label bare">0 руб.</label>
          </div>
        </div>
        <div>
          <p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Mauris venenatis tellus id nulla aliquet aliquam.</li>
              <li>Mauris condimentum in justo ut mollis.</li>
              <li>Nunc id elementum dolor, tempus tincidunt odio.</li>
            </ul>
          </p>
        </div>
        <div>
          <a href="" className="button big active">активен</a>
        </div>
      </div>
    </div>
  )
}

export default TariffItem