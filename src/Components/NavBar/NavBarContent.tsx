import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as MenuIcon } from '../../Assets/Icons/menu.svg';
import Logo from "../Logo";
import NavBarMenu from "./NavBarMenuItems";

const NavBarContent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  //close navbar if navigation in done on responsive layout and if its open
  useEffect(() => {
    if (pathname && navbarOpen) {
      setNavbarOpen(false);
    }
  }, [pathname])

  //navigate to landing page on clicking logo
  const handleLogoClick = () => { setNavbarOpen(false); navigate("/") };

  const handleMenuIconClick = () => { setNavbarOpen(!navbarOpen) }

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
            onClick={handleMenuIconClick}>
            <MenuIcon />
          </button>
        </div>
        <NavBarMenu navbarOpen={navbarOpen} />
      </div>
    </div>
  );
};

export default NavBarContent;
