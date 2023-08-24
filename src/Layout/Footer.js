import { NavLink } from "react-router-dom";
import classes from './Footer.module.css';
import logo from '../assets/macber_logo_light.svg';
import Paragraph from "../UI/Paragraph";
import facebookIcon from '../assets/icons/001-facebook.svg';
import twitterIcon from '../assets/icons/003-twitter.svg';
import instgramIcon from '../assets/icons/004-instagram.svg';

const Footer = () => {
  return (
    <footer>
        <div className="container py_5">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="mb-4">
                    <img src={logo} alt="macber_logo" loading="lazy"/>
                </div>
                <div className="mb-5 col-md-6 col-12">
                    <Paragraph className={`m-0 text-center footer-desc`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  
                    </Paragraph>
                </div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className={`nav-link ${classes.nav_footer}`} to={'/about'}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${classes.nav_footer}`} to={'/services'}>Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${classes.nav_footer}`} to={'/our-work'}>Our work</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${classes.nav_footer}`} to={'/contact-us'}>Contact us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${classes.nav_footer}`} to={'/careers'}>Careers</NavLink>
                    </li>
                </ul>
                <div className={`${classes.social_links} col-2 mt-5`}>
                    <a href="" target="_blank">
                        <img src={facebookIcon} alt="facebookIcon" loading="lazy"/>
                    </a>
                    <a href="" target="_blank">
                        <img src={twitterIcon} alt="twitterIcon" loading="lazy"/>
                    </a>
                    <a href="" target="_blank">
                        <img src={instgramIcon} alt="instgramIcon" loading="lazy"/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;