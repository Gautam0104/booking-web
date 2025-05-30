import React from "react";

import "./HeroSection.css";
import Image06 from "../assets/img/06.jpg";
import Image11 from "../assets/img/11.jpg";
import Image12 from "../assets/img/12.jpg";
import { BsHeadset } from "react-icons/bs";
import SearchBox from "./SearchBox";

const HeroSection = () => {
  return (
    <div className="hero-section bg-dark text-white py-5 position-relative">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6  text-start">
            <h1 className="display-4 fw-bold">
              Find the top <br />
              <span className="highlight-underline">Hotels nearby.</span>
            </h1>
            <p className="mt-5">
              We bring you not only a stay option, but an experience in your
              <br />
              budget to enjoy the luxury.
            </p>
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-primary">Discover Now</button>
              <button className="btn btn-outline-light d-flex align-items-center gap-2">
                <span className="play-icon">&#9658;</span> Watch our story
              </button>
            </div>

            {/* Search Box */}
            <div
              style={{
                width: window.innerWidth < 768 ? "100%" : "150%",
                marginLeft: window.innerWidth < 768 ? "0" : "0"
              }}
            >
              <SearchBox />
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-end position-relative mt-4 mt-md-0 right-section">
            <img
              src={Image06}
              alt="Hero"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />

            {/* Circle 1 - Image 11 */}
            <img
              src={Image11}
              alt="Hero"
              className="img-fluid rounded-circle shadow position-absolute circle-1"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                top: "10%",
                opacity: 1,
                border: "2px solid #fff",
                zIndex: 10
              }}
            />

            {/* Circle 2 - Image 12 */}
            <img
              src={Image12}
              alt="Hero"
              className="img-fluid rounded-circle shadow position-absolute circle-2"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                top: "30%",
                opacity: 1,
                border: "2px solid #fff",
                zIndex: 10
              }}
            />

            {/* Support Box */}
            <div
              className="position-absolute guide-support-box"
              style={{
                top: "0",
                right: "-10px",
                transform: "translateY(-16px)",
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                borderRadius: "1rem",
                padding: "1rem",
                zIndex: 10,
                textAlign: "center",
                border: "1px solid #000"
              }}
            >
              <BsHeadset className="text-danger fs-1" />
              <h5 className="text-dark mb-1">24 / 7</h5>
              <h6 className="text-dark fw-light small mb-0">Guide Supports</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
