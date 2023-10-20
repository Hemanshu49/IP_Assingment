import React from 'react';
import './Navbar.css'; // Import your custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Examination System</a>
      </div>
      <ul className="nav-links">
        <li><a href="/studentHome">StudentTest</a></li>
        {/* <li><a href="/about">About</a></li> */}
        <li><a href="/Contactus">Contact</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signin">register</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;