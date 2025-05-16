import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image11 from "../assets/img/roomdetail/11.jpg";
import Image12 from "../assets/img/roomdetail/12.jpg";
import Image13 from "../assets/img/roomdetail/13.jpg";
import Image14 from "../assets/img/roomdetail/14.jpg";
import RoomSelection from "../layout/hotel/roomdetail/RoomSelection";

const RoomDetail = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-white   ">Luxury Room with Balcony</h2>
      <p className="text-white opacity-75">
        <FaMapMarkerAlt className="me-2" />
        5855 W Century Blvd, Los Angeles - 90045
      </p>

      <div id="roomCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex gap-3 justify-content-center">
              <img
                src={Image11}
                className="d-block rounded"
                alt="Room"
                style={{ width: "500px", height: "300px", objectFit: "cover" }}
              />
              <img
                src={Image12}
                className="d-block rounded"
                alt="Balcony"
                style={{ width: "500px", height: "300px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Slide 2 (add more images if needed) */}
          <div className="carousel-item">
            <div className="d-flex gap-3 justify-content-center">
              <img
                src={Image13}
                className="d-block rounded"
                alt="Pool"
                style={{ width: "500px", height: "300px", objectFit: "cover" }}
              />
              <img
                src={Image14}
                className="d-block rounded"
                alt="Bedroom"
                style={{ width: "500px", height: "300px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#roomCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded-circle p-3"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#roomCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark rounded-circle p-3"
            aria-hidden="true"
          ></span>
        </button>
      </div>
      <RoomSelection />
    </div>
  );
};

export default RoomDetail;
