import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Splita_logo from "../assets/Splita_logo.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(15);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const navigate = useNavigate();

  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!email) {
      toast.error("No email found. Please sign up again.");
      navigate("/signup");
    }
  }, [email, navigate]);


  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };


  const VerifyOtp = async () => {
    const otpCode = otp.join("");

    if (!email) {
      toast.error("Missing email address.");
      return;
    }

    if (!/^\d{6}$/.test(otpCode)) {
      toast.error("Please enter a valid 6-digit code.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${BaseUrl}/users/verify-otp`, {
        email,
        otp: otpCode,
      });
      toast.success(res?.data?.message || "Email verified successfully!");
      setOtp(["", "", "", "", "", ""]);
      navigate("/useremptystate");
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const ResendOtp = async () => {
    if (timer > 0 || resending) return;

    if (!email) {
      toast.error("No email found. Please sign up again.");
      return;
    }

    setResending(true);
    try {
      const res = await axios.post(
        `${BaseUrl}/users/resend-otp`,
        { email },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success(res?.data?.message || "OTP resent successfully!");
      setTimer(15);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to resend OTP");
    } finally {
      setResending(false);
    }
  };

  return (
    <VerifyEmail_content>
      <div className="circle_top_left"></div>
      <div className="circle_top_right"></div>
      <div className="circle_mid_left"></div>
      <div className="circle_down_right"></div>

      <div className="brand_name">
        <img src={Splita_logo} alt="Splita Logo" />
      </div>

      <VerifyEmail_wrapper>
        <h1>Verify Email</h1>
        <p>Please input the code sent to your email</p>
        <ToastContainer />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            VerifyOtp();
          }}
        >
          <div className="input_div">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="tel"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          {loading ? (
            <button disabled>
              <ClipLoader size={20} color="#fff" />
            </button>
          ) : (
            <button type="submit">Verify</button>
          )}

          <p>
            Didn’t receive the code?{" "}
            <span
              onClick={ResendOtp}
              style={{
                color: timer > 0 ? "#999" : "#7b2cbf",
                cursor: timer > 0 ? "not-allowed" : "pointer",
                fontWeight: 600,
              }}
            >
              {resending
                ? "Resending..."
                : timer > 0
                ? `Resend (${timer}s)`
                : "Resend now"}
            </span>
          </p>
        </form>
      </VerifyEmail_wrapper>
    </VerifyEmail_content>
  );
};

export default VerifyEmail;


const VerifyEmail_content = styled.div`
  width: 100%;
  height: 100vh;
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
  }

  .circle_top_left {
    background-color: #c6bdc8;
    width: 25rem;
    height: 20rem;
    top: -28%;
    left: -17%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .circle_top_right {
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

const VerifyEmail_wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 85%;
  }

  h1 {
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  form {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    .input_div {
      display: flex;
      gap: 1rem;
      width: 100%;
      height: 5rem;
      align-items: center;
      overflow: hidden;

      input {
        width: 15%;
        height: 100%;
        background-color: #dddddd;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        text-align: center;
        font-size: 1.5rem;

        @media (max-width: 768px) {
          height: 80%;
        }
      }
    }

    button {
      width: 90%;
      height: 3.5rem;
      color: white;
      background-color: #7b2cbf;
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
