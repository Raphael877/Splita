import React, { useState } from "react";
import styled from "styled-components";
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
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const Login = async () => {
    SetLoading(true);
    try {
      const res = await axios.post(`${BaseUrl}/users/login`, formData);
      localStorage.setItem(
        import.meta.env.VITE_USERTOKEN,
        JSON.stringify(res?.data?.token)
      );
      localStorage.setItem(
        import.meta.env.VITE_USERID,
        JSON.stringify(res?.data?.data?._id)
      );
      toast.success(res?.data?.message);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || err?.response?.data?.Failed);
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
        <h1 style={{ letterSpacing: "1px" }}>Splita</h1>
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
                type="text"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
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
                required
              />
              <div className="icon" onClick={() => setShow(!show)}>
                {show ? <GoEye /> : <GoEyeClosed />}
              </div>
            </div>
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
          {loading ? (
            <button>
              <ClipLoader />
            </button>
          ) : (
            <button type="submit" style={{ cursor: "pointer" }}>
              Sign In
            </button>
          )}

          <p style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <span
              style={{ color: "#7b2cbf", cursor: "pointer" }}
              onClick={() => navigate("/")}
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  .circle_top_left {
    position: absolute;
    border-radius: 50%;
    background-color: #c6bdc8;
    width: 20rem;
    height: 20rem;
    top: -28%;
    left: -17%;
  }

  .circle_top_right {
    position: absolute;
    border-radius: 50%;
    background-color: #b4a6b7;
    width: 3rem;
    height: 3rem;
    top: 10%;
    right: 0.5%;
  }

  .circle_mid_left {
    position: absolute;
    border-radius: 50%;
    background-color: #f5dcc6;
    width: 3rem;
    height: 3rem;
    top: 60%;
    left: 0.5%;
  }

  .circle_down_right {
    position: absolute;
    border-radius: 50%;
    background-color: #f4e2d1;
    width: 20rem;
    height: 20rem;
    bottom: -28%;
    right: -17%;
  }

  .brand_name {
    position: absolute;
    color: #240046;
    top: 3%;
    left: 10%;
  }
`;

const SignIn_wrapper = styled.div`
  width: 45%;
  height: 100%;
  padding-top: 4rem;

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
        height: 2.3rem;
        border: 1px solid #a6a6a6;
        border-radius: 0.2rem;
        display: flex;
        align-items: center;
        padding-right: 0.5rem;

        input {
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
      height: 2.7rem;
      background-color: #7b2cbf;
      color: white;
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
