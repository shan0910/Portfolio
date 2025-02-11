import "./intro.css"
import Me from "../../img/Me.jpg"

export default function Intro(){
    return (
        <div className="i" id="intro">
            <div className="s-l-shape"></div>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Sudarshan Priye</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Student</div>
                            <div className="i-title-item">Coding Enthusiast</div>
                            <div className="i-title-item">NewsPaper Reading</div>
                            <div className="i-title-item">Cricket Geek</div>
                        </div>
                    </div>
                    <p className="i-desc">
                      
                    </p>Hello everyone! Sudarshan here! I'm excited to share more about myself through this personal portfolio website, which I built from scratch.
                    <p className="i-desc">
                    Feel free to scroll down to learn more about me, and don’t forget to leave your valuable feedback in the contact form below. Hope you enjoy!
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">
                    <img src={Me} className="i-img" />
                </div>
                
            </div>
            <div className="s-r-shape"></div>
        </div>
    )
}