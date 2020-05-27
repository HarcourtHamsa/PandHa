import React from 'react';
import img1 from "../images/claudio-hirschberger-VI1UCQe4U4A-unsplash.jpg"
import img2 from "../images/sidekix-media-zLT3VqWEgOQ-unsplash.jpg"
import img3 from "../images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"

function Jumbotron () {
  return (
    <React.Fragment>
      <div className="">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={img1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={img2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={img3} alt="Third slide" />
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Jumbotron;
