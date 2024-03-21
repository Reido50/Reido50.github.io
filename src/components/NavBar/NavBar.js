import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import menuLogoClose from '../../assets/menu-scale.svg';
import menuLogo from '../../assets/menu.svg';
import styles from "./NavBar.module.css";

const NavBar = ({aboutRef, projectsRef}) => {
    const [navbarBG, setNavbarBG] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 40) {
            setNavbarBG(true);
        }else{
            setNavbarBG(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return ( 
        <nav className={navbarBG ? styles.navbarBG : styles.navbarTrans}>
            <Link className={styles.title} to="/" stat={{section : "top"}} onClick={() => {
                
            }}>Portfolio</Link>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li><Link to="/" state={{section : "about"}} onClick={() => {
                        aboutRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}>About</Link></li>
                    <li><Link to="/" state={{section : "projects"}} onClick={() => {
                        projectsRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}>Projects</Link></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;