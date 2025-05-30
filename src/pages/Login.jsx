import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Image01 from "../../src/assets/img/hotellist/08.jpg";
import { loginUser } from "../services/authService";

const MySwal = withReactContent(Swal);

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        identifier: form.email,
        password: form.password
      });

      if (data.success && data.token) {
        const email = data.user?.email;
        const usernameOnly = email?.split("@")[0];

        localStorage.setItem(
          "user",
          JSON.stringify({ username: usernameOnly })
        );
        localStorage.setItem("token", data.token);

        MySwal.fire({
          icon: "success",
          title: "Login successful!",
          timer: 1500,
          showConfirmButton: false
        });

        navigate("/home");
      } else {
        MySwal.fire({
          icon: "error",
          title: "Login failed",
          text: data.message || "Invalid credentials"
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      MySwal.fire({
        icon: "error",
        title: "Login failed",
        text: error.response?.data?.message || "Something went wrong."
      });
    }
  };

  // Handle Google token response
  const handleGoogleCredentialResponse = async (response) => {
    const token = response.credential;
    try {
      const res = await fetch("https://yourapi.com/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
      });

      const data = await res.json();

      if (data.success && data.token) {
        const email = data.user?.email;
        const usernameOnly = email?.split("@")[0];

        localStorage.setItem(
          "user",
          JSON.stringify({ username: usernameOnly })
        );
        localStorage.setItem("token", data.token);

        MySwal.fire({
          icon: "success",
          title: "Google Login successful!",
          timer: 1500,
          showConfirmButton: false
        });

        navigate("/home");
      } else {
        MySwal.fire({
          icon: "error",
          title: "Google Login failed",
          text: data.message || "Invalid Google token"
        });
      }
    } catch (err) {
      console.error("Google login error:", err);
      MySwal.fire({
        icon: "error",
        title: "Login error",
        text: "Something went wrong with Google login."
      });
    }
  };

  // Initialize Google Login on load
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id:
          "918771734906-fs35v08ugmjcvji1s3er3bhb0frh70du.apps.googleusercontent.com",
        callback: handleGoogleCredentialResponse
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-btn-container"),
        {
          theme: "outline",
          size: "large",
          width: "50",
          text: "continue_with",
          shape: "rectangular",
          logo_alignment: "left",
          // Add custom styling
          style: {
            color: "white",
            border: "1px solid white",
            backgroundColor: "transparent"
          }
        }
      );
    }
  }, []);

  const handleFacebookLogin = () => {
    MySwal.fire("Facebook login clicked!");
  };

  return (
    <section
      className="vh-100"
      style={{
        backgroundImage: `url(${Image01})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
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

      <div
        className="container py-5 h-100"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card text-white rounded-4"
              style={{ background: "#0b0a12" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-5 mt-4">
                  <h2 className="fw-bold mb-3 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-4">
                    Please enter your username/email and password!
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-3 text-start">
                      <label htmlFor="email" className="form-label">
                        Username/Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg outline-white text-white white-placeholder"
                        style={{ background: "#0b0a12" }}
                        name="email"
                        placeholder="Enter your username/email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                      />
                    </div>

                    <div className="form-outline mb-4 text-start">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg outline-white text-white white-placeholder"
                        style={{ background: "#0b0a12" }}
                        name="password"
                        placeholder="*******"
                        value={form.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="text-end mb-4">
                      <a className="text-white-50 small" href="#!">
                        Forgot password?
                      </a>
                    </div>

                    <button
                      className="btn btn-primary btn-lg w-100"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>

                  <div className="d-flex justify-content-center text-center mt-4 gap-3 flex-wrap">
                    <button
                      onClick={handleFacebookLogin}
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-facebook me-2"></i>Facebook
                    </button>

                    {/* Google button placeholder */}
                    <div className="" id="google-btn-container"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-white-50 fw-bold">
                      Sign Up
                    </Link>
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
