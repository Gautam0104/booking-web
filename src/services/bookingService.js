import axios from "./api";

// Fetch logged-in user details
export const fetchUserDetails = async (token) => {
  const response = await axios.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

// Submit hotel booking
export const createBooking = async (bookingData) => {
  const response = await axios.post("/booking/create", bookingData, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.data;
};
