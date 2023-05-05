import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as MenuIcon } from '../../Assets/Icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../Assets/Icons/close.svg';
import Logo from "../Logo";
import NavBarMenu from "./NavBarMenuItems";
import DarkModeSwitch from "./DarkModeSwitch";

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

  //navigate to landing page on clicking logo
  const handleLogoClick = () => { setNavbarOpen(false); navigate("/") };

  const handleMenuIconClick = () => { setNavbarOpen(!navbarOpen) }

  return (
    <div className="sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between px-5 lg:px-[5%] py-5 relative bg-light dark:bg-dark">
        <div className="w-full flex justify-between lg:w-full lg:static lg:block lg:justify-start items-center">
          <NavLink to={"/"} className={"absolute"} aria-label="SpaceX-logo" >
            <Logo onClick={handleLogoClick} className="h-7 hover:scale-105 transition-all mx-0" />
          </NavLink>

          <div className="ml-auto flex flex-row items-center gap-x-3 lg:hidden justify-center">
            <DarkModeSwitch />
            <button
              name="menu"
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none flex items-center justify-center"
              type="button"
              onClick={handleMenuIconClick}>
              {!navbarOpen ? <MenuIcon /> : <CloseIcon />}
            </button>
          </div>
        </div>
        <NavBarMenu navbarOpen={navbarOpen} />
        <div className="hidden lg:block ">
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default NavBarContent;
