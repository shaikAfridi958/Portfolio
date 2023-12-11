import NavBar from "./Components/Navbar/NavBar";
import './App.css'
import '../src/Components/Navbar/NavBar.css'
import Toggle from '../src/Components/Toggle/Toggle.jsx'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import { createContext, useState } from "react";
import { FaSun, FaMoon, FaCircle } from 'react-icons/fa'
export const ThemeContext=createContext(null);

function App() {

  const [theme, setTheme]=useState('light')
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==='light'?'dark':'light'));
  };
 
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
      <div className="App" id={theme} >
        <NavBar />
        <div className="toggle-insider" id='insider-div'>
            <i className='famoon' onClick={toggleTheme}>
                <FaMoon />
                <FaCircle />
            </i>
        </div>
        <Intro />
        <Services />
        <Works />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        {/* <Toggle /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
