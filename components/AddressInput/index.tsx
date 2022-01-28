import { FC } from "react"

const AddressInput: FC = () => {
  return (
    <div className="address-input">
      <img src="/assets/pen.svg" alt="Pen" uk-svg="" />
      <span>г. Москва, ул. Маросейка, д.34</span>
      {/* <input type="text" /> */}
      <img src="/assets/times.svg" alt="Times" uk-svg="" />
    </div>
  )
}

export default AddressInput