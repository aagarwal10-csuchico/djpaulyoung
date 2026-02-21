import { Link } from 'react-router-dom';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__logo">DJ Paul Young</h3>
            <p className="footer__tagline">
              Twin Cities Wedding &amp; Event DJ
            </p>
          </div>

          <nav className="footer__nav">
            <h4>Pages</h4>
            <Link to="/">Home</Link>
            <Link to="/planning">Planning</Link>
            <Link to="/music">Music</Link>
            <Link to="/video">Video</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="footer__contact">
            <h4>Get in Touch</h4>
            <a href="tel:9522394115" className="footer__contact-link">
              <HiOutlinePhone /> 952.239.4115
            </a>
            <a href="mailto:discjockeypaulyoung@gmail.com" className="footer__contact-link">
              <HiOutlineMail /> discjockeypaulyoung@gmail.com
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} DJ Paul Young. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
