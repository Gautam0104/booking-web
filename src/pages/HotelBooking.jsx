import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Image17 from "../assets/img/hotelbooking/17.svg";
import Image02 from "../assets/img/hotelbooking/02.jpg";
import Swal from "sweetalert2";

const HotelBooking = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const checkInDate = queryParams.get("checkIn");
  const checkOutDate = queryParams.get("checkOut");
  const hotelId = queryParams.get("hotelId");
  const totalPrice = queryParams.get("hotelPrice");
  const hotelName = queryParams.get("hotelName");
  const addressLine1 = queryParams.get("hotelAddress1");
  const addressLine2 = queryParams.get("addressLine2");
  let daysDiff = 0;
  if (checkInDate && checkOutDate) {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    const timeDiff = checkOut.getTime() - checkIn.getTime();
    daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert ms to days
    console.log("Total nights:", daysDiff);
  }
  const navigate = useNavigate();
  const formatFullDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  };

  const formattedcheckInDate = formatFullDate(checkInDate);
  const formattedcheckOutDate = formatFullDate(checkOutDate);

  // State for form data
  const [formData, setFormData] = useState({
    guestName: "",
    guestEmail: "",
    guestMobile: "",
    paymentMethod: "card",
    specialRequests: [],
    couponCode: "",
    gstNumber: ""
  });

  // State for booking status
  const [bookingStatus, setBookingStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in and get their details
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://api.stayigo.com/v1.0/user", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          const userData = response.data;
          setFormData((prev) => ({
            ...prev,
            guestName: userData.name || "",
            guestEmail: userData.email || "",
            guestMobile: userData.phone || ""
          }));
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox changes for special requests
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedRequests = [...formData.specialRequests];

    if (checked) {
      updatedRequests.push(value);
    } else {
      updatedRequests = updatedRequests.filter((item) => item !== value);
    }

    setFormData({
      ...formData,
      specialRequests: updatedRequests
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const bookingData = {
        userId: 123,
        hotelId: hotelId,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        totalPrice: totalPrice || 48500.0,
        paymentMethod: "cash",
        specialRequests: "Quiet rooms, away from elevators",
        bookingSource: "WebApp",
        couponCode: "GROUP2025",
        rooms: [
          {
            roomId: "201771164",
            adults: 2,
            children: 1,
            price: 18500.0
          },
          {
            roomId: "325711554",
            adults: 2,
            children: 0,
            price: 15000.0
          },
          {
            roomId: "201911333",
            adults: 1,
            children: 0,
            price: 15000.0
          }
        ]
      };

      const response = await axios.post(
        "http://api.stayigo.com/v1.0/booking/create",
        bookingData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      Swal.fire({
        icon: "success",
        title: "Booking Confirmed!",
        text: `Your booking ID is: ${response.data.bookingId}`,
        confirmButtonColor: "#3085d6"
      });
    } catch (error) {
      console.error("Booking error:", error.response?.data || error.message);
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: "Please try again later.",
        confirmButtonColor: "#d33"
      }).then(function (result) {
        if (result.isConfirmed) {
          navigate(`/payment`);
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-4 text-start">
      {/* Show booking status if available */}
      {bookingStatus && (
        <div
          className={`alert alert-${
            bookingStatus.success ? "success" : "danger"
          } container`}
        >
          {bookingStatus.message}
        </div>
      )}

      <div className="container">
        {/* Card start */}
        <div className="card rounded-4" style={{ backgroundColor: "#2a2c31" }}>
          <div className="row g-2 align-items-center">
            <div className="col-sm-9">
              <div className="card-body">
                {/* Breadcrumbs */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="bi bi-house me-1"></i> Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item"
                      style={{ color: "#bfc0c9" }}
                    >
                      Hotel detail
                    </li>
                    <li
                      className="breadcrumb-item active"
                      style={{ color: "#bfc0c9" }}
                    >
                      Booking
                    </li>
                  </ol>
                </nav>
                {/* Card title */}
                <h1
                  className="m-0 h2 card-title text-start mt-2"
                  style={{ color: "#fff" }}
                >
                  Review your Booking
                </h1>
              </div>
            </div>
            {/* Right section with image */}
            <div className="col-sm-3 text-end d-none d-sm-block">
              <img src={Image17} className="mb-n4 w-75" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="container mt-4">
        <div className="row g-4 g-lg-5">
          <div className="col-xl-8">
            <div className="vstack gap-5">
              {/* Hotel Information Card */}
              <div
                className="card shadow"
                style={{ backgroundColor: "#191b1d", color: "#fff" }}
              >
                <div className="card-header p-4 border-bottom">
                  <h3 className="mb-0 text-start">
                    <i className="fa-solid fa-hotel me-2"></i>Hotel Information
                  </h3>
                </div>
                <div className="card-body p-4">
                  <div
                    className="card mb-4"
                    style={{ backgroundColor: "#191b1d", color: "#fff" }}
                  >
                    <div className="row align-items-center">
                      <div className="col-sm-6 col-md-3">
                        <img
                          src={Image02}
                          alt=""
                          className="card-image w-100 rounded-4"
                        />
                      </div>
                      <div className="col-sm-6 col-sm-9">
                        <div className="card-body pt-3 pt-sm-0 p-0">
                          <h5 className="card-title text-start">
                            <Link to="/">{hotelName}</Link>
                          </h5>
                          <p className="small mb-2 text-start">
                            <i className="bi bi-geo-alt me-2"></i>
                            {addressLine1} {addressLine2}
                          </p>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0 small">
                              <i className="fa-solid fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fa-solid fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fa-solid fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fa-solid fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fa-solid fa-star-half-alt text-warning"></i>
                            </li>
                            <li className="list-inline-item ms-2 h6 small fw-bold mb-0">
                              4.5/5.0
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-4">
                    <div className="col-lg-4">
                      <div className="bg-dark py-3 px-4 rounded-3 text-start">
                        <h6 className="fw-light small mb-1 text-start">
                          Check-in
                        </h6>
                        <h5 className="mb-1 text-start">
                          {formattedcheckInDate}
                        </h5>
                        <small className="opacity-50 text-start">
                          <i className="bi bi-alarm me-1"></i>12:30 pm
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="bg-dark py-3 px-4 rounded-3 text-start">
                        <h6 className="fw-light small mb-1">Check out</h6>
                        <h5 className="mb-1">{formattedcheckOutDate}</h5>
                        <small>
                          <i className="bi bi-alarm me-1"></i>4:30 pm
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="bg-dark py-3 px-4 rounded-3 text-start">
                        <h6 className="fw-light small mb-1">
                          Rooms &amp; Guests
                        </h6>
                        <h5 className="mb-1">2 G - 1 R</h5>
                        <small>
                          <i className="bi bi-brightness-high me-1"></i>
                          {daysDiff} Nights - {daysDiff} Days
                        </small>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card border mt-4"
                    style={{ backgroundColor: "#191b1d", color: "#fff" }}
                  >
                    <div className="card-header border-bottom d-md-flex justify-content-md-between">
                      <h5 className="card-title mb-0">
                        Deluxe Pool View with Breakfast
                      </h5>
                      <Link className="btn btn-link p-0 mb-0">
                        View Cancellation Policy
                      </Link>
                    </div>
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#191b1d", color: "#fff" }}
                    >
                      <h6>Price Included</h6>
                      <ul
                        className="list-group-borderless mb-0 mt-2"
                        style={{ backgroundColor: "#191b1d", color: "#fff" }}
                      >
                        <li className="list-group-item h6 fw-light d-flex mb-2">
                          <i className="bi bi-patch-check-fill text-success me-2"></i>
                          Free Breakfast and Lunch/Dinner.
                        </li>
                        <li className="list-group-item h6 fw-light d-flex mb-2">
                          <i className="bi bi-patch-check-fill text-success me-2"></i>
                          Great Small Breaks.
                        </li>
                        <li className="list-group-item h6 fw-light d-flex mb-2">
                          <i className="bi bi-patch-check-fill text-success me-2"></i>
                          Free Stay for Kids Below the age of 12 years.
                        </li>
                        <li className="list-group-item h6 fw-light d-flex mb-2">
                          <i className="bi bi-patch-check-fill text-success me-2"></i>
                          On Cancellation, You will not get any refund
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest Details Card */}
              <div
                className="card shadow mt-2"
                style={{ backgroundColor: "#191b1d", color: "#fff" }}
              >
                <div className="card-header p-4 border-bottom">
                  <h3 className="mb-0 text-start">
                    <i className="fa-solid fa-hotel me-2"></i>Guest Details
                  </h3>
                </div>
                <div
                  className="card-body p-4"
                  style={{ backgroundColor: "#191b1d", color: "#fff" }}
                >
                  <form
                    className="row g-4"
                    onSubmit={handleSubmit}
                    style={{ backgroundColor: "#191b1d", color: "#fff" }}
                  >
                    <div className="col-12">
                      <div className="bg-dark rounded-2 px-4 py-3">
                        <h6 className="mb-0">Main Guest</h6>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg bg-dark text-white border-secondary white-placeholder"
                        placeholder="Enter your name"
                        name="guestName"
                        value={formData.guestName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email id</label>
                      <input
                        type="email"
                        className="form-control form-control-lg bg-dark text-white border-secondary white-placeholder"
                        placeholder="Enter your email"
                        name="guestEmail"
                        value={formData.guestEmail}
                        onChange={handleInputChange}
                        required
                      />
                      <div id="emailHelp" className="opacity-50">
                        (Booking voucher will be sent to this email ID)
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Mobile number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg bg-dark text-white border-secondary white-placeholder "
                        placeholder="Enter your mobile number"
                        name="guestMobile"
                        value={formData.guestMobile}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-12 text-start">
                      <Link className="btn nav-link mb-0 p-0 text-primary text-start">
                        <i className="bi bi-plus me-2"></i>Add New Guest
                      </Link>
                    </div>

                    {!isLoggedIn && (
                      <div className="alert alert-info my-4" role="alert">
                        <Link className="alert-heading h6">Login</Link> to
                        prefill all details and get access to secret deals
                      </div>
                    )}

                    <div
                      className="card border mt-4"
                      style={{ backgroundColor: "#191b1d", color: "#fff" }}
                    >
                      <div className="card-header border-bottom">
                        <h5 className="card-title mb-0 text-start">
                          Special request
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="hstack flex-wrap gap-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Smoking room"
                              id="hotelType1"
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hotelType1"
                            >
                              Smoking room
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Late check-in"
                              id="hotelType2"
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hotelType2"
                            >
                              Late check-in
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Early check-in"
                              id="hotelType3"
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hotelType3"
                            >
                              Early check-in
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Room on a high floor"
                              id="hotelType4"
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hotelType4"
                            >
                              Room on a high floor
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Large bed"
                              id="hotelType5"
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hotelType5"
                            >
                              Large bed
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Airport transfer"
                              id="hotelType6"
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hotelType6"
                            >
                              Airport transfer
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Twin beds"
                              id="hotelType8"
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hotelType8"
                            >
                              Twin beds
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Processing...
                          </>
                        ) : (
                          "Confirm Booking"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="col-xl-4">
            <div className="row g-4">
              <div className="col-md-6 col-xl-12">
                <div
                  className="card shadow rounded-2"
                  style={{ backgroundColor: "#191b1d", color: "#fff" }}
                >
                  <div className="card-header border-bottom">
                    <h5 className="card-title mb-0">Price Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul
                      className=""
                      style={{ backgroundColor: "#191b1d", color: "#fff" }}
                    >
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">Room Charges</span>
                        <span className="fs-5">₹28,660</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                          Total Discount
                          <span className="badge text-bg-danger smaller mb-0 ms-2">
                            10% off
                          </span>
                        </span>
                        <span className="fs-5 text-success">-₹2,560</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                          Price after discount
                        </span>
                        <span className="fs-5">₹1852</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">Taxes % Fees</span>
                        <span className="fs-5">₹350</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h5 mb-0">Payable Now</span>
                      <span className="h5 mb-0">₹{totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-12">
                <div
                  className="card shadow"
                  style={{ backgroundColor: "#191b1d", color: "#fff" }}
                >
                  <div className="card-header border-bottom">
                    <div className="cardt-title">
                      <h5 className="mb-0">Offer &amp; Discount</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="bg-dark rounded-2 p-3">
                      <div className="form-check form-check-inline mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="discountOptions"
                          id="discount1"
                          value="option1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label h5 mb-0"
                          htmlFor="discount1"
                        >
                          GSTBOOK
                        </label>
                        <p className="mb-1 small">
                          Congratulations! You have saved $230 with GSTBOOK.
                        </p>
                        <h6 className="mb-0 text-success">-$230</h6>
                      </div>
                    </div>

                    <div className="input-group mt-3">
                      <input
                        className="form-control form-control bg-dark text-white white-placeholder"
                        placeholder="Coupon code"
                        name="couponCode"
                        value={formData.couponCode}
                        onChange={handleInputChange}
                      />
                      <button type="button" className="btn btn-primary">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-12">
                <div
                  className="card shadow"
                  style={{ backgroundColor: "#191b1d", color: "#fff" }}
                >
                  <div className="card-header border-bottom">
                    <h5 className="card-title mb-0">Why Sign up or Log in</h5>
                  </div>

                  <div className="card-body">
                    <ul
                      className=""
                      style={{ backgroundColor: "#191b1d", color: "#fff" }}
                    >
                      <li className="list-group-item d-flex mb-0">
                        <i className="fa-solid fa-check text-success me-2"></i>
                        <span className="h6 fw-normal">
                          Get Access to Secret Deal
                        </span>
                      </li>

                      <li className="list-group-item d-flex mb-0">
                        <i className="fa-solid fa-check text-success me-2"></i>
                        <span className="h6 fw-normal">Book Faster</span>
                      </li>

                      <li className="list-group-item d-flex mb-0">
                        <i className="fa-solid fa-check text-success me-2"></i>
                        <span className="h6 fw-normal">
                          Manage Your Booking
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
