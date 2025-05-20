import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
  useEffect(() => {
    GLightbox({
      selector: '[data-glightbox]',
    });
  }, []);

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
          <aside className="col-xl-5 mt-sm-5">
            <div className="card bg-transparent border">
              <div className="card-header bg-transparent border-bottom">
                <h4 className="card-title mb-0">Price Summary</h4>
              </div>
              <div className="card-body">
                <div className="row g-4 mb-3">
                  <div className="col-md-6">
                    <div className="bg-dark py-3 px-4 rounded-3">
                      <h6 className="fw-light small mb-1 text-white">
                        Check-in
                      </h6>
                      <h6 className="mb-0 text-white">20 May 2025</h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-dark py-3 px-4 rounded-3">
                      <h6 className="fw-light small mb-1 text-white">
                        Check out
                      </h6>
                      <h6 className="mb-0 text-white">21 May 2025</h6>
                    </div>
                  </div>
                </div>

                <ul className="list-group list-group-borderless mb-3 bg-dark">
                  <li className="list-group-item px-2 d-flex justify-content-between bg-dark">
                    <span className="h6 fw-light mb-0 text-white">
                      ₹5,210 x 2 Nights
                    </span>
                    <span className="h6 fw-light mb-0 text-white">₹10,420</span>
                  </li>
                  <li className="list-group-item px-2 d-flex justify-content-between bg-dark">
                    <span className="h6 fw-light mb-0 text-white">
                      10% campaign discount
                    </span>
                    <span className="h6 fw-light mb-0 text-white">-₹520</span>
                  </li>
                  <li className="list-group-item px-2 d-flex justify-content-between bg-dark">
                    <span className="h6 fw-light mb-0 text-white">
                      Services Fee
                    </span>
                    <span className="h6 fw-light mb-0 text-white">₹100</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between px-2 mt-2 bg-dark">
                    <span className="h5 fw-normal mb-0 ps-1 text-white">
                      Total
                    </span>
                    <span className="h5 fw-normal mb-0 text-white">
                      ₹10,000
                    </span>
                  </li>
                </ul>

                <div className="d-grid gap-2">
                  <Link to="/hotelbooking" className="btn btn-dark mb-0">
                    Continue To Book
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
              <a
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
              <a href="#" className="btn btn-sm btn-dark mb-0">
                Select room
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
