import { use, useEffect } from "react";
import DataContext from "./context/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import ThemeToggleButton from "./components/themeToggleButton/ThemeToggleButton";
import Hero from "./components/hero/Hero";
import Software from "./components/software/Software";
import TextInfo from "./components/textInfo/TextInfo";
import ScrollIndicator from "./components/scrollIndicator/ScrollIndicator";
import SContainer from "./components/sContainer/SContainer";
import LanguageSkills from "./components/languageSkills/LanguageSkills";
import GoTopButton from "./components/buttons/goTopButton/GoTopButton";
import scrollHandler from "./handlers/scroll.handle";
import Procedure from "./components/procedure/Procedure";
import ToggleLinks from "./components/buttons/toggleLinks/ToggleLinks";
import Footer from "./components/footer/Footer";

import "./App.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  const dataContext = use(DataContext);
  const handleScroll = (e) => scrollHandler(e, dataContext);
  const handleBodyClick = (e) => {
    if (
      dataContext.data.button.src &&
      !dataContext.data.button.src?.contains(e.target) &&
      dataContext.data.button.linksActive
    ) {
      dataContext.updateData({
        ...dataContext.data,
        button: { ...dataContext.data.button, linksActive: false },
      });
    }
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("theme");
    if (darkMode != null && darkMode != undefined) {
      dataContext.updateData({
        ...dataContext.data,
        theme: { darkMode: darkMode === "true" ? true : false },
      });
    }
  }, []);

  return (
      <div
        className={`${
          dataContext.data.theme.darkMode ? "darkApp" : "lightApp"
        }`}
        onClick={handleBodyClick}
      >
        {dataContext.data.theme.darkMode ? (
          <meta name="theme-color" content="#222222" />
        ) : (
          <meta name="theme-color" content="#f1fcf1" />
        )}
        <title>Md Maruf Ali Portfolio.</title>

        <Header />
        <ScrollIndicator />
        <GoTopButton />
        <ThemeToggleButton />
        <ToggleLinks />

        <main onScroll={handleScroll}>
          <div className="xM">
            <Hero />
            <Software />
            <TextInfo />
            <SContainer />
            <LanguageSkills />

            <Procedure />
          </div>

          <Footer />
        </main>
      </div>
  );
}

export default App;
