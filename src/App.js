import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Content from './components/Content';


function App() {
  return (
    <div className="App">
  <Navbar />
  <Content  />
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
