import React, { useState } from "react";
import styled from "styled-components";
import Splita_logo from "../assets/Splita_logo.png";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { FaRegUser } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Terms from "./Terms";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [loading, setloading] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, phone, password, confirmPassword } = formData;

    if (!name.trim()) {
      toast.error("Please enter your full name.");
      return false;
    }

    if (!email.trim()) {
      toast.error("Email is required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!phone.trim()) {
      toast.error("Phone number is required.");
      return false;
    }

    const phoneRegex = /^(?:\+234|0)[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return false;
    }

    if (!password.trim()) {
      toast.error("Password cannot be empty.");
      return false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_*#?&-])[A-Za-z\d@$!%_*#?&-]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain one uppercase, one lowercase, one number, and one special character"
      );
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }

    return true;
  };

  const Register = async () => {
    if (!validateForm()) return;

    setloading(true);
    try {
      const res = await axios.post(`${BaseUrl}/users/register`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      const userData = {
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        firstName: formData.name.split(' ')[0]
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem("userEmail", formData.email);

      toast.success(res?.data?.message || "Registration successful!");

      localStorage.setItem("userEmail", formData.email);

      setTimeout(() => {
        navigate("/verifyemail");
      }, 1500);
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Registration failed. Please try again."
      );
      console.error(err);
    } finally {
      setloading(false);
    }
  };

  return (
    <SignUp_content>
      <div className="circle_top_left"></div>
      <div className="circle_top_right"></div>
      <div className="circle_mid_left"></div>
      <div className="circle_down_right"></div>
      <div className="brand_name">
        <img src={Splita_logo} alt="Splita Logo" />
      </div>

      <ToastContainer />

      <SignUp_wrapper>
        <h1>Join the circle</h1>
        <p style={{ color: "#888888" }}>
          Start your digital ajo journey and grow your money with Splita!
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            Register();
          }}
        >
          <div className="inp">
            <div className="label">
              <FaRegUser />
              <p style={{ color: "#3d3c3c" }}>First & Last name</p>
            </div>
            <div className="input_div">
              <input
                type="text"
                name="name"
                placeholder="e.g John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="inp">
            <div className="label">
              <MdOutlineEmail />
              <p style={{ color: "#3d3c3c" }}>Email</p>
            </div>
            <div className="input_div">
              <input
                type="text"
                name="email"
                placeholder="e.g John@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="inp">
            <div className="label">
              <FiPhone />
              <p style={{ color: "#3d3c3c" }}>Phone number</p>
            </div>
            <div className="input_div">
              <input
                type="text"
                name="phone"
                placeholder="e.g 07038204858"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <p style={{ color: "#888888" }}><small>Password must be at least 8 characters long and contain one uppercase, one lowercase, one number, and one special character</small></p>

          <div className="inp">
            <div className="label">
              <MdLockOutline />
              <p style={{ color: "#3d3c3c" }}>Create a Password</p>
            </div>
            <div className="input_div">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="icon" onClick={() => setShow(!show)}>
                {show ? <GoEye /> : <GoEyeClosed />}
              </div>
            </div>
          </div>

          <div className="inp">
            <div className="label">
              <MdLockOutline />
              <p style={{ color: "#3d3c3c" }}>Confirm Password</p>
            </div>
            <div className="input_div">
              <input
                type={show2 ? "text" : "password"}
                name="confirmPassword"
                placeholder="Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div className="icon" onClick={() => setShow2(!show2)}>
                {show2 ? <GoEye /> : <GoEyeClosed />}
              </div>
            </div>
          </div>

          <div className="check_cont">
            <input
              type="checkbox"
              style={{ cursor: "pointer" }}
            />
            <p>
              I have read the{" "}
              <i
                style={{ color: "#ff7900", cursor: "pointer" }}
                onClick={() => setShowTerms(true)}
              >
                Terms & Conditions
              </i>{" "}
              and I agree
            </p>
          </div>

          <button type="submit">
            {loading ? <ClipLoader size={20} color="#fff" /> : "Sign Up"}
          </button>

          <p className="already">
            Already have an account?{" "}
            <span
              style={{ color: "#7b2cbf", cursor: "pointer" }}
              onClick={() => navigate("/signin")}
            >
              Sign in
            </span>
          </p>
        </form>
      </SignUp_wrapper>

      {showTerms && <Terms closeModal={() => setShowTerms(false)} />}
    </SignUp_content>
  );
};

export default SignUp;

const SignUp_content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) and (min-width: 768px) {
    height: 160vh;
  }

  @media (max-width: 768px) {
    height: auto;
  }

  .circle_top_left {
    position: absolute;
    border-radius: 50%;
    background-color: #c6bdc8;
    width: 20rem;
    height: 20rem;
    top: -18%;
    left: -17%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .circle_top_right {
    position: absolute;
    border-radius: 50%;
    background-color: #b4a6b7;
    width: 3rem;
    height: 3rem;
    top: 10%;
    right: 0.5%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .circle_mid_left {
    position: absolute;
    border-radius: 50%;
    background-color: #f5dcc6;
    width: 3rem;
    height: 3rem;
    top: 45%;
    left: 0.5%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .circle_down_right {
    position: absolute;
    border-radius: 50%;
    background-color: #f4e2d1;
    width: 20rem;
    height: 20rem;
    bottom: -18%;
    right: -17%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .brand_name {
    position: absolute;
    color: #240046;
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

const SignUp_wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 6rem;
  z-index: 1;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 85%;
    padding-top: 8rem;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 6rem;
    padding-bottom: 2rem;
  }

  h1 {
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  form {
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .inp {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .label {
        display: flex;
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
      }
    }

    .check_cont {
      display: flex;
      gap: 0.5rem;
      margin-block: 0.5rem;
    }

    button {
      width: 100%;
      height: 3.5rem;
      background-color: #7b2cbf;
      color: white;
      border-radius: 0.7rem;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: #9472b2;
        transition: all 350ms ease-in-out;
      }
    }

    .already {
      text-align: center;
      padding-top: 2rem;
    }
  }
`;
