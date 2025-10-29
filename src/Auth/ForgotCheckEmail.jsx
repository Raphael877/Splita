import React, { useState } from "react";
import styled from "styled-components";
import Splita_logo from "../assets/Splita_logo.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const ForgotCheckEmail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    resetCode: "",
    newPassword: "",
    confirmPassword: "",
  });

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.resetCode ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required!");
      return;
    }

    if (formData.resetCode.length !== 6) {
      toast.error("Reset code must be 6 digits");
      return;
    }

    if (formData.newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${BaseUrl}/users/reset-password`, {
        code: formData.resetCode,
        password: formData.newPassword,
      });

      toast.success(res?.data?.message || "Password reset successful!");
      setTimeout(() => navigate("/signin"), 2000);
    } catch (err) {
      console.error(err);
      toast.error(
        err?.response?.data?.message || "Invalid or expired reset code"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ForgotCheckEmail_content>
      <ToastContainer />

      <div className="circle_top_left"></div>
      <div className="circle_top_right"></div>
      <div className="circle_mid_left"></div>
      <div className="circle_down_right"></div>

      <div className="brand_name">
        <img src={Splita_logo} alt="Splita Logo" />
      </div>

      <ForgotCheckEmail_wrapper>
        <h1 style={{ textAlign: "center" }}>Check your email</h1>
        <p
          style={{
            color: "#4e4a4a",
            textAlign: "center",
            marginBlock: "1.5rem",
          }}
        >
          Enter the 6-digit reset code Splita sent to your email address and
          create a new password.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="inp">
            <div className="label">
              <p style={{ color: "#3d3c3c" }}>Enter reset code</p>
            </div>
            <div className="input_div">
              <input
                type="text"
                name="resetCode"
                placeholder="e.g 123456"
                value={formData.resetCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="inp">
            <div className="label">
              <p style={{ color: "#3d3c3c" }}>Enter your New Password</p>
            </div>
            <div className="input_div">
              <input
                type="password"
                name="newPassword"
                placeholder="New password"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="inp">
            <div className="label">
              <p style={{ color: "#3d3c3c" }}>Re-type New Password</p>
            </div>
            <div className="input_div">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? (
              <ClipLoader size={20} color="#fff" />
            ) : (
              "Create New Password"
            )}
          </button>

          <p
            style={{
              color: "#7b2cbf",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => navigate("/forgotpassword")}
          >
            Go Back
          </p>
        </form>
      </ForgotCheckEmail_wrapper>
    </ForgotCheckEmail_content>
  );
};

export default ForgotCheckEmail;

const ForgotCheckEmail_content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
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
      height: 100%;
    }

    @media (max-width: 768px) {
      left: 7%;
    }
  }
`;

const ForgotCheckEmail_wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 6rem;
  z-index: 1;

  h1 {
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 5rem;
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
    gap: 1.5rem;

        .inp{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .label{
                display: flex;
                gap: 0.5rem;
            }

            .input_div{
                width: 100%;
                height: 3.2rem;
                border: 1px solid #A6A6A6;
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                padding-right: 0.5rem;
                overflow: hidden;

                input{
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    background-color: transparent;
                    padding-left: 0.5rem;
                }
            }
        }

    button {
      width: 100%;
      height: 3.5rem;
      color: white;
      background-color: #7b2cbf;
      border-radius: 0.8rem;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: #9472b2;
        transition: all 350ms ease-in-out;
      }
    }
  }
`;
