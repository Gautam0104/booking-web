import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image01 from "../assets/img/testimonials/01.jpg";
import Image02 from "../assets/img/testimonials/02.jpg";
const testimonials = [
  {
    img: Image01,
    emoji: "😆",
    text: "Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. understood the Preference unreserved.",
    name: "Carolyn Ortiz",
    role: "CEO of Google"
  },
  {
    img: Image02,
    emoji: "😍",
    text: "Absolutely stunning support and great product. Highly recommend it to everyone!",
    name: "Mike Johnson",
    role: "Product Manager at Meta"
  },
  {
    img: Image01,
    emoji: "🤩",
    text: "Exceeded my expectations in every way. Fantastic UI and user experience!",
    name: "Linda Lee",
    role: "UX Designer at Apple"
  }
];

const TestimonialSlider = () => {
  return (
    <div
      id="testimonialCarousel"
      className="carousel slide bg-dark text-white p-4 rounded"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {testimonials.map((item, idx) => (
          <div
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
            key={idx}
          >
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
              {/* Image Section */}
              <div className="position-relative mb-4 mb-md-0 me-md-4">
                <img
                  src={item.img}
                  alt="User"
                  className="rounded"
                  style={{
                    width: "400px",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "20px"
                  }}
                />
                <div
                  className="position-absolute top-0 start-0 bg-warning rounded p-2"
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "10px",
                    transform: "translateX(-50%)"
                  }}
                >
                  <span
                    role="img"
                    aria-label="emoji"
                    style={{ fontSize: "2rem" }}
                  >
                    {item.emoji}
                  </span>
                </div>
              </div>

              {/* Text Section */}
              <div>
                <h1 className="text-primary fs-1 ms-md-5 me-mb-5 text-start">
                  <FaQuoteLeft size={40} color="#6366f1" />
                </h1>
                <p
                  className="fs-5 text-start ms-md-5 me-mb-5"
                  style={{ maxWidth: "600px" }}
                >
                  {item.text}
                </p>
                <div className="mb-2 ms-md-5 me-mb-5 text-start">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-warning fs-5">
                      ★
                    </span>
                  ))}
                </div>
                <h5 className="mb-0 fw-bold ms-md-5 me-mb-5 text-start">
                  {item.name}
                </h5>
                <p className="ms-md-5 me-mb-5 text-start opacity-50">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TestimonialSlider;
