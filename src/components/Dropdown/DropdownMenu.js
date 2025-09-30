import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css'; // Reuse or move your dropdown styles here

const DropdownMenu = ({ label = "Dropdown", links = [] }) => {
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
      <button onClick={toggleDropdown} className="dropbtn">{label}</button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {links.map((link, index) => (
          <Link key={index} to={link.to}>{link.label}</Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
