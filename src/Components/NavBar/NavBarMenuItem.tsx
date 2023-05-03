import { NavLink, useLocation } from "react-router-dom";
import { MenuItemType } from "./NavBarMenuItems";

interface NavBarMenuItemPropType {
  menuItem: MenuItemType
}


const NavBarMenuItem = (props: NavBarMenuItemPropType) => {
  const { menuItem } = props;
  const { pathname } = useLocation()

  const menuItemStyle = {
    navLink: "text-gray-400",
    active: "underline underline-offset-[0.5rem] text-white font-semibold",
  }

  const isActive = pathname === menuItem.route

  return (
    <NavLink
      to={menuItem.route}
      className={({ isActive }) => `${isActive ? menuItemStyle.active : menuItemStyle.navLink} group transition duration-300`}>
      {menuItem.name}

      {/* show the hover underline animation only if the item is not active */}
      {!isActive && <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-white mt-[0.2rem] m-auto"></span>}
    </NavLink>
  )
}

export default NavBarMenuItem