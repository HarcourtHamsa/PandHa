import React from 'react';
import {RiMouseLine} from 'react-icons/ri';

function Jumbotron () {
  return (
    <React.Fragment>
      <div className="jumbotron text-white">
        <div className="container">
          <div className="center text-center">
            <h3>Welcome to PandHa</h3>
            <small>We are a structural engineering company</small>

            <a href="/" className="btn btn-outline-white text-white mt-5">
              <RiMouseLine size="30" /> Get Started
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Jumbotron;
