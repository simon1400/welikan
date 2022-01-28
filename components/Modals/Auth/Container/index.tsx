import { FC, ReactChild } from "react";

interface ContainerAuthProps {
  children: ReactChild | ReactChild[],
  title?: string,
  className?: string
}

const ContainerAuth: FC<ContainerAuthProps> = ({
  children,
  title,
  className = ''
}) => {
  return (
    <div className={className}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}

export default ContainerAuth