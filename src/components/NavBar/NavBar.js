import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuLogoClose from '../../assets/menu-scale.svg';
import menuLogo from '../../assets/menu.svg';
import styles from "./NavBar.module.css";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
        <nav className={styles.navbar}>
            <Link className={styles.title} to="/">Portfolio</Link>
            <div className={styles.menu}>
                <img className={styles.menuButton} 
                src={menuOpen ? menuLogoClose : menuLogo} 
                alt="menu-button" 
                onClick={() => setMenuOpen(!menuOpen)}/>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;