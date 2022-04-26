// import { HashRouter as Link, Router, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import PortfolioCard from './components/ProjectCard';
import projects from "./projects.json";

function App() {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <PortfolioCard
      name={projects[0].name}
      image={projects[0].image }
      link={projects[0].link}
      github={projects[0].github}
      description={projects[0].description}/>
    </Wrapper>
  );
}

export default App;
