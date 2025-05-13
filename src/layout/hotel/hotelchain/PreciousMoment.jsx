import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image01 from "../../../assets/img/hotelchain/preciousmoment/01.jpg";
import Image02 from "../../../assets/img/hotelchain/preciousmoment/02.jpg";
import Image03 from "../../../assets/img/hotelchain/preciousmoment/03.jpg";
import Image04 from "../../../assets/img/hotelchain/preciousmoment/04.jpg";
import Image05 from "../../../assets/img/hotelchain/preciousmoment/05.jpg";
import Image06 from "../../../assets/img/hotelchain/preciousmoment/06.jpg";
import Image07 from "../../../assets/img/hotelchain/preciousmoment/07.jpg";
import Image08 from "../../../assets/img/hotelchain/preciousmoment/08.jpg";

const sliderData = [
  {
    image: Image01
  },
  {
    image: Image02
  },
  {
    image: Image03
  },
  {
    image: Image04
  },
  {
    image: Image05
  },
  {
    image: Image06
  },
  {
    image: Image07
  },
  {
    image: Image08
  }
];
const PreciousMoment = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="py-5 px-3 my-5">
      <div className="container-fluid">
        <h2 className="text-center mb-4 text-white">
          Our Hotel Precious Moments
        </h2>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index} className="px-2 mb-5">
              <div
                className="card card-metro position-relative overflow-hidden rounded-2"
                style={{ height: "300px" }} // adjust height as needed
              >
                {/* You can add overlay/content above the image here */}

                {/* Image at bottom */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid position-absolute bottom-0 start-0 w-100 h-100 object-fit-cover"
                  style={{ zIndex: 1 }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PreciousMoment;
