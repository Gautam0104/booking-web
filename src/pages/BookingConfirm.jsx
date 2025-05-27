import React from "react";

const BookingConfirm = ({ booking }) => {
  if (!booking) {
    return <p>No booking data available.</p>;
  }

  const formatDate = (isoString, options = {}) => {
    if (!isoString) return "N/A";
    const defaultOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    };
    return new Date(isoString).toLocaleDateString("en-US", {
      ...defaultOptions,
      ...options
    });
  };

  return (
    <div
      className="container py-4  text-start text-white"
      style={{ maxWidth: "600px", height: "100vh" }}
    >
      <div
        className="card shadow-sm border-0 text-white"
        style={{ backgroundColor: "#2a2c31" }}
      >
        <div className="card-body p-4">
          <h2 className="card-title mb-3">
            {booking.hotelName || "Hotel Norrebro ***"}
          </h2>
          <p className=" mb-4">
            {booking.hotelRating ||
              "3-star hotel located in the heart of Copenhagen"}
          </p>

          <div className="d-flex justify-content-between mb-4">
            <div>
              <h6 className="text-uppercase  small">Check-in</h6>
              <p className="mb-0">{formatDate(booking.checkInDate)}</p>
              <p className="small">from 3 PM</p>
            </div>
            <div className="text-end">
              <h6 className="text-uppercase  small">Check-out</h6>
              <p className="mb-0">{formatDate(booking.checkOutDate)}</p>
              <p className="small text-muted">until 11 AM</p>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="text-uppercase text-muted small">Room Type</h6>
            <p>{booking.rooms?.[0]?.roomType || "Standard double room"}</p>
          </div>

          <div className="mb-4">
            <h6 className="text-uppercase  small">Your trip starts</h6>
            <p>
              {formatDate(booking.checkInDate, { weekday: "long" })},{" "}
              {formatDate(booking.checkInDate, {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </p>
          </div>

          <div className="mb-4">
            <h6 className="text-uppercase  small">Hotel address</h6>
            <p>
              {booking.hotelAddress ||
                "Norrebrogade 9, 10178 Copenhagen, Denmark"}
            </p>
            <p className="mb-1">
              E-mail: {booking.hotelEmail || "desk@hotelmitte.dk"}
            </p>
            <p>Telephone: {booking.hotelPhone || "+49 002 001 030"}</p>
          </div>

          <div className="d-flex justify-content-between align-items-center border-top pt-3">
            <h6 className="mb-0">Total price</h6>
            <h4 className="mb-0">
              ₹{Number(booking.totalPrice || 600).toLocaleString("en-US")}
            </h4>
          </div>

          <div className="alert alert-success mt-4 mb-0">
            <h5 className="alert-heading mb-0 text-center">
              Your booking is now confirmed!
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirm;
