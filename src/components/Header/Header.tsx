import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/hoh-logo.png'; 

export default function Header() {
  return (
    <nav className="custom-navbar navbar navbar-expand-lg navbar-light">
      <div className="container custom-navbar-inner">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <Link className="navbar-brand ms-1" to="/">Humans Of Hospitality</Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { to: '/aboutus', label: 'About us' },
              { to: '/stories', label: 'Stories' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <Link className="nav-link" to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
