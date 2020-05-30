import React from 'react';

function Section () {
  return (
    <React.Fragment>
      <div className="bg-light">
        <div className="container p-5">
          <h5 className="mb-5">
            We've created more than
            {' '}
            <b className="text-warning">200</b>
            {' '}
            homes!
          </h5>
          <p className="small">
            Yeah that true! We don't just build homes , we build communities.
            {' '}
            <br />
            {' '}
            We are focused on building
            and furnishing home to suite your needs
          </p>
          <a href="/" className="btn btn-black">More about us</a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Section;
