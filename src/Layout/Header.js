import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logoLight from '../assets/macber_logo_light.svg';
import logoDark from '../assets/macberLogoDark.svg';
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "../UI/MenuToggle";
import  MenuNav  from '../UI/MenuNav';
import classes from './Header.module.css';

function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();
  
    useEffect(() => {
      const menuAnimations = isOpen
        ? [
            [   
                "div",
                { transform: "translateY(0%)" },
                { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4 }
            ],
            [
              "ul",
              { transform: "translateX(0%)" },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
            ],
            [
              "li",
              { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
              { delay: stagger(0.05), at: "-0.1" }
            ]
          ]
        : [
            [
                "div",
                { transform: "translateY(-100%)"},{ duration: 0.4 }
            ],
            [
              "li",
              { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
              { delay: stagger(0.05, { from: "last" }), at: "<" }
            ],
            [
                "ul", 
                { transform: "translateY(-100%)"}, { at: "-0.1" }
            ]
          ];
      animate([
        [
          "path.top",
          { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<" }
        ],
        ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
        [
          "path.bottom",
          { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<" }
        ],
        ...menuAnimations
      ]);
    }, [isOpen,animate]);
  
    return scope;
}
const Header = ()=>{
    const [isStrickyFixed, setIsStrickyFixed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    const reset = () =>{ setIsOpen(!isOpen) };
    useEffect(() => {
      const handleScroll = () => {
        const headerScrollPos = 130;
        const shouldFixHeader = window.pageYOffset > headerScrollPos;
        setIsStrickyFixed(shouldFixHeader);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
    <>
        <nav className={`navbar navbar-expand-lg justify-content-center ${classes.navbar} ${isStrickyFixed ? `${classes.stickey_header} ${classes.stickey_fixed}` : ''}`}>
        <NavLink className="navbar-brand d-block d-lg-none" to={'/'}>
            <img src={isStrickyFixed ? logoDark : logoLight} alt="macber_logo" loading="lazy" width='100%'/>
        </NavLink>
        {/* <button className={`navbar-toggler ${classes.navbar_toggle} ${showBasic ? classes.show : ''}`}
            onClick={() => setShowBasic(!showBasic)}>
            <span></span>
            <span></span>
            <span></span>
        </button> */}
        <div ref={scope} className={`navbar-toggler p-0`}>
            <MenuToggle toggle={() =>{ setIsOpen(!isOpen)} } stroke={isStrickyFixed}/>
            <MenuNav  onClick={reset}/>
        </div>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="nav">
                <li className="nav-item px-3">
                    <NavLink className={`nav-link px-0 ${classes.nav_link}`} 
                    style={({ isActive }) => ({
                        color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                        borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                        fontWeight: isActive ? 800 : 400
                    })} 
                    to={'/'} end><span>Home</span></NavLink>
                </li>
                <li className="nav-item px-3">
                    <NavLink className={`nav-link px-0 ${classes.nav_link}`} 
                    style={({ isActive }) => ({
                        color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                        borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                        fontWeight: isActive ? 800 : 400
                    })} 
                    to={'/about'}><span>About</span></NavLink>
                </li>
                <li className="nav-item px-3">
                    <NavLink className={`nav-link px-0 ${classes.nav_link}`}
                    style={({ isActive }) => ({
                        color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                        borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                        fontWeight: isActive ? 800 : 400
                    })}
                    to={'/services'}><span>Services</span></NavLink>
                </li>
                <li className="nav-item px-5">
                    <NavLink className="navbar-brand d-block-md" to={'/'}>
                        <img src={isStrickyFixed ? logoDark : logoLight} alt="macber_logo" loading="lazy" width='100%'/>
                    </NavLink>
                </li>
                <li className="nav-item px-3">
                    <NavLink className={`nav-link px-0 ${classes.nav_link}`} 
                    style={({ isActive }) => ({
                        color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                        borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                        fontWeight: isActive ? 800 : 400
                    })}
                    to={'/our-work'}><span>Our work</span></NavLink>
                </li>
                <li className="nav-item px-3">
                    <NavLink className={`nav-link px-0 ${classes.nav_link}`} 
                    style={({ isActive }) => ({
                        color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                        borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                        fontWeight: isActive ? 800 : 400
                    })}
                    to={'/contact-us'}><span>Contact us</span></NavLink>
                </li>
                <li className="nav-item px-3">
                    <NavLink className={`nav-link px-0 ${classes.nav_link}`} 
                    style={({ isActive }) => ({
                        color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                        borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                        fontWeight: isActive ? 800 : 400
                    })}
                    to={'/careers'}><span>Careers</span></NavLink>
                </li>
            </ul>
        </div>
        </nav>
        {/* <div className={`${classes.mobile_nav__wrapper} ${showBasic ? classes.expanded : ''}`}>
        <div className={`${classes.mobile_nav__overlay} ${classes.mobile_nav__toggler}`} onClick={() => setShowBasic(!showBasic)}></div>
            <div className={classes.mobile_nav__content}>
                <span className={`${classes.mobile_nav__close} ${classes.mobile_nav__toggler}`} onClick={() => setShowBasic(!showBasic)}>
                    <FaXmark />
                </span>
                <div className="contents">
                    <div className="logo-box animate__animated animate__fadeInDown">
                        <a href={'/'} aria-label="logo image">
                        <img
                            src={isStrickyFixed ? logoDark : logoLight}
                            alt='logo'
                            loading='lazy'
                        />
                        </a>
                    </div>
                    <div className={classes.mobile_nav__container}>
                        <div className="container">
                            <ul className={classes.main_menu__list}>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${classes.nav_link}`} to={'/'}>Home</NavLink>
                                </li>
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
                </div>
            </div>
        </div> */}
    </>
    )
}
export default Header;