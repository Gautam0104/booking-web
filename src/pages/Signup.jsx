import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image01 from "../../src/assets/img/hotellist/08.jpg";
import { signupUser } from '../services/authService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'Passwords do not match!',
      });
      return;
    }

    try {
      const data = await signupUser(form);

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful',
          text: `User ID: ${data.userId}`,
        }).then(function(){
            navigate(`/login`)
        })
        ;
        // Redirect to login if needed
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Signup Failed',
          text: data.message || 'Something went wrong',
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Signup failed. Please try again later.',
      });
    }
  };

  return (
    <section className="vh-120"
      style={{
        backgroundImage: `url(${Image01})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "120vh"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "120vh",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1
        }}
      ></div>
      <div className="container py-3 h-100" style={{ position: "relative", zIndex: 2 }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card text-white rounded-4" style={{ background: "#0b0a12" }}>
              <div className="card-body p-4 text-center">
                <div className="mb-5 mt-4">
                  <h2 className="fw-bold mb-3 text-uppercase">Sign Up</h2>
                  <p className="text-white-50 mb-4">Create your account</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-3 text-start">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg outline-white text-white white-placeholder"
                        style={{ background: "#0b0a12" }}
                        name="name"
                        placeholder='Enter your name'
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-outline mb-3 text-start">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg outline-white text-white white-placeholder"
                        style={{ background: "#0b0a12" }}
                        name="email"
                        placeholder='Enter your email'
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-outline mb-3 text-start">
                      <label className="form-label">Phone Number</label>
                      <div className="input-group">
                        <span className="input-group-text" style={{ background: "#0b0a12", color: "white", border: "1px solid #ccc" }}>
                          +91
                        </span>
                        <input
                          type="tel"
                          className="form-control form-control-lg outline-white text-white white-placeholder"
                          style={{ background: "#0b0a12" }}
                          name="phone"
                          placeholder="Enter phone number"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-3 text-start">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control form-control-lg outline-white text-white white-placeholder"
                        style={{ background: "#0b0a12" }}
                        name="password"
                        placeholder='******'
                        value={form.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-outline mb-4 text-start">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control form-control-lg outline-white text-white white-placeholder"
                        style={{ background: "#0b0a12" }}
                        name="confirmPassword"
                        placeholder='******'
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button className="btn btn-primary btn-lg w-100" type="submit">Sign Up</button>
                  </form>

                  <div className="text-center mt-4">
                    <p className="mb-0">Already have an account?{' '}
                      <Link to="/login" className="text-white-50 fw-bold">Login</Link>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
