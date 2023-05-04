import { useSelector } from 'react-redux';
import { ReactComponent as Dark } from '../../Assets/Icons/moon.svg';
import { ReactComponent as Light } from '../../Assets/Icons/sun.svg';
import useDarkMode from '../../Hooks/useDarkMode';
import { getDarkMode } from '../../Store/Reducers/UtilReducer';

interface DarkModeSwitchPropType {
  className?: string;
}

const DarkModeSwitch = (props: DarkModeSwitchPropType) => {
  const { className } = props;

  const { colorTheme, setTheme } = useDarkMode()
  const darkMode = useSelector(getDarkMode)

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  }

  return (
    <div className={`${className}`}>
      <div
        className={`p-2 ${darkMode ? 'hover:bg-white' : 'hover:bg-gray-400'}  bg-opacity-20 hover:bg-opacity-10 cursor-pointer rounded-full`}
        onClick={toggleDarkMode}>
        {darkMode ? <Light /> : <Dark />}
      </div>
    </div>
  )
}

export default DarkModeSwitch