import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image01 from "../assets/img/featuredhotels/01.jpg";
import Image02 from "../assets/img/featuredhotels/02.jpg";
import Image03 from "../assets/img/featuredhotels/03.jpg";
import Image04 from "../assets/img/featuredhotels/04.jpg";
import "./FeaturedHotels.css";

const hotels = [
  {
    name: "Baga Comfort",
    location: "New York",
    price: "$455",
    rating: 4.5,
    image: Image01
  },
  {
    name: "New Apollo Hotel",
    location: "California",
    price: "$585",
    rating: 4.8,
    image: Image02
  },
  {
    name: "New Age Hotel",
    location: "Los Angeles",
    price: "$385",
    rating: 4.6,
    image: Image03
  },
  {
    name: "Helios Beach Resort",
    location: "Chicago",
    price: "$665",
    rating: 4.8,
    image: Image04
  }
];

function FeaturedHotels() {
  return (
    <div className="container text-center py-5 text-white">
      <h2 className="fw-bold mb-4">Featured Hotels</h2>
      <div className="row justify-content-center">
        {hotels.map((hotel, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card bg-dark text-white border-0 rounded-4 overflow-hidden position-relative">
              {/* Image */}
              <img
                src={hotel.image}
                className="card-img"
                alt={hotel.name}
                style={{ height: "380px", objectFit: "cover" }}
              />
              {/* Location Badge */}
              <div className="position-absolute top-0 start-0 m-2">
                <span className="badge bg-dark px-3 py-2 rounded-pill">
                  <i className="bi bi-geo-alt-fill me-1"></i> {hotel.location}
                </span>
              </div>
              {/* Card Body */}
              <div className="card-body text-start bg-dark text-white">
                <h5 className="card-title fw-bold">{hotel.name}</h5>
                <p className="mb-1">
                  <span className="text-success fw-bold">{hotel.price}</span>
                  <span className="text-muted"> /starting at</span>
                </p>
                <p className="mb-0">
                  <strong>{hotel.rating}</strong>{" "}
                  <i className="bi bi-star-fill text-warning"></i>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedHotels;
