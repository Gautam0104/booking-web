import React from "react";
import { FaStar } from "react-icons/fa";
import Image04 from "../../../assets/img/hotellist/04.jpg";
import Image11 from "../../../assets/img/hotellist/11.jpg";
import Image12 from "../../../assets/img/hotellist/12.jpg";
import Image08 from "../../../assets/img/hotellist/08.jpg";

const HotelGridView = () => {
  const hotels = [
    {
      id: 1,
      name: "Hotel Baljees Regency",
      rating: 4.5,
      price: 750,
      oldPrice: 1000,
      discount: "30% Off",
      facilities: ["Air Conditioning", "Wifi", "Kitchen", "Pool"],
      image: Image04
    },
    {
      id: 2,
      name: "Courtyard by Marriott New York",
      rating: 4.0,
      price: 1200,
      facilities: ["Air Conditioning", "Wifi", "Pool", "More+"],
      image: Image08
    },
    {
      id: 3,
      name: "Club Quarters Hotel",
      rating: 4.8,
      price: 980,
      oldPrice: 1000,
      facilities: ["Air Conditioning", "Wifi", "Kitchen", "Pool"],
      image: Image11
    },
    {
      id: 1,
      name: "Hotel Baljees Regency",
      rating: 4.5,
      price: 750,
      oldPrice: 1000,

      facilities: ["Air Conditioning", "Wifi", "Kitchen", "Pool"],
      image: Image12
    },
    {
      id: 2,
      name: "Courtyard by Marriott New York",
      rating: 4.0,
      price: 1200,
      facilities: ["Air Conditioning", "Wifi", "Pool", "More+"],
      image: Image08
    },
    {
      id: 3,
      name: "Club Quarters Hotel",
      rating: 4.8,
      price: 980,
      oldPrice: 1000,
      facilities: ["Air Conditioning", "Wifi", "Kitchen", "Pool"],
      image: Image11
    },
    {
      id: 1,
      name: "Hotel Baljees Regency",
      rating: 4.5,
      price: 750,
      oldPrice: 1000,

      facilities: ["Air Conditioning", "Wifi", "Kitchen", "Pool"],
      image: Image04
    },
    {
      id: 2,
      name: "Courtyard by Marriott New York",
      rating: 4.0,
      price: 1200,
      facilities: ["Air Conditioning", "Wifi", "Pool", "More+"],
      image: Image12
    },
    {
      id: 3,
      name: "Club Quarters Hotel",
      rating: 4.8,
      price: 980,
      oldPrice: 1000,
      facilities: ["Air Conditioning", "Wifi", "Kitchen", "Pool"],
      image: Image11
    }
  ];
  return (
    <div>
      <div className="container py-5">
        <div className="row g-4">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="col-md-4">
              <div className="card h-100 shadow-sm bg-dark text-white">
                <div className="position-relative">
                  <img
                    src={hotel.image}
                    className="card-img-top"
                    alt={hotel.name}
                  />
                  {hotel.discount && (
                    <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                      {hotel.discount}
                    </span>
                  )}
                </div>
                <div className="card-body">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark">
                      {hotel.rating} <FaStar className="text-dark" />
                    </span>
                  </div>
                  <h5 className="card-title">{hotel.name}</h5>
                  <p className="card-text small text-muted">
                    {hotel.facilities.join(" • ")}
                  </p>
                  <div className="row">
                    <div className="col-6 d-flex align-items-center ">
                      <h5 className="text-success mb-0">${hotel.price}</h5>
                      {hotel.oldPrice && (
                        <small className="opacity-50 text-decoration-line-through ms-2 ">
                          ${hotel.oldPrice}
                        </small>
                      )}
                    </div>
                    <div className="col-6  bg-transparent border-0 justify-content-end">
                      <button className="btn btn-primary">View Detail</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelGridView;
