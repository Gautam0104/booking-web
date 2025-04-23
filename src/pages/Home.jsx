import React from "react";
import HeroSection from "../components/HeroSection"; // Adjust the path as needed
import CarouselComponent from "../components/CarouselComponent"; // Adjust the path as needed
import HolidayPromo from "../components/HolidayPromo"; // Adjust the path as needed
import FeaturedHotels from "../components/FeaturedHotels"; // Adjust the path as needed
import LogoStrip from "../components/LogoStrip"; // Adjust the path as needed
import TestimonialSlider from "../components/TestimonialSlider"; // Adjust the path as needed
import ExploreNearby from "../components/ExploreNearby"; // Adjust the path as needed

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
