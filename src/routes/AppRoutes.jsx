import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import { HotelList } from "../pages/HotelList";
import HotelGrid from "../pages/HotelGrid";
import RoomDetail from "../pages/RoomDetail";
import HotelDetail from "../pages/HotelDetail";
import HotelBooking from "../pages/HotelBooking";
import HotelResort from "../pages/HotelResort";
import HotelChain from "../pages/HotelChain";
import Blog from "../pages/Blog";
import List from "../components/List";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Acount";
import CompleteProfile from "../pages/CompleteProfile";
import Location from "../pages/Location";
import Payment from "../pages/Payment";
import BookingList from "../pages/BookingList";
import BookingConfirm from "../pages/BookingConfirm";

const AppRoutes = () => {
  const exampleBooking = {
    hotelId: 39684676,
    checkInDate: "2025-06-10T00:00:00.000Z",
    checkOutDate: "2025-06-13T00:00:00.000Z",
    totalPrice: "48500.00",
    paymentMethod: "cash",
    couponCode: "GROUP2025",
    specialRequests: "Quiet rooms, away from elevators",
    bookingSource: "WebApp",
    rooms: [
      { roomId: "201771164", adults: 2, children: 1, price: "18500.00" },
      { roomId: "325711554", adults: 2, children: 0, price: "15000.00" },
      { roomId: "201911333", adults: 1, children: 0, price: "15000.00" }
    ]
  };
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="account" element={<Account />} />
        <Route path="completeprofile" element={<CompleteProfile />} />
        <Route path="hotellist" element={<HotelList />} />
        <Route path="hotelgrid" element={<HotelGrid />} />
        <Route path="hoteldetail" element={<HotelDetail />} />
        <Route path="roomdetail" element={<RoomDetail />} />
        <Route path="hotelbooking" element={<HotelBooking />} />
        <Route path="hotelresort" element={<HotelResort />} />
        <Route path="hotelchain" element={<HotelChain />} />
        <Route path="blog" element={<Blog />} />
        <Route path="apitest" element={<List />} />
        <Route path="booking-web" element={<Home />} />
        <Route path="location" element={<Location />} />
        <Route path="bookinglist" element={<BookingList />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<Payment />} />
      <Route
        path="/bookingconfirm"
        element={<BookingConfirm booking={exampleBooking} />}
      />
    </Routes>
  );
};

export default AppRoutes;
