import { Outlet } from 'react-router-dom'
import NavBarContent from './NavBarContent'

const NavBar = () => {

  return (
    <div className="flex flex-1 flex-col">
      <NavBarContent />
      <Outlet />
    </div>
  )
}

export default NavBar