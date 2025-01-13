import Level from "../level/Leve";
import P from "../text/p/P";
import "./languageSkills.scss";

const LanguageSkills = () => {

  return (
    <div className="sContainer">
    <P bold={true} colorize={true} >OTHER SKILLS</P>
    <div className="skills">
      <Level levelPar={100} title={"BE &nbsp;&nbsp;Bengali Native Language"}  clr={{backgroundColor: "#6CC04A"}} />
      <Level levelPar={50} title={"U.S E &nbsp;&nbsp;English Intermediate"}  clr={{backgroundColor: "#242938"}} />
      <Level levelPar={95} title={"HI &nbsp;&nbsp;Hindi Fluent"}  clr={{backgroundColor: "#12924F"}} />
      <Level levelPar={95} title={"UR &nbsp;&nbsp;Pakistan Urdu Fluent"}  clr={{background: "linear-gradient(112deg, #F24E1E, #F96040, #CD5D9F, #748CCF, #0ACF83)"}} />
    </div>
  </div>
  )
}

export default LanguageSkills;