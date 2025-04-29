import React from "react";
import { Link } from "react-router-dom";
import Image11 from "../assets/img/hoteldetail/11.jpg";
import Image12 from "../assets/img/hoteldetail/12.jpg";
import Image13 from "../assets/img/hoteldetail/13.jpg";
import Image14 from "../assets/img/hoteldetail/14.jpg";
import AboutHotelDetail from "../layout/hotel/abouthoteldetail/AboutHotelDetail";

const HotelDetail = () => {
  return (
    <div className="bg-dark text-white min-vh-100 py-4">
      <div className="container">
        <div>
          <div
            className=" rounded-4  d-flex flex-wrap gap-3 justify-content-between align-items-center shadow position-relative m-3"
            style={{
              zIndex: 2,
              paddingLeft: "60px",
              paddingRight: "60px",
              paddingTop: "20px",
              paddingBottom: "20px",
              backgroundColor: "#191b1d"
            }}
          >
            {/* Location */}
            <div className="form-group flex-grow-1">
              <label className="form-label">Location</label>
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white border-secondary">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  value="San Jacinto, USA"
                  readOnly
                />
              </div>
            </div>

            {/* Check-in – out */}
            <div className="form-group flex-grow-1">
              <label className="form-label">Check in – out</label>
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white border-secondary">
                  <i className="bi bi-calendar-range-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  value="19 Sep to 28 Sep"
                  readOnly
                />
              </div>
            </div>

            {/* Guests & Rooms */}
            <div className="form-group flex-grow-1">
              <label className="form-label">Guests & rooms</label>
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white border-secondary">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  value="2 Guests 1 Room"
                  readOnly
                />
              </div>
            </div>

            {/* Search Button */}
            <div
              className="position-absolute  text-center"
              style={{
                top: "50%",
                right: "0px",
                zIndex: 2,
                transform: "translate(50%, -50%)"
              }}
            >
              <button className="btn btn-primary rounded-circle ">
                <i className="bi bi-search fs-5 text-white"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Hotel Name & Location */}
        <h2 className="fw-bold">Courtyard by Marriott New York</h2>
        <p className="opacity-75">
          <i className="bi bi-geo-alt-fill"></i> 5855 W Century Blvd, Los
          Angeles – 90045
          <Link to="" className="ms-2 text-decoration-none text-primary">
            View On Map
          </Link>
        </p>

        {/* Covid Policy Alert */}
        <div
          className="alert d-flex align-items-center justify-content-between mt-3 text-danger py-4 rounded-4"
          role="alert"
          style={{ backgroundColor: "#2b252a", border: "1px solid red" }}
        >
          <div className="d-flex align-items-center">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            <div>
              <strong>Covid Policy:</strong> You may require to present an
              RT–PCR negative test report at the hotel
            </div>
          </div>

          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={(e) => e.target.closest(".alert").remove()}
          ></button>
        </div>

        {/* Image Gallery */}

        <div className="row g-2 mt-3">
          {/* Large Image */}
          <div className="col-md-6">
            <img src={Image14} alt="" className="img-fluid rounded h-100" />
          </div>

          {/* Small Images Grid */}
          <div className="col-md-6">
            <div className="row g-2">
              {/* First Small Image */}
              <div className="col-12">
                <img
                  src={Image13}
                  alt=""
                  className="img-fluid rounded"
                  style={{ height: "150px", objectFit: "cover", width: "100%" }}
                />
              </div>

              {/* Second Small Image */}
              <div className="col-md-6">
                <img src={Image12} alt="" className="img-fluid rounded" />
              </div>

              {/* Third Small Image with View All */}
              <div className="col-md-6">
                <div className="position-relative">
                  <img
                    src={Image11}
                    className="img-fluid rounded"
                    alt="View all"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
                    View all
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutHotelDetail />
    </div>
  );
};

export default HotelDetail;
