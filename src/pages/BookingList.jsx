import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("https://api.stayigo.com/v1.0/bookings");
      console.log("API raw response:", response);

      const bookingData = response.data?.bookings ?? [];
      console.log("Processed bookings:", bookingData);
      setBookings(bookingData);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this booking?"))
      return;

    try {
      setCancellingId(bookingId);
      // Replace this URL with your actual cancel endpoint
      await axios.post(
        `https://api.stayigo.com/v1.0/bookings/${bookingId}/cancel`
      );
      // Optional: update the UI after cancellation
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === bookingId
            ? { ...booking, status: "Cancelled" }
            : booking
        )
      );
      alert("Booking cancelled successfully.");
    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert("Failed to cancel the booking.");
    } finally {
      setCancellingId(null);
    }
  };

  const getTotalGuests = (rooms) => {
    if (!Array.isArray(rooms)) return 0;
    return rooms.reduce((total, room) => {
      const adults = Number(room.adults) || 0;
      const children = Number(room.children) || 0;
      return total + adults + children;
    }, 0);
  };

  const formatDate = (isoString) => {
    if (!isoString) return "N/A";
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(isoString).toLocaleDateString("en-IN", options);
  };

  return (
    <div className="container py-4">
      <div
        className="card shadow"
        style={{ backgroundColor: "#191b1d", color: "#fff" }}
      >
        <div className="card-header p-4 border-bottom">
          <h3 className="mb-0 text-start">
            <i className="fa-solid fa-calendar-check me-2"></i>Your Bookings
          </h3>
        </div>
        <div className="card-body p-4">
          {loading ? (
            <p>Loading bookings...</p>
          ) : bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-dark table-bordered table-hover mb-0">
                <thead className="thead-light text-white">
                  <tr>
                    <th>#</th>
                    <th>Hotel ID</th>
                    <th>Check-In</th>
                    <th>Check-Out</th>
                    <th>Total Guests</th>
                    <th>Total Price</th>
                    <th>Payment Method</th>
                    <th>Coupon</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{booking.hotelId}</td>
                      <td>{formatDate(booking.checkInDate)}</td>
                      <td>{formatDate(booking.checkOutDate)}</td>
                      <td>{getTotalGuests(booking.rooms)}</td>
                      <td>
                        ₹
                        {booking.totalPrice
                          ? Number(booking.totalPrice).toLocaleString("en-IN")
                          : "0"}
                      </td>
                      <td>{booking.paymentMethod}</td>
                      <td>{booking.couponCode || "N/A"}</td>
                      <td>{booking.status || "Confirmed"}</td>
                      <td>
                        {booking.status === "Cancelled" ? (
                          <span className="text-danger">Cancelled</span>
                        ) : (
                          <button
                            className="btn btn-sm btn-danger"
                            disabled={cancellingId === booking.id}
                            onClick={() => cancelBooking(booking.id)}
                          >
                            {cancellingId === booking.id
                              ? "Cancelling..."
                              : "Cancel"}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="card-footer p-3 text-start">
          <small>
            Need help? <a href="/support">Contact Support</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
