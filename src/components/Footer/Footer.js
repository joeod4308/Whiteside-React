import './Footer.css';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function Footer () {
    return (
        <footer>
            <div className='h-auto bg-[#5b1ecd] flex flex-col justify-center items-center'>
            <section className='grid grid-cols-[repeat(5,_300px)] text-[black] gap-8'>

            <div className='h-auto text-[white] p-4 rounded-[80px] w-[300px]'>
                <img src='./Images/white-logo.avif' alt='Whiteside Taxis' className='w-[224px] h-[64px] mb-4'></img>
                <h3 className='text-[20px] font-medium'>ADDRESS</h3>
                <p className='whitespace-pre-line text-white'>
  {`The Old Station Yard, St Andrews
Road North,
St Annes On Sea FY8 2JE`}
</p>
                <h3 className='text-[20px] font-medium'>PHONE</h3>
                <a href='tel:01253711611'>01253 711 611</a>
                <br></br>  {/* I would imagine this needs replacing withsomethinng less harsh to screen readers */}
                <a href='tel:0800711611'>0800 711 611</a>


                <h3 className='text-[20px] font-medium'>EMAIL</h3>
                <a href='mailto:bookings@whitesidetaxis.co.uk'>bookings@whitesidetaxis.co.uk</a>
            </div>


            <div className='h-auto text-[white] p-4 rounded-[80px] w-[300px]'>
                <h3 className='text-[20px] font-medium'>AREAS WE COVER</h3>
                <ol>
                    <li><a href='#'>Blackpool</a></li>
                    <li><a href='#'>Manchester City Centre</a></li>
                    <li><a href='#'>Liverpool City Centre</a></li>
                    <li><a href='#'>Lytham St Annes</a></li>
                    <li><a href='#'>Kikrham</a></li>
                    <li><a href='#'>Warton</a></li>
                    <li><a href='#'>Freckleton</a></li>
                    <li><a href='#'>Wesham</a></li>
                    <li><a href='#'>Wrea Green</a></li>
                    <li><a href='#'>Ansdell</a></li>
                    <li><a href='#'>Fylde Coast</a></li>
                </ol>
            </div>


            <div className='h-auto text-[white] p-4 rounded-[80px] w-[300px]'>
                <h3 className='text-[20px] font-medium'>AIRPORT TRANSFERS</h3>
                <ol>
                    <li><Link to={"/AirportTransfers"}>Airport Transfers</Link></li>
                     <li><Link to={"/ManchesterAirport"}>Manchester Airport</Link></li>
                      <li><Link to={"/LiverpoolAirport"}>Liverpool Airport</Link></li>
                       <li><Link to={"/Get-Quote"}>Heathrow Airport</Link></li>
                       <li><Link to={"/Get-Quote"}>Gatwick Airport</Link></li>
                        <li><a href='#'></a></li>
                        <h3 className='text-[20px] font-medium'>BLOGS</h3>
                         <li><a href='#'>Sandcastle Waterpark Taxi Guide</a></li>
                          <li><a href='#'>Madame Tussauds Blackpool Taxi Guide</a></li>
                           <li><a href='#'>The Blackpool Tower Taxi Guide</a></li>
                </ol>
            </div>

            <div className='h-auto text-[white] p-4 rounded-[80px] w-[300px]'>
                <h3 className='text-[20px] font-medium'>ABOUT</h3>
                <ol>
                 <li><Link to={"/CompanyInformation"}>Company Information</Link></li>
                  <li><Link to={"/WhitesideForBusiness"}>Whiteside for Business</Link></li>
                   <li><Link to={"/OurFleet"}>Our Fleet</Link></li>
                    <li><Link to={"/CareerPage"}>Careers</Link></li>
                     <li><Link to={"/ContactUs"}>Contact Us</Link></li>
                     <h3 className='text-[20px] font-medium'>LEGAL</h3>
                      <li><a href='#'>Privacy Policy</a></li>
                       <li><a href='#'>Terms and Conditions</a></li>
                        <li><a href='#'>Covid-19 Policy</a></li>
                        </ol>
            </div>

            <div className='h-auto text-[white] p-4 rounded-[80px] w-[300px]'>
                <h3 className='text-[20px] font-medium'>CHOOSE WHITESIDE</h3>
                <ol>
                     <li><Link to={"/App"}>Download App</Link></li>
                      <li><a href='#'>In-Car Card Machine</a></li>
                       <li><a href='#'>Automatic Operator</a></li>
                        <li><a href='#'></a>Textback</li>
                         <li><a href='#'>Reliable Service</a></li>
                         <h3 className='text-[20px] font-medium'>WE ACCEPT</h3>  
                         <img src='./Images/cards.avif' alt='payment types' className='flex w-[164px] h-[34px]'></img>               
                </ol>
            </div>
            </section>

            <div className='border0-end'>
                <hr className='border-none [border-top:1px_solid_#555] mx-[0] my-[15px] w-[1280px]'></hr>
                <p className='text-[white]'>© Copyright Whiteside Taxis 2025</p>
            </div>
            </div>
        </footer>
    );
}

export default Footer;