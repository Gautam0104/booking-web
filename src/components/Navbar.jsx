import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import { FaPlane, FaHotel, FaBell, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [user, setUser] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser)); // storedUser should have a `username` or `name` field
    }
  }, []);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdown((prev) => !prev);
  };

  const navigate = useNavigate();

  const naviHome = () => {
    navigate(`/`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setProfileDropdown(false);
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-4">
      <div className="container">
        {/* Logo */}
        <div className="d-flex align-items-center gap-2" onClick={naviHome}>
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#5B3DF5", width: 48, height: 48 }}
          >
            <FaPlane className="text-white" />
          </div>
          <span className="text-white fw-bold fs-5">Booking</span>
        </div>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="text-white fs-3">{menuOpen ? "×" : "☰"}</span>
        </button>

        {/* Navbar content */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarContent"
        >
          {/* Left links */}
          <ul className="navbar-nav me-auto mt-3 mt-lg-0 d-flex align-items-lg-center gap-lg-3">
            {/* Listings Dropdown */}
            <li className="nav-item dropdown hover-dropdown ms-2">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Listings
              </Link>
              <ul
                className="dropdown-menu shadow rounded-3  px-2"
                style={{ width: "250px" }}
              >
                <li className="dropdown-submenu dropend">
                  <Link
                    className="dropdown-item"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <span className="d-flex align-items-center justify-content-between">
                      Hotel
                      <FaEllipsisH />
                    </span>
                  </Link>
                  <ul
                    className="dropdown-menu shadow rounded-3  px-2"
                    style={{ width: "250px", marginLeft: "6px" }}
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/hotellist"
                        onClick={closeMenu}
                      >
                        Hotel List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/hotelgrid"
                        onClick={closeMenu}
                      >
                        Hotel Grid
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/hoteldetail"
                        onClick={closeMenu}
                      >
                        Hotel Detail
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/roomdetail"
                        onClick={closeMenu}
                      >
                        Room Detail
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/hotelresort"
                        onClick={closeMenu}
                      >
                        Hotel Resort
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/hotelchain"
                        onClick={closeMenu}
                      >
                        Hotel Chain
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/hotelbooking"
                        onClick={closeMenu}
                      >
                        Hotel Booking
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/apartments"
                    onClick={closeMenu}
                  >
                    <span className="d-flex align-items-center justify-content-between">
                      Apartments <FaEllipsisH />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/tours"
                    onClick={closeMenu}
                  >
                    <span className="d-flex align-items-center justify-content-between">
                      Tours <FaEllipsisH />
                    </span>
                  </Link>
                </li>
                <li className="dropdown-submenu dropend">
                  <Link
                    className="dropdown-item"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <span className="d-flex align-items-center justify-content-between">
                      Blog <FaEllipsisH />
                    </span>
                  </Link>
                  <ul
                    className="dropdown-menu shadow rounded-3  px-2"
                    style={{ width: "250px", marginLeft: "6px" }}
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/blog"
                        onClick={closeMenu}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/blogdetail"
                        onClick={closeMenu}
                      >
                        Blog Detail
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Accounts
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/more" onClick={closeMenu}>
                <FaEllipsisH />
              </Link>
            </li>
          </ul>

          {/* Right section */}
          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 ms-auto mt-3 mt-lg-0">
            <button
              className="btn text-light px-3 py-2"
              style={{ backgroundColor: "#2E2C39", color: "#A99BFF" }}
            >
              <FaHotel className="me-2" />
              Hotel
            </button>

            <div className="position-relative">
              <button className="btn btn-dark  rounded-circle">
                <FaBell />
              </button>
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
            </div>

            <div className="position-relative">
              <div
                className="profile-circle me-3"
                onClick={toggleProfileDropdown}
              >
                {user ? user.username.charAt(0).toUpperCase() : "?"}
              </div>

              {profileDropdown && (
                <div
                  ref={dropdownRef}
                  className="dropdown-menu show shadow rounded-3 py-2"
                  style={{
                    right: 0,
                    top: "calc(100% + 10px)",
                    minWidth: "220px",
                    position: "absolute",
                    zIndex: 1000,
                    backgroundColor: "#fff"
                  }}
                >
                  {user ? (
                    <>
                      <div className="d-flex align-items-center px-3 py-2 border-bottom">
                        <div className="profile-circle me-3">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="fw-semibold">{user.username}</div>
                          <small className="opacity-75">Guest</small>
                        </div>
                      </div>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 px-3"
                        to="/account"
                      >
                        <i className="bi bi-person" /> My Profile
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 px-3"
                        to="/bookinglist"
                      >
                        <i className="bi bi-credit-card" /> My Bookings
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 px-3"
                        to="/settings"
                      >
                        <i className="bi bi-gear" /> Settings
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 px-3 position-relative"
                        to="/billing"
                      >
                        <i className="bi bi-credit-card" /> Billing
                        <span className="badge bg-danger rounded-pill ms-auto">
                          4
                        </span>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 px-3"
                        to="/pricing"
                      >
                        <i className="bi bi-currency-dollar" /> Pricing
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 px-3"
                        to="/faq"
                      >
                        <i className="bi bi-question-circle" /> FAQ
                      </Link>
                      <div className="dropdown-divider"></div>
                      <button
                        className="dropdown-item bg-danger rounded d-flex align-items-center gap-2 px-3"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right" /> Logout
                      </button>
                    </>
                  ) : (
                    <div className="px-3 py-2">
                      <div className="fw-semibold mb-2">
                        You are not logged in
                      </div>
                      <Link
                        className="btn btn-primary w-100"
                        to="/login"
                        onClick={() => setProfileDropdown(false)}
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
