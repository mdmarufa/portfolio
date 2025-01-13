import PrimaryBtn from "../buttons/primaryBtn/PrimaryBtn";
import H from "../text/header/H";
import P from "../text/p/P";
import myImage from '../../assets/imgs/myImage.jpg'

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <P bold={true} >Welcome to my Portfolio</P>
        <H>Hi I'm</H>
        <H colorize={true}>Md Maruf Ali</H>
        <H>Full Stack Developer</H>
        <P>
          Passionate MERN Stack Developer specializing in crafting dynamic,
          responsive full-stack web solutions. Let's collaborate to bring your
          vision to life!
        </P>

        <div className="leftBtns">
          <a href="#contact">
          <PrimaryBtn
            title={"&nbsp;&nbsp;Hire me&nbsp;&nbsp;"}
            fill={true}
            shadow={true}
          /></a>
          <a href="#aboutMe">
          <PrimaryBtn title={"About me &nbsp; &#x21af;"} />
					</a>
          </div>
      </div>
      <div className="right">
        <img src={myImage} />
      </div>
    </div>
  );
};

export default Hero;
