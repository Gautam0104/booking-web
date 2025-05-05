import { FaThList, FaTh } from "react-icons/fa"; // List and Grid icons
import { Link } from "react-router-dom";
import React from "react";

export const ViewToggle = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end">
        <div className="d-flex rounded-pill overflow-hidden p-2">
          <Link
            to="/hotellist"
            className="px-3 py-2 d-flex align-items-center justify-content-center text-white rounded-start-2"
            style={{
              backgroundColor: "black",
              padding: "10px 20px"
            }}
          >
            <FaThList className="text-primary" />
          </Link>
          <Link
            to="/hotelgrid"
            className="px-3 py-2 d-flex align-items-center justify-content-center text-white rounded-end-2"
            style={{
              backgroundColor: "grey",
              padding: "10px 20px"
            }}
          >
            <FaTh />
          </Link>
        </div>
      </div>
    </div>
  );
};
