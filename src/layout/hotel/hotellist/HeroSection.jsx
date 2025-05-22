import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import "flatpickr/dist/flatpickr.css";
import Image01 from "../../../assets/img/hotellist/01.jpg";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
export const HeroSection = () => {
  // State to toggle visibility of input fields
  const [showInputs, setShowInputs] = useState(false);
  const [showMessage, setShowMessage] = useState(true); // Show message initially

  const toggleInputs = () => {
    handleSearch();
    setShowInputs((prev) => {
      const next = !prev;
      setShowMessage(!next); // Hide message when inputs are shown
      return next;
    });
  };
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState([]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const navigate = useNavigate();

  const handleGuestSummary = () => {
    return `${adults + children} Guests ${rooms} Room${rooms > 1 ? "s" : ""}`;
  };

  const handleSearch = () => {
    if (!location || dateRange.length < 2) {
      alert("Please select location and check-in/check-out dates");
      return;
    }

    const guests = adults + children;
    const checkin = dateRange[0]?.toISOString().split("T")[0];
    const checkout = dateRange[1]?.toISOString().split("T")[0];

    navigate(
      `/dashboard/hotellist?location=${location}&checkin=${checkin}&checkout=${checkout}&guests=${guests}&rooms=${rooms}`
    );
  };

  return (
    <div className="position-relative">
      {/* Background Image Container */}
      <div
        className="container bg-dark text-white py-5 rounded-4 position-relative overflow-hidden"
        style={{
          backgroundImage: `url(${Image01})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Fade Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1
          }}
        ></div>

        {/* Foreground Content */}
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold mb-4 text-center">
            150 Hotels in India
          </h1>
          <div
            className="rounded-4 d-flex flex-wrap justify-content-between align-items-center shadow position-relative m-3"
            style={{
              zIndex: 2,
              paddingLeft: "60px",
              paddingRight: "60px",
              paddingTop: "30px",
              paddingBottom: "30px",
              backgroundColor: "#191b1d"
            }}
          >
            {/* Location */}
            <div
              className={`form-group flex-grow-1 w-auto ${
                showInputs ? "d-block" : "d-none d-sm-block"
              }`}
            >
              {/* <label className="form-label opacity-50">Location</label> */}
              <div className="input-group ">
                <span className="input-group-text bg-transparent text-white border-secondary">
                  <FaMapMarkerAlt />
                </span>
                <select
                  className="form-control bg-dark text-white border-secondary me-2"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  {/* <option value="" disabled>
                    Select location
                  </option> */}
                  <option value="228250">Lucknow</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                </select>
              </div>
            </div>

            {/* Check-in – out */}
            <div
              className={`form-group flex-grow-1 w-auto ${
                showInputs ? "d-block" : "d-none d-sm-block"
              }`}
            >
              {/* <label className="form-label opacity-50">Check in – out</label> */}
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white border-secondary">
                  <FaCalendarAlt />
                </span>
                <Flatpickr
                  options={{
                    mode: "range",
                    dateFormat: "d M",
                    allowInput: true,

                    minDate: "today"
                  }}
                  className="form-control bg-dark text-white border-secondary custom-placeholder me-2"
                  placeholder="Select date range"
                  value={dateRange}
                  onChange={(selectedDates) => {
                    // Only update state when both dates are selected or when clearing
                    if (
                      selectedDates.length === 2 ||
                      selectedDates.length === 0
                    ) {
                      setDateRange(selectedDates);
                    }
                  }}
                />
              </div>
            </div>

            {/* Guests & Rooms */}
            <div
              className={`form-group flex-grow-1 w-auto ${
                showInputs ? "d-block" : "d-none d-sm-block"
              }`}
            >
              {/* <label className="form-label opacity-50">Guests & rooms</label> */}
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white border-secondary">
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary me-2"
                  value={handleGuestSummary()}
                  readOnly
                  data-bs-toggle="dropdown"
                />
                <ul className="dropdown-menu guest-selector-dropdown text-white p-4 shadow">
                  <li className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-0">Adults</h6>
                      <small>Ages 13 or above</small>
                    </div>
                    <div className="hstack gap-1 align-items-center">
                      <button
                        type="button"
                        className="btn btn-link p-0 ms-4"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                      >
                        <i className="bi bi-dash-circle fs-5"></i>
                      </button>
                      <h6 className="mb-0">{adults}</h6>
                      <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={() => setAdults(adults + 1)}
                      >
                        <i className="bi bi-plus-circle fs-5"></i>
                      </button>
                    </div>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-0">Child</h6>
                      <small>Ages 13 below</small>
                    </div>
                    <div className="hstack gap-1 align-items-center">
                      <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                      >
                        <i className="bi bi-dash-circle fs-5"></i>
                      </button>
                      <h6 className="mb-0">{children}</h6>
                      <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={() => setChildren(children + 1)}
                      >
                        <i className="bi bi-plus-circle fs-5"></i>
                      </button>
                    </div>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-0">Rooms</h6>
                      <small>Max room 8</small>
                    </div>
                    <div className="hstack gap-1 align-items-center">
                      <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                      >
                        <i className="bi bi-dash-circle fs-5"></i>
                      </button>
                      <h6 className="mb-0">{rooms}</h6>
                      <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={() => setRooms(Math.min(8, rooms + 1))}
                      >
                        <i className="bi bi-plus-circle fs-5"></i>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Search Button */}
            <div
              className="position-absolute text-center"
              style={{
                top: "50%",
                right: "0px",
                zIndex: 2,
                transform: "translate(50%, -50%)"
              }}
            >
              <button
                className="btn btn-primary rounded-circle"
                onClick={toggleInputs}
              >
                <i className="bi bi-search fs-5 text-white"></i>
              </button>
            </div>

            {/* Toggle Icon for Mobile */}
            {showMessage && (
              <div
                className="d-sm-none position-absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  zIndex: 2,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <p
                  className="mt-3 opacity-75 d-flex"
                  style={{ cursor: "pointer" }}
                >
                  Click here{" "}
                  <i
                    className="bi bi-arrow-right ms-1"
                    style={{ marginTop: "2px" }}
                  ></i>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
