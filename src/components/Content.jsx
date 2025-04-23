import React from "react";
import HeroSection from "./HeroSection";

import CarouselComponent from "./CarouselComponent";
import HolidayPromo from "./HolidayPromo";
import FeaturedHotels from "./FeaturedHotels";
import TestimonialSlider from "./TestimonialSlider";
import LogoStrip from "./LogoStrip";
import ExploreNearby from "./ExploreNearby";

const Content = () => {
  return (
    <div>
      <HeroSection />
      <CarouselComponent />
      <HolidayPromo />
      <FeaturedHotels />
      <LogoStrip />
      <TestimonialSlider />
      <ExploreNearby />
    </div>
  );
};

export default Content;
