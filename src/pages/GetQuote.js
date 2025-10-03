// src/pages/GetQuote.js
import React from 'react';
import './GetQuote.css'
import DownloadApp from '../components/DownloadApp/DownloadApp'

function GetQuote() {
  return (
    <div>
      <>
  <div className="quote-con">
    <article className="quote-text-block">
      <h1>Get A Quote</h1>
      <p>Ferry Transfers</p>
      <p>Airport Transfers From Just £80.00, when Booked Online</p>
      <p>
        Manchester &amp; Liverpool City Centres From Just £80.00, when Booked
        Online
      </p>
      <p>Nationwide Travel Competitive Fixed Rates</p>
      <p>Train Station Transfers</p>
      <a href="{{url_for('home') }}" className="book-b">
        Book a Taxi
      </a>
    </article>
  </div>
  <div className="info-con">
    <section className="info-con-text-block">
      <h3>Get Your Quote Today</h3>
      <h1>From Whiteside Taxis Blackpool</h1>
      <p>
        Our Quick Quote page is designed to give you an indication of our fixed
        prices from the local area in a clear and simple way. If you can’t find
        your pickup area or destination
        <br />
        in the dropdown, please Contact Us or use the chat bubble.
      </p>
    </section>
    <article className="info-blocks">
      <section className="info-blocks-inside">
        <h3>Vehicle Information</h3>
        <p>
          Our cars seat up to 4 passengers and their luggage. If you have
          additional luggage, particularly oversized items, you may wish to book
          a minibus, which incurs a higher cost. If in doubt, please have a web
          chat with one of our team via our chat bubble
        </p>
      </section>
    </article>
    <article className="info-blocks">
      <section className="info-blocks-inside">
        <h3>Booking &amp; Cancellation</h3>
        <p>
          Any booking that requires amendment or cancellation with a collection
          or drop-off over 20 miles from our office requires at least 36 hours’
          notice. To cancel a long-distance journey with less than 36 hours’
          notice, it is very important that you contact the call centre directly
          as we will have already allocated your booking to a driver and we need
          to inform them. Please call us on 01253 711 611 or free phone 0800 711
          611 .
        </p>
      </section>
    </article>
    <article className="info-blocks">
      <section className="info-blocks-inside">
        <h3>Minibuses &amp; Payment</h3>
        <p>
          Minibuses &amp; people carriers are subject to availability. If we
          cannot accommodate your request, we will send 2 cars instead. To make
          a booking for a people carrier or minibus, please do so by calling
          01253 711 611 and one of our friendly, helpful call centre team
          members will take your reservation. You can then pay by a payment link
          attached to the booking, and by cash or card in the vehicle.
        </p>
      </section>
    </article>
    <article className="info-blocks">
      <section className="info-blocks-inside">
        <h3>special Online Savings</h3>
        <p>
          Save at least £5 per airport journey when booking online – click, book
          &amp; save!
          <br />
          <br />
          Adding an extra pick-up? Call us first for the best price – we’ll
          still honour online savings!
        </p>
        <a href="{{url_for('home') }}" className="book-b1">
          Book a Taxi
        </a>
      </section>
    </article>
  </div>
  <DownloadApp />
</>

    </div>
  );
}

export default GetQuote;
