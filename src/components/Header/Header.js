import './Header.css';
import { Link } from 'react-router-dom';
import DropdownMenu from '../Dropdown/DropdownMenu';
import React, { useEffect, useRef, useState } from "react";

function Header() {
  const links= [
        {to: "/about", label: "About"},
        {to: "/app", label: "App"}
    ];
  const linkss= [
        { to: '/Get-Quote', label: 'Get Quote' },
        { to: '/NationwideTransport', label: 'Nationwide Transport' },
    ];
    
  
  
  
  
  return (
    <header>
      <img src='/Images/logo.png' alt='Whiteside taxis logo' className='header-logo'></img>
      <Link to="/" className="nav-button">Home</Link>
      <DropdownMenu className="nav-button" label="About ▼" links={links} />
      <DropdownMenu className="nav-button" label="Get Quote ▼" linkss={linkss} />
      <Link to="/ContactUs" className="nav-button">Contact</Link>
      <button className="nav-button">Book Taxi</button>
      <a className="nav-button" href="tel:01253711611">01253 711 611</a>
      <button className="nav-button">Accounts</button>
      <Link to="/TestPage" className="nav-button">TestPage</Link>
    </header>
  );
}

export default Header;
