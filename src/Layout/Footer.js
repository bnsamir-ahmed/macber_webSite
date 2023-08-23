import { NavLink } from "react-router-dom";
import classes from './Footer.module.css';
import logo from '../assets/macber_logo_light.svg';
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="text-center">
                <div className="logo">
                    <img src={logo} alt="macber_logo" loading="lazy"/>
                </div>
                <div>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  
                    </p>
                </div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/about'}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/services'}>Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/our-work'}>Our work</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/contact-us'}>Contact us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/careers'}>Careers</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;