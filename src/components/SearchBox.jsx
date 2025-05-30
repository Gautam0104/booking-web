import React, { useState, useEffect, useRef } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaSearch,
  FaCrosshairs
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import axios from "axios";

const SearchBox = () => {
  const [location, setLocation] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [dateRange, setDateRange] = useState([]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [locationError, setLocationError] = useState("");
  const [dateError, setDateError] = useState("");
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchBoxRef = useRef(null);
  const navigate = useNavigate();

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Debounced location search
  const fetchLocationSuggestions = debounce(async (query) => {
    if (query.length < 3) {
      setLocationSuggestions([]);
      return;
    }

    try {
      const res = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            format: "json",
            q: query,
            addressdetails: 1,
            limit: 5
          },
          headers: {
            "User-Agent": "ReactApp"
          }
        }
      );
      setLocationSuggestions(res.data);
    } catch (err) {
      console.error("Failed to fetch location suggestions:", err);
      setLocationSuggestions([]);
    }
  }, 300);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowSuggestions(true);

    if (value.toLowerCase() === "lucknow") {
      setLocation("228250");
      setInputValue("Lucknow");
      setLocationSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    fetchLocationSuggestions(value);
  };

  const handleSuggestionClick = (suggestion) => {
    const fullAddress = suggestion.display_name;
    setLocation(fullAddress);
    setInputValue(fullAddress);
    setLocationSuggestions([]);
    setShowSuggestions(false);
    setLocationError("");
  };

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await axios.get(
            "https://api.opencagedata.com/geocode/v1/json",
            {
              params: {
                q: `${lat}+${lon}`,
                key: "e66a72b15b114a03b8eebdae4f955e52"
              }
            }
          );

          const address = res.data.results[0]?.formatted;
          if (address) {
            setLocation("228250");
            setInputValue(address);
            setLocationError("");
          } else {
            setLocationError("Could not determine address from location");
          }
        } catch (err) {
          console.error("Geocoding failed:", err);
          setLocationError("Failed to fetch address from coordinates");
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLocationError("Permission denied or location error");
      }
    );
  };

  const handleSearch = () => {
    let valid = true;

    if (!location.trim()) {
      setLocationError("Please enter or use your current location");
      valid = false;
    } else {
      setLocationError("");
    }

    if (dateRange.length !== 2) {
      setDateError("Please select check-in and check-out dates");
      valid = false;
    } else {
      setDateError("");
    }

    if (!valid) return;

    const guests = adults + children;
    const checkin = dateRange[0]?.toISOString().split("T")[0];
    const checkout = dateRange[1]?.toISOString().split("T")[0];

    navigate(
      `/dashboard/hotellist?location=${encodeURIComponent(
        location
      )}&checkin=${checkin}&checkout=${checkout}&guests=${guests}&rooms=${rooms}`
    );
  };

  const guestSummary = () => {
    return `${adults + children} Guests, ${rooms} Room${rooms > 1 ? "s" : ""}`;
  };

  return (
    <div
      className="rounded-4 mt-5 d-flex flex-column flex-md-row align-items-center gap-3 shadow search-box"
      style={{
        padding: window.innerWidth < 768 ? "1.5rem" : "2.5rem 4rem",
        backgroundColor: "#191b1d",
        color: "white",
        position: "relative",
        zIndex: 10,
        
      }}
      ref={searchBoxRef}
    >
      {/* Location Input */}
      <div className="w-100 position-relative mb-3 mb-md-0">
        <div className="input-group">
          <span className="input-group-text bg-transparent text-white border-secondary">
            <FaMapMarkerAlt />
          </span>
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary custom-placeholder"
            placeholder="Enter location"
            value={inputValue}
            onChange={handleLocationChange}
            onFocus={() => setShowSuggestions(true)}
          />
          <button
            className="btn btn-outline-secondary"
            onClick={handleGetCurrentLocation}
            title="Use current location"
          >
            <FaCrosshairs />
          </button>
        </div>
        {locationError && (
          <div className="text-danger small mt-1">{locationError}</div>
        )}

        {showSuggestions && locationSuggestions.length > 0 && (
          <div className="suggestions-dropdown bg-dark text-white mt-1 rounded shadow">
            {locationSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item p-2 border-bottom border-secondary"
                onClick={() => handleSuggestionClick(suggestion)}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <FaMapMarkerAlt className="me-2 text-muted" />
                  <div>
                    <div className="fw-bold">
                      {suggestion.display_name.split(",")[0]}
                    </div>
                    <div className="text-muted small">
                      {suggestion.display_name
                        .split(",")
                        .slice(1)
                        .join(",")
                        .trim()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Date Range Picker */}
      <div className="w-100 position-relative mb-3 mb-md-0">
        <div className="input-group">
          <span className="input-group-text bg-transparent text-white border-secondary">
            <FaCalendarAlt />
          </span>
          <Flatpickr
            options={{
              mode: "range",
              dateFormat: "d M",
              allowInput: true,

              minDate: "today"
            }}
            className="form-control bg-dark text-white border-secondary custom-placeholder me-2"
            placeholder="Select date range"
            value={dateRange}
            onChange={(selectedDates) => {
              // Only update state when both dates are selected or when clearing
              if (selectedDates.length === 2 || selectedDates.length === 0) {
                setDateRange(selectedDates);
              }
            }}
          />
        </div>
        {dateError && <div className="text-danger small mt-1">{dateError}</div>}
      </div>

      {/* Guest Picker */}
      <div className="w-100 position-relative mb-3 mb-md-0">
        <div className="input-group">
          <span className="input-group-text bg-transparent text-white border-secondary">
            <FaUser />
          </span>
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary"
            value={guestSummary()}
            readOnly
            onClick={() => setShowGuestSelector(!showGuestSelector)}
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
                  onClick={() => setAdults(Math.max(1, adults - 1))}
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
                  onClick={() => setChildren(Math.max(0, children - 1))}
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

      {/* Search Button */}
      <button
        className={`btn btn-primary ${
          window.innerWidth < 768
            ? "w-100 mt-2"
            : "rounded-circle position-absolute"
        }`}
        style={
          window.innerWidth < 768
            ? {}
            : {
                top: "50%",
                right: "-24px",
                transform: "translateY(-50%)",
                width: "55px",
                height: "55px",
                color: "#fff"
              }
        }
        onClick={handleSearch}
      >
        {window.innerWidth < 768 ? (
          <>
            <FaSearch className="me-2" />
            Search Hotels
          </>
        ) : (
          <FaSearch />
        )}
      </button>

      <style jsx>{`
        .suggestions-dropdown {
          position: absolute;
          width: 100%;
          max-height: 300px;
          overflow-y: auto;
          z-index: 1000;
          border: 1px solid #444;
        }
        .suggestion-item:hover {
          background-color: #333;
        }
        @media (max-width: 767.98px) {
          .suggestions-dropdown {
            position: relative;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchBox;
