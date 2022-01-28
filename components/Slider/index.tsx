import { FC } from "react";

const Slider: FC = ({children}) => {
  return (
    <div uk-slider="">
      <div className="uk-position-relative">

        <div className="uk-slider-container">
          <ul className="uk-slider-items uk-child-width-1-4 uk-grid">
            {children}
          </ul>
        </div>

        <a className="uk-position-center-left-out" href="#" uk-slider-item="previous">
          <img src="/assets/angle-left.svg" uk-svg="" />
        </a>
        <a className="uk-position-center-right-out" href="#" uk-slider-item="next">
          <img src="/assets/angle-right.svg" uk-svg="" />
        </a>
      </div>

    </div>
  )
}

export default Slider