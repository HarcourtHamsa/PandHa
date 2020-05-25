import React from 'react';

function Section () {
  return (
    <React.Fragment>
      <div className="">
        <div className="container p-5">
          <h5 className="mb-5">We've created more than <b className="text-warning">200</b> homes this year!</h5>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat
            {' '}
            <br />
            nulla pariatur. Excepteur sint occaecat
            cupidatat non proident,
            sunt in culpa qui <br />officia deserunt mollit anim id est laborum.
          </p>
          <a href="/" className="btn btn-blue">More about us</a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Section;
