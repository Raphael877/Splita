import React from "react";
import styled from "styled-components";

const AboutSplita = () => {
  return (
    <AboutSplitaStyled>
      <section className="left">
        <article className="head">
          <div style={{ display: "flex", gap: "10px" }}>
            <h1 style={{ color: "#7B2CBF" }}>About</h1>
            <h1> Splita</h1>
          </div>
        </article>
        <p
          style={{
            fontFamily: "Montserrat",
            fontWeight: "500",
            fontSize: "15px",
            width: 600,
            lineHeight: "23px",
          }}
        >
          Splita is redefining the traditional Ajo experience, making group
          savings simple, transparent, and stress-free.
          <br />
          We help trusted friends, families, and communities save together
          effortlessly, with automated cycles.
          <br /> Our goal is to build a smarter, more reliable way to manage
          group contributions, powered by trust, technology, and transparency.
          No more confusion, missed turns, or chasing payments.
          <br />
          Our automated cycles keep every contribution organized and on time.
          Everything is digital, secure, and easy to track in real time.We’re
          building a smarter way to manage group contributions. One that’s
          powered by trust, shaped by technology, and built for accountability.
          At Splita, we believe saving together should feel seamless and fair,
          Because when everyone wins, the group grows stronger.
        </p>
      </section>
      <section className="right">
        <div className="head2"></div>
        <div className="picsCont"></div>
      </section>
    </AboutSplitaStyled>
  );
};

export default AboutSplita;

const AboutSplitaStyled = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    overflow: hidden;
  }

  .left {
    height: 100%;
    width: 44%;

    .head {
      height: 30%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Montserrat;
      font-weight: 600;
    }
  }

  .right {
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .head2 {
      height: 15%;
      width: 100%;
    }
    .picsCont {
      height: 70%;
      width: 100%;
      background: url(/about.jpg);
      background-repeat: no-repeat;
      object-fit: contain;
      background-size: contain;
    }
  }
`;
