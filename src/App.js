// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Herosection from './components/Herosection/Hereosection';
import Gridsection1 from './components/Gridsection1/Gridsection1';
import Airporttransferscon from './components/Airporttransferscon/Airporttransferscon';
import Ourfleet from './components/Ourfleet/Ourfleet';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer';
import Dropdown from './components/Dropdown/DropdownMenu';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import AppPage from './pages/AppPage'; // ✅ import the new App page
import AboutPage from './pages/AboutPage';
import GetQuote from './pages/GetQuote';
import ContactUs from './pages/ContactUs';
import TestPage from './pages/TestPage';
import NationwideTransport from './pages/NationwideTransport';
import CareerPage from './pages/CareerPage';
import OurFleet from './pages/OurFleet';
import ThingsToDoInBlackpool from './pages/ThingsToDoInBlackpool';
import WhitesideForBusiness from './pages/WhitesideForBusiness';
import Book from './pages/Book';
import AirportTransfers from './pages/AirportTransfers';
import ManchesterAirport from './pages/ManchesterAirport';
import LiverpoolAirport from './pages/LiverpoolAirport';


function HomePage() {
  return (
    <>
      <Herosection />
      <Gridsection1 />
      <Airporttransferscon />
      <Ourfleet />
      <DownloadApp />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
        <Routes>
          {/* Home page layout */}
          <Route path="/" element={<HomePage />} />
          {/* New /app page */}
          <Route path="/app" element={<AppPage />} />
          {/*New About Page */}
          <Route path='/about' element={<AboutPage />} />
          {/*New Get Quote Page */}
          <Route path='/Get-Quote' element={<GetQuote />} />
          {/*New ContactUs page */}
          <Route path='/ContactUs' element={<ContactUs />} />
          {/*New TestPage page */}
          <Route path='/TestPage' element={<TestPage />} />
          {/*New nationwide transport page */}
          <Route path='/NationwideTransport' element={<NationwideTransport />} />
          {/*New Career page */}
           <Route path='/CareerPage' element={<CareerPage />} />
          {/*New OurFleet page */}
            <Route path='/OurFleet' element={<OurFleet />} />
          {/*New ThingsToDoInBlackpool page */}
            <Route path='/ThingsToDoInBlackpool' element={<ThingsToDoInBlackpool />} />
          {/*New WhitesideForBusiness page */}
            <Route path='/WhitesideForBusiness' element={<WhitesideForBusiness />} />
          {/*New Book page */}
            <Route path='/Book' element={<Book />} />
          {/*New AirportTransfers page */}
            <Route path='/AirportTransfers' element={<AirportTransfers />} />
            {/* New ManchesterAirport page */}
            <Route path ='/ManchesterAirport' element={<ManchesterAirport />} />
            {/* New LiverpoolAirport page */}
            <Route path ='/LiverpoolAirport' element={<LiverpoolAirport />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
