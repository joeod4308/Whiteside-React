import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

function SaveMoney () {
    return (
        <>
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
        </>
    );
}
export default SaveMoney;