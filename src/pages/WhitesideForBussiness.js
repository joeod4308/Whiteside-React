import React, { useEffect, useRef, useState } from "react";
import './WhitesideForBussiness.css';
import { Link } from 'react-router-dom';




function WhitesideForBussiness() {
  
  const [pin, setPin] = useState('');

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // remove non-digits
    if (value.length <= 4) {
      setPin(value);
    }
  };

  return (
    <>
    <div className="con-1">
      <article className="art-1">
        <h3 className="art-1-h3" >Set Up an Account Today</h3>
        <p className="art-1-p" >Trust Whitesides for all your business transport needs. Contact us today for business-to-business inquiries and discover how we can help streamline your transportation requirements.</p>
      <a href="mailto:accounts@whitesidetaxis.co.uk" className="art-1-a" >Register Account</a>
      </article>
    </div>

    <div className="con-2">
      <section className="sec-1">
        <h3 className="sec-1-h3">Register an account today</h3>
        <p className="sec-1-p">We would love to welcome your business on board and register an account today! If you are a hotel, pub, club, bar, shop, restaurant, casino, dentist, doctor’s surgery or you fit into any other business category you can trust Whiteside Taxis to offer great service and reliability.</p>
        <p className="sec-1-p">We have a large fleet of over 85 smart, modern vehicles which utilise the latest technology to ensure reliability. All our vehicles are immaculate and driven by uniformed drivers wearing a company tie. We believe this provides a great first impression of professionalism for your customer which reflects on your own business. All our vehicles are of late model with many less than 2 years old and are ideal for corporate travel.</p>
        <p className="sec-1-p">Over the past five years, Whiteside Taxis has made a significant commitment to sustainability by investing in the reduction of our carbon footprint. As part of our ongoing efforts, we have successfully transitioned 85% of our fleet to electric hybrid vehicles, ensuring lower emissions and a smaller environmental impact. This year, we are taking our environmental initiatives further by installing a rapid EV charger at our head offices, enabling the seamless integration of fully electric vehicles into our fleet. Once operational, this charger will facilitate the addition of electric vehicles, allowing our clients to enjoy clean, zero-emissions travel. When you choose Whiteside Taxis, you can rest assured that your business journeys are contributing to a greener, more sustainable future.</p>
        <p className="sec-1-p">All major credit cards are accepted and a monthly company account can be arranged on request. Our client portfolio includes corporates such as BNFL, AXA Insurance, British Aerospace and IBM; many of whom have been satisfied customers for decades. We are also proud to be the preferred taxi company for smaller businesses throughout the Fylde and Blackpool who benefit from our exceptional reliability and competitive rates.</p>
      </section>
      </div>

      <div className="con-3">
        <h3 className="con-3-h3">Want To Setup A Business Account Then Please Provide Your Details</h3>
        <p className="con-3-p">If you would like to setup a business account then please complete this form so we can get you setup on our systems.</p>
      <section className="grid-1">
        <label htmlfor="name" className="grid-1-label">First Name
        <input type="text" id="name" name="name" className="grid-1-input" placeholder="First Name" required autoComplete=""/>
        </label>

        <label htmlfor="surname" className="grid-1-label">Surname
        <input type="text" id="surname" name="surname" className="grid-1-input" placeholder="Surname" required autoComplete=""/>
        </label>

        <label htmlfor="Company Registration NumberR" className="grid-1-label">COMPANY REGISTRATION NUMBER
        <input type="text" id="Company-Registration-Number" name="Company Registration Number" className="grid-1-input" placeholder="Company Registration Number" required autoComplete=""/>
        </label>

        <label htmlfor="Company Name" className="grid-1-label">COMPANY NAME
        <input type="text" id="Company-Name" name="Company Name" className="grid-1-input" placeholder="Company Name" required autoComplete=""/>
        </label>

        <label htmlfor="bussiness address" className="grid-1-label">BUSSINESS ADDRESS
        <input type="text" id="bussiness-address" name="bussiness address" className="grid-1-input" placeholder="Bussiness Address" required autoComplete=""/>
        </label>

        <label htmlfor="email" className="grid-1-label">EMAIL
        <input type="email" id="email" name="email" className="grid-1-input" placeholder="Email" required autoComplete=""/>
        </label>

        <label htmlfor="phone number" className="grid-1-label">PHONE NUMBER
        <input type="tel" id="phone-number" name="phone number" className="grid-1-input" placeholder="Phone Number" required autoComplete=""/>
        </label>

        <label htmlfor="other phone number" className="grid-1-label">OTHER PHONE NUMBER
        <input type="tel" id="other-phone number" name="other phone number" className="grid-1-input" placeholder="Other Phone Number" required autoComplete=""/>
        </label>

        <label htmlfor="password number" className="grid-1-label">PASSWORD NUMBER
        <input type="password" inputMode="numeric" maxLength="4" value={pin} id="password number" name="password number" className="grid-1-input" placeholder="Password Number up to 4 numbers" onChange={handleChange} autoComplete=""/>
        </label>

        <label htmlfor="preferred account refrence" className="grid-1-label">PREFERRED ACCOUNT REFERENCE
        <input type="text" id="preferred-account-refrence" name="preferred account refrence" className="grid-1-input" placeholder="Preferred Account Refrence" required autoComplete=""/>
        </label>
      </section>
      <button className="grid-1-button" type="submit">Submit</button>
      </div>

      <div className="con-4">
        <h3 className="con-4-h3">Want To Setup A Personal Account Then Please Provide Your Details</h3>
        <p className="con-4-p">If you would like to setup a personal account then please complete this form so we can get you setup on our systems.</p>

      <section className="grid-2">
        <label htmlfor="name" className="grid-2-label">First Name
        <input type="text" id="name" name="name" className="grid-2-input" placeholder="First Name" required autoComplete="name"/>
        </label>

        <label htmlfor="surname" className="grid-2-label">Surname
        <input type="text" id="surname" name="surname" className="grid-2-input" placeholder="Surname" required autoComplete="family-name"/>
        </label>

        <label htmlfor="address" className="grid-2-label">ADDRESS
        <input type="text" id="address" name="address" className="grid-2-input" placeholder="Address" required autoComplete="street-address"/>
        </label>

        <label htmlfor="email" className="grid-2-label">EMAIL
        <input type="email" id="email" name="email" className="grid-2-input" placeholder="Email" required autoComplete="email"/>
        </label>

        <label htmlfor="phone number" className="grid-2-label">PHONE NUMBER
        <input type="tel" id="phone-number" name="phone number" className="grid-2-input" placeholder="Phone Number" required autoComplete="tel"/>
        </label>

        <label htmlfor="other phone number" className="grid-2-label">OTHER PHONE NUMBER
        <input type="tel" id="other-phone number" name="other phone number" className="grid-2-input" placeholder="Other Phone Number" required autoComplete="tel"/>
        </label>

        <label htmlfor="password number" className="grid-2-label">PASSWORD NUMBER
        <input type="password" inputMode="numeric" maxLength="4" value={pin} id="password number" name="password number" className="grid-2-input" placeholder="Password Number up to 4 numbers" onChange={handleChange} autoComplete="new-password"/>
        </label>

        <label htmlfor="preferred account refrence" className="grid-2-label">PREFERRED ACCOUNT REFERENCE
        <input type="text" id="preferred-account-refrence" name="preferred account refrence" className="grid-2-input" placeholder="Preferred Account Refrence"/>
        </label>
      </section>
      <button className="grid-1-button" type="submit">Submit</button>
      </div>

      <div className="con-5">
        <h1 className="con-5-h1">Reviews</h1>
        <section className="sec-2">
          <item className="sec-2-item">
            <img src='../Images/stars.avif' alt='5 star review' className='sec-2-item-img'/>
            <p className="sec-2-item-p">Whiteside’s provides me with a quality service using a modern fleet of cars and extremely polite and diligent drivers, I always feel comfortable and safe on my journeys to and from the airport. Also as a frequent user the benefit of having an account with Whiteside’s means that I can track my transport costs online and also print off statements for our records.
Thank you for an exceptionally professional service.</p>
          <h3 className="sec-2-item-h3">Karl Dawson</h3>
          <p className="sec-2-item-p">System Acceptance Manager, Banthai Restaurant</p>
          </item>

          <item className="sec-2-item">
             <img src='../Images/stars.avif' alt='5 star review' className='sec-2-item-img'/>
            <p className="sec-2-item-p">Our company ‘AXA’ have used Whitesides Taxi Company for many many years for journeys in the local area and also for airport transfers. We have always found them to be very reliable and trustworthy. All the staff are competent and pleasant and always keen to help with any queries or issues we may have.
I would not hesitate to recommend Whitesides to anyone.</p>
         <h3 className="sec-2-item-h3">Susan Orme</h3>
          <p className="sec-2-item-p">Office Service Co-ordinator, AXA Technology Services</p>
        </item>

          <item className="sec-2-item">
             <img src='../Images/stars.avif' alt='5 star review' className='sec-2-item-img'/>
            <p className="sec-2-item-p">We have been a commercial client of Whitesides for a number of years, using the service mainly for Airport Transfers. Whitesides offer a reliable, value for money service with professional, presentable and punctual drivers with an excellent standard of vehicle. They are constantly investing in new technologies to make the service more effective and efficient.
An overall great service.</p>
            <h3 className="sec-2-item-h3">Jayne Mizon</h3>
            <p className="sec-2-item-p">HR Manager, Kepak Convenience Foods</p>
          </item>
        </section>
      </div>
    </>
  );
}

export default WhitesideForBussiness;
