import React from 'react';
import './Navbar.css'; // Optional: custom styles
import { FaPlane, FaGlobe, FaCar, FaHotel, FaBell, FaEllipsisH } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 justify-content-between">
      {/* Left section */}
      <div className="d-flex align-items-center gap-3">
        <div className="d-flex align-items-center gap-2">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{ backgroundColor: '#5B3DF5', width: 40, height: 40 }}
          >
            <FaPlane className="text-white" />
          </div>
          <span className="text-white fw-bold fs-5">Booking</span>
        </div>

        <ul className="navbar-nav ms-4 d-flex flex-row gap-3">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Listings
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Pages
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Accounts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <FaEllipsisH />
            </a>
          </li>
        </ul>
      </div>

      {/* Right section */}
      <div className="d-flex align-items-center gap-4">
        <button className="btn text-light px-3 py-2" style={{ backgroundColor: '#2E2C39', color: '#A99BFF' }}>
          <FaHotel className="me-2" />
          Hotel
        </button>

        <div className="d-flex align-items-center gap-4 text-white">
          <div className="d-flex align-items-center gap-2">
            <FaPlane />
            <span>Flight</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaGlobe />
            <span>Tour</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaCar />
            <span>Cab</span>
          </div>
        </div>

        {/* Notification icon with red dot */}
        <div className="position-relative">
          <button className="btn btn-dark p-2 rounded-circle">
            <FaBell />
          </button>
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
        </div>

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-circle"
          style={{ width: 40, height: 40, objectFit: 'cover', background: 'hotpink' }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
