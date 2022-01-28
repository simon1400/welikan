import { FC } from "react"
import Radio from "../../../../Radio"
import ContainerAuth from "../../Container"

const Step1: FC = () => {
  return (
    <ContainerAuth title="Роль пользователя">
      <ul>
        <li><Radio /></li>
        <li><Radio /></li>
        <li><Radio /></li>
      </ul>
    </ContainerAuth>
  )
}

export default Step1