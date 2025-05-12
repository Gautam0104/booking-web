import React from "react";
import { Link } from "react-router-dom";
import Offer02 from "../../assets/img/offer/02.jpg";
import Offer03 from "../../assets/img/offer/03.jpg";
import Offer07 from "../../assets/img/offer/07.jpg";
import Offer04 from "../../assets/img/offer/04.jpg";
import Offer06 from "../../assets/img/offer/06.jpg";

const OffersOfTheMonth = () => {
  const offers = [
    { title: "Pass Holder Package", image: Offer02 },
    { title: "More Sun, More Fun", image: Offer03 },
    { title: "A Stay That Gives Back", image: Offer07 },
    { title: "Elevate Your Stay", image: Offer04 },
    { title: "Spa Package Offer", image: Offer06 }
  ];

  return (
    <div className="pt-5 pt-md-8 pb-0 py-5 my-5">
      <div className="container-fluid px-lg-5">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="text-white">Offers Of The Month</h2>
          </div>
        </div>

        <div className="row g-4">
          {offers.map((offer, index) => (
            <div className="col-6 col-md-4 col-xl-2" key={index}>
              <div className="card bg-transparent h-100">
                <img src={offer.image} className="card-img" alt={offer.title} />
                <div className="card-body text-center p-2">
                  <h6 className="mb-0">
                    <Link className="stretched-link">{offer.title}</Link>
                  </h6>
                </div>
              </div>
            </div>
          ))}

          {/* View All Offers */}
          <div className="col-6 col-md-4 col-xl-2">
            <div className="card bg-transparent h-100">
              <div className="bg-secondary card-img position-relative h-100">
                <button className="btn btn-lg btn-primary btn-round mb-0 position-absolute top-50 start-50 translate-middle">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
              <div className="card-body text-center p-2">
                <h6 className="mb-0">
                  <Link className="stretched-link">View All Offers</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersOfTheMonth;
