import { FC, useEffect, useState } from "react"
import Link from 'next/link'
import SidebarItemProps from "../../interfaces/Sidebar"
import { useRouter } from "next/router"

interface SidebarItemComponentsProps {
  data: SidebarItemProps
}

const SidebarItem: FC<SidebarItemComponentsProps> = ({
  data
}) => {

  const router = useRouter()

  const [active, setActive] = useState(false)

  useEffect(() => {
    if(router.asPath === data.link){
      setActive(true)
    }
  }, [router])

  return (
    <Link href={data.link}>
      <a  className={`sidebar-item${active ? " active" : ''}`}>
        <div className="icon">
          <img src={data.icon} alt={data.name} uk-svg="" />
        </div>
        <span>{data.name}</span>
      </a>
    </Link>
  )
}

export default SidebarItem