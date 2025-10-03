import React, { useEffect, useRef, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import './DropdownMenu.css'; // Reuse or move your dropdown styles here

const DropdownMenu = ({ 
   label = "Dropdown",
   links = [],
   linkss =[],
   className='' 
   }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className={`dropbtn ${className}`}>{label}</button> {/* Add ${className}`} when wanting to add a new styling route to it so atm it uses nav-button styles */}
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {links.map((link, index) => (
          <Link key={index} to={link.to}>{link.label}</Link>
        ))}
        {/* Then create a new link map so edit the first word e.g linkss and make it whatver you want then add a const for it on the header page or wherere your doing it */}
        {linkss.map((link, index) => (                
          <Link key={`s-${index}`} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
