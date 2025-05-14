import React, { useEffect } from "react";
import "tiny-slider/dist/tiny-slider.css";
import { tns } from "tiny-slider/src/tiny-slider";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  useEffect(() => {
    tns({
      container: ".tiny-slider-inner",
      items: 1,
      slideBy: "page",
      autoplay: true,
      controls: true,
      nav: false,
      autoplayButtonOutput: false,
      mouseDrag: true,
      loop: true
    });
  }, []);

  return (
    <section className="py-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
              <div className="tiny-slider-inner">
                {/* Slide 1 */}
                <div
                  className="card overflow-hidden h-400px h-sm-600px rounded-0"
                  style={{
                    backgroundImage:
                      "url('../../../assets/img/hotelresort/01.jpg')",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  <div className="bg-overlay bg-dark opacity-3"></div>
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="container">
                      <div className="row">
                        <div className="col-11 col-lg-7">
                          <h6 className="text-white fw-normal mb-0">
                            💖 Fall in love with the City
                          </h6>
                          <h1 className="text-white display-6">
                            Modern Luxury In Manhattan
                          </h1>
                          <Link className="btn btn-primary mb-0">
                            Reserve Today
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div
                  className="card overflow-hidden h-400px h-sm-600px bg-parallax text-center rounded-0"
                  data-jarallax-video="https://www.youtube.com/watch?v=j56YlCXuPFU"
                >
                  <div className="bg-overlay bg-dark opacity-3"></div>
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="container w-100 my-auto">
                      <div className="row justify-content-center">
                        <div className="col-11 col-lg-8">
                          <h1 className="text-white">
                            Taking luxury hospitality to new heights
                          </h1>
                          <Link className="btn btn-dark mb-0">
                            Take Me There
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* You’ll need to handle Jarallax/video background initialization separately */}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div
                className="tns-controls"
                aria-label="Carousel Navigation"
                tabIndex={0}
              >
                <button type="button" data-controls="prev" aria-controls="tns1">
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button type="button" data-controls="next" aria-controls="tns1">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
