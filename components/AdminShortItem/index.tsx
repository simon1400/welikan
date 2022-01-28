import { FC } from "react"

const DoctorItem: FC = () => {
  return (
    <div className="doctor-item">
      <h2>Врачева Юлия Алексеевна</h2>
      <div className="img-wrap">
        <img src="/assets/stock-item.jpg" alt="" />
      </div>
    </div>
  )
}

export default DoctorItem