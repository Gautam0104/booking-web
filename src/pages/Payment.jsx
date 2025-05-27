import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image16 from "../assets/img/hotelbooking/16.svg";
import ImageVisa from "../assets/img/hotelbooking/visa.svg";
import ImageMastercard from "../assets/img/hotelbooking/mastercard.svg";
import ImageExpresscard from "../assets/img/hotelbooking/expresscard.svg";

const Payment = () => {
  const [bookingStatus, setBookingStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    gstNumber: "",
    couponCode: "",
    paymentMethod: "card"
  });
  console.log(paymentMethod);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setBookingStatus({
        success: true,
        message: "Booking confirmed successfully!"
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container  d-flex justify-content-center align-items-center vh-120">
      {/* Payment Options Card */}
      <div
        className="card shadow w-75 m-5"
        style={{ backgroundColor: "#191b1d", color: "#fff" }}
      >
        <div className="card-header p-4 border-bottom">
          <h3 className="mb-0 text-start">
            <i className="fa-solid fa-hotel me-2"></i>Payment Options
          </h3>
        </div>
        <div className="card-body p-4">
          <div className="bg-primary bg-opacity-10 rounded-4 mb-4 p-3">
            <div className="d-md-flex justify-content-md-between align-items-center">
              <div className="d-sm-flex align-items-center mb-2 mb-md-0">
                <img src={Image16} className="h-50px w-50px" alt="" />
                <div className="ms-sm-3 mt-2 mt-sm-0">
                  <h5 className="card-title mb-0 text-start">
                    Get Additional Discount
                  </h5>
                  <p className="mb-0 text-start">
                    Login to access saved payments and discounts!
                  </p>
                </div>
              </div>
              <Link className="btn btn-primary mb-0" to="#">
                Login now
              </Link>
            </div>
          </div>

          {/* Booking status message */}
          {bookingStatus && (
            <div
              className={`alert alert-${
                bookingStatus.success ? "success" : "danger"
              } mb-4`}
            >
              {bookingStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div
              className="accordion accordion-icon accordion-bg-dark"
              id="accordioncircle"
            >
              {/* Credit/Debit Card */}
              <div className="accordion-item mb-3 bg-dark text-white">
                <h6 className="accordion-header" id="heading-1">
                  <button
                    className="accordion-button rounded collapsed bg-dark text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                    onClick={() => {
                      setFormData({ ...formData, paymentMethod: "card" });
                      setPaymentMethod("card");
                    }}
                  >
                    <i className="bi bi-credit-card text-primary me-2"></i>
                    <span className="me-5">Credit or Debit Card</span>
                  </button>
                </h6>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading-1"
                  data-bs-parent="#accordioncircle"
                >
                  <div className="accordion-body">
                    <div className="d-sm-flex justify-content-sm-between my-3">
                      <h6 className="mb-2 mb-sm-0">We Accept:</h6>
                      <ul className="list-inline my-0">
                        {[ImageVisa, ImageMastercard, ImageExpresscard].map(
                          (img, idx) => (
                            <li className="list-inline-item" key={idx}>
                              <Link to="#">
                                <img
                                  src={img}
                                  className="img-fluid w-100"
                                  alt="Card"
                                  style={{ height: "30px", width: "50px" }}
                                />
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="row g-3">
                      <div className="col-12">
                        <label className="form-label">
                          <span className="h6 fw-normal">Card Number *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-dark text-white border-secondary white-placeholder"
                          maxLength="16"
                          placeholder="XXXX XXXX XXXX XXXX"
                          required={formData.paymentMethod === "card"}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          <span className="h6 fw-normal">
                            Expiration date *
                          </span>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-dark text-white border-secondary white-placeholder"
                            maxLength="2"
                            placeholder="MM"
                            required={formData.paymentMethod === "card"}
                          />
                          <input
                            type="text"
                            className="form-control bg-dark text-white border-secondary white-placeholder"
                            maxLength="4"
                            placeholder="YYYY"
                            required={formData.paymentMethod === "card"}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          <span className="h6 fw-normal">CVV / CVC *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-dark text-white border-secondary white-placeholder"
                          maxLength="3"
                          placeholder="xxx"
                          required={formData.paymentMethod === "card"}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">
                          <span className="h6 fw-normal">Name on Card *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control bg-dark text-white border-secondary white-placeholder"
                          placeholder="Enter card holder name"
                          required={formData.paymentMethod === "card"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Net Banking */}
              <div className="accordion-item mb-3 bg-transparent">
                <h6 className="accordion-header" id="heading-2">
                  <button
                    className="accordion-button collapsed rounded bg-dark text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                    onClick={() => {
                      setFormData({ ...formData, paymentMethod: "netbanking" });
                      setPaymentMethod("netbanking");
                    }}
                  >
                    <i className="bi bi-globe2 text-primary me-2"></i>
                    <span className="me-5">Pay with Net Banking</span>
                  </button>
                </h6>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse bg-dark text-white"
                  aria-labelledby="heading-2"
                  data-bs-parent="#accordioncircle"
                >
                  <div className="accordion-body">
                    <div className="row g-3 mt-1">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <h6 className="mb-0">Popular Bank:</h6>
                        </li>
                        {["Bank of America", "Bank of Japan"].map((bank, i) => (
                          <li className="list-inline-item" key={i}>
                            <input
                              type="radio"
                              className="btn-check"
                              name="bankOptions"
                              id={`option${i + 1}`}
                            />
                            <label
                              className="btn btn-light btn-primary-soft-check"
                              htmlFor={`option${i + 1}`}
                            >
                              {bank}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* PayPal */}
              <div className="accordion-item mb-3 bg-transparent text-white">
                <h6 className="accordion-header" id="heading-3">
                  <button
                    className="accordion-button collapsed rounded bg-dark text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                    onClick={() => {
                      setFormData({ ...formData, paymentMethod: "paypal" });
                      setPaymentMethod("paypal");
                    }}
                  >
                    <i className="bi bi-paypal text-primary me-2"></i>
                    <span className="me-5">Pay with Paypal</span>
                  </button>
                </h6>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse bg-dark text-white"
                  aria-labelledby="heading-3"
                  data-bs-parent="#accordioncircle"
                >
                  <div className="accordion-body">
                    <div className="card card-body border align-items-center text-center mt-4 bg-dark text-white">
                      <p className="mb-3">
                        <strong>Tips:</strong> Simply click on the payment
                        button below to proceed to the PayPal payment page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GST Number Field */}
            <div className="mb-3">
              <label className="form-label">GST Number (Optional)</label>
              <input
                type="text"
                className="form-control form-control-lg bg-dark text-white border-secondary white-placeholder"
                placeholder="Enter GST Number"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Coupon Code */}
            <div className="mb-3">
              <label className="form-label">Coupon Code (Optional)</label>
              <input
                type="text"
                className="form-control form-control-lg bg-dark text-white border-secondary white-placeholder"
                placeholder="Enter coupon code"
                name="couponCode"
                value={formData.couponCode}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
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
                  "Make Payment"
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer p-4 pt-0">
          <p className="mb-0 text-start">
            By processing, You accept Booking{" "}
            <Link to="#">Terms of Services</Link> and <Link to="#">Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
