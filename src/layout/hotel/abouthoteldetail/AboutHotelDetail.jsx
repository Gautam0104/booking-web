import React from "react";
import { Link } from "react-router-dom";
import Image04 from "../../../assets/img/hoteldetail/04.jpg";

const AboutHotelDetail = () => {
  return (
    <div className="container mt-5 text-white">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8 text-start">
          <h3 className="fw-bold">About This Hotel</h3>
          <hr className="text-secondary" />

          {/* Main Highlights Icons */}
          <div className="d-flex gap-3 my-3">
            <div className="bg-dark p-3 rounded">
              <i className="bi bi-wifi fs-4"></i>
            </div>
            <div className="bg-dark p-3 rounded">
              <i className="bi bi-water fs-4"></i>
            </div>
            <div className="bg-dark p-3 rounded">
              <i className="bi bi-snow fs-4"></i>
            </div>
            <div className="bg-dark p-3 rounded">
              <i className="bi bi-bag fs-4"></i>
            </div>
          </div>

          {/* Hotel Description */}
          <p className="text-secondary text-start">
            Demesne far-hearted suppose venture excited see had has. Dependent
            on so extremely delivered by. Yet no jokes worse her why.{" "}
            <strong className="text-white">
              Bed one supposing breakfast day fulfilled off depending questions.
            </strong>
          </p>
          <p className="text-secondary text-start">
            Delivered dejection necessary objection do Mr prevailed. Mr feeling
            does chiefly cordial in do. Water timed folly right aware if oh
            truth. Large above to be means. Dashwood does provide stronger is.
          </p>
          <Link className="text-primary text-start">
            See more <i className="bi bi-chevron-down"></i>
          </Link>

          {/* Advantages */}
          <h5 className="fw-bold mt-4 text-start">Advantages</h5>
          <ul className="list-unstyled mt-3 text-start">
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2 text-start"></i>
              Every hotel staff to have Proper PPT kit for COVID-19
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>Every
              staff member wears face masks and gloves at all service times.
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>Hotel
              staff ensures to maintain social distancing at all times.
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>The
              hotel has In-Room Dining options available
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-md-4">
          <div
            className=" p-4 rounded mb-3"
            style={{ backgroundColor: "#1e1e23" }}
          >
            <p className="mb-1 text-secondary">Price Start at</p>
            <h3 className="text-white fw-bold">$3,500</h3>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-star-fill text-warning me-1"></i>
              <span className="text-white">4.5</span>
            </div>
            <p className="text-success mb-1">Free breakfast available</p>
            <p className="text-white">
              <strong>1 room per night</strong>
              <br />
              <small className="text-secondary">+ $285 taxes & fees</small>
            </p>
            <button className="btn btn-primary w-100">
              View 10 Rooms Options
            </button>
          </div>

          {/* Best Deal Section */}
          <div
            className=" p-3 rounded d-flex "
            style={{ backgroundColor: "#1e1e23" }}
          >
            <div className="row">
              <div className="col-md-6">
                <img src={Image04} alt="deal" className="rounded me-3 w-100" />
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold">Travel Plan</h6>
                <p className="text-secondary mb-0">
                  Get up to $10,000 for lifetime limits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHotelDetail;
