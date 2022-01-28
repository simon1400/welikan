import { FC } from "react"

interface ImageShortItemProps {
  img: string
}

const ImageShortItem: FC<ImageShortItemProps> = ({
  img
}) => {
  return (
    <div className="img-short-wrap">
      <img src={img} alt="" />
    </div>
  )
}

export default ImageShortItem