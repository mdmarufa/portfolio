import { use } from "react";
import DataContext from "../../context/DataContext";

import "./list.scss";

const List = ({ title, des, m, typeNone }) => {
  const { darkMode } = use(DataContext).data.theme;

  return (
    <div className="list" style={{ marginLeft: `${m}px` }} >
      {!typeNone && <div className={`listType ${darkMode ? "" : "dm"}`}></div>}
      <p className="listp">
        {title && <span className="title">{title} &nbsp;</span>}
        <span className="des">{des}</span>
      </p>
    </div>
  );
};

export default List;
