import React from 'react';
import Card from '../components/Card';
import img from '../images/yancy-min-EzSyFRfNP_c-unsplash.jpg';

function ProjectList () {
  return (
    <React.Fragment>
      <div>
        <div className="container">
          <h5 className="text-center mt-4">Some of our projects</h5>
          <div className="row">
            <div className="col-xl-4">
              <Card img={img} />
            </div>
            <div className="col-xl-4">
              <Card img={img} />
            </div>
            <div className="col-xl-4">
              <Card img={img} />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <Card img={img} />
            </div>
            <div className="col-xl-4">
              <Card img={img} />
            </div>
            <div className="col-xl-4">
              <Card img={img} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectList;
