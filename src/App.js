import React from 'react';
import { BrowserRouter as  Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Title from "./components/Title";
// import Wrapper from "./components/Wrapper";
import PortfolioCard from './components/ProjectCard';
import projects from "./projects.json";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
    <div>
    <Header/>
      <NavTabs />
      
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} /> */}
      
      {/* <NavTabs/> */}
      {/* <Title>Projects</Title> */}


      <PortfolioCard
      name={projects[0].name}
      image={projects[0].image }
      link={projects[0].link}
      github={projects[0].github}
      description={projects[0].description}/>


      <Footer/>
    </div>
    </Router>
  );
}

export default App;
