import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(15);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const VerifyEmail = () => {
    const navigate = useNavigate()
  return (
    <VerifyEmail_content>
        <div className='circle_top_left'></div>
        <div className='circle_top_right'></div>
        <div className='circle_mid_left'></div>
        <div className='circle_down_right'></div>
        <div className='brand_name'>
            <h1 style={{letterSpacing: '1px'}}>Splita</h1>
        </div>
        <VerifyEmail_wrapper>
            <h1 style={{textAlign: 'center'}}>Verify Email</h1>
            <p style={{color:'#888888', textAlign: 'center', marginBlock: '1rem'}}>Please input code sent to your email</p>

            <form>

                <div className='input_div'>
                    <input type="tel" inputMode="numeric" maxLength={1} />
                    <input type="tel" inputMode="numeric" maxLength={1} />
                    <input type="tel" inputMode="numeric" maxLength={1} />
                    <input type="tel" inputMode="numeric" maxLength={1} />
                    <input type="tel" inputMode="numeric" maxLength={1} />
                    <input type="tel" inputMode="numeric" maxLength={1} />
                </div>

                <button onClick={() => navigate('/signin')}>Verify</button>

                <p style={{textAlign: 'center'}}>Didn't receive the code? <span style={{color: '#7b2cbf', cursor: 'pointer'}}>Resend (55s)</span></p>
                
            </form>
        </VerifyEmail_wrapper>
    </VerifyEmail_content>    
  )
}

export default VerifyEmail

  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");

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
const VerifyEmail_content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EFEFEF;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 100vh;
    }

    .circle_top_left{
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
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    .circle_top_right{
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
  };

  const VerifyOtp = async () => {
    const otpCode = otp.join("");
    setLoading(true);
    if (otpCode.length !== 6) {
      toast.error("Please enter a valid 6-digit code");
    .circle_mid_left{
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
    setLoading(true);
    try {
      const res = await axios.post(`${BaseUrl}/users/verify-otp`, {
        email,
        otp: otpCode,
      });
      navigate("/signin");
      toast.success(res?.data?.message);
      setOtp("");

      console.log(res.data);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    .circle_down_right{
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
  };

  const ResendOtp = async () => {
    if (timer > 0 || resending) return;

    setResending(true);
    try {
      const res = await axios.post(
        `${BaseUrl}/users/resend-otp`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(res?.data?.message);
      setTimer(15);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setResending(false);
    .brand_name{
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
  };

  return (
    <VerifyEmail_content>
      <div className="brand_name">
        <h1 style={{ letterSpacing: "1px" }}>Splita</h1>
      </div>

      <VerifyEmail_wrapper>
        <h1 style={{ textAlign: "center" }}>Verify Email</h1>
        <p
          style={{
            color: "#888888",
            textAlign: "center",
            marginBlock: "1rem",
          }}
        >
          Please input the code sent to your email
        </p>
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
            <button>
              <ClipLoader />
            </button>
          ) : (
            <button type="submit">Verify</button>
          )}

          <p style={{ textAlign: "center" }}>
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

  .circle_top_left {
    position: absolute;
    border-radius: 50%;
    background-color: #c6bdc8;
    width: 25rem;
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

const VerifyEmail_wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
      justify-content: center;
    z-index: 1;

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 85%;
  }

  h1{
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

    form{
        width: 100%;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;

        .input_div{
            display: flex;
            gap: 1rem;
            width: 100%;
            height: 5rem;
            align-items: center;

            input{
                width: 15%;
                height: 100%;
                background-color: #DDDDDD;
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

      input {
        width: 45%;
        height: 80px;
        background-color: #dddddd;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        text-align: center;
        font-size: 1.5rem;
      }
    }

    button {
      width: 90%;
      height: 3rem;
      color: white;
      background-color: #ff7900;
      border-radius: 0.7rem;
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
