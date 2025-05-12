import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Image11 from "../assets/img/hoteldetail/11.jpg";
import Image12 from "../assets/img/hoteldetail/12.jpg";
import Image13 from "../assets/img/hoteldetail/13.jpg";
import Image14 from "../assets/img/hoteldetail/14.jpg";
import AboutHotelDetail from "../layout/hotel/abouthoteldetail/AboutHotelDetail";

const HotelDetail = () => {
  const [popupIndex, setPopupIndex] = useState(null);
  const images = [Image14, Image13, Image12, Image11];
  const sliderRef = useRef(null);

  const openImage = (index) => setPopupIndex(index);
  const closeImage = () => setPopupIndex(null);
  const showNext = () => setPopupIndex((popupIndex + 1) % images.length);
  const showPrev = () =>
    setPopupIndex((popupIndex - 1 + images.length) % images.length);

  useEffect(() => {
    if (popupIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [popupIndex]);

  return (
    <div className="bg-dark text-white min-vh-100 py-4">
      <div className="container">
        {/* Search Filters */}
        <div
          className="rounded-4 d-flex flex-wrap gap-3 justify-content-between align-items-center shadow position-relative m-3"
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
            className="position-absolute text-center"
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
          <div className="col-md-6">
            <div
              className="image-hover-container position-relative"
              onClick={() => openImage(0)}
            >
              <img
                src={Image14}
                alt=""
                className="img-fluid rounded w-100 h-100 object-fit-cover"
              />
              <i className="bi bi-arrows-fullscreen popup-icon"></i>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row g-2">
              <div className="col-12">
                <div
                  className="image-hover-container position-relative"
                  onClick={() => openImage(1)}
                >
                  <img
                    src={Image13}
                    alt=""
                    className="img-fluid rounded w-100"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <i className="bi bi-arrows-fullscreen popup-icon position-absolute top-50 end-50 m-2"></i>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="image-hover-container position-relative"
                  onClick={() => openImage(2)}
                >
                  <img
                    src={Image12}
                    alt=""
                    className="img-fluid rounded w-100"
                  />
                  <i className="bi bi-arrows-fullscreen popup-icon position-absolute top-50 end-50 m-2"></i>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="image-hover-container position-relative"
                  onClick={() => openImage(3)}
                >
                  <img
                    src={Image11}
                    className="img-fluid rounded w-100"
                    alt="View all"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
                    View all
                  </div>
                  <i className="bi bi-arrows-fullscreen popup-icon position-absolute top-50 end-50 m-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Popup */}
        {popupIndex !== null && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{
              backgroundColor: "rgba(0, 0, 0, 1)",
              zIndex: 1050,
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100vw"
            }}
            onClick={closeImage}
          >
            <div
              className="d-flex align-items-center justify-content-center h-100 position-relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="btn btn-light position-absolute top-0 end-0 m-3"
                onClick={closeImage}
              >
                &times;
              </button>

              <button
                className="btn btn-secondary position-absolute top-50 start-0 translate-middle-y ms-3"
                onClick={showPrev}
              >
                &larr;
              </button>

              <div className="text-center">
                <img
                  ref={sliderRef}
                  src={images[popupIndex]}
                  alt="Popup"
                  className="img-fluid rounded"
                  style={{
                    maxHeight: "90vh",
                    maxWidth: "90vw",
                    transition: "all 0.3s ease-in-out"
                  }}
                />
              </div>

              <button
                className="btn btn-secondary position-absolute top-50 end-0 translate-middle-y me-3"
                onClick={showNext}
              >
                &rarr;
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hotel Description */}
      <AboutHotelDetail />
    </div>
  );
};

export default HotelDetail;
