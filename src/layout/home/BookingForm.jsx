import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookingForm.css";
const BookingForm = () => {
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState([]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleGuestSummary = () => {
    return `${adults + children} Guests ${rooms} Room${rooms > 1 ? "s" : ""}`;
  };

  return (
    <form className="card shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4">
      <div className="row g-4 align-items-center">
        {/* Location */}
        <div className="col-lg-4">
          <div className="form-control-border form-control-transparent form-fs-md d-flex">
            <i className="bi bi-geo-alt fs-3 me-2 mt-2"></i>
            <div className="flex-grow-1">
              <label className="form-label">Location</label>
              <select
                className="form-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select location</option>
                <option value="San Jacinto, USA">San Jacinto, USA</option>
                <option value="North Dakota, Canada">
                  North Dakota, Canada
                </option>
                <option value="West Virginia, Paris">
                  West Virginia, Paris
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Check in */}
        <div className="col-lg-4">
          <div className="d-flex">
            <i className="bi bi-calendar fs-3 me-2 mt-2"></i>
            <div className="form-control-border form-control-transparent form-fs-md w-100">
              <label className="form-label">Check in - out</label>
              <Flatpickr
                options={{ mode: "range", dateFormat: "d M" }}
                className="form-control"
                placeholder="Select date"
                value={dateRange}
                onChange={(date) => setDateRange(date)}
              />
            </div>
          </div>
        </div>

        {/* Guests & Rooms */}
        <div className="col-lg-4">
          <div className="form-control-border form-control-transparent form-fs-md d-flex">
            <i className="bi bi-person fs-3 me-2 mt-2"></i>
            <div className="w-100">
              <label className="form-label">Guests & rooms</label>
              <div className="dropdown guest-selector me-2">
                <input
                  type="text"
                  className="form-guest-selector form-control selection-result"
                  value={handleGuestSummary()}
                  readOnly
                  data-bs-toggle="dropdown"
                />
                <ul className="dropdown-menu guest-selector-dropdown show">
                  <li className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-0">Adults</h6>
                      <small>Ages 13 or above</small>
                    </div>
                    <div className="hstack gap-1 align-items-center">
                      <button
                        type="button"
                        className="btn btn-link p-0"
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
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="btn-position-md-middle mt-4 text-center">
        <button
          className="icon-lg btn btn-round btn-primary mb-0"
          type="submit"
        >
          <i className="bi bi-search fa-fw"></i>
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
