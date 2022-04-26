// import { HashRouter as Router, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import PortfolioCard from './components/ProjectCard';
import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <PortfolioCard
      name={friends[1].name}
      image={friends[1].image }
      occupation={friends[1].occupation}
      loction={friends[1].location}/>
      <PortfolioCard
      name={friends[2].name}
      image={friends[2].image }
      occupation={friends[2].occupation}
      loction={friends[2].location}/>
    
    </Wrapper>
  );
}

export default App;
