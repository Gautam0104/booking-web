import React, { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { Link } from "react-router-dom";
import Image08 from "../../../assets/img/hotelresort/08.jpg";
import Image09 from "../../../assets/img/hotelresort/09.jpg";
import Image10 from "../../../assets/img/hotelresort/10.jpg";

const rooms = [
  {
    title: "One Bedroom Ocean Suite",
    sqft: "847-900 SQ.Ft",
    sqm: "79-84 SQ.M",
    desc: "Lively use looked latter regard had. We understand that theory is important to build a solid foundation",
    features: ["Ocean View", "Living Roof", "Outdoor Soaking Tub"],
    image: Image10
  },
  {
    title: "The Entertainment Suite",
    sqft: "847-900 SQ.Ft",
    sqm: "79-84 SQ.M",
    desc: "Lively use looked latter regard had. We understand that theory is important to build a solid foundation",
    features: ["Ocean View", "Private Deck", "Living Roof"],
    image: Image09
  },
  {
    title: "The Penthouse Suite",
    sqft: "789-850 SQ.Ft",
    sqm: "78-85 SQ.M",
    desc: "Lively use looked latter regard had. We understand that theory is important to build a solid foundation",
    features: ["Indoor Tub", "Private Deck", "Freestanding"],
    image: Image08
  }
];

const FavoriteRoomsSlider = () => {
  useEffect(() => {
    const slider = tns({
      container: ".my-slider", // Use class selector
      items: 1,
      slideBy: 1,
      autoplay: false,
      controls: true,
      nav: false,
      mouseDrag: true,
      controlsPosition: "bottom",
      controlsText: [
        "<i class='bi bi-chevron-left'></i>",
        "<i class='bi bi-chevron-right'></i>"
      ]
    });

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="pt-5 pb-0">
      <div className="container-fluid px-lg-5">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-xxl-8 mx-auto">
            <div className="d-sm-flex justify-content-between align-items-center">
              <h2 className="mb-0 text-white">Our Favorite Rooms</h2>
              <Link className="btn btn-secondary mb-0 d-grid">
                See all rooms
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div
          className="position-relative rounded-3 overflow-hidden"
          style={{ height: "60vh" }}
        >
          <div className="my-slider">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="position-relative text-white"
                style={{
                  backgroundImage: `url(${room.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "60vh"
                }}
              >
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1
                  }}
                ></div>

                {/* Content */}
                <div
                  className="p-4"
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "100px",
                    zIndex: 2,
                    backgroundColor: "rgb(25,27,29)",
                    borderRadius: "10px",
                    maxWidth: "500px",
                    textAlign: "left"
                  }}
                >
                  <h4>{room.title}</h4>
                  <ul className="nav h6 fw-light nav-divider mb-2">
                    <li className="nav-item">{room.sqft}</li>
                    <li className="nav-item">{room.sqm}</li>
                  </ul>
                  <p>{room.desc}</p>
                  <ul className="list-inline mb-3">
                    {room.features.map((feature, i) => (
                      <li key={i} className="list-inline-item text-success">
                        <i className="bi bi-check-circle me-1"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link className="btn btn-light btn-sm">
                    Reserve <i className="fa fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Custom Styles */}
        <style>{`
          .tns-controls {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            padding: 0 1rem;
            transform: translateY(-50%);
            z-index: 3;
          }

          .tns-controls button {
            background-color: rgba(0, 0, 0, 0.6);
            border: none;
            border-radius: 50%;
            color: #fff;
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .tns-controls button:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }
        `}</style>
      </div>
    </div>
  );
};

export default FavoriteRoomsSlider;
