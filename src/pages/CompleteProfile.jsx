import React, { useState, useEffect } from "react";
import "../styles/CompleteProfile.css";

const CompleteProfile = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    adhar:""
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.username) {
      const namePart = storedUser.username.split("@")[0];
      setProfile((prev) => ({ ...prev, email: storedUser.username, firstName: namePart }));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to API or save to localStorage
    console.log("Profile submitted:", profile);
    alert("Profile completed successfully!");
  };

  return (
    <div className="container py-4 px-3 px-md-5 text-white">
      <h3 className="fw-bold mb-4">Complete Your Profile</h3>

      <form onSubmit={handleSubmit} className=" p-4 rounded shadow-sm" style={{backgroundColor:'#0b0a12'}}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control bg-dark border text-white" name="firstName" value={profile.firstName} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control bg-dark border text-white" name="lastName" value={profile.lastName} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control bg-dark border text-white" name="email" value={profile.email} onChange={handleChange} disabled />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control bg-dark border text-white" name="phone" value={profile.phone} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Nationality</label>
            <input type="text" className="form-control bg-dark border text-white" name="nationality" value={profile.nationality} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Adhar No</label>
            <input type="text" className="form-control bg-dark border text-white" name="adhar" value={profile.adhar} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">Save Profile</button>
      </form>
    </div>
  );
};

export default CompleteProfile;
