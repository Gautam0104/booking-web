import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary position-fixed "
        style={{
          bottom: "40px",
          right: "20px",
          zIndex: 1000,
          paddingTop: "10px",
          paddingBottom: "10px"
        }}
      >
        <BsArrowUp className="fw-bold text-white" size={24} />
      </button>
    )
  );
};

export default BackToTop;
