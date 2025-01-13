import MongodbImg from "../../assets/imgs/svg/MongoDB.svg";
import reactjsImg from "../../assets/imgs/svg/reactjs.svg";
import NodejsImg from "../../assets/imgs/svg/NodeJS.svg";
import expressjsImg from "../../assets/imgs/svg/expressjs.svg";

import { useState, use } from "react";
import DataContext from "../../context/DataContext";

import "./software.scss";

const Software = () => {

  const {darkMode} = use(DataContext).data.theme;

  return (
    <div className={`software ${darkMode ? "dm" : ""}`}>
      <div className="imgContainer">
        <img src={MongodbImg} />
      </div>
      <div className="imgContainer">
        <img src={reactjsImg} />
      </div>
      <div className="imgContainer">
        <img src={NodejsImg} />
      </div>
      <div className="imgContainer">
        <img src={expressjsImg} />
      </div>
    </div>
  );
};

export default Software;
