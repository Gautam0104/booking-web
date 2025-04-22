import React from "react";
import "./CarouselComponent.css"; // Custom styles
import Image01 from "../assets/img/01.jpg";
import Image02 from "../assets/img/02.jpg";
import Image03 from "../assets/img/03.jpg";
import Image04 from "../assets/img/04.jpg";

const CarouselComponent = () => {
  const items = [
    {
      img: Image01,
      title: "Daily 50 Lucky Winners get a Free Stay",
      subtitle: "Valid till: 15 Nov"
    },
    {
      img: Image02,
      title: "Up to 60% OFF",
      subtitle: "On Hotel Bookings Online"
    },
    {
      img: Image03,
      title: "Book & Enjoy",
      subtitle: "20% Off on Room Rate"
    },
    {
      img: Image04,
      title: "Visit Paris",
      subtitle: "Romantic Packages"
    },
    {
      img: Image01,
      title: "Experience Dubai",
      subtitle: "Luxury Hotels at 30% OFF"
    },
    {
      img: Image02,
      title: "NYC Adventures",
      subtitle: "Exclusive deals"
    }
  ];

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {groupedItems.map((group, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="container">
              <div className="row justify-content-center">
                {group.map((item, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="custom-card d-flex">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="carousel-img"
                      />
                      <div className="carousel-text">
                        <h5>{item.title}</h5>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default CarouselComponent;
