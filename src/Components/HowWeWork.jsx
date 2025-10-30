import React from "react";
import styled from "styled-components";
import { FaUsers } from "react-icons/fa";
import { MdOutlineShield } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

const HowWeWork = () => {
  return (
    <HowWeWorkStyle>
      <div className="sect">
        <div className="body">
          <article className="small">
            <div className="head">
              <h2>How Spilta</h2>
              <h2 style={{ color: "#7B2CBF" }}>Works</h2>
            </div>
            <h4>
              Simple steps to start, manage, and grow your Ajo digitally.
            </h4>
          </article>
        </div>
        <div className="maincon">
          <article className="con2">
            <div className="circle">
              <FaUsers color="pink" />
            </div>
            <h4 style={{ fontFamily: "Montserrat", fontWeight: "500" }}>
              Sign Up
            </h4>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Create your Splita account in minutes.
            </p>
          </article>
          <article className="con2">
            <div className="circle">
              <MdOutlineShield style={{ color: "pink" }} />
            </div>
            <h4 style={{ fontFamily: "Montserrat", fontWeight: "500" }}>
              Create or Join Ajo
            </h4>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Start your own group or join set your rules.
            </p>
          </article>
          <article className="con2">
            <div className="circle">
              <FaUsers color="pink" />
            </div>
            <h4 style={{ fontFamily: "Montserrat", fontWeight: "500" }}>
              Contribute Seamlessly
            </h4>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Make secure contributions<br></br> faster.
            </p>
          </article>
          <article className="con2">
            <div className="circle">
              <LuCalendarDays color="pink" />
            </div>
            <h4 style={{ fontFamily: "Montserrat", fontWeight: "500" }}>
              Track & Stay Updated
            </h4>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Follow every payment, payout, and group activity.
            </p>
          </article>
        </div>
      </div>
    </HowWeWorkStyle>
  );
};

export default HowWeWork;

const HowWeWorkStyle = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #f7f2fb;

  @media (max-width: 768px) {
        height: auto;
        overflow: hidden;
        padding-block: 2rem;
      }

  .sect {
    height: 100%;
    width: 100%;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
      }

    .body {
      height: 45%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        width: 85%;
      }

      .small {
        height: 40%;
        width: 35%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        @media (max-width: 768px) {
          width: 90%;
          gap: 1rem;
        }

        .head{
          display: flex;
          font-weight: 600;
          font-size: 15px;
          gap: 5px;
        }

        h4{
          width: 100%;
          text-align: center;
          font-weight: 500;
        }
      }
    }

    .maincon {
      height: 50%;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 15px;

      @media (max-width: 768px) {
        align-items: center;
        flex-direction: column;
        
      }

      .con2 {
        height: 80%;
        width: 20%;
        background-color: #ffffff;
        border-radius: 6px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
        padding: 1.5rem;

        @media (max-width: 768px) {
          width: 85%;
          gap: 1rem;
        }

        .circle {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          background-color: #feeff6;
          color: #f967ad;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
        }
      }
    }
  }
`;
