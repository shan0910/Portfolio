import { useContext, useRef, useState } from "react";
import "./about.css"
import { ThemeContext } from "../../context"
import AboutImg from "../../img/about.png"
import Fade from "react-reveal/Fade";

export default function About(){
    const formRef=useRef();
    const [done, setDone]=useState(false);
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="a" id="about">
                <div className="a-shape1"></div>
            <div className="a-left">
                <Fade>
                    <div className="a-card" style={{boxShadow:darkMode?"-10px -10px rgb(44, 172, 44)":"-10px -10px #222"}}>
                        <img src={AboutImg} className="a-img" />
                    </div>
                </Fade>
            </div>
            <div className="a-right">
                <div className="a-wrapper">
                   <Fade right>
                   <h1 className="a-title">About Me</h1>
                    <p className="i-subt">
                    The future favors those who persevere. There's no room for self-pity or complaints.
                     I'm determined to keep pushing forward.
                    </p>
                    <p className="a-desc">
                    I am currently pursuing a Bachelor of Technology degree at the National Institute of Technology, Raipur. 
                    As an aspiring software developer, I am dedicated to honing my skills in Data Structures, Algorithms, and Web Development. I am passionate about building a career in Software Development and continuously enhancing my technical expertise. 
                    Besides my academic pursuits, I am an avid cricket enthusiast who follows the game closely.
                    </p>
                   </Fade>
                </div>
            </div>
                <div className="a-shape2"></div>
        </div>
    )
}