import React from "react";
import HeroSection from "../components/HeroSection"; 
import CarouselComponent from "../components/CarouselComponent"; 
import HolidayPromo from "../components/HolidayPromo"; 

import LogoStrip from "../components/LogoStrip"; 
import TestimonialSlider from "../components/TestimonialSlider"; 
import ExploreNearby from "../components/ExploreNearby"; 
import FeaturedHotels from "../components/FeaturedHotels";

const Home = () => {
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

export default Home;
