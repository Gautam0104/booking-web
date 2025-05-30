import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HashRouter as Router } from "react-router-dom";

import "./custom.scss";

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
