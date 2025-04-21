import "./first.css"
import coverVideo from "../../media/coverVideo.mp4"
import Fade from "react-reveal/Fade"
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Link, animateScroll as scroll } from "react-scroll";

export default function First(){
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="cover-container" id="first">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <div className="typewriter">
                <h1>Sudarshan Priye</h1>
            </div>
            <Fade bottom>
                <p style={{color:darkMode?"white":"black"}}>Welcome to my portfolio</p>
                <Link
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}>
                    <button className="btn"><a href="#intro" className="bt">Explore</a></button>
                </Link>
            </Fade>
        </div>
    )
}