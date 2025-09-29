import React from 'react';
import './ContactUs.css';
function ContactUs() {
  return (
    <div>
      <div className="contactus-container">
        <section className="base-container">
          <article className="based-container">
            <h1>Where we are based</h1>
            <h3>Address</h3>
            <p className='whitespace-pre-line text-black mb-2'></p>
            {`The Old Station Yard, St Andrews Road North,
          St Annes On Sea, FY8 2JE`}  {/* Does not work for some reason */}
            <h3>Phone</h3>
            <a href="tel:01253711611">01253 711 611</a>
            <a href="tel:0800711611">0800 711 611</a>
            <h3>Accounts Department</h3>
            <a href="tel:01253978384">01253 978384</a>
            <h3>Email</h3>
            <a href="mailto:bookings@whitesidetaxis.co.uk">bookings@whitesidetaxis.co.uk</a>
            <article className="disclaimer">
              All calls are recorded for training purposes when you contact us.
            </article>
          </article>
        </section>

        <section className="enquiry-container">
          <form className="form-block">
            <h1>Contact Whiteside Today</h1>
            <p>
              Contact us today! Please ensure you complete the form in full and
              we will aim to respond to your enquiry as soon as possible.
            </p>
            <p>Name</p>
            <input type="text" name="name" placeholder="Your name" required />
            <p>Phone</p>
            <input type="tel" name="phone" placeholder="Your phone number" required />
            <p>Email</p>
            <input type="email" name="email" placeholder="Your email address" required />
            <p>Message</p>
            <textarea name="message" rows="5" placeholder="Your message" required></textarea>
            <button className="submit-form-butt">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
