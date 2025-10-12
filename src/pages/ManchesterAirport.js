import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import SaveMoney from '../components/SaveMoney/SaveMoney';
import CareerHero from '../components/CareerHero/CareerHero';

function ManchesterAirport () {
    return (
        <>
            <div className="flex flex-col bg-[#e7e3f1] h-auto">
        <section className="flex flex-col ml-[15%] mr-[15%] pt-12 pb-12 text-left">
          <h1 className="text-[36px] font-semibold text-[#5b1ecd] mb-[10px]">Airport Transfers To Manchester Aiport</h1>
          <p className="p-1">If you need a taxi to Manchester Airport at a competitive rate look no further than Whitesides Taxis Blackpool. Whitesides Taxis Blackpool provides you with the smartest cars, the most reliable drivers at competitive rates. Thus ensuring you arrive relaxed and stress free.</p>
          <Link to={"/Book"} className="flex justify-center items-center border-[2px] border-solid border-[#5b1ecd] text-[#5b1ecd] bg-transparent rounded-[8px] px-8 py-4 w-[fit-content] h-[fit-content] hover:bg-[#5b1ecd] hover:text-[white] hover:[transition:0.5s]">Book a Taxi</Link>
        </section>  
      </div>

      <div className="svg-container">
        <h1>Container for SVG when I eventually add them</h1>
      </div>

      <div className="flex flex-col h-auto pt-[3rem] pb-[3rem] bg-[#e7e3f1] ">
        <h1 className="text-[24px] font-semibold ml-[15%]">Save up to £5 per journey when booking online - click, book & save!</h1>
        <table className="ml-[15%]">
          <thead>
            <tr>
              <th>PRICE INCLUDES AIRPORT DROP OFF CHARGE</th>
              <th>1-4 PASS</th>
              <th>WHEN BOOKED ONLINE</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>BLACKPOOL TO MANCHESTER AIRPORT</td>
              <td>85.00</td>
              <td>80.00</td>
            </tr>

            <tr>
              <td>LYTHAM ST ANNES TO MANCHESTER AIRPORT</td>
              <td>85.00</td>
              <td>80.00</td>
            </tr>

            <tr>
              <td>POULTON TO MANCHESTER AIRPORT</td>
              <td>85.00</td>
              <td>80.00</td>
            </tr>

            <tr>
              <td>THORNTON & CLEVELEYS TO MANCHESTER AIRPORT</td>
              <td>85.00</td>
              <td>80.00</td>
            </tr>

            <tr>
              <td>WARTON & WREA GREEN TO MANCHESTER AIRPORT</td>
              <td>85.00</td>
              <td>80.00</td>
            </tr>

            <tr>
              <td>FRECKLETON & KIRKHAM TO MANCHESTER AIRPORT</td>
              <td>85.00</td>
              <td>80.00</td>
            </tr>

            <tr>
              <td>FLEETWOOD TO MANCHESTER AIRPORT</td>
              <td>98.00</td>
              <td>93.00</td>
            </tr>
          </tbody>
        </table>
        <div>
          <h1 className="text-[24px] font-semibold ml-[15%]">£25 Added for vehicles seating 5/8 passengers</h1>
          <table className="ml-[15%] mb-[1rem]">
          <thead className="bg-[#5b1ecd] text-[white] font-semibold">
            <tr className="table-2th">
              <td>PRICE INCLUDES THE AIRPORTS PICK UP AND CAR PARK CHARGE</td>
              <td>1-4 PASS</td>
              <td>WHEN BOOKED ONLINE</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MANCHESTER AIRPORT TO BLACKPOOL</td>
              <td>90.00</td>
              <td>85.00</td>
            </tr>

            <tr>
              <td>MANCHESTER AIRPORT TO LYTHAM ST ANNES</td>
              <td>90.00</td>
              <td>85.00</td>
            </tr>

            <tr>
              <td>MANCHESTER AIRPORT TO POULTON</td>
              <td>90.00</td>
              <td>85.00</td>
            </tr>

            <tr>
              <td>MANCHESTER AIRPORT TO THORNTON & CLEVELEYS</td>
              <td>90.00</td>
              <td>85.00</td>
            </tr>

            <tr>
              <td>MANCHESTER AIRPORT TO WARTON & WREA GREEN</td>
              <td>90.00</td>
              <td>85.00</td>
            </tr>

            <tr>
              <td>MANCHESTER AIRPORT TO FRECKLETON & KIRKHAM</td>
              <td>90.00</td>
              <td>85.00</td>
            </tr>

            <tr>
              <td>MANCHESTER AIRPORT TO FLEETWOOD</td>
              <td>103.00</td>
              <td>98.00</td>
            </tr>
          </tbody>
          </table>

          <div className="ml-[15%] mr-[15%]">
          <p>Once you have landed at Manchester Airport, collected your luggage and are ready to be collected, please call us on 01253 711 611 . You will be given the option of pressing ‘1’ to speak to the driver, or ‘0’ to speak to our Call Centre. Either is fine, however, it is probably more efficient to speak directly with your driver. We will then direct you to the meeting point near the terminal exit (please find the locations below). Our driver will then enter the airport, park up and meet you at the meeting point and assist you with your luggage back to their vehicle.</p>
          <p>Meeting Points</p>
          <p>Terminal 1 ~ WH Smiths</p>
          <p>Terminal 2 ~ Bureau de Change</p>
          <p>Terminal 3 ~ Bureau de Change</p>
          <p className="text-[18px] mb-[8px]">Thank you for travelling with Whiteside Taxis</p>
          <h3 className="text-[24px] font-semibold mt-[8px]">For vehicles seating 5/8 passengers, add £25</h3>
        </div>
        </div>
      </div>
      <div className="bg-white height-auto flex flex-col ml-[15%] pt-[3rem] pb-[3rem]">
        <h1 className="text-[36px] text-[#5b1ecd] font-semibold">Flight Information</h1>
        <a className="w-[fit-content] h-[fit-content] px-8 py-4 border-[2px] border-solid border-[#5b1ecd] rounded-[8px] text-[#5b1ecd] hover:bg-[#5b1ecd] hover:text-[white] hover:[transition:0.5s] " href="https://www.manchesterairport.co.uk/flight-information/" target="blank">Check Here For Flight Information</a>
      </div>
      <SaveMoney />
      <CareerHero />
        </>
    );
}
export default ManchesterAirport;