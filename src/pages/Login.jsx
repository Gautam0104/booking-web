import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image01 from "../../src/assets/img/hotellist/08.jpg"

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with email: ${form.email}`);
  };

  const handleGoogleLogin = () => {
    alert('Google login clicked!');
    // Add Google OAuth logic here
  };

  const handleFacebookLogin = () => {
    alert('Facebook login clicked!');
    // Add Facebook OAuth logic here
  };

  return (
    <section className="vh-100" 
    style={{
        backgroundImage: `url(${Image01})`  ,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}>
                <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 1
    }}
  ></div>
      <div className="container py-5 h-100" style={{ position: "relative", zIndex: 2 }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card  text-white rounded-4" style={{ background: "#0b0a12" }}>
              <div className="card-body p-5 text-center">

                <div className="mb-5 mt-4">
                  <h2 className="fw-bold mb-3 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-4">Please enter your username/email and password!</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-3 text-start">
                      <label htmlFor="email" className="form-label">Username/Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg outline-white text-white white-placeholder"
                        style={{ background: "#0b0a12" }}
                        name="email"
                        placeholder='Enter your username/email'
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-outline mb-4 text-start">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control form-control-lg outline-white text-white white-placeholder"
                        style={{ background: "#0b0a12" }}
                        name="password"
                        placeholder='*******'
                        value={form.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="text-end mb-4">
                      <a className="text-white-50 small" href="#!">Forgot password?</a>
                    </div>

                    <button className="btn btn-primary btn-lg w-100" type="submit">Login</button>
                  </form>

                  <div className="d-flex justify-content-center text-center mt-4 gap-3">
                    <button onClick={handleFacebookLogin} className="btn btn-outline-primary">
                      <i className="bi bi-facebook me-2"></i>Facebook
                    </button>
                    <button onClick={handleGoogleLogin} className="btn btn-outline-danger">
                      <i className="bi bi-google me-2"></i>Google
                    </button>
                  </div>
                </div>

                <div>
                  <p className="mb-0">Don't have an account?{' '}
                    <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
