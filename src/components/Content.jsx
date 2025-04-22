import React from "react";
import HeroSection from "./HeroSection";

import CarouselComponent from "./CarouselComponent";
import HolidayPromo from "./HolidayPromo";
import FeaturedHotels from "./FeaturedHotels";

const Content = () => {
  return (
    <div>
      <HeroSection />
      <CarouselComponent />
      <HolidayPromo />
      <FeaturedHotels />
    </div>
  );
};

export default Content;
