import React from 'react';
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark small p-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            CAD Design and Structural
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{color: 'white'}}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About us
              </Link>
              <Link to="/" className="nav-item nav-link">
                News
              </Link>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
