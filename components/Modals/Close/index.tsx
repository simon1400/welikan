import { FC } from "react"
import { useGlobalState } from "../../../context/dataStateContext";

const ModalClose: FC = () => {

  const { setState } = useGlobalState();

  return (
    <div className="modal-close" onClick={() => setState({modal: ''})}>
      <img src="/assets/times.svg" alt="Close modal icon" uk-svg="" />
    </div>
  )
}

export default ModalClose