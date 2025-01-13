import P from '../text/p/P';

import PrimaryLogo from "../logo/primaryLogo/PrimaryLogo";
import facebook from '../../assets/imgs/svg/facebook.svg';
import whatsapp from '../../assets/imgs/svg/whatsapp.svg';
import email from '../../assets/imgs/svg/email.svg';

import "./footer.scss";

const Footer = () => {

  return (
    <footer>
    <div className="xM">
    <div className="left">
      <PrimaryLogo />
      <span className="copy">&copy; Copyright 2025. All Rights Reserved.</span>
    </div>
    <div className="right">
      <P>FOLLOW ME</P>
      <div className="fIcon">
        <img src={facebook} />
      </div>
      <div className="fIcon">
        <img src={whatsapp} />
      </div>
      <div className="fIcon">
        <img src={email} />
      </div>
    </div>
    </div>
  </footer>
  )
}

export default Footer;