import React from "react";
import "./App.css";
import { useContext, useState } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Education from "./components/education/education";
import First from "./components/first/First";
import Handles from "./components/handles/handles";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/Skills";
import { ThemeContext } from "./context";


function App() {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div style={{
      backgroundColor:darkMode ? "#222" : "rgb(242, 242, 242)", 
      color:darkMode ? "white" : "black"}}>
      <React.Fragment>
        <Navbar/>
      </React.Fragment>
      <div className="off">
        <First/>
        <Intro/>
        <About/>
        <Education/>
        <Skills/>
        <Contact/>
        <Handles/>
      </div>
    </div>
  );
}

export default App;