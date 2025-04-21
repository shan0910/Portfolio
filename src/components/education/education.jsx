import "./education.css"
import books from "../../img/books.jpg"
import exams from "../../img/exams.jpg"
import tech from "../../img/technology.jpg"
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Fade from "react-reveal/Fade";

export default function Education(){
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="e" id="edu">
            <h2 className="e-title">Education</h2>
            <div className="e-shape"></div>
            <div className="e-wrapper">
                <Fade bottom>
                <div className="e-left" style={{border:darkMode?"2px solid white":"2px solid black"}}>
                    <div className="content">
                        <div className="back">
                            <div className="bg1"></div>
                            <div className="txt" style={{color:darkMode?"white":"black"}}>Primary Schooling</div>
                        </div>
                        <div className="e-wrap">
                            <div className="e-comp-title">Primary Schooling</div>
                            <div className="e-imgbox">
                                <img src={books} className="e-img" />
                            </div>
                            <div className="e-desc">
                                <p>I completed my primary and secondary education
                                     at St. Mary's English School, CBSE Board,
                                      Bihar, participating in co-curricular activities
                                       and I passed my 10th grade 
                                       with a percentage of 91.20% overall.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade bottom delay={800}>
                <div className="e-center" style={{border:darkMode?"2px solid white":"2px solid black"}}>
                    <div className="content">
                        <div className="back">
                            <div className="bg2"></div>
                            <div className="txt" style={{color:darkMode?"white":"black"}}>High Schooling</div>
                        </div>
                    <div className="e-wrap">
                        <div className="e-comp-title">High Schooling</div>
                        <div className="e-imgbox">
                            <img src={exams} className="e-img" />
                        </div>
                    <div className="e-desc">
                    With an interest in Maths and Physics, I began preparing for the Joint Entrance 
                    Examination during my 11th and 12th grades at Resonance Institute and
                     Sri Krishna Ramruchi College, Barbigha, Bihar. I successfully completed my
                      12th grade with an overall percentage of 82.4%.
                    </div>
                    </div>
                    </div>
                </div>
                </Fade>
                <Fade bottom delay={1500}>
                <div className="e-right" style={{border:darkMode?"2px solid white":"2px solid black"}}>
                    <div className="content">
                        <div className="back">
                            <div className="bg3"></div>
                            <div className="txt" style={{color:darkMode?"white":"black"}}>College</div>
                        </div>
                    <div className="e-wrap">
                        <div className="e-comp-title">College</div>
                        <div className="e-imgbox">
                            <img src={tech} className="e-img" />
                        </div>
                    <div className="e-desc">
                    I am currently pursuing my studies at the National Institute of Technology, Raipur,
                     where I am an active member of the Management team of the Sahyog Club.
                      I have maintained an average CGPA of 8.10 over the first seven semesters and am eager 
                      to advance my career in the near future.
                    </div>
                    </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}