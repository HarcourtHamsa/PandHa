import React from 'react';

import NavBar from './components/NavBar';
import Section from './components/Section';
import CardList from './components/CardList';

import Jumbotron from './components/Jumbotron';
import ProjectList from './components/ProjectList';
import NewsList from './components/NewsList';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css';
import FloatingBtn from './components/FloatingBtn';
import InfoBox from './components/InfoBox';

function App () {
  return (
    <div className="App">

      <InfoBox />
      <NavBar />
      <Jumbotron />
      <Section />
      <CardList />
      <ProjectList />
      <NewsList />
      <CallToAction />
      <FloatingBtn />
      <Footer />

    </div>
  );
}

export default App;
