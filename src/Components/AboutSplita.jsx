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
            lineHeight: "23px",
          }}
        >
          We’ve modernized the traditional Ajo system with automation and
          transparency, so your group never has to deal with confusion, late
          payments, or missed turns again.
          <br />
          Everything runs smoothly; contributions are automatic, updates are
          instant, payments are secure, and everyone can see what’s happening.
          Every member stays accountable, including the group admin.
          <br />
          Splita makes communal saving feel simple, fair, and stress-free.
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
    height: auto;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .left {
    height: 100%;
    width: 44%;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      width: 100%;
    }

    p {
      width: 100%;
      @media (max-width: 768px) {
        width: 85%;
      }
    }

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
