import React from 'react';
import img1 from "../../images/claudio-hirschberger-VI1UCQe4U4A-unsplash.jpg"
import img2 from "../../images/sidekix-media-zLT3VqWEgOQ-unsplash.jpg"
import img3 from "../../images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"

function Jumbotron () {
  return (
    <React.Fragment>
      <div className="" style={{minHeight: '100px'}}>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" style={{minHeight: '100px'}}>
            <div className="carousel-item active">
              <img className="d-block w-100" src={img1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Jumbotron;
