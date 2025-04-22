import React from "react";

const HolidayPromo = () => {
  return (
    <div
      className="container py-5 text-white mt-5 rounded-4 shadow"
      style={{ backgroundColor: "#1c1e22" }}
    >
      <div className="row align-items-center">
        {/* Left: Image Card */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="card bg-dark text-white border-0">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              className="card-img rounded-4"
              alt="Holiday Resort"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
              <div className="bg-dark bg-opacity-75 p-3 rounded d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-bold">Client</div>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://i.pravatar.cc/30?img=1"
                      className="rounded-circle me-1"
                      alt="user"
                    />
                    <img
                      src="https://i.pravatar.cc/30?img=2"
                      className="rounded-circle me-1"
                      alt="user"
                    />
                    <img
                      src="https://i.pravatar.cc/30?img=3"
                      className="rounded-circle me-1"
                      alt="user"
                    />
                    <span className="badge bg-primary">1k+</span>
                  </div>
                </div>
                <div>
                  <div className="fw-bold">Rating</div>
                  <div>
                    <span className="text-warning fw-bold">★ 4.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="col-md-6">
          <h2 className="fw-bold display-6">
            The Best Holidays
            <br />
            Start Here!
          </h2>
          <p className="text-white ">
            Book your hotel with us and don't forget to grab an awesome hotel
            deal to save massive on your stay.
          </p>

          <div className="row g-4 mt-4">
            <div className="col-6 d-flex">
              <div className="me-3">
                <span
                  className="bg-success p-2 rounded-circle d-inline-block"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="bi bi-egg-fried text-white"></i>
                </span>
              </div>
              <div>
                <h6 className="fw-bold">Quality Food</h6>
                <p className="text-white mb-0">
                  Departure defective arranging rapturous did. Conduct denied
                  adding worthy little.
                </p>
              </div>
            </div>

            <div className="col-6 d-flex">
              <div className="me-3">
                <span
                  className="bg-danger p-2 rounded-circle d-inline-block"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="bi bi-lightning text-white"></i>
                </span>
              </div>
              <div>
                <h6 className="fw-bold">Quick Services</h6>
                <p className="text-white mb-0">
                  Supposing so be resolving breakfast am or perfectly.
                </p>
              </div>
            </div>

            <div className="col-6 d-flex">
              <div className="me-3">
                <span
                  className="bg-warning p-2 rounded-circle d-inline-block"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="bi bi-shield-lock text-white"></i>
                </span>
              </div>
              <div>
                <h6 className="fw-bold">High Security</h6>
                <p className="text-white mb-0">
                  Arranging rapturous did believe him all had supported.
                </p>
              </div>
            </div>

            <div className="col-6 d-flex">
              <div className="me-3">
                <span
                  className="bg-info p-2 rounded-circle d-inline-block"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="bi bi-alarm text-white"></i>
                </span>
              </div>
              <div>
                <h6 className="fw-bold">24 Hours Alert</h6>
                <p className="text-white mb-0">
                  Rapturous did believe him all had supported.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayPromo;
