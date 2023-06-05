import React from 'react'
import './Styles.css'
import img from '../images/3.jpeg'

const Header = ()=> {
  return (
    <>
      <div className="header">
        <div className="lo">
          <img className='logo' src={img} alt="logo"/>
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header