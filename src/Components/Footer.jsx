import React from "react";
import styled from "styled-components";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <FooterStyled>
      <article className="small"></article>
      <section className="mainFooter">
        <article className="footerCon">
          <div className="firstFooter">
            <div className="imgcon">
              <img src="/group.png" alt="" className="logo" />
            </div>
            <p style={{ width: 230 }}>
              Making group savings simple, fair, and effortless for everyone.
            </p>
            <div className="socialIcon">
              <div className="circle">
                {" "}
                <TiSocialFacebook style={{ color: "black" }} />
              </div>
              <FaTwitter size={17} />
              <AiOutlineInstagram size={17} />
              <div className="square">
                <FaLinkedinIn style={{ color: "black" }} />
              </div>
            </div>
          </div>
          <div>
            <p style={{fontWeight: 'bolder'}}>Product</p>
            <p style={{cursor: 'pointer'}}>How it works</p>
            <p style={{cursor: 'pointer'}}>Benefit</p>
          </div>
          <div>
            <p style={{fontWeight: 'bolder'}}>Company</p>
            <p style={{cursor: 'pointer'}}>About Us</p>
            <p style={{cursor: 'pointer'}}>Careers</p>
            <p style={{cursor: 'pointer'}}>Blog</p>
            <p style={{cursor: 'pointer'}}>Contact</p>
          </div>
          <div>
            {" "}
            <p style={{fontWeight: 'bolder'}}>Support</p>
            <p style={{cursor: 'pointer'}}>Help Center</p>
            <p style={{cursor: 'pointer'}}>Privacy Policy</p>
            <p style={{cursor: 'pointer'}}>Terms of Service</p>
            <p style={{cursor: 'pointer'}}>Status</p>
          </div>
        </article>
      </section>
      <article className="Footerbottom">
        <p
          style={{
            fontWeight: "500",
            fontFamily: "Montserrat",
            color: "#FFFFFF",
            width: 570,
            marginBlock: "1rem",
          }}
        >
          © 2025 Splita. All rights reserved.{" "}
        </p>
      </article>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #1a0032;

  @media (max-width: 768px) {
    height: auto;
  }

  .small {
    height: 10%;
    width: 100%;
    background-color: white;
  }

  .mainFooter {
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .footerCon {
      height: 80%;
      width: 85%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: Inter;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #ffffff;
      border-bottom: 1px solid #374151;

      @media (max-width: 768px) {
        padding-block: 1rem;
        gap: 1.5rem;
        flex-direction: column;
        align-items: flex-start;
      }

      .firstFooter {
        .imgcon {
          width: 190px;
          height: 48.86px;
          margin-right: 80px;
          margin-bottom: 15px;

          @media (max-width: 768px) {
            width: 8rem;
          }
        }

        .logo {
          height: 100%;
          width: 100%;
          background-size: cover;
          object-fit: contain;
        }

        .socialIcon {
          display: flex;
          gap: 10px;
          margin-top: 10px;
          cursor: pointer;

          .circle {
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .square {
            height: 18px;
            width: 18px;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
  .Footerbottom {
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #1a0032;

    @media (max-width: 768px) {
      
    }
  }
`;
