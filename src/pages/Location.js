import React from "react";
import { LocationProvider } from "./LocationContext";
import LocationComponent from "./LocationComponent";

const Location = () => {
  return (
    <LocationProvider>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ textAlign: "center" }}>Geolocation App</h1>
        <LocationComponent />
      </div>
    </LocationProvider>
  );
};

export default Location;
