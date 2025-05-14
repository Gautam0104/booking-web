import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image05 from "../../../assets/img/hotelchain/05.jpg";
import Image06 from "../../../assets/img/hotelchain/06.jpg";
import Image07 from "../../../assets/img/hotelchain/07.jpg";
import Image08 from "../../../assets/img/hotelchain/08.jpg";

const sliderData = [
  {
    title: "Spa & Wellness",
    desc: "We focus a great deal on the understanding of behavioral psychology and influence.",
    image: Image05
  },
  {
    title: "Wedding & Romance",
    desc: "Understand that theory alone isn't going to get the job done.",
    image: Image06
  },
  {
    title: "Activities",
    desc: "Tolerably behavior may admit daughters offending effect wishes change way and any wanted.",
    image: Image07
  },
  {
    title: "Event Calendar",
    desc: "Praise effect wishes change way and any wanted behavioral psychology and influence.",
    image: Image08
  },
  {
    title: "Dining",
    desc: "Focus a great deal on the understanding of behavioral psychology and influence.",
    image: Image05
  },
  {
    title: "Shop",
    desc: "Focus a great deal on the understanding of behavioral psychology and influence.",
    image: Image06
  }
];

const SpecialOffer = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="py-5 px-3 my-5">
      <div className="container">
        <h2 className="text-center mb-4 text-white">Special Offers</h2>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index} className="px-2 mb-5">
              <div className="card card-metro position-relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                  style={{ position: "relative", zIndex: 1 }}
                />
                <div
                  className="position-absolute start-0 mx-3 p-3 rounded-2 text-white d-flex flex-column"
                  style={{
                    bottom: "0",
                    transform: "translateY(30%)",
                    backgroundColor: "#191b1d",
                    zIndex: 10,
                    width: "calc(100% - 2rem)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
                  }}
                >
                  <div className="mb-2">
                    <h4 className="mb-1">{item.title}</h4>
                    <p className="mb-0 small">{item.desc}</p>
                  </div>
                  <div className="mt-2">
                    <button
                      className="btn  text-white px-2"
                      style={{ backgroundColor: "#0b0a12" }}
                    >
                      View Offer
                      <i className="fa-solid fa-arrow-right-long fa-fw"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpecialOffer;
