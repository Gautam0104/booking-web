import React from "react";
import { Link } from "react-router-dom";
import Image17 from "../assets/img/hotelbooking/17.svg";
import Image02 from "../assets/img/hotelbooking/02.jpg";
import Image16 from "../assets/img/hotelbooking/16.svg";
import ImageVisa from "../assets/img/hotelbooking/visa.svg";
import ImageMastercard from "../assets/img/hotelbooking/mastercard.svg";
import ImageExpresscard from "../assets/img/hotelbooking/expresscard.svg";
import Image12 from "../assets/img/hotelbooking/12.svg";

const HotelBooking = () => {
  return (
    <div className="bg-dark text-white min-vh-100 py-4">
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
            <div className="col-sm-3 text-end d-none d-sm-block  ">
              <img src={Image17} className="mb-n4 w-75" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Card end */}

      {/* Page content */}
      <div className="container mt-4">
        <div className="row g-4 g-lg-5">
          <div className="col-xl-8">
            <div className="vstack gap-5">
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
                            <Link to="/">
                              Pride moon Village Resort &amp; Spa
                            </Link>
                          </h5>
                          <p className="small mb-2 text-start">
                            <i className="bi bi-geo-alt me-2"></i>5855 W Century
                            Blvd, Los Angeles - 90045
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
                        <h5 className="mb-1 text-start">4 March 2022</h5>
                        <small className="opacity-50 text-start">
                          <i className="bi bi-alarm me-1"></i>12:30 pm
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="bg-dark py-3 px-4 rounded-3 text-start">
                        <h6 className="fw-light small mb-1">Check out</h6>
                        <h5 className="mb-1">8 March 2022</h5>
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
                          <i className="bi bi-brightness-high me-1"></i>3 Nights
                          - 4 Days
                        </small>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card border mt-4 "
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
                        className=" list-group-borderless mb-0 mt-2"
                        style={{ backgroundColor: "#191b1d", color: "#fff" }}
                      >
                        <li className="list-group-item h6 fw-light d-flex mb-2 ">
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
                    class="row g-4"
                    style={{ backgroundColor: "#191b1d", color: "#fff" }}
                  >
                    <div className="col-12">
                      <div className="bg-dark rounded-2 px-4 py-3">
                        <h6 className="mb-0">Main Guest</h6>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-size-lg">
                        <label className="form-label">Title</label>
                        <div className="choices">
                          <div className="choices__inner">
                            <select
                              className="form-select form-select-lg js-choice choices__input bg-dark text-white border-secondary"
                              hidden=""
                              tabindex="-1"
                              data-choice="active"
                            >
                              <option
                                value="Mr"
                                data-custom-properties="[object Object]"
                              >
                                Mr
                              </option>
                              <option
                                value="Mrs"
                                data-custom-properties="[object Object]"
                              >
                                Mrs
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg bg-dark text-white border-secondary"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div class="col-md-5">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg bg-dark text-white border-secondary"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div class="col-12 text-start">
                      <Link className="btn nav-link mb-0 p-0 text-primary text-start">
                        <i class="fa-solid fa-plus me-2"></i>Add New Guest
                      </Link>
                    </div>
                    <div class="col-md-6">
                      <label className="form-label">Email id</label>
                      <input
                        type="email"
                        className="form-control form-control-lg bg-dark text-white border-secondary"
                        placeholder="Enter your email"
                      />
                      <div id="emailHelp" className="opacity-50">
                        (Booking voucher will be sent to this email ID)
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label className="form-label">Mobile number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg bg-dark text-white border-secondary"
                        placeholder="Enter your mobile number"
                      />
                    </div>
                  </form>
                  <div className="alert alert-info my-4" role="alert">
                    <Link className="alert-heading h6">Login</Link> to prefill
                    all details and get access to secret deals
                  </div>
                  <div
                    className="card border mt-4"
                    style={{ backgroundColor: "#191b1d", color: "#fff" }}
                  >
                    <div className="card-header border-bottom">
                      <h5 class="card-title mb-0 text-start">
                        Special request
                      </h5>
                    </div>
                    <div className="card-body">
                      <form className="hstack flex-wrap gap-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="hotelType1"
                          />
                          <label className="form-check-label" for="hotelType1">
                            Smoking room
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="hotelType2"
                          />
                          <label className="form-check-label" for="hotelType2">
                            Late check-in
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="hotelType3"
                          />
                          <label className="form-check-label" for="hotelType3">
                            Early check-in
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="hotelType4"
                          />
                          <label className="form-check-label" for="hotelType4">
                            Room on a high floor
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="hotelType5"
                          />
                          <label className="form-check-label" for="hotelType5">
                            Large bed
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="hotelType6"
                          />
                          <label className="form-check-label" for="hotelType6">
                            Airport transfer
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="hotelType8"
                          />
                          <label className="form-check-label" for="hotelType8">
                            Twin beds
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card shadow mt-2"
                style={{ backgroundColor: "#191b1d", color: "#fff" }}
              >
                <div className="card-header p-4 border-bottom">
                  <h3 className="mb-0 text-start">
                    <i className="fa-solid fa-hotel me-2"></i>Payment Options
                  </h3>
                </div>
                <div
                  className="card-body p-4"
                  style={{ backgroundColor: "#191b1d", color: "#fff" }}
                >
                  <div className="bg-primary bg-opacity-10 rounded-4 mb-4 p-3">
                    <div className="d-md-flex justify-content-md-between align-items-center">
                      <div className="d-sm-flex align-items-center mb-2 mb-md-0">
                        <img src={Image16} class="h-50px w-50px" alt="" />
                        <div className="ms-sm-3 mt-2 mt-sm-0">
                          <h5 className="card-title mb-0 text-start">
                            Get Additional Discount
                          </h5>
                          <p className="mb-0 text-start">
                            Login to access saved payments and discounts!
                          </p>
                        </div>
                      </div>
                      <Link className="btn btn-primary mb-0">Login now</Link>
                    </div>
                  </div>
                  {/* Accordion */}
                  <div
                    class="accordion accordion-icon accordion-bg-dark"
                    id="accordioncircle"
                  >
                    <div class="accordion-item mb-3 bg-dark text-white">
                      <h6 class="accordion-header" id="heading-1">
                        <button
                          class="accordion-button rounded collapsed bg-dark text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-1"
                          aria-expanded="true"
                          aria-controls="collapse-1"
                        >
                          <i class="bi bi-credit-card text-primary me-2"></i>{" "}
                          <span class="me-5 ">Credit or Debit Card</span>
                        </button>
                      </h6>
                      <div
                        id="collapse-1"
                        class="accordion-collapse collapse show"
                        aria-labelledby="heading-1"
                        data-bs-parent="#accordioncircle"
                      >
                        <div className="accordion-body">
                          <div className="d-sm-flex justify-content-sm-between my-3">
                            <h6 className="mb-2 mb-sm-0">We Accept:</h6>
                            <ul className="list-inline my-0">
                              <li className="list-inline-item">
                                <Link to="#">
                                  <img
                                    src={ImageVisa}
                                    className="img-fluid w-100"
                                    alt="Visa"
                                    style={{ height: "30px", width: "50px" }}
                                  />
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link to="#">
                                  <img
                                    src={ImageMastercard}
                                    className="img-fluid w-100"
                                    alt="Mastercard"
                                    style={{ height: "30px", width: "50px" }}
                                  />
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link to="#">
                                  <img
                                    src={ImageExpresscard}
                                    className="img-fluid w-100"
                                    alt="Amex"
                                    style={{ height: "30px", width: "50px" }}
                                  />
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <form className="row g-3">
                            <div className="col-12">
                              <label className="form-label">
                                <span class="h6 fw-normal">Card Number *</span>
                              </label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control bg-dark text-white border-secondary placeholder-glow"
                                  maxlength="14"
                                  placeholder="XXXX XXXX XXXX XXXX"
                                />
                                <img
                                  className="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">
                                <span class="h6 fw-normal">
                                  Expiration date *
                                </span>
                              </label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control bg-dark text-white border-secondary"
                                  maxlength="2"
                                  placeholder="Month"
                                />
                                <input
                                  type="text"
                                  className="form-control bg-dark text-white border-secondary"
                                  maxlength="4"
                                  placeholder="Year"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">
                                <span class="h6 fw-normal">CVV / CVC *</span>
                              </label>
                              <input
                                type="text"
                                className="form-control bg-dark text-white border-secondary"
                                maxlength="3"
                                placeholder="xxx"
                              />
                            </div>
                            <div className="col-12">
                              <label className="form-label">
                                <span class="h6 fw-normal">Name on Card *</span>
                              </label>
                              <input
                                type="text"
                                className="form-control bg-dark text-white border-secondary"
                                aria-label="name of card holder"
                                placeholder="Enter card holder name"
                              />
                            </div>

                            <div className="col-12">
                              <div
                                className="alert alert-success alert-dismissible fade show my-3"
                                role="alert"
                              >
                                <div className="d-sm-flex align-items-center mb-3">
                                  <img
                                    src={Image12}
                                    className="w-40px me-3 mb-2 mb-sm-0"
                                    alt=""
                                    style={{ height: "50px", width: "70px" }}
                                  />
                                  <h5 className="alert-heading mb-0">
                                    $50,000 Covid Cover &amp; More
                                  </h5>
                                </div>

                                <p className="mb-2">
                                  Aww yeah, you successfully read this important
                                  alert message. This example text is going to
                                  run a bit longer so that you can see how
                                  spacing within an alert works with this kind
                                  of content.
                                </p>

                                <div className="d-sm-flex align-items-center">
                                  <Link
                                    href="#"
                                    className="btn btn-sm btn-success mb-2 mb-sm-0 me-3"
                                  >
                                    <i clasName="fa-regular fa-plus me-2"></i>
                                    Add
                                  </Link>
                                  <h6 class="mb-0">$69 per person</h6>
                                </div>

                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="alert"
                                  aria-label="Close"
                                ></button>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="d-sm-flex justify-content-sm-between align-items-center">
                                <h4>
                                  $1800{" "}
                                  <span className="small fs-6">Due now</span>
                                </h4>
                                <button className="btn btn-primary mb-0">
                                  Pay Now
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3 bg-transparent">
                      <h6 className="accordion-header" id="heading-2">
                        <button
                          className="accordion-button collapsed rounded bg-dark text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-2"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          <i className="bi bi-globe2 text-primary me-2"></i>{" "}
                          <span class="me-5">Pay with Net Banking</span>
                        </button>
                      </h6>
                      <div
                        id="collapse-2"
                        class="accordion-collapse collapse bg-dark text-white"
                        aria-labelledby="heading-2"
                        data-bs-parent="#accordioncircle"
                      >
                        <div className="accordion-body">
                          <form className="row g-3 mt-1">
                            <ul className="list-inline mb-0">
                              <li className="list-inline-item">
                                {" "}
                                <h6 class="mb-0">Popular Bank:</h6>{" "}
                              </li>
                              <li className="list-inline-item">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="option1"
                                />
                                <label
                                  className="btn btn-light btn-primary-soft-check"
                                  for="option1"
                                >
                                  <img
                                    src="assets/images/element/13.svg"
                                    className="h-20px me-2"
                                    alt=""
                                  />
                                  Bank of America
                                </label>
                              </li>
                              <li className="list-inline-item">
                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="options"
                                  id="option2"
                                />
                                <label
                                  className="btn btn-light btn-primary-soft-check"
                                  for="option2"
                                >
                                  <img
                                    src="assets/images/element/15.svg"
                                    className="h-20px me-2"
                                    alt=""
                                  />
                                  Bank of Japan
                                </label>
                              </li>
                              <li className="list-inline-item">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="option3"
                                />
                                <label
                                  className="btn btn-light btn-primary-soft-check"
                                  for="option3"
                                >
                                  <img
                                    src="assets/images/element/14.svg"
                                    className="h-20px me-2"
                                    alt=""
                                  />
                                  VIVIV Bank
                                </label>
                              </li>
                            </ul>

                            <p className="mb-1">
                              In order to complete your transaction, we will
                              transfer you over to Booking secure servers.
                            </p>
                            <p className="my-0">
                              Select your bank from the drop-down list and click
                              proceed to continue with your payment.
                            </p>
                            <div className="col-md-6">
                              <div className="choices">
                                <div class="choices__inner">
                                  <select
                                    class="form-select form-select-sm js-choice border-0 choices__input"
                                    hidden=""
                                    tabindex="-1"
                                    data-choice="active"
                                  >
                                    <option
                                      value=""
                                      data-custom-properties="[object Object]"
                                    >
                                      Please choose one
                                    </option>
                                  </select>
                                  <div class="choices__list choices__list--single">
                                    <div
                                      class="choices__item choices__placeholder choices__item--selectable"
                                      data-item=""
                                      data-id="1"
                                      data-value=""
                                      data-custom-properties="[object Object]"
                                      aria-selected="true"
                                    >
                                      Please choose one
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="choices__list choices__list--dropdown"
                                  aria-expanded="false"
                                >
                                  <div class="choices__list" role="listbox">
                                    <div
                                      id="choices--t1s6-item-choice-1"
                                      class="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted"
                                      role="option"
                                      data-choice=""
                                      data-id="1"
                                      data-value=""
                                      data-select-text="Press to select"
                                      data-choice-selectable=""
                                      aria-selected="true"
                                    >
                                      Please choose one
                                    </div>
                                    <div
                                      id="choices--t1s6-item-choice-2"
                                      class="choices__item choices__item--choice choices__item--selectable"
                                      data-choice=""
                                      data-id="2"
                                      data-value="Bank of America"
                                      data-select-text="Press to select"
                                      data-choice-selectable=""
                                    >
                                      Bank of America
                                    </div>
                                    <div
                                      id="choices--t1s6-item-choice-3"
                                      class="choices__item choices__item--choice choices__item--selectable"
                                      data-choice=""
                                      data-id="3"
                                      data-value="Bank of India"
                                      data-select-text="Press to select"
                                      data-choice-selectable=""
                                    >
                                      Bank of India
                                    </div>
                                    <div
                                      id="choices--t1s6-item-choice-4"
                                      class="choices__item choices__item--choice choices__item--selectable"
                                      data-choice=""
                                      data-id="4"
                                      data-value="Bank of London"
                                      data-select-text="Press to select"
                                      data-choice-selectable=""
                                    >
                                      Bank of London
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="d-grid">
                              <button className="btn btn-success mb-0">
                                Pay $1800
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3 bg-transparent text-white">
                      <h6 className="accordion-header" id="heading-3">
                        <button
                          className="accordion-button collapsed rounded bg-dark text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-3"
                          aria-expanded="false"
                          aria-controls="collapse-3"
                        >
                          <i className="bi bi-paypal text-primary me-2"></i>
                          <span class="me-5">Pay with Paypal</span>
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
                            <img
                              src="assets/images/element/paypal.svg"
                              class="h-70px mb-3"
                              alt=""
                            />
                            <p className="mb-3">
                              <strong>Tips:</strong> Simply click on the payment
                              button below to proceed to the PayPal payment
                              page.
                            </p>
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-primary mb-0"
                            >
                              Pay with paypal
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0">
                  <p className="mb-0 text-start">
                    By processing, You accept Booking{" "}
                    <Link>Terms of Services</Link> and <Link>Policy</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <aside className="col-xl-4">
            <div className="row g-4">
              <div className="col-md-6 col-xl-12">
                <div
                  className="card shadow rounded-2 "
                  style={{ backgroundColor: "#191b1d", color: "#fff" }}
                >
                  <div className="card-header border-bottom">
                    <h5 className="card-title mb-0">Price Summary</h5>
                  </div>
                  <div className="card-body ">
                    <ul
                      className=""
                      style={{ backgroundColor: "#191b1d", color: "#fff" }}
                    >
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">Room Charges</span>
                        <span className="fs-5">$28,660</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                          Total Discount
                          <span class="badge text-bg-danger smaller mb-0 ms-2">
                            10% off
                          </span>
                        </span>
                        <span className="fs-5 text-success">-$2,560</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                          Price after discount
                        </span>
                        <span className="fs-5">$1852</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">Taxes % Fees</span>
                        <span className="fs-5">$350</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h5 mb-0">Payable Now</span>
                      <span className="h5 mb-0">$22,500</span>
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
                          checked=""
                        />
                        <label
                          className="form-check-label h5 mb-0"
                          for="discount1"
                        >
                          GSTBOOK
                        </label>
                        <p className="mb-1 small">
                          Congratulations! You have saved $230 with GSTBOOK.
                        </p>
                        <h6 className="mb-0 text-success">-$230</h6>
                      </div>
                    </div>

                    <div class="input-group mt-3">
                      <input
                        className="form-control form-control bg-dark text-white"
                        placeholder="Coupon code"
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
                        <i class="fa-solid fa-check text-success me-2"></i>
                        <span className="h6 fw-normal">
                          Get Access to Secret Deal
                        </span>
                      </li>

                      <li className="list-group-item d-flex mb-0">
                        <i class="fa-solid fa-check text-success me-2"></i>
                        <span className="h6 fw-normal">Book Faster</span>
                      </li>

                      <li className="list-group-item d-flex mb-0">
                        <i class="fa-solid fa-check text-success me-2"></i>
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
