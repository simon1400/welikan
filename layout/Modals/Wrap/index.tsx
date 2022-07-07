import { FC, ReactChild } from "react"
import ModalClose from "../../../components/Modals/Close"

interface WrapModalProps {
  size?: string,
  children: ReactChild[] | ReactChild,
  footer?: ReactChild[] | ReactChild,
  id: string,
  className?: string
}

const WrapModal: FC<WrapModalProps> = ({
  className = '',
  size = "",
  children,
  id,
  footer = false
}) => {
  return(
    <div id={id} className={`uk-modal uk-flex-top ${className} ${size}`} uk-modal="">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <ModalClose />
        {children}
        {footer && <div className="footer-modal">
          {footer}
        </div>}
      </div>
    </div>
  )
}

export default WrapModal