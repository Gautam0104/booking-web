import React from "react";
import { Link } from "react-router-dom";

const TributeSection = () => {
  return (
    <div className="pt-5 pt-md-8 pb-0">
      <div className="container z-index-9">
        <div className="row">
          <div className="col-lg-10 m-auto text-center">
            <h2 className="text-white">Here is a tribute to good life!</h2>
            <p className="lead text-white">
              Size-like body someone had. Are conduct viewing boy minutes
              warrant the expense? Tolerably behavior may admit daughters
              offending her ask own. Praise effects wish change way and any
              wanted. Lively use looked latter regard had. Do he it part more
              last in. We understand that theory is important to build a solid
              foundation, we understand that theory alone isn't going to get the
              job done so that's why this is packed with practical hands-on
              examples that you can follow step by step.
            </p>

            {/* Feature List */}
            <ul className="list-inline hstack gap-4 flex-wrap justify-content-center mt-4">
              <li className="list-inline-item">
                <h5 className="mb-0 fw-normal text-white">
                  <i className="bi bi-star fa-fw text-warning me-1"></i>Have
                  High Rating
                </h5>
              </li>
              <li className="list-inline-item">
                <h5 className="mb-0 fw-normal text-white">
                  <i className="bi bi-pin-map fa-fw text-primary me-1"></i>Best
                  Locations
                </h5>
              </li>
              <li className="list-inline-item">
                <h5 className="mb-0 fw-normal text-white">
                  <i className="bi bi-x-octagon fa-fw text-danger me-1"></i>Free
                  Cancellation
                </h5>
              </li>
              <li className="list-inline-item">
                <h5 className="mb-0 fw-normal text-white">
                  <i className="bi bi-wallet fa-fw text-success me-1"></i>
                  Payment Options
                </h5>
              </li>
            </ul>

            {/* Rating and Button */}
            <div className="d-sm-flex justify-content-center align-items-center mt-4">
              {/* Rating */}
              <div className="d-flex justify-content-center align-items-center text-start me-0 me-sm-4">
                <h3 className="me-2 mb-0 text-white">4.5</h3>
                <div>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                    </li>
                  </ul>
                  <p className="mb-0 small text-white">Clients Love Us!</p>
                </div>
              </div>

              {/* Button */}
              <div>
                <Link to={"/"} className="btn btn-lg btn-secondary mb-0">
                  Explore now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TributeSection;
