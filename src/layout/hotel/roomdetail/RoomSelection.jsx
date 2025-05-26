import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

// Room Images
import Image02 from "../../../assets/img/roomdetail/02.jpg";
import Image10 from "../../../assets/img/roomdetail/10.jpg";
import Image11 from "../../../assets/img/roomdetail/11.jpg";
import Image12 from "../../../assets/img/roomdetail/12.jpg";
import Image13 from "../../../assets/img/roomdetail/13.jpg";
import Image15 from "../../../assets/img/roomdetail/15.jpg";
import Image16 from "../../../assets/img/roomdetail/16.jpg";

const RoomSelection = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const location = queryParams.get("location");
  const checkInDate = queryParams.get("checkIn");
  const checkOutDate = queryParams.get("checkOut");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  useEffect(() => {
    GLightbox({
      selector: "[data-glightbox]"
    });
  }, []);
  const guestSummary = () => {
    return `${adults + children} Guests, ${rooms} Room${rooms > 1 ? "s" : ""}`;
  };
  return (
    <section className="pt-0 mt-5">
      <div className="container">
        <div className="row">
          {/* Detail START */}
          <div className="col-xl-7">
            <div className="card bg-transparent p-0">
              {/* Card header */}
              <div className="card-header bg-dark border-bottom d-sm-flex justify-content-sm-between align-items-center p-0 pb-3">
                <h4 className="mb-2 mb-sm-0 text-white">Select Rooms</h4>

                <div className="col-sm-4">
                  <form className="form-control-bg-light">
                    <select className="form-select form-select-sm js-choice border-0 bg-secondary text-white">
                      <option value="">Select Option</option>
                      <option value="recent">Recently searched</option>
                      <option value="popular">Most popular</option>
                      <option value="rated">Top rated</option>
                    </select>
                  </form>
                </div>
              </div>

              {/* Card body START */}
              <div className="card-body p-0 pt-3 text-white">
                <div className="vstack gap-5 text-white">
                  {/* Room Cards */}
                  <RoomCard
                    image={Image02}
                    photos={5}
                    galleryImages={[Image12, Image11, Image15, Image16]}
                    title="Deluxe Pool View with Breakfast"
                    size="315 sq.ft"
                    view="City view"
                    bed="King Bed"
                    price="₹5210"
                  />

                  <RoomCard
                    image={Image10}
                    photos={4}
                    galleryImages={[Image13, Image11, Image15, Image16]}
                    title="Deluxe Room"
                    size="458 sq.ft"
                    view="City view"
                    bed="King Bed"
                    price="₹6000"
                  />
                </div>
              </div>
              {/* Card body END */}
            </div>
          </div>
          {/* Detail END */}

          {/* Right side content START */}
          <aside className="col-xl-5 mt-sm-5 ">
            <div className="card border text-start bg-dark text-white">
              <div className="card-header bg-dark text-white border-bottom">
                <h5 className="card-title mb-0">
                  ₹1509 <del className=" ms-2">₹7835</del>
                  <span className="badge bg-warning text-dark ms-2">
                    80% off
                  </span>
                  <small className="d-block ">+ taxes & fees: ₹266</small>
                </h5>
              </div>

              <div className="card-body">
                {/* Dates and Guest Info */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between border rounded p-2">
                    <span>Mon, 26 May – Tue, 27 May</span>
                    <div className="w-50 position-relative mb-3 mb-md-0">
                      <div className="input-group">
                        <span className="input-group-text bg-transparent text-white "></span>
                        <input
                          type="text"
                          className="form-control bg-dark text-white "
                          value={guestSummary()}
                          readOnly
                          onClick={() =>
                            setShowGuestSelector(!showGuestSelector)
                          }
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu guest-selector-dropdown text-white p-4 shadow">
                          <li className="d-flex justify-content-between">
                            <div>
                              <h6 className="mb-0">Adults</h6>
                              <small>Ages 13 or above</small>
                            </div>
                            <div className="hstack gap-1 align-items-center">
                              <button
                                type="button"
                                className="btn btn-link p-0 ms-4"
                                onClick={() =>
                                  setAdults(Math.max(1, adults - 1))
                                }
                              >
                                <i className="bi bi-dash-circle fs-5"></i>
                              </button>
                              <h6 className="mb-0">{adults}</h6>
                              <button
                                type="button"
                                className="btn btn-link p-0"
                                onClick={() => setAdults(adults + 1)}
                              >
                                <i className="bi bi-plus-circle fs-5"></i>
                              </button>
                            </div>
                          </li>
                          <li className="dropdown-divider"></li>
                          <li className="d-flex justify-content-between">
                            <div>
                              <h6 className="mb-0">Child</h6>
                              <small>Ages 13 below</small>
                            </div>
                            <div className="hstack gap-1 align-items-center">
                              <button
                                type="button"
                                className="btn btn-link p-0"
                                onClick={() =>
                                  setChildren(Math.max(0, children - 1))
                                }
                              >
                                <i className="bi bi-dash-circle fs-5"></i>
                              </button>
                              <h6 className="mb-0">{children}</h6>
                              <button
                                type="button"
                                className="btn btn-link p-0"
                                onClick={() => setChildren(children + 1)}
                              >
                                <i className="bi bi-plus-circle fs-5"></i>
                              </button>
                            </div>
                          </li>
                          <li className="dropdown-divider"></li>
                          <li className="d-flex justify-content-between">
                            <div>
                              <h6 className="mb-0">Rooms</h6>
                              <small>Max room 8</small>
                            </div>
                            <div className="hstack gap-1 align-items-center">
                              <button
                                type="button"
                                className="btn btn-link p-0"
                                onClick={() => setRooms(Math.max(1, rooms - 1))}
                              >
                                <i className="bi bi-dash-circle fs-5"></i>
                              </button>
                              <h6 className="mb-0">{rooms}</h6>
                              <button
                                type="button"
                                className="btn btn-link p-0"
                                onClick={() => setRooms(Math.min(8, rooms + 1))}
                              >
                                <i className="bi bi-plus-circle fs-5"></i>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room Type */}
                <div className="mb-3">
                  <div className="border p-2 rounded d-flex justify-content-between align-items-center">
                    <span>Classic</span>
                    <button className="btn btn-link p-0">✎</button>
                  </div>
                </div>

                {/* Offers Breakdown */}
                <ul className="list-group mb-3 bg-dark text-white">
                  <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                    OYOFAMSTAY coupon applied
                    <span className="text-success">-₹2013 ✅</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                    OYO Money applied <small>(₹379 OYO Xtra)</small>
                    <span className="text-success">-₹379 ✅</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                    Save 5% with Wizard membership
                    <span className="text-success">-₹95 ✅</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                    Wizard Blue membership charge
                    <span className="text-danger">+₹95</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                    Price surge
                    <span className="text-danger">+₹259</span>
                  </li>
                </ul>

                {/* Total Section */}
                <div className="border-top pt-3 mb-3">
                  <h6 className="d-flex justify-content-between">
                    <span>Your savings</span>
                    <span className="text-success">₹2392</span>
                  </h6>
                  <h5 className="d-flex justify-content-between">
                    <strong>Total price</strong>
                    <strong>₹1775</strong>
                  </h5>
                  <small className="text-muted">Including taxes & fees</small>
                </div>

                {/* Call to Action */}
                <div className="d-grid">
                  <Link
                    to={`/dashboard/hotelbooking?location=${location}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
                    className="btn btn-primary btn-lg"
                  >
                    Continue to Book
                  </Link>
                </div>

                {/* Urgency Note */}
                <div className="mt-2 text-danger small">
                  ⚡ 11 people booked this hotel in last 6 hours
                </div>

                {/* Cancellation Policy Link */}
                <div className="mt-2">
                  <Link to="/" className="text-decoration-underline small">
                    Cancellation Policy
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Right side content END */}
        </div>
      </div>
    </section>
  );
};

const RoomCard = ({
  image,
  photos,
  galleryImages,
  title,
  size,
  view,
  bed,
  price
}) => {
  const galleryId = `gallery-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="card border bg-transparent p-3">
      <div className="row g-3 g-md-4">
        <div className="col-md-4">
          <div className="position-relative">
            <img src={image} className="card-img" alt={title} />
            <div className="card-img-overlay">
              <a
                href={galleryImages[0]}
                className="badge bg-dark stretched-link"
                data-glightbox={`title: ${title}`}
                data-gallery={galleryId}
              >
                {photos} Photos <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            {galleryImages.map((img, i) => (
              <link
                key={i}
                href={img}
                data-glightbox={`title: ${title}`}
                data-gallery={galleryId}
                style={{ display: "none" }}
              />
            ))}
          </div>
        </div>

        <div className="col-md-8">
          <div className="card-body d-flex flex-column p-0 h-100">
            <h5 className="card-title">{title}</h5>

            <ul className="nav small nav-divider mb-0">
              <li className="nav-item mb-0 text-white me-2">
                <i className="bi bi-square me-2"></i>
                {size}
              </li>
              <li className="nav-item mb-0 text-white me-2">
                <i className="bi bi-table me-2"></i>
                {view}
              </li>
              <li className="nav-item mb-0 text-white">
                <i className="bi bi-square me-2"></i>
                {bed}
              </li>
            </ul>

            <div className="d-flex justify-content-between align-items-center mt-2 mt-md-auto">
              <div className="d-flex text-success">
                <h6 className="h5 mb-0 text-success">{price}</h6>
                <span className="fw-light">/per night</span>
              </div>
              <Link to="/" className="btn btn-sm btn-dark mb-0">
                Select room
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
