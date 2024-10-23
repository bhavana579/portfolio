import React from "react";
import Navbar from "./assets/components/Navbar/Navbar";
import './index.css';
import Hero from "./assets/components/Navbar/Hero/Hero";
import About from "./assets/components/Navbar/About/About";
import Skills from "./assets/components/Navbar/Skills/Skills";
import Projects from "./assets/components/Navbar/Projects/Projects";
import ContactMe from "./assets/components/Navbar/Contact/Contact";
import Footer from "./assets/components/Navbar/Footer/Footer";

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App;
