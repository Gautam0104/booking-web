import React from "react";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
// import paypal from '../assets/paypal.png';
// import visa from '../assets/visa.png';
// import mastercard from '../assets/mastercard.png';
// import amex from '../assets/amex.png';

const Footer = () => {
  return (
    <footer
      className="text-light pt-5 pb-3 px-4 "
      style={{ background: "#0b0a12" }}
    >
      <div className="container">
        {/* Top row */}
        <div className="row gy-4 justify-content-between">
          {/* Column 1: Logo and contact */}
          <div className="col-md-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ background: "#5B3DF5", width: 40, height: 40 }}
              >
                <FaPlane className="text-white" />
              </div>
              <span className="fs-5 fw-bold">Booking</span>
            </div>
            <p className="text-md-start opacity-75">
              Departure defective arranging rapturous did believe him all had
              supported.
            </p>
            <p className="text-md-start opacity-75">
              <FaPhone className="me-2" /> +1234 568 963
            </p>
            <p className="text-md-start opacity-75">
              <FaEnvelope className="me-2" /> example@gmail.com
            </p>
          </div>

          {/* Column 2: Pages */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Page</h5>
            <ul className="list-unstyled opacity-75">
              <li>About us</li>
              <li>Contact us</li>
              <li>News and Blog</li>
              <li>Meet a Team</li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Link</h5>
            <ul className="list-unstyled opacity-75">
              <li>Sign up</li>
              <li>Sign in</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Cookie</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Column 4: Global Site */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Global Site</h5>
            <ul className="list-unstyled opacity-75">
              <li>India</li>
              <li>California</li>
              <li>Indonesia</li>
              <li>Canada</li>
              <li>Malaysia</li>
            </ul>
          </div>

          {/* Column 5: Booking */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Booking</h5>
            <ul className="list-unstyled opacity-75">
              <li>
                <FaHotel className="me-2" /> Hotel
              </li>
              <li>
                <FaPlane className="me-2" /> Flight
              </li>
              <li>
                <FaGlobe className="me-2" /> Tour
              </li>
              <li>
                <FaCar className="me-2" /> Cabs
              </li>
            </ul>
          </div>
        </div>

        {/* Middle links */}
        <div className="row mt-5  pt-4">
          <h5 className="fw-bold text-start">Top Links</h5>
          <p className="text-white-50 text-start">
            Flights Hotels Tours Cabs About Contact us Blogs Services Detail
            page Policy Testimonials Newsletters Podcasts Protests NewsCyber
            Education Sports Tech and Auto Opinion Share Market
          </p>
        </div>

        {/* Payment and social */}
        <div className="row mt-4 justify-content-between align-items-center">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold mb-2">Payment & Security</h5>
            <div className="d-flex align-items-center gap-3">
              {/* <img src={paypal} alt="PayPal" style={{ height: 35 }} />
              <img src={visa} alt="Visa" style={{ height: 35 }} />
              <img src={mastercard} alt="MasterCard" style={{ height: 35 }} />
              <img src={amex} alt="Amex" style={{ height: 35 }} /> */}
            </div>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <h5 className="fw-bold mb-2 me-2">Follow us on</h5>
            <div className="d-flex gap-2 justify-content-md-end">
              <button className="btn btn-primary btn-sm rounded-circle">
                <FaFacebookF />
              </button>
              <button className="btn btn-danger btn-sm rounded-circle">
                <FaInstagram />
              </button>
              <button className="btn btn-info btn-sm rounded-circle">
                <FaTwitter />
              </button>
              <button className="btn btn-primary btn-sm rounded-circle">
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>
        <hr />
        {/* Bottom row */}
        <div className="row mt-4  pt-3">
          <div className="col-md-8 text-start opacity-75">
            <small>Copyrights ©2024 Booking. Build by gkshukla.</small>
          </div>
          <div className="col-md-4 text-md-end opacity-75">
            <small className="me-3">Privacy policy</small>
            <small className="me-3">Terms and conditions</small>
            <small>Refund policy</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
