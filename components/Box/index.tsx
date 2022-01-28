import { FC, ReactChild } from "react"

interface BoxProps {
  head: string,
  children: ReactChild
}

const Box: FC<BoxProps> = ({
  head,
  children
}) => {
  return (
    <div className="box">
      <h2>{head}</h2>
      {children}
    </div>
  )
} 

export default Box