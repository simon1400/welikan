import { FC } from "react"

const Certificates: FC = () => {
  return (
    <div className="certificat">
      <div uk-lightbox="">
        <a href="/assets/certificat.jpg">
          <img src="/assets/certificat.jpg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Certificates