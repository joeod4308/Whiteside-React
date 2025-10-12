import React, { useEffect, useRef, useState } from "react";
import './AirportTransfers.css';
import { Link } from 'react-router-dom';




function AirportTransfers() {
  

  return (
    <>
      <div className="flex bg-[#e7e3f1] h-auto p-4">
        <article className="ml-[15%] h-[fit-content] p-4">
        <h1 className="text-[36px] text-[#5b1ecd] font-semibold mb-4">Airport Transfers</h1>
        <p className="max-w-[45%] mb-8">If you need an airport transfer to or from Manchester Airport or Liverpool Airport at the best rates look no further than Whiteside Taxis Blackpool. We are The Airport Transfer Specialists trusted by thousands of customers every week, we won't let you down.</p>
        <Link to="/Book" className="flex justify-center items-center h-[fit-content] w-[fit-content] px-8 py-4 bg-transparent text-[#5b1ecd] border-[2px] border-solid border-[#5b1ecd] rounded-[8px] text-[18px] hover:bg-[#5b1ecd] hover:text-[white] hover:[transition:0.5s]">Book a Taxi</Link>
        </article>
      </div>

      <div className="svg-container">
        <h3>Container for svg when i get round to it</h3>
        </div>

        <div className="flex flex-col bg-[#e7e3f1] h-auto">
          <article className="ml-[15%] mr-[15%] max-w-[70%] pt-8 pb-8">
          <h3 className="text-[#ff39e5] text-[18px]">From Whiteside Taxis Blackpool</h3>
          <h1 className="text-[36px] text-[#5b1ecd] font-semibold">Airport Transfer Service</h1>
          <p className="p-1">If you need an airport transfer to or from <a href="./Pages/ManchesterAirport" className="no-underline text-[#ff39e5]">Manchester Airport</a> or <a href="./Pages/LiverpoolAirport" className="no-underline text-[#ff39e5]">Liverpool Airport</a> at the best rates look no further than Whiteside Taxis Blackpool, The Airport Transfer Experts.</p>
          <p className="p-1">At Whiteside Taxis, we offer more than just a competitive rates and a reliable, professional service focused on customer care. Utilising the latest technology, we make every step of the process, from booking, your pickup and drop off easier than ever, leaving you relaxed, stress free and ready to enjoy your destination.</p>
          <p className="p-1">With immaculately presented, modern hybrid vehicles, smart, uniformed drivers who are dedicated and focused on your customer care, simply book, sit back and leave the rest to us; safe in the knowledge that we have everything taken care of and won't let you down, so you can enjoy your arrival when you book with us.</p>
          
          <p><strong>Benefits of booking Airport Transfers with Whitesides</strong></p>
          <p>An exceptional airport transfer to or from Blackpool and the Fylde Coast demands more than simply arriving on time at a competitive price. Here are some of the services we offer to make your trip as relaxing as possible.</p>
          <p> <strong>Door to door service:</strong> With collection from the meeting point at the airport and taken straight to the front door of your home, accommodation, or transport links, providing assistance for your luggage, eliminates the fuss and stress from your journey.</p>
          <p><strong>Meet and greet at the terminal:</strong> Our personable, professional drivers will wait for you outside the airport grounds, please call our office (<a href="tel:01253711611">01253 711 611</a>) to inform the driver you have now cleared customs, picked up your luggage and are ready to be collected. They will then direct you to a meeting point, allowing you to quickly find your transfer and begin the journey. At Manchester Airport the driver will ask you to wait a designated point inside the terminal, then they will park up and come into the terminal, holding a name board, to meet you and assist you with your luggage back to their vehicle.</p>
          <p><strong>Storage for child seat for your return journey:</strong> When you book an airport transfer to or from Blackpool and the Fylde Coast with your child, we can store your child seat and ensure it is in the vehicle that picks you up on your return trip.</p>
          <p><strong>Security checked (DBS) and vetted drivers:</strong> We only work with professionals who have gone through thorough, nationally recognised background checks to ensure their suitability, trustworthiness and share our ethos in delivering exceptional customer service and care.</p>
          <p><strong>Reliable modern airport transfer vehicles:</strong> Our Airport Transfer Team only drive our newest model vehicles, many of them low emission hybrids that are kept to a high level of cleanliness and are immaculately presented. This large fleet is better maintained, more fuel efficient and environmentally friendly, are high spec so more comfortable, ensuring your journey is an excellent, enjoyable experience, every single time.</p>
          <p><strong>Cutting Edge Technology:</strong> At Whiteside Taxis, we are always innovating and implementing the latest tech on the market to improve punctuality and reliability, streamlining and enhancing the customer's experience to ensure we deliver a quality service, every time. With emailed receipts, WhatsApp Messages, Text Back and Push Notification to keep our passengers up to date with every step of their journey with us.</p>
          <p>We have invested in the latest Fully Automated Dispatch System and True Call Centre Voice Suite and a more user-friendly Web Booker. Our Mobile App is state of the art and our Web Chat software integration ensures a seamless, professional and exceptional experience when you travel with us.</p>
          <p>Pay your way, either online by cash or card, mobile app with native Apple or Google Pay, iClerk payment links can be text to you, and every driver will take cash or card in the taxi.</p>
          <p>You can Web Chat with us at any time and of course book with a good old-fashioned phone call. Our dedicated, friendly Call Centre Team are available 24/7 to happily deal with any aspect of your booking or enquiry. From our Home Workers, Call Centre Team, Accounts Department and Management Team; every member of the Whiteside 'family' is passionate about delivering exceptional customer care and service on every single trip. That's what sets us apart from other airport transfer firms.</p>
          </article>
          </div>

          <div className="flex flex-col justify-center items-center h-auto bg-[white] pt-8 pb-8">
            <section className="flex flex-col justify-center items-center w-[70%] h-[fit-content] p-4 bg-[#e7e3f1] rounded-[8px] border-[0] border-solid border-[transparent] mt-8">
            <h3 className="text-[24px] font-semibold text-[#5b1ecd]">Save up to £5 per Airport Transfer journey when booking online – click, book & save!</h3>
            <div className="flex flex-row gap-4">
              <Link to={"/ManchesterAirport"} className="flex justify-center items-center h-[fit-content] w-[fit-content] px-8 py-4 bg-transparent !text-[#5b1ecd] border-[2px] border-solid border-[#5b1ecd] rounded-[8px] hover:bg-[#5b1ecd] hover:!text-[white] hover:[transition:0.5s]">Manchester Airport Transfers</Link>
              <Link to={"/LiverpoolAirport"} className="flex justify-center items-center h-[fit-content] w-[fit-content] px-8 py-4 bg-transparent !text-[#5b1ecd] border-[2px] border-solid border-[#5b1ecd] rounded-[8px] hover:bg-[#5b1ecd] hover:!text-[white] hover:[transition:0.5s]" >Liverpool Airport Transfers</Link>
            </div>
            </section>

            <section className="flex flex-col justify-center items-center w-[70%] h-[fit-content] p-4 bg-[#e7e3f1] rounded-[8px] border-[0] border-solid border-[transparent] mt-8">
            <h3 className="text-[24px] font-semibold text-[#5b1ecd]">Flight Information for Airport Transfer</h3>
            <div className="flex flex-row gap-4">
              <a href="https://www.manchesterairport.co.uk/flight-information/" target="blank" className="flex justify-center items-center h-[fit-content] w-[fit-content] px-8 py-4 bg-transparent !text-[#5b1ecd] border-[2px] border-solid border-[#5b1ecd] rounded-[8px] hover:bg-[#5b1ecd] hover:!text-[white] hover:[transition:0.5s]">Manchester Airport Flight Information</a>
              <a href="https://www.liverpoolairport.com/flights/arrivals-and-departures" target="blank" className="flex justify-center items-center h-[fit-content] w-[fit-content] px-8 py-4 bg-transparent !text-[#5b1ecd] border-[2px] border-solid border-[#5b1ecd] rounded-[8px] hover:bg-[#5b1ecd] hover:!text-[white] hover:[transition:0.5s]">Liverpool Airport Flight Information</a>
            </div>
            </section>
          </div>

        <div className="flex flex-col bg-[#e7e3f1] h-auto">
          <article className="mt-12 mb-12 ml-[15%] mr-[15%]">
            <h1 className="text-[36px] text-[#5b1ecd] font-semibold">Make An Airport Transfer booking</h1>
            <p>Booking your airport transfer to or from Blackpool and the Fylde Coast is now simpler than ever. Our new Web Booker service is fast and easy to navigate so you can quickly reserve any journey, whether a local trip, long-distance nationwide journey or airport transfer, and save at least £5.00 on any distance travel with our online discount.</p>
            <p>Visit our <Link to={"/Book"}>Online Booking</Link> page or <Link to={"/App"}>download our mobile app</Link> and start saving money now, 24/7, 365 days a year.</p>
            <p>A small surcharge is attracted to the listed price when you book our service on Christmas Eve, Christmas Day, Boxing Day, New Years Eve and New Years Day. You may also incur an extra cost when travelling at peak times and early hours and Bank Holidays for local trips.</p>
            <p>Please try to book 12 hours in advance of your journey and directly through our Call Centre or Web Booker, rather than with your driver, for all long-distance travel</p>
            <p>Long distance journeys between 11pm and 8am Monday to Sunday - £10.00 Surcharge.</p>
            <p>For outbound journeys we recommend allowing up to 2 hours travel time to Manchester and Liverpool Airports in case there is heavy traffic or any unforeseen circumstances.</p>
            <p>Long distance journeys booked by telephone incur a surcharge – save money with Book Online – Whiteside Taxis Blackpool.</p>
            <Link to={"/Book"} className="flex justify-center items-center h-[fit-content] w-[fit-content] px-8 py-4 bg-transparent !text-[#5b1ecd] border-[2px] border-solid border-[#5b1ecd] rounded-[8px] hover:bg-[#5b1ecd] hover:!text-[white] hover:[transition:0.5s] no-underline text-[#5b1ecd] ">Save Money & Book Online</Link>
          </article>
        </div>

  <div className="container1">
  <section className="container2">
    <p className="text1">Start your career with Whiteside Taxis – Airport Transfers</p>
<Link to="/CareerPage" className="button1">Click to find out more</Link>
  </section>
</div>

    </>
  );
}

export default AirportTransfers;
