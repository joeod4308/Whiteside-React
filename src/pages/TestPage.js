import React, { useEffect, useRef, useState } from "react";
import './TestPage.css';
import { Link } from 'react-router-dom';
import DropdownMenu from '../components/Dropdown/DropdownMenu';
import Test from '../components/Test';


function TestPage() {
    const links= [
        {to: "/AboutPage", label: "AboutPage"},
        {to: "/AppPage", label: "AppPage"}
    ];

  return (
    <div className="test-container">
      <section className="buttonsrow">
        <Test />
        <DropdownMenu label="Navigate" links={links} />
      </section>
        
    </div>
  );
}

export default TestPage;
