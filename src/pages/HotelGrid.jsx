import React from "react";
import HotelGridView from "../layout/hotel/hotelgrid/HotelGridView";
import { HeroSection } from "../layout/hotel/hotellist/HeroSection";
import { ViewToggle } from "../layout/hotel/hotellist/ViewToggle";

const HotelGrid = () => {
  return (
    <div>
      <HeroSection />
      <ViewToggle />
      <HotelGridView />
    </div>
  );
};

export default HotelGrid;
