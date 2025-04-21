import "./skills.css"
import Resume from "../../img/resume.png"
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Fade from "react-reveal/Fade";

export default function Skills(){
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    return (
        <div className="s" id="skills">
            <div className="s-title" style={{color:darkMode?"white":"rgb(54, 54, 54)"}}>Skills and Projects</div>
            <div className="s-left">
            <Fade left>
                <div className="s1-wrapper" style={{border:darkMode?"0px solid rgb(90, 90, 90)":"3px solid rgb(54, 54, 54)"}}>
                        <div className="bgs"></div>
                        <div className="bgs bgs2"></div>
                        <div className="bgs bgs3"></div>
                        <h4 className="s-sub" style={{color:darkMode?"black":"rgb(54, 54, 54)"}}>Here is a list of some of my skills</h4>  
                        {/* <ul className="s-list"> */}
                            <li className="s-item">Competent knowledge in Data Structures and Algorithms</li>
                            <li className="s-item">Proficiency in Web Development</li>
                            <li className="s-item">Sufficient knowledge in OOPS, OS, DBMS</li>
                            <li className="s-item"> Cricket Geek</li>
                        {/* </ul> */}
                </div>
            </Fade>
            <Fade left delay={800}>
                <div className="s2-wrapper" style={{border:darkMode?"0px solid rgb(90, 90, 90)":"3px solid rgb(54, 54, 54)"}}>
                    <div className="bgs"></div>
                    <div className="bgs bgs2"></div>
                    <div className="bgs bgs3"></div>
                    <h4 className="s-sub" style={{color:darkMode?"black":"rgb(54, 54, 54)"}}>Here are some of my Projects</h4>
                    <li className="p-item"><a href="https://mankav.onrender.com/" style={{color:darkMode?"black":"black"}}>ManKav AI Integrated Hospital Website</a></li>
                    <li className="p-item"><a href="https://shan0910.github.io/Portfolio/">Portfolio Website</a></li>
                    <li className="p-item"><a href="https://github.com/shan0910/Laptop-Price-Analysis" style={{color:darkMode?"black":"black"}}>Laptop Price Analysis</a></li>
                </div>
            </Fade>
            </div>
            <Fade right delay={500}>
            <div className="s-right">
                <div className="resume">
                    <a href="https://drive.google.com/file/d/1KkNv0njScBZl_kzuvJKKubOBjSfePHkN/view?usp=sharing"><img src={Resume} className="resume-img" /></a>
                </div> 
                <div className="resume-link">
                    <h4 style={{color:darkMode ? "white" : "black"}}>This is a link to my resume</h4>
                    <a href="https://drive.google.com/file/d/1zU3pBy_PEDpzTjws3RwACC3iPUDp9E0Y/view?usp=sharing" style={{color:darkMode ? "white" : "black"}}>Click here and Explore!!!</a>
                </div> 
            </div>
            </Fade>
        </div>
    )
}