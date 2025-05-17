import React, { useEffect, useState } from "react";

const List = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const payload = {
      locationId: 228250,
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

    const fetchHotels = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "http://api.stayigo.com/v1.0/listing/hotels",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const hotellist = await response.json();
        console.log("API response:", hotellist);
        console.log("API response:", hotellist[0].data);
        // Only set the "data" array (which contains hotels)
        setHotels(hotellist[0].data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <p className="text-white">Loading hotels...</p>;
  if (error) return <p className="text-white">{error}</p>;

  if (hotels.length === 0)
    return <p className="text-white">No hotels found for this search.</p>;

  return (
    <div>
      <h1 className="text-white mb-4">Hotel List</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id} style={{ marginBottom: "20px", color: "white" }}>
            <h2>{hotel.name}</h2>
            <p>Relevance Score: {hotel.relevanceScore}</p>
            <p>Star Rating: {hotel.starRating}</p>
            <p>Type: {hotel.type}</p>
            <p>Type: {hotel.contact?.address?.city?.name || "Unknown"}</p>
            <img src={hotel.heroImage} alt="" />
            {/* If you want to see contact info as JSON for debugging */}
            {/* <pre>{JSON.stringify(hotel.contact, null, 2)}</pre> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
