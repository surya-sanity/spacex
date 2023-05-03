import { memo } from "react";
import SpaceXLogo from "../Assets/Images/logo.png";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo = (props: LogoProps) => {
  //default width is provided below, can be overrided by props;
  const { className = "w-52", onClick } = props;

  const handleLogoClick = () => {
    onClick && onClick();
  };

  return (
    <img
      onClick={handleLogoClick}
      src={SpaceXLogo}
      alt="SpaceX"
      className={`${className} ${onClick ? "cursor-pointer" : ""}`}
    />
  );
};

export default memo(Logo);
