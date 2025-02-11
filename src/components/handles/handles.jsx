import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import "./handles.css"
import Fade from "react-reveal/Fade";
export default function Handles(){
    const formRef=useRef();
    const [done, setDone]=useState(false);
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="h" style={{backgroundColor:darkMode?"rgb(46, 46, 46)":"white"}}>
            <div className="line" style={{backgroundColor:darkMode?"white":"rgb(167, 167, 167)"}}></div>
            <div className="h-cont">
                <div className="h-txt">For a closer look at my journey, you can follow me on these social media platforms.</div>
                <Fade bottom delay={500}>
                <div className="h-icons">
                    
                    <a href="https://www.linkedin.com/in/sudarshan-priye/"><div className="icon link"></div></a>
                    <a href="https://leetcode.com/u/shan0910/"><div className="icon lc"></div></a>
                    <a href="https://github.com/shan0910"><div className="icon git"></div></a>
                    <a href="https://auth.geeksforgeeks.org/"><div className="icon gfg"></div></a>
                    
                </div>
                </Fade>
            </div>
            <div className="copy" style={{backgroundColor:darkMode?"black":"rgb(167, 167, 167)"}}>
                <div className="temp" style={{color:darkMode?"white":"black"}}>Designed and Developed by Sudarshan Priye</div>
                <div className="temp" style={{color:darkMode?"white":"black"}}>Copyright:{' '} &copy; {new Date().getFullYear()} shan0910</div>
                {/* <div className="temp"></div> */}
            </div>
        </div>
    )
}