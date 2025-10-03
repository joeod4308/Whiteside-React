import './DownloadApp.css';
import { Link } from 'react-router-dom';

function DownloadApp() {
    return (
        <div>
            <div className='download-app-con'>
            <section className='download-left'>
                <img src='./Images/phone.avif' className='phone-logo' alt='Whiteside Taxis Mobile app'></img>
            </section>
            <section className='download-right'>
            <div className='download-r-t-b'>
                <h3 className='downloadh3'>Download Mobile App</h3>
                <h1 className='downloadh1'>Quick, EASY & Reliable</h1>

                <p className='whitespace-pre-line text-black mb-2'></p>
    {`Booking a taxi in Blackpool and the Fylde Coast has never been easier. With the
Whiteside Taxis app, you can book a ride in seconds and track your taxi in real-
time. No more waiting or wondering when your cab will arrive—everything is at
your fingertips.`}

                <p className='whitespace-pre-line text-black mb-2'></p>
    {`Setting up is simple. Just register your details, book your taxi, and pay securely
with a debit or credit card. If plans change, you can cancel your booking instantly
through the app—no hassle, no delays.`}

                <p className='whitespace-pre-line text-black mb-2'></p>
    {`Download the Whiteside Taxis app today and enjoy a faster, smarter way to
travel in Blackpool.`}

                <div className='pay-links-row'>
                    <a href='https://apps.apple.com/gb/app/whiteside-taxis/id1543029570' target='blank'>
                    <img src='./Images/pay-links/app-store.avif' className='store' alt='Download on the App store'></img>
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=uk.co.whitesidetaxis&hl=en' target='blank'>
                    <img src='./Images/pay-links/play-store.avif' className='store' alt='Download on the Play store'></img>
                    </a>
                    <img src='./Images/pay-links/apple-pay.avif' className='pay' alt='Pay using Apple Pay'></img>
                    <img src='./Images/pay-links/gpay.avif' className='pay' alt='Pay using Google Pay'></img>
                </div>
            </div>
            </section>
            </div>
        </div>
    );
}

export default DownloadApp
