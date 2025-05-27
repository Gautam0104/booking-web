import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import RoomSelection from "../layout/hotel/roomdetail/RoomSelection";
import "../styles/RoomDetail.css";

const RoomDetail = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const hotelName = queryParams.get("hotelName");

  const hotelLocationline1 = queryParams.get("hotelLocationline1");
  const hotelLocationline2 = queryParams.get("hotelLocationline2");
  const slides = [
    [
      "https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/e2babf65_b.jpg",
      "https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/9d895b4d_b.jpg"
    ],
    [
      "https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/65051724_b.jpg",
      "https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/15552c8e_b.jpg"
    ],
    [
      "https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/dc7f9f93_b.jpg",
      "https://i.travelapi.com/lodging/19000000/18970000/18965700/18965604/b50de7f6_b.jpg"
    ]
  ];

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-white">{hotelName}</h2>
      <p className="text-white opacity-75">
        <FaMapMarkerAlt className="me-2" />
        {hotelLocationline1}, {hotelLocationline2}
      </p>

      <div id="roomCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slideImages, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex gap-3 justify-content-center">
                {slideImages.map((src, i) => (
                  <div
                    key={i}
                    className="position-relative image-wrapper"
                    style={{ width: "500px", height: "300px" }}
                  >
                    <img
                      src={src}
                      className="d-block rounded w-100 h-100"
                      alt={`Preview ${index}-${i}`}
                      style={{ objectFit: "cover" }}
                    />
                    <button
                      className="btn btn-light position-absolute top-50 start-50 translate-middle preview-button"
                      style={{
                        display: "none",
                        zIndex: 10,
                        padding: "8px 12px",
                        borderRadius: "20px",
                        opacity: 0.8
                      }}
                      onClick={() => window.open(src, "_blank")}
                    >
                      Preview
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
