// src/pages/AppPage.js
import React from 'react';
import './AppPage.css'; // assuming you have styles
import DownloadApp from '../components/DownloadApp/DownloadApp'
function AppPage() {
  return (

      <div>
          <DownloadApp />
      <div className="why-container">
        <h3>Why choose Whiteside Taxis?</h3>
        <section className="why-grid">
          {[
            'Fast and easy way to book',
            'Share your journey route',
            'Live location updates',
            'Push notifications',
            'Journey receipts',
            'Save money',
          ].map((text, index) => (
            <div className="why-item" key={index}>
              <img src="/Images/feature-icon.png" className="why-image" alt="" />
              <h2>{text}</h2>
            </div>
          ))}
        </section>
      </div>

      <div className="faq-con">
        <article className="faq-title-p">
          <h3>FAQ'S</h3>
          <h1>Frequently Asked Questions</h1>
        </article>
        <section className="faq-grid">
          <details>
            <summary>How to get a discount with our mobile app?</summary>
            <p>
              Local bookings get at least 10% off. Long-distance journeys save at least £5.00.
            </p>
          </details>
          <details>
            <summary>What are the benefits of using our mobile app?</summary>
            <p>
              Book in 3 seconds, pay by card or Apple/Google Pay, get notifications and updates, share your journey, and more.
            </p>
          </details>
          <details>
            <summary>How secure is my data?</summary>
            <p>
              Data is encrypted and stored across Amazon's secure European data centers.
            </p>
          </details>
          <details>
            <summary>Can I use the app offline?</summary>
            <p>No. A data or Wi-Fi signal is required to use the app.</p>
          </details>
          <details>
            <summary>Is our mobile app easy to set up?</summary>
            <p>
              Yes! Enter your name and email, verify by text, and you're ready to book.
            </p>
          </details>
          <details>
            <summary>Does booking via app give other benefits?</summary>
            <p>
              Yes, app users are given priority at busy times for faster pickups.
            </p>
          </details>
          <details>
            <summary>Is our mobile booking app free?</summary>
            <p>Yes, it's 100% free on the App Store and Google Play.</p>
          </details>
          <details>
            <summary>How do you book a minibus on the app?</summary>
            <p>
              Currently, the app doesn’t support this. Please call 01253 711 611 to book a minibus.
            </p>
          </details>
        </section>
      </div>
    </div>
  );
}

export default AppPage;
