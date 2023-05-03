import { memo } from "react";
import { ReactComponent as SpaceXLogo } from '../Assets/Images/SpaceX.svg';

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
    <SpaceXLogo
      onClick={handleLogoClick}
      className={`${className} ${onClick ? "cursor-pointer" : ""}`}
    />
  )
};

export default memo(Logo);
