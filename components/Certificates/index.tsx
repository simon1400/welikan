import { FC } from "react"
const APP_API = process.env.APP_API

interface ICertificates {
  image: any
}

const Certificates: FC<ICertificates> = ({
  image
}) => {
  return (
    <div className="certificat">
      <div uk-lightbox="">
        <a href={`${APP_API}${image.url}`}>
          <img src={`${APP_API}${image.url}`} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Certificates