import React, { useState } from "react";
import styled from "styled-components";
import Splita_logo from "../assets/Splita_logo.png";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateInputs = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const Login = async () => {
    if (!validateInputs()) return;

    SetLoading(true);
    try {
      const res = await axios.post(`${BaseUrl}/users/login`, formData);

      localStorage.setItem(
        import.meta.env.VITE_USERTOKEN,
        JSON.stringify(res?.data?.token)
      );
      localStorage.setItem(
        import.meta.env.VITE_USERID,
        JSON.stringify(res?.data?.user)
      );
      toast.success(res?.data?.message || "Login successful!");
      console.log("res", res);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "Invalid email or password");
    } finally {
      SetLoading(false);
    }
  };

  return (
    <SignIn_content>
      <ToastContainer />

      <div className="circle_top_left"></div>
      <div className="circle_top_right"></div>
      <div className="circle_mid_left"></div>
      <div className="circle_down_right"></div>

      <div className="brand_name">
        <img src={Splita_logo} alt="Splita Logo"  onClick={() => navigate('/')}/>
      </div>

      <SignIn_wrapper>
        <h1 style={{ textAlign: "center" }}>Welcome Back!</h1>
        <p
          style={{
            color: "#888888",
            textAlign: "center",
            marginBlock: "1.5rem",
          }}
        >
          Please enter your details to sign in
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            Login();
          }}
        >
          <div className="inp">
            <div className="label">
              <MdOutlineEmail />
              <p style={{ color: "#3d3c3c" }}>Email Address</p>
            </div>
            <div className="input_div">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <p style={{ color: "red", fontSize: "0.85rem" }}>
                {errors.email}
              </p>
            )}
          </div>

          <div className="inp">
            <div className="label">
              <MdLockOutline />
              <p style={{ color: "#3d3c3c" }}>Password</p>
            </div>
            <div className="input_div">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="icon" onClick={() => setShow(!show)}>
                {show ? (
                  <GoEye style={{ color: "black" }} />
                ) : (
                  <GoEyeClosed style={{ color: "black" }} />
                )}
              </div>
            </div>
            {errors.password && (
              <p style={{ color: "red", fontSize: "0.85rem" }}>
                {errors.password}
              </p>
            )}
          </div>

          <p
            style={{
              color: "#7b2cbf",
              cursor: "pointer",
              marginBlock: "0.5rem",
            }}
            onClick={() => navigate("/forgotpassword")}
          >
            Forgot Password?
          </p>

          <button type="submit" disabled={loading}>
            {loading ? <ClipLoader size={20} color="#fff" /> : "Sign In"}
          </button>

          <p style={{ textAlign: "center", marginBottom: "1rem" }}>
            Don’t have an account?{" "}
            <span
              style={{ color: "#7b2cbf", cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </form>
      </SignIn_wrapper>
    </SignIn_content>
  );
};

export default SignIn;

const SignIn_content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  .circle_top_left,
  .circle_top_right,
  .circle_mid_left,
  .circle_down_right {
    position: absolute;
    border-radius: 50%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .circle_top_left {
    background-color: #c6bdc8;
    width: 20rem;
    height: 20rem;
    top: -20%;
    left: -17%;
  }

  .circle_top_right {
    background-color: #b4a6b7;
    width: 3rem;
    height: 3rem;
    top: 10%;
    right: 0.5%;
  }

  .circle_mid_left {
    background-color: #f5dcc6;
    width: 3rem;
    height: 3rem;
    top: 60%;
    left: 0.5%;
  }

  .circle_down_right {
    background-color: #f4e2d1;
    width: 20rem;
    height: 20rem;
    bottom: -20%;
    right: -17%;
  }

  .brand_name {
    position: absolute;
    top: 3%;
    left: 10%;
    z-index: 1;

    img {
      width: 40%;
      height: 100%;
    }

    @media (max-width: 768px) {
      left: 7%;
    }
  }
`;

const SignIn_wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 85%;
  }

  h1 {
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  form {
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .inp {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .input_div {
        width: 100%;
        height: 3.2rem;
        border: 1px solid #a6a6a6;
        border-radius: 0.4rem;
        display: flex;
        align-items: center;
        padding-right: 0.5rem;
        overflow: hidden;

        input {
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
          background-color: transparent;
          padding-left: 0.8rem;
        }

        .icon {
          cursor: pointer;
          color: #7b2cbf;
        }
      }
    }

    button {
      width: 100%;
      height: 3.5rem;
      background-color: #7b2cbf;
      color: white;
      border-radius: 0.8rem;
      border: none;
      cursor: pointer;
      margin-block: 0.5rem;

      &:hover {
        background-color: #9472b2;
        transition: all 350ms ease-in-out;
      }

      &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
      }
    }
  }
`;
