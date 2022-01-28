import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import SidebarItem from "../../components/SidebarItem"
import clientAdminRoutes from "../../data/routes/clientAdmin"
import medicAdminRoutes from "../../data/routes/medicAdmin"
import SidebarItemProps from "../../interfaces/Sidebar"

interface AdminSidebarProps {
  nav: SidebarItemProps[]
}

const AdminSidebar: FC = () => {

  const router = useRouter()

  const [nav, setNav] = useState<SidebarItemProps[]>([])

  useEffect(() => {
    if(router.route.indexOf("client") >= 0){
      setNav(clientAdminRoutes)
    }else{
      setNav(medicAdminRoutes)
    }
  }, [router])
  

  return (
    <aside className="admin-sidebar">
      <div className="menu-fix">
        {nav.length && nav.map((item: SidebarItemProps, index: number) => <SidebarItem key={index} data={item} />)}
      </div>
    </aside>
  )
}

export default AdminSidebar