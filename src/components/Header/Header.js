import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src='/Images/logo.png' alt='Whiteside taxis logo' className='header-logo'></img>
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/App" className="nav-button">App</Link>
      <Link to="/About" className="nav-button">About</Link>
      <Link to="/GetQuote" className="nav-button">Get Quote</Link>
      <button className="nav-button">Contact</button>
      <button className="nav-button">Book Taxi</button>
      <a className="nav-button" href="tel:01253711611">01253 711 611</a>
      <button className="nav-button">Accounts</button>
    </header>
  );
}

export default Header;
