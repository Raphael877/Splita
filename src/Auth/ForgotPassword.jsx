import React, { useState } from "react";
import styled from "styled-components";
import Splita_logo from "../assets/Splita_logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email.trim()) {
      setError("Email address is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  const Forgetpassword = async () => {
    if (!validateEmail()) return;

    setLoading(true);
    try {
      const res = await axios.post(`${BaseUrl}/users/forgot-password`, {
        email,
      });
      navigate("/forgotcheckemail");
      toast.success(res?.data?.message);
    } catch (error) {
      // console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ForgotPassword_content>
      <ToastContainer />
      <div className="circle_top_left"></div>
      <div className="circle_top_right"></div>
      <div className="circle_mid_left"></div>
      <div className="circle_down_right"></div>
      <div className="brand_name">
        <img
          src={Splita_logo}
          alt="Splita logo"
          onClick={() => navigate("/")}
        />
      </div>

      <ForgotPassword_wrapper>
        <h1 style={{ textAlign: "center" }}>Forgot Password</h1>
        <p
          style={{ color: "#888888", textAlign: "center", marginBlock: "1rem" }}
        >
          Enter your email to reset your password
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            Forgetpassword();
          }}
        >
          <div className="inp">
            <div className="label">
              <MdOutlineEmail />
              <p style={{ color: "#3d3c3c" }}>Email Address</p>
            </div>
            <div className="input_div">
              <input
                type="text"
                placeholder="e.g John@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
            </div>
            {error && (
              <p style={{ color: "red", fontSize: "0.85rem" }}>{error}</p>
            )}
          </div>

          {loading ? (
            <button disabled>
              <ClipLoader color="#fff" size={20} />
            </button>
          ) : (
            <button type="submit">Send Instructions</button>
          )}

          <p
            style={{
              color: "#7b2cbf",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => navigate("/signin")}
          >
            Go back
          </p>
        </form>
      </ForgotPassword_wrapper>
    </ForgotPassword_content>
  );
};

export default ForgotPassword;

const ForgotPassword_content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 100vh;
  }

  .circle_top_left {
    position: absolute;
    border-radius: 50%;
    background-color: #c6bdc8;
    width: 20rem;
    height: 20rem;
    top: -28%;
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
    top: 60%;
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
    bottom: -28%;
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
      height: auto;
    }

    @media (max-width: 768px) {
      left: 7%;
    }
  }
`;

const ForgotPassword_wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 768px) {
    width: 95%;
  }

  form {
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 1;

    @media (max-width: 1024px) and (min-width: 768px) {
      width: 85%;
    }

    @media (max-width: 768px) {
      width: 85%;
    }

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

    button {
      width: 100%;
      height: 3.5rem;
      background-color: #7b2cbf;
      color: white;
      border-radius: 0.8rem;
      border: none;
      cursor: pointer;
      margin-block: 1rem;
      &:hover {
        background-color: #9472b2;
        transition: all 350ms ease-in-out;
      }
    }
  }
`;
