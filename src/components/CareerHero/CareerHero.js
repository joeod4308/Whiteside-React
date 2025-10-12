import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import './CareerHero.css';

function CareerHero (){
    return (
        <>
        <div className="container1">
          <section className="container2">
            <p className="text1">Start your career with Whiteside Taxis – Airport Transfers</p>
        <Link to="/CareerPage" className="button1">Click to find out more</Link>
          </section>
        </div>
        </>
    );
}
export default CareerHero;