import PrimaryBtn from '../buttons/primaryBtn/PrimaryBtn';
import PrimaryLogo from '../logo/primaryLogo/PrimaryLogo';
import LinkText from '../text/link/LinkText';

import {use} from 'react';
import DataContext from '../../context/DataContext';

import './header.scss';
import { Link } from 'react-router-dom';
import gotToTop from '../../handlers/goToTopHandler';

const Header = () => {

  const dataContext = use(DataContext);
  const scrolled = (dataContext.data.scroll.currentScroll / dataContext.data.scroll.scrollHeight) * 100;

  return (
    <header>
    <div className='lh'>
      <PrimaryLogo />
    </div>
    <div className={`links ${dataContext.data.theme.darkMode ? "dm" : ""} ${dataContext.data.button.linksActive ? "linksActive" : ""} ${scrolled >= 99 ? "d-none" : ""} `}>
      <a href='#' onClick={() => gotToTop()}><LinkText title={"Home"} cursor={"cursor-p"} hover={"hover"}  /></a>
      <a href={'#aboutMe'}><LinkText title={"About me"} cursor={"cursor-p"} hover={"hover"}  /></a>
      <a href="#skills"><LinkText title={"Skills"} cursor={"cursor-p"} hover={"hover"}  /></a>
      <a href="#services"><LinkText title={"Services"} cursor={"cursor-p"} hover={"hover"}  /></a>
      {/* <a href="#projects"><LinkText title={"Projects"} cursor={"cursor-p"} hover={"hover"}  /></a> */}
    </div>
    <div className="buttonContainer">
      <a href="#contactInfo">
        <PrimaryBtn title={"Contact info"} fill={true} />
      </a>
    </div>
  </header>
  )
}

export default Header;