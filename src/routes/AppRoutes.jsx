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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
