import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../custom.scss";
import BackToTop from "../components/BackToTop";
import { Outlet } from "react-router-dom";



const Dashboard = () => {
  return (
    <div className="App" style={{ backgroundColor: "#212529" }}>
 
      <Navbar />
      <Outlet />
      <BackToTop />
      <Footer />
 
  </div>
  )
}

export default Dashboard
