import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <div className='footer'>
      {/* Footer Logo */}
      <div className='footer-logo'>
        <img src={footer_logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Footer Links */}
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/offices">Offices</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Social Media Icons */}
      <div className="footer-social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram" />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
          <img src={pinterest_icon} alt="Pinterest" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </a>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright © {currentYear} - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
