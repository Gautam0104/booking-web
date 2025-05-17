import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchHotelsByLocation } from "../../../services/hotelService";

export const HotelListView = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 5;

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const location = queryParams.get("location");

  useEffect(() => {
    const getHotels = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchHotelsByLocation(location);
        console.log("Fetched hotels:", data);
        setHotels(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (location) {
      getHotels();
    }
  }, [location]);

  const navigate = useNavigate();

  if (loading) return <p className="text-white">Loading hotels...</p>;
  if (error) return <p className="text-white">{error}</p>;
  if (hotels.length === 0)
    return <p className="text-white">No hotels found for this search.</p>;

  const currencySymbol = "₹";
  const selectRoom = () => {
    navigate(`/roomdetail?index=0&location=${location}`);
  };

  // Pagination logic
  const totalPages = Math.ceil(hotels.length / hotelsPerPage);
  const startIndex = (currentPage - 1) * hotelsPerPage;
  const currentHotels = hotels.slice(startIndex, startIndex + hotelsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderFilters = () => (
    <div>
      <div
        className="p-3 rounded-3 mb-1 text-start"
        style={{ backgroundColor: "#191b1d" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Hotel Type</h5>
          <i
            className="bi bi-chevron-down d-md-none cursor-pointer"
            data-bs-toggle="collapse"
            data-bs-target="#hotelTypeDropdown"
            aria-expanded="false"
            aria-controls="hotelTypeDropdown"
            style={{ fontSize: "1.2rem" }}
          ></i>
        </div>

        <div className="collapse d-md-block mt-2" id="hotelTypeDropdown">
          {["All", "Hotel", "Apartment", "Resort", "Villa", "Lodge"].map(
            (type) => (
              <div className="form-check" key={type}>
                <input className="form-check-input" type="checkbox" id={type} />
                <label className="form-check-label" htmlFor={type}>
                  {type}
                </label>
              </div>
            )
          )}
          <a href="#!" className="text-primary small d-block mt-2">
            See more
          </a>
        </div>
      </div>

      <div
        className="p-3 rounded-3 mb-1 text-start"
        style={{ backgroundColor: "#191b1d" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Hotel Type</h5>
          <i
            className="bi bi-chevron-down d-md-none cursor-pointer"
            data-bs-toggle="collapse"
            data-bs-target="#hotelTypeDropdown"
            aria-expanded="false"
            aria-controls="hotelTypeDropdown"
            style={{ fontSize: "1.2rem" }}
          ></i>
        </div>

        <div className="collapse d-md-block mt-2" id="hotelTypeDropdown">
          {["All", "Hotel", "Apartment", "Resort", "Villa", "Lodge"].map(
            (type) => (
              <div className="form-check" key={type}>
                <input className="form-check-input" type="checkbox" id={type} />
                <label className="form-check-label" htmlFor={type}>
                  {type}
                </label>
              </div>
            )
          )}
          <a href="#!" className="text-primary small d-block mt-2">
            See more
          </a>
        </div>
      </div>

      <div
        className="p-3 mb-1 rounded-3 text-start"
        style={{ backgroundColor: "#191b1d" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Popular Type</h5>
          <i
            className="bi bi-chevron-down d-md-none cursor-pointer"
            data-bs-toggle="collapse"
            data-bs-target="#popularTypeDropdown"
            aria-expanded="false"
            aria-controls="popularTypeDropdown"
            style={{ fontSize: "1.2rem" }}
          ></i>
        </div>

        <div className="collapse d-md-block mt-2" id="popularTypeDropdown">
          {[
            "Free Breakfast Included",
            "Pay At Hotel Available",
            "Free Cancellation Available"
          ].map((type, i) => (
            <div className="form-check" key={i}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`popular${i}`}
              />
              <label className="form-check-label" htmlFor={`popular${i}`}>
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div
        className="p-3 rounded-3 mb-1 text-start text-white"
        style={{ backgroundColor: "#191b1d" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Customer Rating</h5>
          <i
            className="bi bi-chevron-down d-md-none cursor-pointer"
            data-bs-toggle="collapse"
            data-bs-target="#customerRatingDropdown"
            aria-expanded="false"
            aria-controls="customerRatingDropdown"
            style={{ fontSize: "1.2rem" }}
          ></i>
        </div>

        <div className="collapse d-md-block mt-2" id="customerRatingDropdown">
          <div className="d-flex gap-2 flex-wrap">
            {[3, 3.5, 4, 4.5].map((rating, index) => (
              <button
                key={index}
                className="btn btn-dark border rounded-3 px-3 py-2 text-white"
                style={{
                  backgroundColor: "#2b2d31",
                  border: "1px solid #3c3f44",
                  fontWeight: 500
                }}
              >
                {rating}+ <i className="bi bi-star-fill text-warning ms-1"></i>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className="p-3 rounded-3 mb-1 text-start text-white"
        style={{ backgroundColor: "#191b1d" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Rating Star</h5>
          <i
            className="bi bi-chevron-down d-md-none cursor-pointer"
            data-bs-toggle="collapse"
            data-bs-target="#ratingStarDropdown"
            aria-expanded="false"
            aria-controls="ratingStarDropdown"
            style={{ fontSize: "1.2rem" }}
          ></i>
        </div>

        <div className="collapse d-md-block mt-2" id="ratingStarDropdown">
          <div className="d-flex gap-2 flex-wrap">
            {[3, 3.5, 4, 4.5].map((rating, index) => (
              <button
                key={index}
                className="btn btn-dark border rounded-3 px-3 py-2 text-white"
                style={{
                  backgroundColor: "#2b2d31",
                  border: "1px solid #3c3f44",
                  fontWeight: 500
                }}
              >
                {rating}+ <i className="bi bi-star-fill text-warning ms-1"></i>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className="p-3 rounded-3 mb-1 text-start"
        style={{ backgroundColor: "#191b1d" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Amenities</h5>
          <i
            className="bi bi-chevron-down d-md-none cursor-pointer"
            data-bs-toggle="collapse"
            data-bs-target="#amenitiesDropdown"
            aria-expanded="false"
            aria-controls="amenitiesDropdown"
            style={{ fontSize: "1.2rem" }}
          ></i>
        </div>

        <div className="collapse d-md-block mt-2" id="amenitiesDropdown">
          {[
            "All",
            "Air Conditioning",
            "Bar",
            "Bonfire",
            "Business Services",
            "Caretaker"
          ].map((type) => (
            <div className="form-check" key={type}>
              <input className="form-check-input" type="checkbox" id={type} />
              <label className="form-check-label" htmlFor={type}>
                {type}
              </label>
            </div>
          ))}
          <a href="#!" className="text-primary small d-block mt-2">
            See more
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container bg-dark text-white py-4">
        <div className="row">
          {/* Mobile Filter Button */}
          <div className="d-md-none mb-3 text-end">
            <button
              className="btn btn-outline-light"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileFilter"
              aria-controls="mobileFilter"
            >
              Filters
            </button>
          </div>

          {/* Sidebar (Desktop Only) */}
          <div className="col-md-3 d-none d-md-block">{renderFilters()}</div>

          {/* Offcanvas for Mobile Filters */}
          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex="-1"
            id="mobileFilter"
            aria-labelledby="mobileFilterLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="mobileFilterLabel">
                Filters
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">{renderFilters()}</div>
          </div>

          {/* Hotel Cards */}
          <div className="col-md-9">
            {currentHotels.map((hotel) => (
              <div
                className="card text-white mb-4 rounded-4 overflow-hidden position-relative"
                style={{ backgroundColor: "#191b1d" }}
                key={hotel.id}
              >
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={hotel.heroImage}
                      alt={hotel.name}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        minHeight: "100%"
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body h-100 d-flex flex-column justify-content-between">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <div className="mb-2 text-warning text-start">
                            {"★".repeat(hotel.starRating)}
                          </div>
                          <h5 className="card-title mb-1 text-start">
                            {hotel.name}
                          </h5>
                          <p className="opacity-50 small mb-2 text-start">
                            <i className="bi bi-geo-alt-fill me-1"></i>{" "}
                            {hotel.contact?.address?.city?.name}
                          </p>
                        </div>
                        <div className="d-flex flex-column align-items-end gap-2 ms-3">
                          <i className="bi bi-heart-fill text-white-50 fs-5"></i>
                          <i className="bi bi-share-fill text-white-50 fs-5"></i>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="fw-bold fs-5">
                            {currencySymbol}
                            {hotel.availability?.rate?.finalRate}
                          </span>
                          {hotel.oldPrice && (
                            <span className="text-decoration-line-through text-white-50 ms-2">
                              ${hotel.oldPrice}
                            </span>
                          )}
                          <span className="small text-white-50"> /day</span>
                        </div>
                        <button
                          className="btn btn-outline-light"
                          onClick={selectRoom}
                        >
                          Select Room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination Controls */}
            <div tabIndex={0} className="d-flex justify-content-center mt-4">
              <div className="d-flex gap-2 flex-wrap">
                <button
                  className="btn btn-outline-light px-4 py-2 rounded-pill"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`btn px-4 py-2 rounded-pill ${
                      currentPage === index + 1
                        ? "btn-primary"
                        : "btn-outline-light"
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className="btn btn-outline-light px-4 py-2 rounded-pill"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
