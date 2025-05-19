import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Image01 from "../../src/assets/img/hotellist/08.jpg";
import { loginUser } from '../services/authService';

const MySwal = withReactContent(Swal);

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        identifier: form.email,
        password: form.password
      });

      if (data.success && data.token) {
        console.log(data.user)
        // Save user to localStorage
        const email = data.user?.email;
        const usernameOnly = email?.split("@")[0]; 

        localStorage.setItem("user", JSON.stringify({ username: usernameOnly }));
        // Save token to localStorage
        localStorage.setItem('token', data.token);
        MySwal.fire({
          icon: 'success',
          title: 'Login successful!',
          timer: 1500,
          showConfirmButton: false
        });

        // Optionally store token
        localStorage.setItem('token', data.token);

        navigate('/dashboard/home');
      } else {
        MySwal.fire({
          icon: 'error',
          title: 'Login failed',
          text: data.message || 'Invalid credentials',
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      MySwal.fire({
        icon: 'error',
        title: 'Login failed',
        text: error.response?.data?.message || 'Something went wrong.',
      });
    }
  };

  const handleGoogleLogin = () => {
    MySwal.fire('Google login clicked!');
  };

  const handleFacebookLogin = () => {
    MySwal.fire('Facebook login clicked!');
  };

  return (
    <section className="vh-100"
      style={{
        backgroundImage: `url(${Image01})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}>
      {/* <Link to="/dashboard/home"
        className="btn btn-outline-dark text-white position-absolute top-0 end-0 m-3 z-3"
        style={{ zIndex: 3 }}>
        Skip
      </Link> */}

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
            <div className="card text-white rounded-4" style={{ background: "#0b0a12" }}>
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
                        autoComplete="off"
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
