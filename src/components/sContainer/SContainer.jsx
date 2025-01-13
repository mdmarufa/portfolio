import HTML from "../../assets/imgs/svg/html5.svg";
import CSS from "../../assets/imgs/svg/css3.svg";
import Bootstrap from "../../assets/imgs/svg/bootstrap.svg";
import Sass from "../../assets/imgs/svg/sass.svg";
import JS from "../../assets/imgs/svg/javascript.svg";
import reactJS from "../../assets/imgs/svg/reactjss.svg";
import nodeJS from "../../assets/imgs/svg/Nodejss.svg";
import expressJS from "../../assets/imgs/svg/expressjss.svg";
import mongodb from "../../assets/imgs/svg/Mongodbs.svg";
import figma from "../../assets/imgs/svg/figma.svg";

import P from "../text/p/P";
import Level from "../level/Leve";

import "./sContainer.scss";

const SContainer = () => {
  return (
    <div className="sContainer" id="skills">
    <P bold={true} colorize={true} >TECHNICAL SKILLS</P>
    <div className="skills">
      <Level levelPar={93} title={'HTML5'} logo={HTML} clr={{backgroundColor: "#E44D26"}} />
      <Level levelPar={95} title={"CSS 3"} logo={CSS} clr={{backgroundColor: "#1572B6"}} />
      <Level levelPar={95} title={"Bootstrap"} logo={Bootstrap} clr={{backgroundColor: "#8712FB"}} />
      <Level levelPar={60} title={"SASS"} logo={Sass} clr={{backgroundColor: "#CD6799"}} />
      <Level levelPar={80} title={"JavaScript"} logo={JS} clr={{backgroundColor: "#F7DF1E"}} />
      <Level levelPar={80} title={"React JS"} logo={reactJS} clr={{backgroundColor: "#00D8FF"}} />
      <Level levelPar={40} title={"Node JS"} logo={nodeJS} clr={{backgroundColor: "#6CC04A"}} />
      <Level levelPar={98} title={"Express JS"} logo={expressJS} clr={{backgroundColor: "#242938"}} />
      <Level levelPar={70} title={"MongoDB"} logo={mongodb} clr={{backgroundColor: "#12924F"}} />
      <Level levelPar={85} title={"Figma"} logo={figma} clr={{background: "linear-gradient(112deg, #F24E1E, #F96040, #CD5D9F, #748CCF, #0ACF83)"}} />
    </div>
    </div>
  )
}

export default SContainer;