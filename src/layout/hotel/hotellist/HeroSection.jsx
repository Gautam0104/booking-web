import React from "react";
import Image01 from "../../../assets/img/hotellist/01.jpg";

export const HeroSection = () => {
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
            150 Hotels in New York
          </h1>
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
              <label className="form-label text-muted">Location</label>
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
              <label className="form-label text-muted">Check in – out</label>
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
              <label className="form-label text-muted">Guests & rooms</label>
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
      </div>
    </div>
  );
};
