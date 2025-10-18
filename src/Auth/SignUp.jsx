import React from "react";
import styled from "styled-components";
import { GoEye } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
// import { LiaTimesSolid } from "react-icons/lia";

import { FaRegUser } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const navigate = useNavigate();
  return (
    <SignUp_content>
      <div className="circle_top_left"></div>
      <div className="circle_top_right"></div>
      <div className="circle_mid_left"></div>
      <div className="circle_down_right"></div>
      <div className="brand_name">
        <h1 style={{ letterSpacing: "1px" }}>Splita</h1>
      </div>
      <SignUp_wrapper>
        <h1>Join the circle </h1>
        <p style={{ color: "#888888" }}>
          Start your digital ajo journey and grow your money with Splita!
        </p>

        <form>
          <div className="inp">
            <div className="label">
              <FaRegUser />
              <p style={{ color: "#3d3c3c" }}>First & Last name</p>
            </div>
            <div className="input_div">
              <input type="text" placeholder="e.g John Doe" />
            </div>
          </div>

          <div className="inp">
            <div className="label">
              <MdOutlineEmail />
              <p style={{ color: "#3d3c3c" }}>Email</p>
            </div>
            <div className="input_div">
              <input type="text" placeholder="e.g John@gmail.com" />
            </div>
          </div>

          <div className="inp">
            <div className="label">
              <FiPhone />
              <p style={{ color: "#3d3c3c" }}>Phone number</p>
            </div>
            <div className="input_div">
              <input type="text" placeholder="e.g 07038204858" />
            </div>
          </div>

          <div className="inp">
            <div className="label">
              <MdLockOutline />
              <p style={{ color: "#3d3c3c" }}>Create a Password</p>
            </div>
            <div className="input_div">
              <input type={show ? "text" : "password"} placeholder="Password" />
              <div className="icon" onClick={() => setShow(!show)}>
                {show ? (
                  <GoEye style={{ cursor: "pointer" }} />
                ) : (
                  <GoEyeClosed style={{ cursor: "pointer" }} />
                )}
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
                placeholder="Password"
              />
              <div className="icon" onClick={() => setShow2(!show2)}>
                {show2 ? (
                  <GoEye style={{ cursor: "pointer" }} />
                ) : (
                  <GoEyeClosed style={{ cursor: "pointer" }} />
                )}
              </div>
            </div>
          </div>

          <div className="check_cont">
            <input type="checkbox" style={{ cursor: "pointer" }} />
            <p>
              I have read the{" "}
              <i style={{ color: "#ff7900", cursor: "pointer" }}>
                Terms & Conditions
              </i>{" "}
              and i agree
            </p>
          </div>

          <button onClick={() => navigate("/verifyemail")}>Sign Up</button>

          <p className="already">
            {" "}
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
    </SignUp_content>
  );
};

export default SignUp;

const SignUp_content = styled.div`
  width: 100%;
  height: 130vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) and (min-width: 768px) {
    height: 150vh;
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

    @media (max-width: 768px) {
      font-size: 1rem;
      left: 7%;
    }
  }
`;

const SignUp_wrapper = styled.div`
  width: 45%;
  height: 100%;
  padding-top: 4rem;
  z-index: 1;

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 85%;
    padding-top: 8rem;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 6rem;
    padding-bottom: 2rem;
  }

  h1{
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

    .check_cont {
      display: flex;
      gap: 0.5rem;
      margin-block: 0.5rem;
    }

    button {
      width: 100%;
      height: 2.7rem;
      color: white;
      background-color: #ff7900;
      border-radius: 0.7rem;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: #e79751;
        transition: all 350ms ease-in-out;
      }
    }

    .already {
      text-align: center;
      padding-top: 2rem;
    }
  }
`;
