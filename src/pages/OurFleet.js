import react from 'react';
import './OurFleet.css';


function OurFleet() {
    return (
        <>
        <div className="ourfleet-container">
    <section className="var1000-t-block">
      <h1>The Largest Fleet In The Area</h1>
      <p>
        Clean, reliable, and affordable—Whiteside Taxis offers more than just
        taxis. Experience premium
        <br />
        transportation with a trusted name in the industry.
      </p>
      <a className="var1000-button" href="{{url_for('home') }}">
        Book a Taxi
      </a>
    </section>
  </div>
  <div className="vehicle-container">
    <section className="var4308-l-con">
      <img
        src="{{url_for('static', filename='ourfleet/images/saloon.png') }}"
        className="var4308-image"
      />
    </section>
    <article className="var4308-r-con">
      <h3>Saloons – A range available for you</h3>
      <p>
        Whiteside Taxi Blackpool offer a wide variety of car manufacturers and
        models, all of which are of late model and immaculately presented. These
        vehicles can transport up to 4 people in comfort and include the
        spacious Ford Mondeo and reliable Skoda Octavia to the stylish and
        luxurious Skoda Superb. Estate vehicles and female drivers are available
        on request.
      </p>
    </article>
  </div>
  <div className="vehicle-container">
    <section className="var4308-l-con">
      <img
        src="{{url_for('static', filename='ourfleet/images/mpv.png') }}"
        className="var4308-image"
      />
    </section>
    <article className="var4308-r-con">
      <h3>MPV’s And People Carriers</h3>
      <p>
        For groups of 5/6 clients we provide the premium quality of vehicles
        such as the Ford Galaxy, Ford CMax, VW Sharan and Dacia Jogger. All have
        ample room to relax and have exceptional safety records.
      </p>
    </article>
  </div>
  <div className="vehicle-container">
    <section className="var4308-l-con">
      <img
        src="{{url_for('static', filename='ourfleet/images/minibus.png') }}"
        className="var4308-image"
      />
    </section>
    <article className="var4308-r-con">
      <h3>Minibuses</h3>
      <p>
        Our fleet of 8 seated minibuses comprise of several 5-star safety rated
        Ford Tourneos. These range from either brand new to just a few years
        old. The Tourneo has an excellent safety record and has ample room for
        comfortable, stylish transport for larger groups with luggage. Ideal for
        airport transfers and nationwide travel. All are immaculately presented
        and driven by friendly, helpful and professional drivers
      </p>
    </article>
  </div>
        </>
    );
}

export default OurFleet;