import List from "../list/List";
import P from "../text/p/P";
import "./textInfo.scss";

const TextInfo = () => {
  return (
    <div className="textInfo">
      <div id="aboutMe">    <P bold={true} colorize={true}>
      ABOUT ME
    </P></div>
    <P>
      Hi, I'm <span className="colorize"> Md Maruf Ali</span>, a
      passionate and experienced MERN Stack developer based in Dhaka,
      Bangladesh. With a strong foundation in web development, I
      specialize in building dynamic, scalable, and secure web
      applications tailored to meet client needs. From creating e-commerce
      platforms and social media applications to developing custom web
      tools, I focus on delivering solutions that are not only functional
      but also visually appealing and user-friendly. My expertise spans
      frontend and backend development, database management, and API
      integration, leveraging the full power of the MERN stack. I thrive
      on solving complex challenges and turning ideas into reality, always
      striving for excellence in every project. Whether you're an
      individual, a startup, or an established business, I'm here to help
      you bring your vision to life
    </P>

    <br />

    <div id="services">
      <P bold={true} colorize={true}>SERVICES</P>
    </div>
    <P>
      I specialize in delivering comprehensive solutions powered by the
      MERN stack (MongoDB, Express.js, React, Node.js). My expertise spans
      a wide range of services, including
    </P>

    <br />
    <br />
    <List m={20} title="Frontend and Backend Development: " des={"Building intuitive interfaces and scalable server-side solutions."} />
    <List m={20} title="Database Management:" des={"Ensuring efficient and reliable data handling using MongoDB."} />
    <List m={20} title="API Development and Integration:" des={" Designing robust APIs to seamlessly connect your applications."} />
    <List m={20} title="Custom Application Development:" des={"Crafting bespoke solutions that align with your unique requirements."} />
    <List m={20} title="Ecommerce Development:" des={"Creating high-performing online stores with secure payment integrations."} />
    <List m={20} title="CMS Development:" des={"Building custom content management systems tailored to your needs."} />
    <List m={20} title="MERN Stack Consulting:" des={"Providing expert guidance for optimizing and scaling your projects."} />
    <List m={20} title="MERN Stack Maintenance and Support:" des={"Ensuring your applications run smoothly with ongoing updates and issue resolution and etc..."} />

    <br />
    <div id="contactInfo">
    <P bold={true} colorize={true}>CONTACT INFO</P>
    <List m={20} title="Email:" des={"md.maruf.ali.7768@gmail.com"} />
    <List m={20} title="Phone:" des={"01747335720 (Call, WhatsApp)"} />
      {/*<List m={20} title="Upwork:" des={"https://github.com/mdMarufAli7768"} />*/}
    <List m={20} title="Location:" des={"Dhaka, Bangladesh"} />
    <List m={20} title="Facebook:" des={"https://www.facebook.com/mdmaruffr"} />
    </div>
  </div> 
  )
}

export default TextInfo;
