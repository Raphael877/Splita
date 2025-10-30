import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Benefit from "../Components/Benefit";
import HowWeWork from "../Components/HowWeWork";
import AboutSplita from "../Components/AboutSplita";
import Stories from "../Components/Stories";
import Hero2 from "../Components/Hero2";
import Footer from "../Components/Footer";

const LandingPage = () => {

  const [words, setWords] = useState(['seamless', 'effortless', 'smarter', 'transparent']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
     const intervalId = setInterval(() => {
       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
     }, 7000);

     return () => clearInterval(intervalId);
   }, [words]);
  return (
    <>
      <Header />
      <LandingPageStyle>
        <div className="hero">
          <section className="info">
            <article className="text">
              <h1 className="turn">Turn your ajo into a</h1>
              <div className="fd" style={{ display: "flex" }}>
                <h1 style={{ color: "#FFA554"}} className="change" key={currentWordIndex}>{words[currentWordIndex]}</h1>
                <h1 style={{ zIndex: 1}}>{" "} experience</h1>
              </div>
            </article>
            <p>
              Simplify the way you save, contribute, and grow together. With
              Splita, enjoy a seamless, transparent, and effortless ajo
              experience designed for your lifestyle.
            </p>
            <button className="btn" onClick={() => navigate("./signup")}>
              Join Splita Today
            </button>
          </section>
        </div>
      </LandingPageStyle>
      <section id="benefit">
        <Benefit />
      </section>
      <section id="how-it-works">
        <HowWeWork />
      </section>
      <Stories />
      <section id="about">
        <AboutSplita />
      </section>
      <Hero2 />
      <Footer />
    </>
  );
};

export default LandingPage;

const LandingPageStyle = styled.div`
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    overflow: hidden;
  }

  .hero {
    height: 100%;
    width: 100%;
    background: url("/landing.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .info {
      height: 60%;
      width: 65%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: 90px;

      @media (max-width: 768px) {
        width: 100%;
      }

      p{
        color: #FFFFFF;
        margin-bottom: 35px;
        margin-top: 25px;
        width: 80%;
        font-size: 1.2rem;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }

      .text {
        height: 40%;
        width: 100%;
        color: #ffffff;
        font-family: Montserrat;
        font-style: 700;
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

          h1{
            font-size: 3.5rem;
            @media (max-width: 768px) {
              font-size: 2rem;
              line-height: 1.3;
            }
          }

          .fd{
            @media (max-width: 768px) {
              flex-direction: column;
            }
          }
        

        .change{
          animation: fade-in 10s infinite;
        }

          @keyframes fade-in {
      0% {
        transform: translatex(50px);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translatex(-20px);
        opacity: 0;
      }
    }
  
    }
  }
}

  .btn {
        height: 45px;
        width: 170px;
        border-radius: 12px;
        font-size: 1rem;
        border: none;
        background-color: #ff7900;
        color: white;
        font-family: Montserrat;
        font-weight: 500;
        cursor: pointer;

        &:hover {
          background-color: #ffa554;
          transition: all 350ms ease-in-out;
        }
      }
`;
