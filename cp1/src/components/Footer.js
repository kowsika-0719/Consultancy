import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="row">
        <div className="column">
          <div className="contact-section">
            <h3>SATHYAM TRADERS</h3>
            <p>122/153,Dharapuram ByPass Road, Opposite Bharath Petrol Punk</p>
            <p>Dharapuram-638656</p>
            <p>TamilNadu</p>
          </div>
        </div>
        <div className="column">
          <div className="address-section">
            <h3>Contact</h3>
            <h4>Call Us</h4>
            <p>+91 9843447326</p>
            <p>+91 9965104220</p>
            <h4>Mail Us</h4>
            <p>sathyamtraders@gmail.com</p>
          </div>
        </div>
        <div className="column">
          <div className="email-section">
            <h3>Products</h3>
            <ul>
              <li><a href="/product/chainlink-fencing">Chainlink Fencing</a></li>
              <li><a href="/product/twist-fence">Twist Fence</a></li>
              <li><a href="/product/chainlink-fencing">Chainlink Fencing</a></li>
              <li><a href="/product/twist-fence">Twist Fence</a></li>
              <li><a href="/product/chainlink-fencing">Chainlink Fencing</a></li>
              <li><a href="/product/twist-fence">Twist Fence</a></li>
              <li><a href="/product/another-product">Another Product</a></li>
              {/* Add more product items as needed */}
            </ul>
          </div>
        </div>
        <div className="column">
          <div className="copyright-section">
            <h3>Quick links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
           
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} SATHYAM TRADERS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
