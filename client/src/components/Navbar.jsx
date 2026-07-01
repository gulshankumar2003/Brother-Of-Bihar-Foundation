import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  
  { to : '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/donation', label: 'Donate' },

];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
            <img src="/ngologo.png" alt="Brother of Bihar Foundation Logo" className="brand-logo" />
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/donation" className="btn btn-accent nav-donate" onClick={() => setMenuOpen(false)}>
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
