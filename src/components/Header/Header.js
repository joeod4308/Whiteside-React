import './Header.css';
import { Link } from 'react-router-dom';
import DropdownMenu from '../Dropdown/DropdownMenu';
import React, { useEffect, useRef, useState } from "react";

function Header() {
  const links= [
        {to: "/CompanyInformation", label: "Company Information"},
        {to: "/WhitesideForBusiness", label: "Whiteside For Bussiness"},
        {to: "/OurFleet", label: "Our Fleet"},
        {to: "/CareerPage", label: "Careers"},
        {to: "/ThingsToDoInBlackpool", label: "Things To Do In Blackpool"}
    ];
  const linkss= [
        { to: '/Get-Quote', label: 'Get Quote' },
        { to: '/NationwideTransport', label: 'Nationwide Transport' },
        { to: '/AirportTransfers', label: 'Airport Transfers' },
        { to: '/ManchesterAirport', label: 'Manchester Airport' },
        { to: '/LiverpoolAirport', label: 'Liverpool Airport' },
    ];
    
  
  
  
  
  return (
    <header>
      <Link to="/">
      <img src='/Images/logo.png' alt='Whiteside taxis logo' className='header-logo'></img>
      </Link>
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/App" className="nav-button">App</Link>
      <DropdownMenu className="nav-button" label="About ▼" links={links} />
      <DropdownMenu className="nav-button" label="Get Quote ▼" linkss={linkss} />
      <Link to="/ContactUs" className="nav-button">Contact</Link>
      <Link to="/Book" className="nav-button">Book Online</Link>
      <a className="nav-button" href="tel:01253711611">01253 711 611</a>
      <button className="nav-button">Accounts</button>
      <Link to="/TestPage" className="nav-button">TestPage</Link>
    </header>
  );
}

export default Header;
