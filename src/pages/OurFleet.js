import react from 'react';
import './OurFleet.css';
import { Link } from 'react-router-dom';


import React, { useEffect, useRef, useState } from "react";
export const Taxi = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28px"
    height="28px"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#5b1ecd"
      className="group-hover:fill-[white] group-hover:duration-[0.5s]"
      d="M28.59 10.78h-2.242a.496.496 0 0 0-.333.134c-.716-1.143-1.457-2.058-2.032-2.633c-.575-.574-1.98-.983-3.732-1.228V5.03c-1.54-.198-3.098-.25-4.267-.25c-1.16 0-2.703.05-4.233.246v2.022c-1.77.244-3.188.654-3.768 1.233c-.572.574-1.308 1.483-2.02 2.618a.489.489 0 0 0-.31-.117H3.41c-.275 0-.5.226-.5.5v1.01c0 .274.22.54.49.593l1.36.26c-1.174 2.618-1.866 5.876-.778 9.14v1.937c0 .553.14 1 .313 1h2.562c.173 0 .313-.447.313-1v-1.584c2.298.22 5.55.46 8.812.46c3.232 0 6.52-.236 8.814-.454v1.578c0 .553.14 1 .312 1h2.562c.172 0 .312-.447.312-1l-.002-1.938c1.087-3.26.397-6.516-.775-9.134l1.392-.265a.63.63 0 0 0 .49-.594v-1.01a.498.498 0 0 0-.497-.5zM7.107 18.907a1.813 1.813 0 0 1 0-3.624a1.813 1.813 0 0 1-.001 3.624zm-1.524-5.19C6.543 11.52 7.88 9.8 8.69 8.988c.584-.585 3.34-1.207 7.292-1.207c3.953 0 6.708.623 7.293 1.208c.81.81 2.146 2.53 3.106 4.728c-2.132.236-6.285-.31-10.398-.31s-8.266.546-10.4.31zm19.274 5.19a1.813 1.813 0 0 1 0-3.624a1.813 1.813 0 0 1-.001 3.624z"
    ></path>
  </svg>
);

function OurFleet() {
  return (
    <>
    <div className="py-[3rem] bg-[#e7e3f1]">
      <section className="ml-[1rem] flex flex-col justify-center xl:ml-[15%]">
        <h1 className="text-2xl font-bold max-w-[45%] text-[#5b1ecd] mb-[8px]">The Largest Fleet in the Area</h1>
        <p className="xl:max-w-[65%] mb-[1rem] max-w-[70%]">Clean, reliable, and affordable—Whiteside Taxis offers more than just taxis. Experience premium transportation with a trusted name in the industry.</p>
       <Link to={"/Book"} className="group gap-[10px] border-[2px] border-[solid] border-[#5b1ecd] rounded-[8px] py-[1rem] px-[2rem] w-[fit-content] h-[fit-content] hover:bg-[#5b1ecd] hover:text-[white] hover:duration-[0.5s] flex flex-row justify-center items-center">Book a Taxi
        <Taxi />
       </Link>
      </section>
    </div>
    <div className="w-screen py-[3rem] xl:py-[3rem]">
      <div className="xl:flex xl:flex-row]">
        <img src="./Images/cars/saloon.png" alt="Saloon car"
      className="mt-[2rem] ml-[1rem] w-[234px] h-[98px] mb-[3rem] xl:w-[434px] xl:h-[160px] xl:ml-[15%]"></img>
       <section className="ml-[1rem] xl:ml-[5rem]">
        <h1 className="text-2xl font-bold max-w-[45%] text-[#5b1ecd] mt-[3rem] mb-[8px]">Saloon - A range available for you</h1>
        <p className="mr-[1rem] xl:max-w-[65%]">Whiteside Taxi Blackpool offer a wide variety of car manufacturers and models, all of which are of late model and immaculately presented. These vehicles can transport up to 4 people in comfort and include the spacious Ford Mondeo and reliable Skoda Octavia to the stylish and luxurious Skoda Superb. Estate vehicles and female drivers are available on request.</p>
      </section>
    </div>
    </div>
    
    <div className="w-screen bg-[#e7e3f1] py-[3rem] xl:py-[3rem] ">
      <div className="xl:flex xl:flex-row-reverse">
      <img src="./Images/cars/estate.png" alt="MPV and People Carriers"
      className="ml-[1rem] w-[234px] h-[98px] mb-[3rem] xl:w-[434px] xl:h-[160px] xl:mr-[15%] "></img>
      <section className="xl:ml-[15%] xl:flex xl:flex-col">
        <h1 className="ml-[1rem] xl:ml-[10%] text-2xl font-bold max-w-[45%] text-[#5b1ecd] mt-[3rem] mb-[8px]">MPV’s And People Carriers</h1>
        <p className="ml-[1rem] xl:ml-[10%] mr-[1rem] xl:max-w-[65%]">For groups of 5/6 clients we provide the premium quality of vehicles such as the Ford Galaxy, Ford CMax, VW Sharan and Dacia Jogger. All have ample room to relax and have exceptional safety records.</p>
      </section>
      </div>
    </div>

    <div className="w-screen py-[3rem] xl:py-[3rem]">
      <div className="xl:flex xl:flex-row]">
        <img src="./Images/cars/minibus.png" alt="Saloon car"
      className="mt-[2rem] ml-[1rem] w-[234px] h-[98px] mb-[3rem] xl:w-[434px] xl:h-[160px] xl:ml-[15%]"></img>
       <section className="ml-[1rem] xl:ml-[5rem]">
        <h1 className="text-2xl font-bold max-w-[45%] text-[#5b1ecd] mt-[3rem] mb-[8px]">Minibuses</h1>
        <p className="mr-[1rem] xl:max-w-[65%]">Our fleet of 8 seated minibuses comprise of several 5-star safety rated Ford Tourneos. These range from either brand new to just a few years old. The Tourneo has an excellent safety record and has ample room for comfortable, stylish transport for larger groups with luggage. Ideal for airport transfers and nationwide travel. All are immaculately presented and driven by friendly, helpful and professional drivers.</p>
      </section>
    </div>
    </div>
    
    </>
    
  );
}

export default OurFleet;
