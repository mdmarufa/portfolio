import { useContext } from "react";
import DataContext from "../../../context/DataContext";

import "./primaryLogo.scss";

const PrimaryLogo = () => {
  const { darkMode } = useContext(DataContext).data.theme;

  return (
    <div className="sd" onClick={() => location.reload()}>
      <a href="#">
      <div className="primaryLogo">
        <div className="symble rounded-circle t-d">P</div>
        <span className={`${darkMode ? "t-d" : "t-w"}`}>Maruf</span>
      </div>
      </a>
    </div>
  );
};

export default PrimaryLogo;
