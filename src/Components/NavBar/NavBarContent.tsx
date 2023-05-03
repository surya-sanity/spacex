import { NavLink, useLocation, useNavigate } from "react-router-dom";
import HistoryPage from "../../Screens/HistoryPage";
import LaunchesPage from "../../Screens/LaunchesPage";
import RocketsPage from "../../Screens/RocketsPage";
import Logo from "../Logo";
import React, { useEffect } from "react";
import { ReactComponent as MenuIcon } from '../../Assets/Icons/menu.svg';

interface MenuItemType {
  name: string;
  route: string;
  component: () => JSX.Element;
}

const menuItemsInitialData: MenuItemType[] = [
  {
    name: "History",
    route: "/history",
    component: HistoryPage,
  },
  {
    name: "Launches",
    route: "/launches",
    component: LaunchesPage,
  },
  {
    name: "Rockets",
    route: "/rockets",
    component: RocketsPage,
  },
];

const NavBarContent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  //close navbar if navigation in done on responsive layout
  useEffect(() => {
    if (pathname) {
      setNavbarOpen(false);
    }
  }, [pathname])

  const menuItemStyle = {
    navLink: "text-gray-400",
    active: "underline underline-offset-[0.5rem] text-white font-semibold",
  }

  //navigate to landing page on clicking logo
  const handleLogoClick = () => {
    setNavbarOpen(false);
    navigate("/")
  };

  return (
    <div className="sticky top-0">
      <div className="flex flex-wrap items-center justify-between px-5 md:px-20 lg:px-[10%] py-7 relative bg-black">
        <div className="w-full flex justify-between lg:w-full lg:static lg:block lg:justify-start items-center">
          <NavLink to={"/"} className={"absolute"}>
            <Logo onClick={handleLogoClick} className="h-5" />
          </NavLink>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none ml-auto"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <MenuIcon />
          </button>
        </div>

        <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
          <div className="flex flex-col gap-x-16 gap-y-5 mt-5 lg:flex-row lg:mt-0 lg:mx-auto">
            {menuItemsInitialData.map((menuItem, index) => {

              //show the hover underline animation only if the item is not active
              const isActive = pathname === menuItem.route

              return (
                <NavLink
                  key={index.toString()}
                  to={menuItem.route}
                  className={({ isActive }) => `${isActive ? menuItemStyle.active : menuItemStyle.navLink} group transition duration-300`}>
                  {menuItem.name}
                  {!isActive && <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-white mt-[0.2rem] m-auto"></span>}
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>
    </div>

  );
};

export default NavBarContent;
