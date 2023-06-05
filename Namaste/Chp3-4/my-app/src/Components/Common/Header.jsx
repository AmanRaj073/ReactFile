import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isloggedIn, setIsloggedIn] = useState(false);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
        style={{ boxShadow: "-10px 10px 10px rgba(0,0,0,0.3)" }}
      >
        <a
          className="navbar-brand"
          to="/"
          style={{ color: "red", paddingLeft: "130px", fontSize: "30px" }}
        >
          <b>NEWS24</b>
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
                <b>TECH</b> <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <b>EVENTS</b>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <b>UPDATE</b>
              </NavLink>
            </li>
          </ul>
          <div
            className="form-inline my-2 my-lg-0"
            style={{ paddingRight: "200px", paddingLeft: "20px" }}
          >
            {isloggedIn ? (
              <button
                onClick={() => {
                  return setIsloggedIn(false);
                }}
                className="btn btn-outline-warning "
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  return setIsloggedIn(true);
                }}
                className="btn btn-outline-success "
              >
                Login
              </button>
            )}
          </div>
          {/* <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />*/}
        </div>
      </nav>

      <br />
    </>
  );
};

export default Header;
