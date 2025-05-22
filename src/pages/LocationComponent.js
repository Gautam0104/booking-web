import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationContext";
import axios from "axios";
const LocationComponent = () => {
  const {
    isLocationEnabled,
    isPermissionGranted,
    latitude,
    longitude,
    address,
    checkLocationStatus
  } = useContext(LocationContext);

  useEffect(() => {
    checkLocationStatus(); // Automatically run on mount
  }, [checkLocationStatus]);
  const getAddress = async (lat, lng) => {
    const apiKey = "AIzaSyDd7KcAwKZitt0GoHFVhy8p6lOSKLP1NPM";
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    );
    const address = response.data.results[0]?.formatted_address;
    return address;
  };

  getAddress(40.73061, -73.935242).then(console.log);
  return (
    <div style={{ color: "#fff", padding: "1rem", background: "#333" }}>
      <h2>Location Info</h2>
      <p>Location Enabled: {isLocationEnabled ? "Yes" : "No"}</p>
      <p>Permission Granted: {isPermissionGranted ? "Yes" : "No"}</p>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default LocationComponent;
