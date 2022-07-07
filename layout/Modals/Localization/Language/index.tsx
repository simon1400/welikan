import { FC } from "react"
import ModalClose from "../../../../components/Modals/Close"
import TitleAuth from "../../../../components/Modals/Title"

const Language: FC = () => {
  return (
    <div id="modal-local" className="uk-flex-top uk-modal" uk-modal="">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <ModalClose />
        <TitleAuth title="Выбор языка" search />
        <div className="content-modal">
          <ul>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
            <li><a href=""><span>AZ</span>Азербайджанский	</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Language