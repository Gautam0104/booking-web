import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import "flatpickr/dist/flatpickr.css";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaSearch
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
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
    <>
      {/* Desktop Version */}
      <div
        className="rounded-4 mt-5 d-none d-md-flex align-items-center gap-3 shadow position-relative search-box"
        style={{
          padding: "2.5rem 4rem",
          width: "150%",
          backgroundColor: "#191b1d",
          zIndex: 10
        }}
      >
        <div className="input-group text-white ">
          <span className="input-group-text bg-transparent text-white border-secondary">
            <FaMapMarkerAlt />
          </span>
          <select
            className="form-control bg-dark text-white border-secondary"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="" disabled>
              Select location
            </option>
            <option value="228250">Lucknow</option>
            <option value="228252">Delhi</option>
            <option value="228253">Mumbai</option>
          </select>
        </div>

        <div className="input-group text-white  ">
         <span className="input-group-text bg-transparent text-white border-secondary">
            <FaCalendarAlt />
          </span>
          <Flatpickr
            options={{
              mode: "range",
              dateFormat: "d M",
              allowInput: true,
              
              minDate: "today", 
            }}
            className="form-control bg-dark text-white border-secondary custom-placeholder"
            placeholder="Select date range"
            value={dateRange}
            onChange={(selectedDates) => {
              // Only update state when both dates are selected or when clearing
              if (selectedDates.length === 2 || selectedDates.length === 0) {
                setDateRange(selectedDates);
              }
            }}
          />
        </div>

        <div className="input-group text-white rounded-right">
         <span className="input-group-text bg-transparent text-white border-secondary">
            <FaUser />
          </span>
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary"
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

        <button
          className="btn btn-primary rounded-circle position-absolute"
          style={{
            top: "50%",
            right: "-24px",
            transform: "translateY(-50%)",
            width: "55px",
            height: "55px",
            color: "#fff"
          }}
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>

      {/* Mobile Version */}
      <div
        className="d-md-none mt-4  text-white p-4 rounded-4 shadow"
        style={{backgroundColor: "#191b1d", zIndex: 10 }}
      >
        <div className="mb-3">
          <label className="form-label">Location</label>
          <div className="input-group">
           <span className="input-group-text bg-transparent text-white border-secondary">
              <FaMapMarkerAlt />
            </span>
            <select
              className="form-control bg-dark text-white border-secondary"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="" disabled>
                Select location
              </option>
              <option value="lucknow">Lucknow</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Check-in / Check-out</label>
          <div className="input-group ">
           <span className="input-group-text bg-transparent text-white border-secondary">
              <FaCalendarAlt />
            </span>
            <Flatpickr
              options={{
                mode: "range",
                dateFormat: "d M",
                allowInput: true,
                
                minDate: "today", // Optional: prevents selecting past dates
              }}
              className="form-control bg-dark text-white border-secondary white-placeholder"
              placeholder="Select date range"
              
              value={dateRange}
              onChange={(selectedDates) => {
                // Only update state when both dates are selected or when clearing
                if (selectedDates.length === 2 || selectedDates.length === 0) {
                  setDateRange(selectedDates);
                }
              }}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Guests & Rooms</label>
          <div className="input-group">
            <span className="input-group-text bg-transparent text-white border-secondary">
              <FaUser />
            </span>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
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

        <div className="text-center">
          <button
            className="btn btn-primary rounded-circle"
            style={{ width: "55px", height: "55px", color: "#fff" }}
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
