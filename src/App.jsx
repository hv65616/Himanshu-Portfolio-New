import React from "react";
import Header from "./components/header/header";
import Navv from "./components/nav/Nav";
import About from "./components/about/about";
import Education from "./components/education/education";
// import Skill from "./components/skills/skill";
import Portfolio from "./components/portfolio/portfolio";
import Accrediation from "./components/accreditations/accreditations";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
const App = () => {
  return (
    <>
      <Header></Header>
      <Navv></Navv>
      <About></About>
      <Education></Education>
      {/* <Skill></Skill> */}
      <Portfolio></Portfolio>
      <Accrediation></Accrediation>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
