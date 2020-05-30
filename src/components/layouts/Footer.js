import React from 'react';

function Footer () {
  return (
    <React.Fragment>
      <div className=" small">
        <hr />
        <div className="container p-5">
          <div className="row">
            <div className="col-xl-6">
              <h5 className="mb-5"> CAD Design and Structural</h5>
              <p className="text-muted">
                A108 Adam Street
                New York, NY 535022
                United States
              </p>
              <p className="text-muted">
                <b>Phone: </b>+1 5589 55488 55
              </p>
              <p className="text-muted">
                <b>Email: </b>nfo@example.com
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mb-5">Join Our Newsletter</p>
              <p className="text-muted">
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
              </p>
              <form>
                <input type="email" placeholder="Enter email" /><br /><br />
                <button className="btn btn-blue">
                  <small>Subscribe</small></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
