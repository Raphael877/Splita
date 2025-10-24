import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const navigate = useNavigate();

  const Forgetpassword = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${BaseUrl}/users/forgot-password`, {
        email,
      });
      navigate("/forgotcheckemail");
      console.log(res);
      toast.success(res?.data?.message);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
    navigate('/forgotcheckemail')
  };

  return (
    <ForgotPassword_content>
      <ToastContainer />
      <div className="circle_top_left"></div>
      <div className="circle_top_right"></div>
      <div className="circle_mid_left"></div>
      <div className="circle_down_right"></div>
      <div className="brand_name">
        <h1 style={{ letterSpacing: "1px" }}>Splita</h1>
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {loading ? (
            <button>
              <ClipLoader />
            </button>
          ) : (
            <button>Send Instructions</button>
          )}

          <p
            style={{ color: "#7b2cbf", cursor: "pointer", textAlign: "center" }}
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh;
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

    @media (max-width: 768px) {
      font-size: 1rem;
      left: 7%;
    }
  }
`;

const ForgotPassword_wrapper = styled.div`
  width: 45%;
  height: 100%;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

    h1 {
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
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
      background-color: #ff7900;
      color: white;
      border-radius: 0.8rem;
      border: none;
      cursor: pointer;
      margin-block: 1rem;
      &:hover {
        background-color: #e79751;
        transition: all 350ms ease-in-out;
      }
    }
  }
`;
