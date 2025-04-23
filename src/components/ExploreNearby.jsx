import React from "react";

import Image01 from "../assets/img/explore/01.jpg";
import Image02 from "../assets/img/explore/02.jpg";
import Image03 from "../assets/img/explore/03.jpg";
import Image04 from "../assets/img/explore/04.jpg";
import Image05 from "../assets/img/explore/05.jpg";
import Image06 from "../assets/img/explore/06.jpg";
import Image07 from "../assets/img/explore/07.jpg";
import Image08 from "../assets/img/explore/08.jpg";
import Image09 from "../assets/img/explore/09.jpg";
import Image10 from "../assets/img/explore/10.jpg";
import Image11 from "../assets/img/explore/11.jpg";
import Image12 from "../assets/img/explore/12.jpg";

const locations = [
  { name: "San Francisco", time: "13 min drive", img: Image01 },
  { name: "Los Angeles", time: "25 min drive", img: Image02 },
  { name: "Miami", time: "45 min drive", img: Image03 },
  { name: "Sanjosh", time: "55 min drive", img: Image04 },
  { name: "New York", time: "1-hour drive", img: Image05 },
  { name: "North Justen", time: "2-hour drive", img: Image06 },
  { name: "Rio", time: "20 min drive", img: Image07 },
  { name: "Las Vegas", time: "3-hour drive", img: Image08 },
  { name: "Texas", time: "55 min drive", img: Image09 },
  { name: "Chicago", time: "13 min drive", img: Image10 },
  { name: "New Keagan", time: "35 min drive", img: Image11 },
  { name: "Oslo", time: "1 hour 13 min drive", img: Image12 }
];

const ExploreNearby = () => {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Explore Nearby</h2>
        <div className="row g-4">
          {locations.map((place, index) => (
            <div key={index} className="col-6 col-md-3 col-lg-2">
              <img
                src={place.img}
                alt={place.name}
                className="img-fluid rounded-circle mb-2"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h6 className="fw-bold mb-1">{place.name}</h6>
              <p className="opacity-50 small mb-0">{place.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreNearby;
