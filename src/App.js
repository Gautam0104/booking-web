import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./custom.scss";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home"; // Default import
import { About } from "./pages/About"; // Named import

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#212529" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Use named import for About page */}
          <Route path="/about" element={<About />} />
        </Routes>
        <BackToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
