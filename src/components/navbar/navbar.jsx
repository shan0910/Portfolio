import React from "react";
import "./navbar.css"
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import SHAN from "../../img/shan.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Toggle from "../toggle/Toggle";
import { FaFacebook, FaTwitter } from 'react-icons/fa';  // Correct import



function Navbar(){
    const navRef=useRef();
    const showNavBar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return (
        <header className="n" style={{backgroundColor:darkMode?"rgb(27, 27, 27, 0.8)":"rgb(60, 60, 60, 0.8)"}}>
            <a href="#first"><img src={SHAN} className="logo"/></a>
            <nav ref={navRef}>
                <a href="#intro" onClick={showNavBar}>Home</a>
                <a href="#about" onClick={showNavBar}>About</a>
                <a href="#edu" onClick={showNavBar}>Education</a>
                <a href="#skills" onClick={showNavBar}>Skills</a>
                <a href="#contact" onClick={showNavBar}>Contact</a>
                <button onClick={showNavBar} className="nav-btn nav-close-btn">
                    <FaTimes/>
                </button>
            </nav>
            <Toggle/>
            <button onClick={showNavBar} className="nav-btn">
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;