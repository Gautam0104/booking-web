import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import RoomSelection from "../layout/hotel/roomdetail/RoomSelection";

const RoomDetail = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-white   ">Luxury Room with Balcony</h2>
      <p className="text-white opacity-75">
        <FaMapMarkerAlt className="me-2" />
        Vibhuti Khand, Gomti Nagar
      </p>

      <div id="roomCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex gap-3 justify-content-center">
              <img
                src="https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/e2babf65_b.jpg"
                className="d-block rounded"
                alt="Room"
                style={{ width: "500px", height: "300px", objectFit: "cover" }}
              />
              <img
                src="https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/9d895b4d_b.jpg"
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
                src="https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/65051724_b.jpg"
                className="d-block rounded"
                alt="Pool"
                style={{ width: "500px", height: "300px", objectFit: "cover" }}
              />
              <img
                src="https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/15552c8e_b.jpg"
                className="d-block rounded"
                alt="Bedroom"
                style={{ width: "500px", height: "300px", objectFit: "cover" }}
              />
            </div>
          </div>
          {/* Slide 3 (add more images if needed) */}
          <div className="carousel-item">
            <div className="d-flex gap-3 justify-content-center">
              <img
                src="https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/dc7f9f93_b.jpg"
                className="d-block rounded"
                alt="Pool"
                style={{ width: "500px", height: "300px", objectFit: "cover" }}
              />
              <img
                src="https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/b50de7f6_b.jpg"
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
