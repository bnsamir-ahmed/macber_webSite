import classes from './MenuNave.module.css';
import { NavLink } from "react-router-dom";
import logoLight from '../assets/macber_logo_light.svg';
import { FaXmark } from "react-icons/fa6";
const MenuNav = (props) =>{
    return (
      <div className={`${classes.mobile_nav__wrapper}`}>
            <div className={classes.mobile_nav__content}>
                <span className={`${classes.mobile_nav__close} ${classes.mobile_nav__toggler}`} onClick={props.onClick}>
                    <FaXmark />
                </span>
                {/* <div className="contents"> */}
                    <div className="logo-box">
                        <a href={'/'} aria-label="logo image">
                        <img
                            src={logoLight}
                            alt='logo'
                            loading='lazy'
                        />
                        </a>
                    </div>
                    <div className={`my-auto`}>
                        <div className="container">
                            <ul className={classes.main_menu__list}>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${classes.nav_link}`} to={'/'} onClick={props.onClick}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${classes.nav_link}`} to={'/about'} onClick={props.onClick}>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${classes.nav_link}`} to={'/services'} onClick={props.onClick}>Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${classes.nav_link}`} to={'/our-work'} onClick={props.onClick}>Our work</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${classes.nav_link}`} to={'/contact-us'} onClick={props.onClick}>Contact us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${classes.nav_link}`} to={'/careers'} onClick={props.onClick}>Careers</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                {/* </div> */}
            </div>
      </div>
    );
}
export default MenuNav;