import axios from "axios";

export const fetchHotelsByLocation = async (locationId) => {
  const payload = {
    locationId,
    checkIn: "2025-06-25",
    checkOut: "2025-06-26",
    nationality: "IN",
    occupancies: [
      {
        numOfAdults: 2
      }
    ],
    page: 2,
    filterBy: {
      subLocationIds: [],
      freeBreakfast: false
    },
    traceId: "792b6d10-e0ce-4c58-82c6-e8c5e670e11a"
  };

  const response = await axios.post(
    "http://api.stayigo.com/v1.0/listing/hotels",
    payload,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return response.data[0]?.data || [];
};
