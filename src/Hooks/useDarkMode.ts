import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setDarkMode } from "../Store/Reducers/UtilReducer"

const useDarkMode = () => {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState(localStorage.theme ?? "dark")

  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    const _darkMode = theme === 'dark'

    document.body.style.background = _darkMode ? 'black' : "white"
    //set the global state of darkMode 
    dispatch(setDarkMode(_darkMode))

    localStorage.setItem('theme', theme);

  }, [theme, colorTheme, dispatch])

  return { colorTheme, setTheme }

}

export default useDarkMode