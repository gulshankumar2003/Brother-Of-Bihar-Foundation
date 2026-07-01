import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Brother of Bihar Foundation</h3>
            <p>
              Empowering communities through education, healthcare, and sustainable development.
              Together, we build a brighter future for all.
            </p>

              <div className="social-icons">
    <a
      href="https://www.instagram.com/your_username"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

    <a
      href="https://www.facebook.com/your_page_name"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.youtube.com/@Brother-of-Bihar"
      target="www.youtube.com/@Brother-of-Bihar"
      rel="noopener noreferrer"
      aria-label="YouTube"
    >
      <FaYoutube />
    </a>
  </div>

          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/donation">Donate</Link>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p></p>
            <p>brotherofbihar4@gmail.com</p>
            <p>+91 7004044817</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Brother of Bihar Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
