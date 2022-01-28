import { FC } from "react"

interface HamburgerProps {
  menu: boolean;
  handle: (menu: boolean) => void
}

const Hamburger: FC<HamburgerProps> = ({
  menu,
  handle
}) => {
  return(
    <button className={`hamburger hamburger--spring${menu ? ' is-active' : ''}`} type="button" onClick={() => handle(!menu)}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}

export default Hamburger