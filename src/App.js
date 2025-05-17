import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./custom.scss";
import BackToTop from "./components/BackToTop";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#212529" }}>
      <Router>
       
        <AppRoutes />
       
      </Router>
    </div>
  );
}

export default App;
