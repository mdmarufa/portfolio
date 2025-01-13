import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';
import DataContext from '../../context/DataContext';
import { use } from 'react';


import "./themeToggleButton.scss";

const ThemeToggleButton = () => {

  const dataContext = use(DataContext);
  const scrolled = (dataContext.data.scroll.currentScroll / dataContext.data.scroll.scrollHeight) * 100;

  return (
    <button
      className={`boxShadow option toggleTheme ${scrolled >= 99 ? "d-none" : ""}`}
      style={{ "--bottomPos": "50px" }}
      onClick={() =>{
        localStorage.setItem("theme", !dataContext.data.theme.darkMode )
        dataContext.updateData({
          ...dataContext.data,
          theme: { darkMode: !dataContext.data.theme.darkMode },
        })
      }
      }
    >
      {dataContext.data.theme.darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  );
};

export default ThemeToggleButton;
