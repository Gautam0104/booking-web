import React from "react";
import "flatpickr/dist/themes/dark.css";
import "flatpickr/dist/flatpickr.css";
import Image01 from "../../../assets/img/hotellist/01.jpg";

import SearchBox from "../../../components/SearchBox";
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
            150 Hotels in India
          </h1>
          <div
            className="rounded-4 d-flex flex-wrap justify-content-between align-items-center shadow position-relative m-3 me-4"
            style={{}}
          >
            <div
              style={{
                width: window.innerWidth < 768 ? "100%" : "150%",
                marginLeft: window.innerWidth < 768 ? "0" : "0"
              }}
            >
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
