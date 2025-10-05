import React from "react";
import "./CareerPage.css"; 


function CareerPage() {
return (
<>
    <div className="career-container">
    <article className="var1000">
      <h3>
        Whiteside Taxis Career
        <br />
        Opportunities
      </h3>
      <p>Newest Company in Blackpool</p>
      <p>Largest Taxi Company In The Fylde</p>
      <p>Dedicated and Professional Team that cares about your enterprise</p>
      <p>
        Full Training, Support and Guidance provided for your Licence
        Application
      </p>
      <p>Fylde, Blackpool &amp; Wolverhampton Operators Licences</p>
      <a href="{{url_for('contactus') }}" className="jtb">
        Join Us Today
      </a>
    </article>
  </div>
  <div className="career-container">
    <section className="var1001">
      <item className="var1002">
        <img src="{{url_for('static', filename='career/images/#.png')}}" />
        <h3>Largest taxi company in the Fylde</h3>
      </item>
      <item className="var1002">
        <img src="{{url_for('static', filename='index/grid-images/dbs.png')}}" />
        <h3>
          Longest established
          <br />
          company in the country
        </h3>
      </item>
      <item className="var1002">
        <img src="{{url_for('static', filename='career/images/#.png')}}" />
        <h3>
          Badge cost refunded
          <br />
          after 6 weeks
        </h3>
      </item>
      <item className="var1002">
        <img src="{{url_for('static', filename='career/images/#.png')}}" />
        <h3>
          Full training and licence
          <br />
          application support
        </h3>
      </item>
      <item className="var1002">
        <img src="{{url_for('static', filename='career/images/#.png')}}" />
        <h3>
          Dedicated and
          <br />
          Professional Team
        </h3>
      </item>
    </section>
  </div>
  <div className="career-container">
    <article className="var1003">
      <h3>Start Your Whiteside Taxi Career Today...</h3>
      <p id="career" />
      <p id="career1" />
    </article>
    <section className="var1003-text-b">
      <h3>New Drivers</h3>
      <p>
        When you first get your Taxi badge, we advise that you start driving one
        of our company-owned vehicles. This will allow you to get a feel for the
        job, learn the areas, and understand the way the Taxi business works.
        You’ll need to be over 26 and hold a valid UK driving licence for 2
        years (3 years if you intend to get a Blackpool Private Hire badge). You
        will have a basic knowledge of Lytham St Annes and Blackpool’s main
        roads and show a willingness to provide great service – the rest we can
        teach you!
      </p>
      <p>
        For those that have little to no local knowledge of the area, applying
        for a Wolverhampton Private Hire Badge may be an option that suits you
        better. Full support and guidance will be provided for any badge you
        choose to apply for and our team are here to help you through every
        step. We work with the best Dispatch Software System on the market
        (iCabbi), which means not having great local knowledge is not an issue
        as it is integrated with Google Maps.
      </p>
    </section>
    <section className="var1003-text-b">
      <h3>Your Own Business</h3>
      <p>
        Whether you start driving for the company or join from another company,
        Whiteside Taxis is the right place to develop and grow your own
        enterprise. With thousands of bookings taken every week, and using the
        latest, cutting edge technology with multiple platforms for customers to
        reserve their journeys, you can earn more with us. And, after you have
        been with team Whitesides for 6 weeks, we will refund you the cost of
        your taxi badge by way of subscription relief
      </p>
    </section>
    <section className="var1003-text-b">
      <h3>Driver Packs</h3>
      <p>
        These packs contain all necessary documents along with a comprehensive
        list of all questions and answers. Also included are step by step
        instructions on how to apply for your badge, whether that is in Fylde,
        Blackpool or Wolverhampton. To get your pack please email
        accounts@whitesidetaxis.co.uk and we will send you an invite to visit
        us, so we can go through everything you will need to know first.
      </p>
    </section>
    <section className="var1003-text-b">
      <h3>Become a Taxi Driver</h3>
      <p>
        You will need a Private Hire or Hackney licence issued by Fylde Borough
        Council to drive on our Fylde fleet, a Private Hire Licence issued by
        Blackpool Council to drive on our Blackpool fleet and a Wolverhampton
        Private Hire Badge to drive on our Wolverhampton Fleet. We have put
        together this page to help you get started as we appreciate the process
        can be daunting to some, but don't worry, our experienced team are here
        to help you every step of the way
      </p>
    </section>
    <section className="var1003-text-b">
      <h3>Fylde Council / Blackpool Council / Wolverhampton Council Process</h3>
      <p>
        Taxi and Private Hire licences are only issued by the Council after the
        driver has been checked to ensure that they:
      </p>
      <ul>
        <li>Have a valid driving licence</li>
        <li>Are a fit and proper person</li>
        <li>Understand the relevant law</li>
      </ul>
      <p>
        All licensed drivers must wear an identification badge, which includes a
        photograph of the bearer, whilst on duty.
      </p>
      <p>
        To follow up on an existing enquiry you MUST contact either Fylde
        Borough Council, Blackpool Council and Wolverhampton Council (whichever
        council you made the application with). Should you require any
        assistance with any part of your application process, our team are
        always here to assist you.
      </p>
      <p>
        We can not advise on what effect, if any, previous convictions may have
        on your application. You should speak with the licencing teams at either
        Fylde, Blackpool or Wolverhampton Licencing about matters of these
        nature.
      </p>
    </section>
    <section className="var1004">
      <article className="var1004-left">
        <h3>Ready to get started</h3>
        <p>
          Contact our friendly, helpful team today to learn more about how you
          can become a part of the Whiteside family.
        </p>
      </article>
      <section className="var1004-right">
        <p>
          Call a member of our Management Team now on{" "}
          <a href="tel:01253978386">01253 978 386</a> or email{" "}
          <a href="mailto:accounts@whitesidetaxis.co.uk">
            accounts@whitesidetaxis.co.uk
          </a>{" "}
          and we will happy to help you with any questions you may have
        </p>
      </section>
    </section>
    <div className="var1003-text-b">
      <section className="var1005-left">
        <item className="seperator">
          <h2>Council Contact Details</h2>
          <h3>Fylde Borough Council</h3>
          <p>
            Phone: <a href="tel:01253658658">01253 658658</a>
          </p>
          <p>
            Fax: <a href="tel:01253713113">01253 713113</a>
          </p>
          <p>
            E-mail:{" "}
            <a href="mailto:licensing@fylde.gov.uk">licensing@fylde.gov.uk</a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://new.fylde.gov.uk/business/licensing/taxi-licensing/"
              target="blank"
            >
              new.fylde.gov.uk
            </a>
          </p>
          <p>
            Address: St Annes Town Hall, Lytham St Annes, Lancashire, FY8 1LW
          </p>
        </item>
        <h3>Wolverhampton Council</h3>
        <p>
          Phone: <a href="tel:01902551155">01902 551155</a>
        </p>
        <p>
          E-mail:{" "}
          <a href="mailto:elizabeth.gregg@wolverhampton.gov.uk">
            elizabeth.gregg@wolverhampton.gov.uk
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://www.wolverhampton.gov.uk/licences/taxi-licences"
            target="blank"
          >
            https://www.wolverhampton.gov.uk/licences/taxi-licences
          </a>
        </p>
        <p>
          Address: City of Wolverhampton Council, Chapel St, Bilston WV14 0PH
        </p>
      </section>
      <section className="var1005-right">
        <h3>Blackpool Council</h3>
        <p>
          Phone: <a href="tel:01253478570">01253 478570</a>
        </p>
        <p>
          E-mail:{" "}
          <a href="mailto:licensing@blackpool.gov.uk">
            licensing@blackpool.gov.uk
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://www.blackpool.gov.uk/Business/Licensing-and-permits/Taxis-landaus-and-private-hire/Hackney-carriage-and-private-hire-driver.aspx"
            target="blank"
          >
            blackpool.gov.uk
          </a>
        </p>
        <p>
          Address: Blackpool Council, Municipal Buildings, Corporation Street,
          Blackpool, FY1 1NF
        </p>
      </section>
    </div>
  </div>
  <div className="career1-container">
    <h1>Want To Join Then Start Your Setup</h1>
    <p>
      After you've had an informal meeting with us and you want to proceed and
      join our amazing team
      <br />
      please complete this form so we can get you setup on our systems.
    </p>
    <form className="setup-form">
      {/*Left side*/}
      <div className="form-left">
        <label htmlFor="name">FULL NAME:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Full Name"
          required=""
        />
        <label htmlFor="email">EMAIL:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required=""
        />
        <label htmlFor="other-phone">OTHER PHONE NUMBER:</label>
        <input
          type="text"
          id="other-phone"
          name="otherphone"
          placeholder="Other Phone Number"
          required=""
        />
        <label htmlFor="ethnicity">ETHNICITY:</label>
        <input
          tabIndex="text"
          id="ethnicity"
          name="ethnicity"
          placeholder="Your Ethnicity"
          required=""
        />
        <label htmlFor="badge-expiry">BADGE EXPIRY:</label>
        <input
          type="date"
          id="badge-expiry"
          name="badge-expiry"
          placeholder="Enter Badge Expiry Date"
        />
        <label htmlFor="dl-expiry">DRIVING LICENCE EXPIRY:</label>
        <input
          type="date"
          id="dl-expiry"
          name="dl-expiry"
          placeholder="Enter Licence Expiry Date"
          required=""
        />
        <label htmlFor="bank-name">BANK NAME:</label>
        <input
          type="text"
          id="bank-name"
          name="bank-name"
          required=""
          placeholder="Enter Bank Name"
        />
        <label htmlFor="account-number">ACCOUNT NUMBER:</label>
        <input
          type="text"
          id="account-number"
          name="account-number"
          placeholder="Enter Account Number"
          required=""
        />
      </div>
      {/*Right side*/}
      <div className="form-right">
        <label htmlFor="address">ADDRESS:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Your Address"
          autoComplete="street-address"
          required=""
        />
        <label htmlFor="phone">PHONE:</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Your Phone Number"
          required=""
        />
        <label htmlFor="gender">GENDER:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          required=""
          placeholder="Your Gender"
        />
        <label htmlFor="badge-no">BADGE NO:</label>
        <input
          type="text"
          id="badge-no"
          name="badge-no"
          placeholder="Enter Badge Number "
        />
        <label htmlFor="dl-no">DRIVING LICENCE NO:</label>
        <input
          type="text"
          id="dl-no"
          name="dl-no"
          required=""
          placeholder="Enter Driving Licence Number"
        />
        <label htmlFor="ni-no">NI NUMBER:</label>
        <input
          type="text"
          id="ni-no"
          name="ni-no"
          required=""
          placeholder="Enter NI Number"
        />
        <label htmlFor="sort-code">SORT CODE:</label>
        <input
          type="text"
          id="sort-code"
          name="sort-code"
          required=""
          placeholder="Enter Sort Code"
        />
        <label htmlFor="dob">DATE OF BIRTH:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          required=""
          placeholder="Enter Date Of Birth"
        />
      </div>
    </form>
    <div className="setup-butt-con">
      <button className="setup-butt">SUBMIT</button>
    </div>
  </div>
</>

        );
    }

    export default CareerPage;