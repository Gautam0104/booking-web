import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import "./custom.scss"; // Custom styles for the app
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#212529" }}>
      {/* Navbar and Footer components */}
      <Navbar />
      <Content />
      <div className="container">
        <h1 className="mt-5">Welcome to Booking</h1>
        <p>Your one-stop solution for all travel needs.</p>
        <p>Explore our services and book your next adventure with us!</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
