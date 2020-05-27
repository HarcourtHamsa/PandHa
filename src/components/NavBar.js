import React from 'react';

export default function NavBar () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  p-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            P.
          </a>
          <button
            className="navbar-toggler border-0 "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/about" className="nav-item nav-link">
                Projects
              </a>

              <a href="/login" className="nav-item nav-link">
                About
              </a>
              <a href="/login" className="nav-item nav-link">
                News
              </a>
              <a href="/login" className="nav-item nav-link">
                Contact
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
