import { FC } from "react"

interface StarsProps {
  small?: boolean
}

const Stars: FC<StarsProps> = ({
  small = false
}) => {
  return (
    <div className={`stars${small ? " uk-width-auto" : ""}`}>
      {small && <span>4,5</span>}
      <img src="/assets/star-solid.svg" alt="Star" uk-svg="" />
      {!small && <img src="/assets/star-solid.svg" alt="Star" uk-svg="" />}
      {!small && <img src="/assets/star-solid.svg" alt="Star" uk-svg="" />}
      {!small && <img src="/assets/star-half.svg" alt="Star" uk-svg="" />}
      {!small && <img src="/assets/star.svg" alt="Star" uk-svg="" />}
    </div>
  )
}

export default Stars