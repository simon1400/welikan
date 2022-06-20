import { FC } from "react"
import Radio from "../../../../Radio"
import ContainerAuth from "../../Container"

import t from '../../../../../data/translations.json'

const Step1: FC = () => {
  return (
    <ContainerAuth title={t.roleUser}>
      <ul>
        <li><Radio /></li>
        <li><Radio /></li>
        <li><Radio /></li>
      </ul>
    </ContainerAuth>
  )
}

export default Step1