import React from "react";
import Image01 from "../assets/img/brandLogos/01.svg";
import Image02 from "../assets/img/brandLogos/02.svg";
import Image03 from "../assets/img/brandLogos/03.svg";
import Image04 from "../assets/img/brandLogos/04.svg";
import Image05 from "../assets/img/brandLogos/05.svg";
import Image06 from "../assets/img/brandLogos/06.svg";

const brandLogos = [
  { src: Image01, alt: "Product" },
  { src: Image02, alt: "PinPoint" },
  { src: Image03, alt: "Wonderer" },
  { src: Image04, alt: "Voyage" },
  { src: Image05, alt: "Wayfarer" },
  { src: Image06, alt: "Truant" }
];

const LogoStrip = () => {
  return (
    <div className="bg-dark py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">
          {brandLogos.map((logo, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-2 text-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid grayscale-hover"
                style={{ maxHeight: "50px", opacity: 0.7 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
