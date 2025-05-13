import React from "react";
import Image01 from "../../../assets/img/hotelresort/01.jpg";
import SpecialOffer from "./SpecialOffer";
import ExploreNearby from "../../../components/ExploreNearby";
import PreciousMoment from "./PreciousMoment";

const HotelChainView = () => {
  return (
    <div>
      {/* hero section */}
      <div className="position-relative">
        {/* Background Image Container */}
        <div
          className="container-fluid bg-dark text-white py-5 rounded-4 position-relative overflow-hidden"
          style={{
            backgroundImage: `url(${Image01})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
            display: "flex",
            alignItems: "center"
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
          <div
            className="container py-5 position-relative"
            style={{ zIndex: 2 }}
          >
            <h1 className="display-4 fw-bold mb-4 text-center">
              A World Of Luxury Awaits You
            </h1>
            <h6 className=" mb-4 text-center" style={{ fontSize: "20px" }}>
              Discover a New Look of Luxury Resorts.
            </h6>
            <button className="btn btn-secondary rounded-2">
              Discover More
            </button>
          </div>
        </div>
      </div>
      <SpecialOffer />
      <ExploreNearby />
      <PreciousMoment />
    </div>
  );
};

export default HotelChainView;
