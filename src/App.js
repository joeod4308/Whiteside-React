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

import AppPage from './pages/AppPage'; // ✅ import the new App page
import AboutPage from './pages/AboutPage';
import GetQuote from './pages/GetQuote';
import ContactUs from './pages/ContactUs';
import TestPage from './pages/TestPage';



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
          <Route path='/getquote' element={<GetQuote />} />
          {/*New ContactUs page */}
          <Route path='/ContactUs' element={<ContactUs />} />
          {/*New TestPage page */}
          <Route path='/TestPage' element={<TestPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
