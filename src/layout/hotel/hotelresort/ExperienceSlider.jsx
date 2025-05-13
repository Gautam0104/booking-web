// components/ExperienceSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image01 from "../../../assets/img/hotelresort/01 (1).jpg";
import Image02 from "../../../assets/img/hotelresort/02.jpg";
import Image04 from "../../../assets/img/hotelresort/04.jpg";
import Image05 from "../../../assets/img/hotelresort/05.jpg";
import Image06 from "../../../assets/img/hotelresort/06.jpg";
import Image07 from "../../../assets/img/hotelresort/07.jpg";

const sliderData = [
  {
    title: "Spa & Wellness",
    desc: "We focus a great deal on the understanding of behavioral psychology and influence.",
    image: Image01
  },
  {
    title: "Wedding & Romance",
    desc: "Understand that theory alone isn't going to get the job done.",
    image: Image02
  },
  {
    title: "Activities",
    desc: "Tolerably behavior may admit daughters offending effect wishes change way and any wanted.",
    image: Image04
  },
  {
    title: "Event Calendar",
    desc: "Praise effect wishes change way and any wanted behavioral psychology and influence.",
    image: Image05
  },
  {
    title: "Dining",
    desc: "Focus a great deal on the understanding of behavioral psychology and influence.",
    image: Image06
  },
  {
    title: "Shop",
    desc: "Focus a great deal on the understanding of behavioral psychology and influence.",
    image: Image07
  }
];

const ExperienceSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="py-5 px-3 my-5">
      <div className="container-fluid">
        <h2 className="text-center mb-4 text-white">Our Exciting Experience</h2>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="card card-metro overflow-hidden">
                <img src={item.image} alt={item.title} className="img-fluid" />
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-25 text-white p-3">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <button className="btn btn-link text-white p-0">
                    Explore now{" "}
                    <i className="fa-solid fa-arrow-right-long fa-fw"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ExperienceSlider;
