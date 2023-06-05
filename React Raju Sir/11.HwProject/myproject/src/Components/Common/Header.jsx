import React from 'react'
import {NavLink } from 'react-router-dom'
const Header = () => {
  return (
      <>
   <div className="container-fluid bg-white sticky-top">
  <div className="container">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
      <NavLink to="/" className="navbar-brand">
        <img className="img-fluid" src="img/logo.png" alt="Logo" />
      </NavLink>
      <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto">
          <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
          <NavLink to="/about" className="nav-item nav-link">About</NavLink>
          <NavLink to="/product" className="nav-item nav-link">Products</NavLink>
          <NavLink to="/store" className="nav-item nav-link">Store</NavLink>
          <div className="nav-item dropdown">
            <NavLink to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
            <div className="dropdown-menu bg-light rounded-0 m-0">
              <NavLink to="/feature" className="dropdown-item">Features</NavLink>
              <NavLink to="/blog" className="dropdown-item">Blog Article</NavLink>
              <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
              <NavLink to="/404" className="dropdown-item">404 Page </NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
        </div>
        <div className="border-start ps-4 d-none d-lg-block">
          <button type="button" className="btn btn-sm p-0"><i className="fa fa-search" /></button>
        </div>
      </div>
    </nav>
  </div>
</div>

      </>
  )
}

export default Header