import { FC } from "react"
// import UIkit from 'uikit'

// interface ModalCloseProps {
//   id: string
// }

const ModalClose: FC = () => {

  return (
    <div className="modal-close">
      <img src="/assets/times.svg" alt="Close modal icon" uk-svg="" />
    </div>
  )
}

export default ModalClose