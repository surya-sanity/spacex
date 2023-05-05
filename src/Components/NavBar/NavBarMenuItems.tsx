import HistoryPage from "../../Screens/HistoryPage/HistoryPage";
import LaunchesPage from "../../Screens/LaunchesPage/LaunchesPage";
import RocketsPage from "../../Screens/RocketsPage/RocketsPage";
import NavBarMenuItem from "./NavBarMenuItem";

export interface MenuItemType {
  name: string;
  route: string;
  component: () => JSX.Element;
}

interface NavBarMenuPropsType {
  navbarOpen: boolean
}

//provided the menubar items as an array.
const menuItemsInitialData: MenuItemType[] = [
  {
    name: "Launches",
    route: "/launches",
    component: LaunchesPage,
  },
  {
    name: "History",
    route: "/history",
    component: HistoryPage,
  },
  {
    name: "Rockets",
    route: "/rockets",
    component: RocketsPage,
  },

];

const NavBarMenu = (props: NavBarMenuPropsType) => {
  const { navbarOpen } = props;

  return (
    <div className={"lg:flex flex-grow items-center mt-5 lg:mt-0" + (navbarOpen ? " flex" : " hidden")}>
      <div className="flex flex-col gap-x-16 gap-y-5 lg:flex-row lg:mt-0 lg:mx-auto pl-5">
        {menuItemsInitialData.map((menuItem, index) => <NavBarMenuItem menuItem={menuItem} key={index.toString()} />)}
      </div>
    </div>
  )
}

export default NavBarMenu