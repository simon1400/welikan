import { FC } from "react"
import Step1 from "../../../../components/Modals/Auth/SingUp/Step1"
import Step2 from "../../../../components/Modals/Auth/SingUp/Step2"
import Step3 from "../../../../components/Modals/Auth/SingUp/Step3"
import TitleAuth from "../../../../components/Modals/Title"
import ModalClose from "../../../../components/Modals/Close"

const SingUpModal: FC = () => {
  return(
    <div id="modal-singup" className="auth-modal xsmall-modal uk-flex-top" uk-modal="">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <ModalClose />
        <TitleAuth title="Регистрация" subTitle="Шаг 1/3" />
        {/* <Step1 /> */}
        {/* <Step2 /> */}
        <Step3 />
        <div className="footer-modal">
          <a href="" className="button">Далее</a>
        </div>
      </div>
    </div>
  )
}

export default SingUpModal