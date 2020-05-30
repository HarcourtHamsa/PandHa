import React from 'react';
import {Link} from "react-router-dom"

function CallToAction () {
  return (
    <React.Fragment>
      <div className="cta">
        <div className="container p-5">
          <h5 className="mb-5">
            What structural problem can we solve for you?
          </h5>
          <p className="small mb-3">
            Are you ready to start collaborating with engineers you can trust? Contact us today
          </p>
          <Link to="/contact" className="btn btn-blue">
            <small>Talk to an engineer</small></Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CallToAction;
