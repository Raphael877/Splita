import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Benefit from "../Components/Benefit";
import HowWeWork from "../Components/HowWeWork";
import AboutSplita from "../Components/AboutSplita";
import Stories from "../Components/Stories";
import Hero2 from "../Components/Hero2";
import Footer from "../Components/Footer";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <LandingPageStyle>
        <div className="hero">
          <section className="info">
            <article className="text">
              <h1>Turn your ajo into a</h1>
              <div style={{ display: "flex" }}>
                <h1 style={{ color: "#FFA554" }}>smarter</h1>
                <h1>experience</h1>
              </div>
            </article>
            <p
              style={{
                fontWeight: "500",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                width: 570,
                marginBottom: 25,
              }}
            >
              Simplify the way you save, contribute, and grow together. With
              Splita, enjoy a seamless, transparent, and effortless ajo
              experience designed for your lifestyle.
            </p>
            <button className="btn" onClick={() => navigate("./signin")}>
              Join Splita Today
            </button>
          </section>
        </div>
      </LandingPageStyle>
      <Benefit />
      <HowWeWork />
      <Stories />
      <AboutSplita />
      <Hero2 />
      <Footer />
    </>
  );
};

export default LandingPage;

const LandingPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  .hero {
    height: 100%;
    width: 100%;
    background: url("/landing.jpg");
    /* object-fit: contain; */
    background-color: pink;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    .info {
      height: 60%;
      width: 50%;
      /* background-color: orange; */
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      text-align: center;
      margin-top: 90px;
      .text {
        height: 40%;
        width: 60%;
        /* background-color: crimson; */
        color: #ffffff;
        font-family: Montserrat;
        font-style: 700;
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .btn {
        height: 40px;
        width: 170px;
        border-radius: 12px;
        border: none;
        background-color: #ff7900;
        color: white;
        font-family: Montserrat;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;
