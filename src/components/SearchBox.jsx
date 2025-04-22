import React from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaSearch
} from "react-icons/fa";

const SearchBox = () => {
  return (
    <>
      {/* Desktop / Tablet Version */}
      <div
        className="rounded-4 mt-5 d-none d-md-flex align-items-center gap-3 shadow position-relative search-box"
        style={{
          padding: "2.5rem",
          paddingRight: "4rem",
          paddingLeft: "4rem",
          width: "150%",
          backgroundColor: "#191b1d",
          zIndex: 10
        }}
      >
        <div className="input-group text-white">
          <span className="input-group-text bg-dark border-0 text-white">
            <FaMapMarkerAlt />
          </span>
          <input
            type="text"
            className="form-control bg-dark border-0 text-white"
            placeholder="Select location"
          />
        </div>
        <div className="input-group text-white">
          <span className="input-group-text bg-dark border-0 text-white">
            <FaCalendarAlt />
          </span>
          <input
            type="text"
            className="form-control bg-dark border-0 text-white"
            placeholder="19 Sep to 28 Sep"
          />
        </div>
        <div className="input-group text-white">
          <span className="input-group-text bg-dark border-0 text-white">
            <FaUser />
          </span>
          <input
            type="text"
            className="form-control bg-dark border-0 text-white"
            placeholder="2 Guests 1 Room"
          />
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
        >
          <FaSearch />
        </button>
      </div>

      {/* Mobile Version */}
      <div
        className="d-md-none mt-4 bg-dark text-white p-4 rounded-4 shadow"
        style={{ zIndex: 10 }}
      >
        <div className="mb-3">
          <label className="form-label">Location</label>
          <div className="input-group">
            <span className="input-group-text bg-dark border-0 text-white">
              <FaMapMarkerAlt />
            </span>
            <input
              type="text"
              className="form-control bg-dark border-0 text-white"
              placeholder="Select location"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Check-in / Check-out</label>
          <div className="input-group">
            <span className="input-group-text bg-dark border-0 text-white">
              <FaCalendarAlt />
            </span>
            <input
              type="text"
              className="form-control bg-dark border-0 text-white"
              placeholder="19 Sep to 28 Sep"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Guests & Rooms</label>
          <div className="input-group">
            <span className="input-group-text bg-dark border-0 text-white">
              <FaUser />
            </span>
            <input
              type="text"
              className="form-control bg-dark border-0 text-white"
              placeholder="2 Guests 1 Room"
            />
          </div>
        </div>
        <div className="text-end">
          <button className="btn btn-primary">
            <FaSearch className="me-2" />
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
