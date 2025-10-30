import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Hero2 = () => {
  const navigate = useNavigate();
  return (
    <Hero2Styled>
      <section className="card">
        <div className="mainCard">
          <h1>
            Save faster.
            <br /> Grow smarter.
            <br /> Together.
          </h1>
          <button className="btn" onClick={() => navigate('/signup')}>Join Splita Today</button>
        </div>
      </section>
    </Hero2Styled>
  );
};

export default Hero2;
const Hero2Styled = styled.div`
  height: 75vh;
  width: 100%;
  background-image: url(/Abstract.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 50vh;
  }

  .card {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
    }

    .mainCard {
      height: 80%;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2.5rem;
      line-height: 50px;

      @media (max-width: 768px) {
        width: 85%;
        gap: 1rem;
        align-items: center;
        text-align: center;
      }

      h1{
        font-weight: 600;
        color: white;
        font-size: 3.6rem;
        line-height: 5rem;

        @media (max-width: 768px) {
          font-size: 2rem;
          line-height: 3rem;
        }
      }

      .btn {
        height: 3rem;
        width: 40%;
        border-radius: 12px;
        border: none;
        background-color: #ff7900;
        color: white;
        font-family: Montserrat;
        font-weight: 500;
        cursor: pointer;
        &:hover{
          background-color: #ffa554;
          transition: all 350ms ease-in-out;
        }
      }
    }
  }
`;
