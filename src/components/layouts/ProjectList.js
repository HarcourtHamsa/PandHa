import React from 'react';
import Card from './Card';
import img from '../../images/alexander-schimmeck-39R-s_81wE0-unsplash.jpg';
import img2 from '../../images/christopher-jolly-GqbU78bdJFM-unsplash.jpg';
import img3 from '../../images/curology-6CJg-fOTYs4-unsplash.jpg';
import img4 from '../../images/evan-dvorkin-K7PrSwM54-I-unsplash.jpg';
import img5 from '../../images/hal-gatewood-Vfml26Iy4mI-unsplash.jpg';
import img6 from '../../images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg';

function ProjectList () {
  return (
    <React.Fragment>
      <div>
        <div className="container">
          <h5 className="text-center mt-4">Our portfolio!</h5>
          <div className="row">
            <div className="col-xl-4">
              <Card img={img} />
            </div>
            <div className="col-xl-4">
              <Card img={img2} />
            </div>
            <div className="col-xl-4">
              <Card img={img3} />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <Card img={img4} />
            </div>
            <div className="col-xl-4">
              <Card img={img5} />
            </div>
            <div className="col-xl-4">
              <Card img={img6} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectList;
