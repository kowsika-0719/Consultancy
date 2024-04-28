// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="bar">
      <div className="burger-icon" onClick={toggleNav}>
        <div className={`bar1 ${showNav ? 'change' : ''}`}></div>
        <div className={`bar2 ${showNav ? 'change' : ''}`}></div>
        <div className={`bar3 ${showNav ? 'change' : ''}`}></div>
      </div>
      <nav className={`nav-links ${showNav ? 'show' : ''}`}>
        <Link to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</Link>
        <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</Link>
        <Link to='prod' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Products</Link>
        <Link to='test' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Testimonials</Link>
        <Link to='contact-container' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</Link>
        <a href='/loginpage' className='button'>Login</a>
      </nav>
    </div>
  );
}

export default Navbar;
