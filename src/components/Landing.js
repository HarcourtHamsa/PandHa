import React, { useEffect, useContext } from 'react';
import { AppContext } from "../contexts/context"

import NavBar from './layouts/NavBar';
import Section from './layouts/Section';
import CardList from './layouts/CardList';

import Jumbotron from './layouts/Jumbotron';
import ProjectList from './layouts/ProjectList';
import NewsList from './layouts/NewsList';
import CallToAction from './layouts/CallToAction';
import Footer from './layouts/Footer';
import '../App.css';
import FloatingBtn from './layouts/FloatingBtn';
import InfoBox from './layouts/InfoBox';
import Modal from './layouts/Modal';

function Landing() {
  const [isOpen, setIsOpen] = useContext(AppContext)

  // Getting apps global state on page load
  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('modal-is-open')
    if (dataFromLocalStorage) {
      setIsOpen(JSON.parse(dataFromLocalStorage))
      console.log("Getting state")
    }
  }, [setIsOpen])

  useEffect(() => {
    localStorage.setItem('modal-is-open', JSON.stringify(isOpen))
    console.log("Setting state")
  })


  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <React.Fragment>
      <InfoBox />
      <NavBar />

      {isOpen
        ? <Modal onClose={closeModal}>
          <h5>Get the latest components <br /> right into your inbox !</h5><br />

          <small className="small text-muted">Join 4k+ happy subscribers</small>
        </Modal>
        : null}

      <Jumbotron />
      <Section />
      <CardList />
      <ProjectList />
      <NewsList />
      <CallToAction />
      <FloatingBtn />
      <Footer />
    </React.Fragment>
  );
}

export default Landing;
