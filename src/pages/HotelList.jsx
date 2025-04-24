import React from "react";
import { HeroSection } from "../layout/hotel/hotellist/HeroSection";
import { HotelListView } from "../layout/hotel/hotellist/HotelListView";
import { ViewToggle } from "../layout/hotel/hotellist/ViewToggle";

export const HotelList = () => {
  return (
    <div>
      <HeroSection />
      <ViewToggle />
      <HotelListView />
    </div>
  );
};
