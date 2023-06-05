import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
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
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/img">
                Image
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/about-context">
                About Contex
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/result-context">
                Result Contex
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header