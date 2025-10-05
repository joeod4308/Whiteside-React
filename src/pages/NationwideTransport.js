import React, { useEffect, useRef, useState } from "react";
import './NationwideTransport.css';
import { Link } from 'react-router-dom';
import DownloadApp from '../components/DownloadApp/DownloadApp';

function NationwideTransport() {



return (
<>
<div className="test-con">
  <article className="testcon-text-b">
    <h3>From Whiteside Taxis Blackpool</h3>
    <h1>Nationwide Transport</h1>
    <p className="pbold">
      Let the Whiteside Taxis A-Team take care of your travel needs to Airports,
      Docks and addresses nationwide..
    </p>
    <p>
      Our A-Team is made up of a select group of our very best drivers and
      vehicles, ensuring you receive excellent customer service, every time. Our
      vehicles seat from 4 to 8 passengers and, subject to demand, are available
      at short notice. With Whiteside’s A-Team we operate on a low rate, fixed
      price structure, meaning you know the exact cost before the journey
      commences. The prices for our most popular journeys are listed here. For a
      competitive quote to anywhere else call us on{" "}
      <a href="tel:01253711611">01253 711 611</a> /{" "}
      <a href="tel:0800711611">0800 711 611</a> or click the chat bubble and
      have a webchat with one of our friendly, helpful team members
    </p>
  </article>
  <table>
    {" "}
    {/*Nationwide table*/}
    <tbody>
      <tr>
        <th>Prices To &amp; From</th>
        <th>1-4 Passengers</th>
        <th>5-8 Passengers</th>
      </tr>
      <tr>
        <td>Blackburn</td>
        <td>£54.00</td>
        <td>£68.00</td>
      </tr>
      <tr>
        <td>Bolton</td>
        <td>£65.00</td>
        <td>£87.00</td>
      </tr>
      <tr>
        <td>Burnley</td>
        <td>£68.00</td>
        <td>£90.00</td>
      </tr>
      <tr>
        <td>Lancaster</td>
        <td>£50.00</td>
        <td>£70.00</td>
      </tr>
      <tr>
        <td>Llandudno</td>
        <td>£165.00</td>
        <td>£219.00</td>
      </tr>
      <tr>
        <td>Morecambe</td>
        <td>£87.00</td>
        <td>£100.00</td>
      </tr>
      <tr>
        <td>Newcastle-Upon-Tyne</td>
        <td>£220.00</td>
        <td>£287.00</td>
      </tr>
      <tr>
        <td>Penrith</td>
        <td>£123.00</td>
        <td>£158.00</td>
      </tr>
      <tr>
        <td>Portsmouth</td>
        <td>£403.00</td>
        <td>£517.00</td>
      </tr>
      <tr>
        <td>Scarborough</td>
        <td>£224.00</td>
        <td>£289.00</td>
      </tr>
    </tbody>
  </table>
  <table>
    {" "}
    {/*Races table*/}
    <tbody>
      <tr>
        <th>Prices To &amp; From</th>
        <th>1-4 Passengers</th>
        <th>5-8 Passengers</th>
      </tr>
      <tr>
        <td>Aintree Racecourse</td>
        <td>£81.00</td>
        <td>£117.00</td>
      </tr>
      <tr>
        <td>Cartmel Races</td>
        <td>£98.00</td>
        <td>£130.00</td>
      </tr>
      <tr>
        <td>Chester</td>
        <td>£114.00</td>
        <td>£150.00</td>
      </tr>
      <tr>
        <td>Haydock Races</td>
        <td>£77.00</td>
        <td>£102.00</td>
      </tr>
    </tbody>
  </table>
  <table>
    {" "}
    {/*lakes table*/}
    <tbody>
      <tr>
        <th>Prices To &amp; From</th>
        <th>1-4 Passengers</th>
        <th>5-8 Passengers</th>
      </tr>
      <tr>
        <td>Coniston</td>
        <td>£111.00</td>
        <td>£146.00</td>
      </tr>
      <tr>
        <td>Grange-Over-Sands</td>
        <td>£92.00</td>
        <td>£119.00</td>
      </tr>
      <tr>
        <td>Kendal</td>
        <td>£84.00</td>
        <td>£107.00</td>
      </tr>
      <tr>
        <td>Keswick </td>
        <td>£143.00</td>
        <td>£185.00</td>
      </tr>
      <tr>
        <td>Skipton </td>
        <td>£80.00</td>
        <td>£105.00</td>
      </tr>
      <tr>
        <td>Windermere </td>
        <td>£96.00</td>
        <td>£126.00</td>
      </tr>
    </tbody>
  </table>
  <table>
    <tbody>
      <tr>
        <th>Prices to &amp; From</th>
        <th>1-4 Passengers</th>
        <th>5-8 Passengers</th>
      </tr>
      <tr>
        <td>Birmingham Airport</td>
        <td>£199.00</td>
        <td>£260.00</td>
      </tr>
      <tr>
        <td>East Midlands Airport</td>
        <td>£187.00</td>
        <td>£244.00</td>
      </tr>
      <tr>
        <td>Edinburgh Airport</td>
        <td>£254.00</td>
        <td>£335.00</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="container1">
  <section className="container2">
    <p className="text1">Long distance journeys booked by telephone
incur a surcharge – save money with Book Online</p>

<Link to="/bookonline" className="button1">Save Money and Book Online</Link>
  </section>
</div>
<DownloadApp />










</>
);
}

export default NationwideTransport;