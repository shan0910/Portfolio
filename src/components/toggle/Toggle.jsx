import "./toggle.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"

export default function Toggle(){
    const theme=useContext(ThemeContext);

    const handleClick=()=>{
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="togg">
            <div className="t" style={{backgroundColor:theme.state.darkMode?"white":"black"}}>
                <img src={Moon} className="t-icon"/>
                <img src={Sun} className="t-icon"/>
                <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode?"0":"25px"}}></div>
            </div>
        </div>
    )
}