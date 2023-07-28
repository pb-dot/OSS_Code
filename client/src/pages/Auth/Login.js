import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
import Slider from "../../components/Layout/Slider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="LOGIN - OSS">
      <Slider />
      <div className="row contactus ">
        <div className="col-md-6 mt-5">
          <img
            className=""
            src="/images/login.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-md-4 ">
          <div className="form-container ">
            <form onSubmit={handleSubmit}>
              <h4 className="title">LOGIN FORM</h4>

              <div className="mb-3">
                <input
                  type="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email "
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="mb-3">
                <button
                  type="button"
                  className="btn forgot-btn"
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                >
                  Forgot Password
                </button>
              </div>

              <button type="submit" className="btn btn-primary">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
