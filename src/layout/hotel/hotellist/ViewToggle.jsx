import { FaThList, FaTh } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../../styles/ViewToggle.css"; // We'll create this CSS file

export const ViewToggle = () => {
  const [activeView, setActiveView] = useState("list");
  const [isAnimating, setIsAnimating] = useState(false);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const location = queryParams.get("location");
  const checkInDate = queryParams.get("checkin");
  const checkOutDate = queryParams.get("checkout");
  console.log("Location:", location);

  // Determine active view based on current route
  useEffect(() => {
    const path = window.location.pathname;
    setActiveView(path.includes("hotelgrid") ? "grid" : "list");
  }, []);

  const handleViewChange = (view) => {
    if (isAnimating || view === activeView) return;

    setIsAnimating(true);
    setActiveView(view);

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Match this duration with your CSS transition duration
  };

  return (
    <div className={`view-toggle-container ${isAnimating ? "animating" : ""}`}>
      <div className="container mt-5">
        <div className="d-flex justify-content-end">
          <div className="d-flex rounded-pill overflow-hidden p-2 view-toggle-buttons">
            <Link
              to={`/dashboard/hotellist?location=${location}&checkin=${checkInDate}&checkout=${checkOutDate}&guests=2&rooms=1`}
              className={`px-3 py-2 d-flex align-items-center justify-content-center text-white rounded-start-2 view-toggle-button ${
                activeView === "list" ? "active" : ""
              }`}
              onClick={() => handleViewChange("list")}
              style={{
                padding: "10px 20px",
                transition: "all 0.3s ease"
              }}
            >
              <FaThList
                className={activeView === "list" ? "text-primary" : ""}
              />
            </Link>
            <Link
              to={`/dashboard/hotelgrid?location=${location}&checkin=${checkInDate}&checkout=${checkOutDate}&guests=2&rooms=1`}
              className={`px-3 py-2 d-flex align-items-center justify-content-center text-white rounded-end-2 view-toggle-button ${
                activeView === "grid" ? "active" : ""
              }`}
              onClick={() => handleViewChange("grid")}
              style={{
                padding: "10px 20px",
                transition: "all 0.3s ease"
              }}
            >
              <FaTh className={activeView === "grid" ? "text-primary" : ""} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
