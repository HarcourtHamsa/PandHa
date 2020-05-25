import React from 'react';

function CallToAction () {
  return (
    <React.Fragment>
      <div className="cta">
        <div className="container p-5">
          <h5 className="mb-5">
            What structural problem can we solve for you?
          </h5>
          <p>
            Are you ready to start collaborating with engineers you can trust? Contact KNA today
          </p>
          <a href="/" className="btn btn-blue">Talk to an engineer</a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CallToAction;
