import React from "react";
import styled from "styled-components";

const Hero2 = () => {
  return (
    <Hero2Styled>
      <section className="card">
        <div className="mainCard">
          <h1
            style={{
              fontWeight: "600",
              fontFamily: "Montserrat",
              color: "#FFFFFF",
            }}
          >
            Save faster.
            <br /> Grow smarter.
            <br /> Together.
          </h1>
          <button className="btn">Join Splita Today</button>
        </div>
      </section>
    </Hero2Styled>
  );
};

export default Hero2;
const Hero2Styled = styled.div`
  height: 60vh;
  width: 100%;
  background: linear-gradient(to right, #7028ae, #441869), url("/about.jpg");
  /* opacity: 20%; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .card {
    height: 100%;
    width: 45%;
    /* background-color: peachpuff; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .mainCard {
      height: 80%;
      width: 60%;
      /* background-color: purple; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
      gap: 20px;
      line-height: 50px;
      .btn {
        height: 40px;
        width: 130px;
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
