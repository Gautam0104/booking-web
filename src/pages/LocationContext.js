import React, { createContext, useState, useCallback } from "react";

// Create context
export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [address, setAddress] = useState("");

  // Check only if geolocation is supported
  const checkLocationStatusOnly = useCallback(() => {
    setIsLocationEnabled("geolocation" in navigator);
  }, []);

  // Convert coordinates to address using Nominatim API
  const fetchAddressFromCoordinates = useCallback(async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
        {
          headers: {
            "User-Agent": "ReactApp"
          }
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAddress(data.display_name || "No address found");
      } else {
        console.error("Failed to fetch address");
        setAddress("Error fetching address");
      }
    } catch (error) {
      console.error("Error fetching address:", error.message);
      setAddress("Error fetching address");
    }
  }, []);

  // Full check with permission and reverse geocoding
  const checkLocationStatus = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setIsLocationEnabled(false);
      return;
    }

    setIsLocationEnabled(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setIsPermissionGranted(true);
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        await fetchAddressFromCoordinates(latitude, longitude);
      },
      (error) => {
        console.error("Geolocation error:", error.message);
        setIsPermissionGranted(false);
        setAddress("Location access denied.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, [fetchAddressFromCoordinates]);

  // Manually get current location
  const getCurrentLocation = useCallback(() => {
    if (!("geolocation" in navigator)) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        await fetchAddressFromCoordinates(latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error.message);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, [fetchAddressFromCoordinates]);

  return (
    <LocationContext.Provider
      value={{
        isLocationEnabled,
        isPermissionGranted,
        latitude,
        longitude,
        address,
        checkLocationStatusOnly,
        checkLocationStatus,
        getCurrentLocation
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
