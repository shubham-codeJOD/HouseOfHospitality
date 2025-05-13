import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <nav className="custom-navbar navbar navbar-expand-lg navbar-light">
      <div className="container custom-navbar-inner">
        <img src="#" alt="Logo" className="navbar-logo" />
        <Link className="navbar-brand fs-1 fw-high ms-2" to="/">Humans Of Hospitality</Link>

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
              // { to: '/vision', label: 'Vision' },
              // { to: '/mission', label: 'Mission' },
              // { to: '/problem', label: 'Problem' },
              { to: '/stories', label: 'Stories' },
              { to: '/testimonials', label: 'Testimonials' },
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
