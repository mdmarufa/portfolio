import { useState, useRef, use } from "react";
import "./level.scss";
import DataContext from "../../context/DataContext";

const Level = ({ levelPar, logo, clr, title }) => {
  const [level, setLevel] = useState(0);
  const [isLeveling, setLeveling ] = useState(false);
  const margin = 0;
  const levelRef = useRef()
  const {scrollHeight, currentScroll, containerHeight} = use(DataContext).data.scroll;

  const hanldeLevel = (isd) => {
    if (isd) {
        let x = setInterval(() => {
          setLevel((prevLevel) => {
            if (prevLevel < levelPar) {
              return prevLevel + 1;
            } else {
              clearInterval(x);
              return prevLevel;
            }
          });
        }, (2000 / levelPar))
    }
  };

  if((levelRef.current?.offsetTop + margin) < (currentScroll + containerHeight) && !isLeveling) {
    setLeveling(prevS => {
      hanldeLevel(!prevS)
      return true;
    });
  }

  return (
    <div className="level" ref={levelRef}>
      <div className="header">
        {logo && <img src={logo} alt="" />}
        <span className="semiBold">{title} &nbsp;&nbsp;</span>
        {logo && <span className="semiBold">{level}%</span>}
      </div>
      <div className="ind" style={{ "--level": `${levelPar}` }}>
        <div className={`dp ${level ? "dpf" : ""}`} style={clr}></div>
      </div>
    </div>
  );
};

export default Level;
