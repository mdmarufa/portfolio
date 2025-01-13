import { use } from "react";
import DataContext from "../../context/DataContext";

import "./scrollIndicator.scss";

const ScrollIndicator = () => {

  const dataContext = use(DataContext);
  const scrolled = (dataContext.data.scroll.currentScroll / dataContext.data.scroll.scrollHeight) * 100;


  return <div className="scrollInd" style={{ "--scrollY": scrolled }}></div>;
};

export default ScrollIndicator;
