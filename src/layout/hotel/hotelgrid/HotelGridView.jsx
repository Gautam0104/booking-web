import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchHotelsByLocation } from "../../../services/hotelService";

export const HotelGridView = () => {
  const [allHotels, setAllHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 4;
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter states
  const [filters, setFilters] = useState({
    hotelType: [],
    popularType: [],
    customerRating: null,
    ratingStar: null,
    amenities: [],
    facilities: []
  });

  // Available options for filters
  const [facilityOptions, setFacilityOptions] = useState([]);
  const [amenityOptions] = useState([
    "Air Conditioning",
    "Bar",
    "Business Services",
    "Free WiFi",
    "Parking",
    "Pool",
    "Restaurant",
    "Spa"
  ]);
  console.log("facilityOptions", facilityOptions);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const location = queryParams.get("location");
  const checkInDate = queryParams.get("checkin");
  const checkOutDate = queryParams.get("checkout");

  useEffect(() => {
    const getHotels = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchHotelsByLocation(location);
        setAllHotels(data);
        setFilteredHotels(data);

        // Extract unique facilities from all hotels
        const allFacilities = new Set();
        data.forEach((hotel) => {
          if (hotel.facilities) {
            Object.keys(hotel.facilities).forEach((facility) => {
              if (hotel.facilities[facility]) {
                allFacilities.add(facility);
              }
            });
          }
        });
        setFacilityOptions(Array.from(allFacilities).sort());
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

  // Apply filters and sorting whenever filters, allHotels, or sortBy changes
  useEffect(() => {
    let result = [...allHotels];

    // Apply name search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((hotel) =>
        hotel.name.toLowerCase().includes(query)
      );
    }

    // Apply hotel type filter
    if (filters.hotelType.length > 0 && !filters.hotelType.includes("All")) {
      result = result.filter((hotel) => filters.hotelType.includes(hotel.type));
    }

    // Apply popular type filter
    if (filters.popularType.length > 0) {
      result = result.filter((hotel) => {
        if (
          filters.popularType.includes("Free Breakfast Included") &&
          !hotel.freeBreakfast
        ) {
          return false;
        }
        if (
          filters.popularType.includes("Pay At Hotel Available") &&
          !hotel.payAtHotel
        ) {
          return false;
        }
        if (
          filters.popularType.includes("Free Cancellation Available") &&
          !hotel.freeCancellation
        ) {
          return false;
        }
        return true;
      });
    }

    // Apply customer rating filter
    if (filters.customerRating) {
      result = result.filter((hotel) => hotel.rating >= filters.customerRating);
    }

    // Apply rating star filter
    if (filters.ratingStar) {
      result = result.filter((hotel) => hotel.starRating >= filters.ratingStar);
    }

    // Apply amenities filter
    if (filters.amenities.length > 0 && !filters.amenities.includes("All")) {
      result = result.filter((hotel) =>
        filters.amenities.every((amenity) => hotel.amenities?.includes(amenity))
      );
    }

    // Apply facilities filter
    if (filters.facilities.length > 0) {
      result = result.filter((hotel) => {
        return filters.facilities.every(
          (facility) => hotel.facilities?.[facility] === true
        );
      });
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low-high":
        result.sort(
          (a, b) =>
            a.availability?.rate?.finalRate - b.availability?.rate?.finalRate
        );
        break;
      case "price-high-low":
        result.sort(
          (a, b) =>
            b.availability?.rate?.finalRate - a.availability?.rate?.finalRate
        );
        break;
      case "rating-high-low":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name-a-z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredHotels(result);
    setCurrentPage(1); // Reset to first page when filters or sorting changes
  }, [filters, allHotels, sortBy, searchQuery]);

  const navigate = useNavigate();

  if (loading) return <p className="text-white">Loading hotels...</p>;
  if (error) return <p className="text-white">{error}</p>;
  if (allHotels.length === 0)
    return <p className="text-white">No hotels found for this search.</p>;

  const currencySymbol = "₹";
  const selectRoom = (
    hotelId,
    hotelName,
    hotelPrice,
    locationline1,
    locationline2
  ) => {
    navigate(
      `/dashboard/roomdetail?id=${hotelId}&hotelName=${hotelName}&hotelPrice=${hotelPrice}&hotelLocationline1=${locationline1}&hotelLocationline2=${locationline2}&location=${location}&checkIn=${checkInDate}&checkOut=${checkOutDate}`
    );
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);
  const startIndex = (currentPage - 1) * hotelsPerPage;
  const currentHotels = filteredHotels.slice(
    startIndex,
    startIndex + hotelsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle filter changes
  const handleHotelTypeChange = (type, isChecked) => {
    setFilters((prev) => {
      if (type === "All") {
        return {
          ...prev,
          hotelType: isChecked ? ["All"] : []
        };
      }

      let updatedTypes;
      if (isChecked) {
        updatedTypes = [...prev.hotelType, type];
        // Remove "All" if other types are selected
        updatedTypes = updatedTypes.filter((t) => t !== "All");
      } else {
        updatedTypes = prev.hotelType.filter((t) => t !== type);
      }

      return {
        ...prev,
        hotelType: updatedTypes
      };
    });
  };

  const handlePopularTypeChange = (type, isChecked) => {
    setFilters((prev) => {
      const updatedTypes = isChecked
        ? [...prev.popularType, type]
        : prev.popularType.filter((t) => t !== type);

      return {
        ...prev,
        popularType: updatedTypes
      };
    });
  };

  const handleRatingChange = (rating) => {
    setFilters((prev) => ({
      ...prev,
      customerRating: prev.customerRating === rating ? null : rating
    }));
  };

  const handleStarRatingChange = (rating) => {
    setFilters((prev) => ({
      ...prev,
      ratingStar: prev.ratingStar === rating ? null : rating
    }));
  };

  const handleAmenitiesChange = (amenity, isChecked) => {
    setFilters((prev) => {
      if (amenity === "All") {
        return {
          ...prev,
          amenities: isChecked ? ["All"] : []
        };
      }

      let updatedAmenities;
      if (isChecked) {
        updatedAmenities = [...prev.amenities, amenity];
        // Remove "All" if other amenities are selected
        updatedAmenities = updatedAmenities.filter((a) => a !== "All");
      } else {
        updatedAmenities = prev.amenities.filter((a) => a !== amenity);
      }

      return {
        ...prev,
        amenities: updatedAmenities
      };
    });
  };

  const handleFacilityChange = (facility, isChecked) => {
    setFilters((prev) => {
      const updatedFacilities = isChecked
        ? [...prev.facilities, facility]
        : prev.facilities.filter((f) => f !== facility);

      return {
        ...prev,
        facilities: updatedFacilities
      };
    });
  };

  const clearAllFilters = () => {
    setFilters({
      hotelType: [],
      popularType: [],
      customerRating: null,
      ratingStar: null,
      amenities: [],
      facilities: []
    });
    setSearchQuery("");
  };

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
  };

  const renderFilters = () => (
    <div>
      {/* Hotel Name Search Filter */}
      <div
        className="p-3 rounded-3 mb-3 text-start text-white"
        style={{ backgroundColor: "#191b1d" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Search by Name</h5>
          <i
            className="bi bi-chevron-down d-md-none cursor-pointer"
            data-bs-toggle="collapse"
            data-bs-target="#nameSearchDropdown"
            aria-expanded="false"
            aria-controls="nameSearchDropdown"
            style={{ fontSize: "1.2rem" }}
          ></i>
        </div>

        <div className="collapse d-md-block mt-2" id="nameSearchDropdown">
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary"
            placeholder="Enter hotel name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Hotel Type Filter */}
      <div
        className="p-3 rounded-3 mb-3 text-start text-white"
        style={{ backgroundColor: "#191b1d" }}
      >
        <div className="d-flex justify-content-between align-items-center ">
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
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`type-${type}`}
                  checked={
                    filters.hotelType.includes(type) ||
                    (type === "All" && filters.hotelType.length === 0)
                  }
                  onChange={(e) =>
                    handleHotelTypeChange(type, e.target.checked)
                  }
                />
                <label className="form-check-label" htmlFor={`type-${type}`}>
                  {type}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      {/* Popular Filters */}
      <div
        className="p-3 rounded-3 mb-3 text-start text-white"
        style={{ backgroundColor: "#191b1d" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Popular Filters</h5>
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
                id={`popular-${i}`}
                checked={filters.popularType.includes(type)}
                onChange={(e) =>
                  handlePopularTypeChange(type, e.target.checked)
                }
              />
              <label className="form-check-label" htmlFor={`popular-${i}`}>
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div
        className="p-3 rounded-3 mb-3 text-start text-white"
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
                className={`btn border rounded-3 px-3 py-2 text-white ${
                  filters.customerRating === rating ? "btn-primary" : "btn-dark"
                }`}
                style={{
                  border: "1px solid #3c3f44",
                  fontWeight: 500
                }}
                onClick={() => handleRatingChange(rating)}
              >
                {rating}+ <i className="bi bi-star-fill text-warning ms-1"></i>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Star Rating Filter */}
      <div
        className="p-3 rounded-3 mb-3 text-start text-white"
        style={{ backgroundColor: "#191b1d" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Star Rating</h5>
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
            {[3, 4, 5].map((rating, index) => (
              <button
                key={index}
                className={`btn border rounded-3 px-3 py-2 text-white ${
                  filters.ratingStar === rating ? "btn-primary" : "btn-dark"
                }`}
                style={{
                  border: "1px solid #3c3f44",
                  fontWeight: 500
                }}
                onClick={() => handleStarRatingChange(rating)}
              >
                {rating} <i className="bi bi-star-fill text-warning ms-1"></i>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Amenities Filter */}
      <div
        className="p-3 rounded-3 mb-3 text-start text-white"
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
          {["All", ...amenityOptions].map((amenity) => (
            <div className="form-check" key={amenity}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`amenity-${amenity}`}
                checked={
                  filters.amenities.includes(amenity) ||
                  (amenity === "All" && filters.amenities.length === 0)
                }
                onChange={(e) =>
                  handleAmenitiesChange(amenity, e.target.checked)
                }
              />
              <label
                className="form-check-label"
                htmlFor={`amenity-${amenity}`}
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear All Filters Button */}
      {(filters.hotelType.length > 0 ||
        filters.popularType.length > 0 ||
        filters.customerRating !== null ||
        filters.ratingStar !== null ||
        filters.amenities.length > 0 ||
        filters.facilities.length > 0 ||
        searchQuery) && (
        <button
          className="btn btn-outline-primary w-100 mt-2"
          onClick={clearAllFilters}
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-dark min-vh-100">
      <div className="container py-4">
        <div className="row">
          {/* Mobile Filter Button */}
          <div className="d-md-none mb-3 text-end">
            <button
              className="btn btn-outline-secondary text-white"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileFilter"
              aria-controls="mobileFilter"
            >
              <i className="bi bi-funnel me-2"></i> Filters
              {(filters.hotelType.length > 0 ||
                filters.popularType.length > 0 ||
                filters.customerRating !== null ||
                filters.ratingStar !== null ||
                filters.amenities.length > 0 ||
                filters.facilities.length > 0 ||
                searchQuery) && (
                <span className="badge bg-primary ms-2">
                  {[
                    filters.hotelType.length,
                    filters.popularType.length,
                    filters.customerRating ? 1 : 0,
                    filters.ratingStar ? 1 : 0,
                    filters.amenities.length,
                    filters.facilities.length,
                    searchQuery ? 1 : 0
                  ].reduce((a, b) => a + b, 0)}
                </span>
              )}
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
            {/* Filter Summary */}
            {(filters.hotelType.length > 0 ||
              filters.popularType.length > 0 ||
              filters.customerRating !== null ||
              filters.ratingStar !== null ||
              filters.amenities.length > 0 ||
              filters.facilities.length > 0 ||
              searchQuery) && (
              <div
                className="mb-4 p-3 rounded-3"
                style={{ backgroundColor: "#191b1d" }}
              >
                <div className="d-flex flex-wrap gap-2 align-items-center text-white">
                  <span className="me-2">Applied Filters:</span>
                  {searchQuery && (
                    <span className="badge bg-primary me-2">
                      Name: {searchQuery}{" "}
                      <i
                        className="bi bi-x-lg ms-1 cursor-pointer"
                        onClick={() => setSearchQuery("")}
                      ></i>
                    </span>
                  )}
                  {filters.hotelType.map((type) => (
                    <span key={type} className="badge bg-primary me-2">
                      {type}{" "}
                      <i
                        className="bi bi-x-lg ms-1 cursor-pointer"
                        onClick={() => handleHotelTypeChange(type, false)}
                      ></i>
                    </span>
                  ))}
                  {filters.popularType.map((type) => (
                    <span key={type} className="badge bg-primary me-2">
                      {type}{" "}
                      <i
                        className="bi bi-x-lg ms-1 cursor-pointer"
                        onClick={() => handlePopularTypeChange(type, false)}
                      ></i>
                    </span>
                  ))}
                  {filters.customerRating && (
                    <span className="badge bg-primary me-2">
                      Rating: {filters.customerRating}+{" "}
                      <i
                        className="bi bi-x-lg ms-1 cursor-pointer"
                        onClick={() =>
                          handleRatingChange(filters.customerRating)
                        }
                      ></i>
                    </span>
                  )}
                  {filters.ratingStar && (
                    <span className="badge bg-primary me-2">
                      Stars: {filters.ratingStar}+{" "}
                      <i
                        className="bi bi-x-lg ms-1 cursor-pointer"
                        onClick={() =>
                          handleStarRatingChange(filters.ratingStar)
                        }
                      ></i>
                    </span>
                  )}
                  {filters.amenities.map((amenity) => (
                    <span key={amenity} className="badge bg-primary me-2">
                      {amenity}{" "}
                      <i
                        className="bi bi-x-lg ms-1 cursor-pointer"
                        onClick={() => handleAmenitiesChange(amenity, false)}
                      ></i>
                    </span>
                  ))}
                  {filters.facilities.map((facility) => (
                    <span key={facility} className="badge bg-primary me-2">
                      {facility}{" "}
                      <i
                        className="bi bi-x-lg ms-1 cursor-pointer"
                        onClick={() => handleFacilityChange(facility, false)}
                      ></i>
                    </span>
                  ))}
                  <button
                    className="btn btn-link text-primary p-0 ms-2"
                    onClick={clearAllFilters}
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0 text-white">
                {filteredHotels.length}{" "}
                {filteredHotels.length === 1 ? "Hotel" : "Hotels"} Found
              </h5>
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle text-white"
                  type="button"
                  id="sortDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="sortDropdown"
                >
                  <li>
                    <button
                      className={`dropdown-item ${
                        sortBy === "price-low-high" ? "active" : ""
                      }`}
                      onClick={() => handleSort("price-low-high")}
                    >
                      Price: Low to High
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item ${
                        sortBy === "price-high-low" ? "active" : ""
                      }`}
                      onClick={() => handleSort("price-high-low")}
                    >
                      Price: High to Low
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item ${
                        sortBy === "rating-high-low" ? "active" : ""
                      }`}
                      onClick={() => handleSort("rating-high-low")}
                    >
                      Rating: High to Low
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item ${
                        sortBy === "name-a-z" ? "active" : ""
                      }`}
                      onClick={() => handleSort("name-a-z")}
                    >
                      Name: A-Z
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {filteredHotels.length === 0 ? (
              <div className="text-center py-5">
                <h4 className="text-white">No hotels match your filters</h4>
                <button
                  className="btn btn-primary mt-3"
                  onClick={clearAllFilters}
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {currentHotels.map((hotel) => (
                    <div className="col" key={hotel.id}>
                      <div
                        className="card text-white h-100 rounded-4 overflow-hidden position-relative"
                        style={{ backgroundColor: "#191b1d" }}
                      >
                        <div className="position-relative">
                          <img
                            src={hotel.heroImage}
                            alt={hotel.name}
                            className="img-fluid w-100"
                            style={{
                              height: "200px",
                              objectFit: "cover"
                            }}
                          />
                          <div className="position-absolute top-0 end-0 p-2">
                            <i className="bi bi-heart text-white-50 fs-5 cursor-pointer me-2"></i>
                            <i className="bi bi-share text-white-50 fs-5 cursor-pointer"></i>
                          </div>
                        </div>
                        <div className="card-body d-flex flex-column">
                          <div>
                            <h5 className="card-title mb-1 text-start">
                              {hotel.name}
                            </h5>
                            <p className="opacity-50 small mb-2 text-start">
                              <i className="bi bi-geo-alt-fill me-1"></i>{" "}
                              {hotel.contact?.address?.city?.name} {` `}
                              {hotel.contact?.address?.country?.name}
                            </p>
                            <p className="opacity-50 small mb-2 text-start">
                              {hotel.facilities.slice(0, 5).map((facility) => (
                                <span
                                  key={facility.name}
                                  className="badge bg-secondary text-white me-1 mt-1"
                                  style={{ fontSize: "0.75rem" }}
                                >
                                  {facility.name}
                                </span>
                              ))}
                              <span className="badge bg-secondary text-white me-1 mt-1">
                                more...
                              </span>
                            </p>
                            <div className="mb-2 text-warning text-start">
                              {"★".repeat(hotel.starRating)}
                            </div>
                          </div>
                          <div className="mt-auto">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="fw-bold fs-5">
                                  {currencySymbol}
                                  {hotel.availability?.rate?.finalRate}
                                </span>
                                {hotel.oldPrice && (
                                  <span className="text-decoration-line-through text-white-50 ms-2">
                                    {currencySymbol}
                                    {hotel.oldPrice}
                                  </span>
                                )}
                                <span className="small text-white-50">
                                  {" "}
                                  /night
                                </span>
                                <p className="small text-success mb-0">
                                  {hotel.freeCancellation
                                    ? "Free Cancellation Available"
                                    : ""}
                                </p>
                              </div>
                              <button
                                className="btn btn-primary"
                                onClick={() =>
                                  selectRoom(
                                    hotel.id,
                                    hotel.name,
                                    hotel.availability?.rate?.finalRate,
                                    hotel.contact?.address?.line1,
                                    hotel.contact?.address?.line2
                                  )
                                }
                              >
                                Select Room
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end bg-dark p-2 rounded mt-4">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link bg-dark text-white border-secondary"
                          onClick={() => handlePageChange(currentPage - 1)}
                        >
                          Previous
                        </button>
                      </li>
                      {[...Array(totalPages).keys()].map((page) => (
                        <li
                          key={page + 1}
                          className={`page-item ${
                            currentPage === page + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className={`page-link ${
                              currentPage === page + 1
                                ? "bg-primary text-white border-secondary"
                                : "bg-dark text-white border-secondary"
                            }`}
                            onClick={() => handlePageChange(page + 1)}
                          >
                            {page + 1}
                          </button>
                        </li>
                      ))}
                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link bg-dark text-white border-secondary"
                          onClick={() => handlePageChange(currentPage + 1)}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
