import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(data.message || "Login successful");
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container form-component login-form">
      <h2>Sign In</h2>
      <p>Please login to continue</p>

      <form onSubmit={handleLogin}>
        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            required
            disabled={loading}
            onChange={(e) => setPassword(e.target.value)}
            style={{ paddingRight: "42px" }}
          />

          <span
            onClick={() => !loading && setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: loading ? "not-allowed" : "pointer",
              color: "#555",
              fontSize: "18px",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Register */}
      {/* Button */}
<div className="login-btn-wrapper">
  <button type="submit" disabled={loading}>
    {loading ? "Logging in..." : "Login"}
  </button>
</div>

<div className="register-row">
  <span className="register-text">Not Registered?</span>
  <Link to="/register" className="register-link">Register Now</Link>
</div>


      </form>
    </div>
  );
};

export default Login;
