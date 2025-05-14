import React from "react";
import Image07 from "../../../assets/img/hotelchain/hotelsection/07.jpg";
const HotelSection = () => {
  return (
    <div className="py-0 py-5">
      <div className="container">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="text-white">
              We always provide the best for our hotel visitors. We are happy to
              help you.
            </h2>
            <p className="mb-0 text-white">
              We focus a great deal on the understanding of behavioral
              psychology and influence triggers which are crucial for becoming a
              well-rounded Digital Marketer. We understand that theory is
              important to build a solid foundation, we understand that theory
              alone isn't going to get the job done.
            </p>
          </div>
        </div>

        {/* Counters and Features */}
        <div className="row g-4">
          {/* Counter Column */}
          <div className="col-xl-4">
            <div className="card card-body bg-primary bg-opacity-10 vstack gap-4 justify-content-center h-100 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <h3
                  className="purecounter text-primary mb-0"
                  data-purecounter-start="0"
                  data-purecounter-end="10"
                  data-purecounter-delay="200"
                  data-purecounter-duration="0"
                >
                  10
                </h3>
                <h6 className="fw-normal mb-0 text-white">Total Hotels</h6>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center me-3">
                  <h3
                    className="purecounter text-primary mb-0"
                    data-purecounter-start="0"
                    data-purecounter-end="200"
                    data-purecounter-delay="300"
                    data-purecounter-duration="0"
                  >
                    200
                  </h3>
                  <span className="h3 text-primary mb-0">+</span>
                </div>
                <h6 className="fw-normal mb-0 text-white">Total Staff</h6>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center me-3">
                  <h3
                    className="purecounter text-primary mb-0"
                    data-purecounter-start="0"
                    data-purecounter-end="50"
                    data-purecounter-delay="300"
                    data-purecounter-duration="0"
                  >
                    50
                  </h3>
                  <span className="h3 text-primary mb-0">+</span>
                </div>
                <h6 className="fw-normal mb-0 text-white">Amazing Services</h6>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-md-6 col-xl-4">
            <div className="card overflow-hidden position-relative">
              <img src={Image07} className="rounded-3 w-100" alt="Hotel 360" />
              <div className="w-100 h-100">
                <button
                  className="btn btn-dark position-absolute top-50 start-50 translate-middle mb-0"
                  data-bs-toggle="modal"
                  data-bs-target="#map360"
                >
                  <i className="bi bi-eye me-2"></i>View 360
                </button>
              </div>
            </div>
          </div>

          {/* Features Column */}
          <div className="col-md-6 col-xl-4">
            <ul className="list-group list-group-borderless bg-dark text-white text-start rounded-3">
              <li className="list-group-item py-4 bg-dark text-white border-0">
                <h6 className="mb-0 fw-normal">
                  <i className="bi bi-cash-coin fa-fw text-info me-2"></i>
                  Best Rate Guaranteed
                </h6>
              </li>
              <li className="list-group-item py-4 bg-dark text-white border-0">
                <h6 className="mb-0 fw-normal">
                  <i className="bi bi-credit-card-2-back fa-fw text-warning me-2"></i>
                  Payment at Hotel
                </h6>
              </li>
              <li className="list-group-item py-4 bg-dark text-white border-0">
                <h6 className="mb-0 fw-normal">
                  <i className="bi bi-wallet fa-fw text-success me-2"></i>
                  Exclusive Members Rewards
                </h6>
              </li>
              <li className="list-group-item py-4 bg-dark text-white border-0">
                <h6 className="mb-0 fw-normal">
                  <i className="bi bi-wifi fa-fw text-danger me-2"></i>
                  WIFI Access
                </h6>
              </li>
              <li className="list-group-item pt-3 pb-0 bg-dark text-white border-0">
                <h6 className="mb-0 fw-normal">
                  <i className="bi bi-tags fa-fw text-warning me-2"></i>{" "}
                  {/* fallback for text-orange */}
                  No Hidden Changes
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSection;
