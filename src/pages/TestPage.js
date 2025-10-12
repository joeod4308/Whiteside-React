import React, { useEffect, useRef, useState } from "react";
import './TestPage.css';
import { Link } from 'react-router-dom';

function TestPage() {
  

  return (
    <>
      <div className="h-auto py-[2rem] bg-[#e7e3f1]">
        <section className="ml-[15%] mb-[3rem] flex flex-col">
          <h1 className="text-[36px] text-[#5b1ecd] font-semibold mb-[2rem]">Whiteside Taxis</h1>
          <p>Serving Blackpool and Fylde Coast for over 145 years</p>
          <p>A Family Run Business since 1880</p>
          <p>Clean, Reliable, Affordable</p>
          <p>Proud to be the oldest taxi company in the United Kingdom</p>
          <p>Four Generations of Experience in Reliable Transport and Customer Care</p>
          <Link to={"/Book"} className=" mt-[1rem] rounded-[8px] border-2 border-solid border-[#5b1ecd] w-[fit-content] h-[fit-content] px-[2rem] py-[1rem] bg-transparent hover:bg-[#5b1ecd] hover:text-[white] hover:[transition:0.5s]" >Book a Taxi</Link>
        </section>
      </div>

      <div className="h-auto flex flex-row mt-[3rem] mb-[3rem] ">
        <img src='./Images/history/thomas-whiteside.avif' alt="Thomas Whiteside" className="rounded-[50%] w-[400px] h-[400px] ml-[15%]"></img>
        <div className="flex justify-center items-start flex-col  ">
        <h1 className="text-[36px] text-[#5b1ecd] flex jusify-center items-center ml-[2rem] font-semibold mb-[1rem]">Whiteside Taxi History Through Time</h1>
        <p className="ml-[2rem] mr-[15%]">The company was founded by Thomas Whiteside in 1880 and is the oldest taxi company in England. The story goes that he won a horse’s harness in a raffle. He then borrowed a horse and cart from his uncle and started a haulage business and as the saying goes, the rest is history…</p>
        <p className="ml-[2rem] mr-[15%]">Since those humble beginnings Whiteside Taxis has grown, and is the largest taxi company in the Fylde with our new purpose built offices situated in the heart of St. Annes.</p>
        </div>
      </div>

      <div className="h-auto flex flex-row bg-[#e7e3f1]">
      <section className="w-[50%] flex mt-[2rem] mb-[2rem]">
        <article className="ml-[15%] flex justify-center items-center flex-col">
        <h3 className="text-[36px] text-[#5b1ecd] font-semibold" >About Whiteside Taxis</h3>
        <p>We operate a clean, modern fleet of over 85 late model vehicles using the latest technology in computer dispatch systems to ensure optimum reliability and punctuality.</p>
        <p>By investing in the latest technology on the market and constantly searching for innovative software that can improve the services we provide to our customers and drivers has ensured we are always ahead of the competition.</p>
        <p>Our dispatch system offers Text Back, clients can now manage their taxi reservations with Web Booker, pay by card and track their vehicle with our booking app and receive email and text confirmations/receipts for their Blackpool Taxi bookings.</p>
        </article>
        </section>

        <div className="w-[50%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/whiteside-company-2.avif" className="w-[620px] h-[450px] rounded-[8px] ml-[15%]"></img>
        </div>
        </div>
    </>
  );
}

export default TestPage;
