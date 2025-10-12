import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

function CompanyInformation() {
  

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

        <div className="h-auto flex flex-row">
          <section className="w-[45%] flex mt-[2rem] mb-[2rem]">
            <img src="./Images/History/whiteside-company-1.avif" className="w-[620px] h-[450px] rounded-[8px] ml-[15%]"></img>
          </section>
          <section className="w-[55%] flex mt-[2rem] mb-[2rem]">
            <article className="flex justify-center items-start flex-col mr-[15%]">
              <h3 className="text-[36px] text-[#5b1ecd] font-semibold" >The Story So Far…</h3>
              <p>Successfully run by the Whiteside family for four generations, our philosophy is to provide a dependable service with smart, immaculate cars, uniformed drivers at a competitive price. You can expect an immaculately presented Whiteside vehicle on time, every time and our average response time, from the time the booking is made, to the arrival of your taxi is approximately 2 minutes!</p>
              <p>We are the only taxi company in the North West to adopt a full uniform which includes collared shirt and company tie. Within the trade we have an excellent reputation for superior vehicles, better, smarter drivers with much more attention to customer care.</p>
              <p>Our friendly staff are waiting to take your enquiry or booking 24 hours a day, 7 days a week. Or email your details to: <a href="mailto:bookings@whitesidetaxis.co.uk" className="text-[#ff39e5]">bookings@whitesidetaxis.co.uk</a></p>
              <p className="text-[#ff39e5] mt-[4px]">“Whiteside Taxis is a family-owned company with over 145 years experience in offering the utmost customer care, comfort, and reliability”.</p>
            </article>
          </section>
        </div>

        <div className="h-auto flex flex-col gap-[2rem] bg-[#e7e3f1]">
          <p className="flex justify-center item-center text-[36px] text-[#5b1ecd] font-semibold mt-[3rem]">Whiteside Taxis Timeline</p>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/thomas-whiteside.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">Thomas Whiteside - 1861 ~ 1908 Founder</p>
        </div>

       <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-2.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">Whiteside's Hansom Cabs working the rank in Lytham centre</p>
        </div>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-3.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">Whiteside's men and horses working hard to drag the town's lifeboat out to sea to save lives</p>
        </div>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-4.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">Whiteside Taxis first offices at 10 Park Road, St. Annes with stables at the back and living quarters for our team of horsemen</p>
        </div>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-5.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">Whiteside Taxis hansom cabs are replaced with the internal combustion engine motor vehicles</p>
        </div>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-6.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">The 70's brings more modern vehicles and in car radio communication so our drivers no longer have to drive back to the base for work</p>
        </div>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-7.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">The 1970's to 80's and team Whiteside is growing</p>
        </div>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-8.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">The 80's and we operate from a portacabin at our current site, at The Station Yard, St. Annes and make acquisitions of some of our competitors, AAA Taxis and Towlers</p>
        </div>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-9.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">The 1980's to 90's brings in basic computer technology to replace magnet boards, better vehicles and standard for a faster service for our customers</p>
        </div>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-10.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">From 2000 to 2020 we built and moved into a state of the art purpose built office, replacing the old portacabin, and invested in the latest technology to ensure a reliable and prompt service; using a cloud based dispatch system, call centre phone suite, and full automation, mobile app and web booker.</p>
        </div>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-11.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">Diesel and petrol engine vehicles are replaced with clean, modern more environmentally friendly hybrid electric/petrol vehicles.</p>
        </div>

        <div className="flex flex-row items-center ml-[15%] mt-[2rem] mb-[2rem]">
          <img src="./Images/History/timeline-12.avif" className="rounded-[8px] w-[320px] h-[180px]"></img>
          <p className="ml-[2rem] rounded-[8px] bg-[white] w-[800px] h-[fitcontent] py-[1rem] px-[2rem] font-semibold [border-left:6px_solid_hotpink] ">Currently being installed is the first of many rapid EV chargers onsite at The Old Station Yard...the next step, we go full EV electric</p>
        </div>
        </div>

    </>
  );
}

export default CompanyInformation;
