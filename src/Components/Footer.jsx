import React from "react";
import styled from "styled-components";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Splita_logo from "../assets/Splita_logo.png";
const Footer = () => {
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
            <p>Product</p>
            <p>How it works</p>
            <p>Benefit</p>
          </div>
          <div>
            <p>Company</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div>
            {" "}
            <p>Support</p>
            <p>Help Center</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Status</p>
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
            marginTop: "20px",
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
  .small {
    height: 10%;
    width: 100%;
    background-color: white;
  }
  .mainFooter {
    height: 70%;
    width: 100%;
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
    .footerCon {
      height: 80%;
      width: 80%;
      /* background-color: blue; */
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-family: Inter;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #ffffff;
      border-bottom: 1px solid #374151;
      .firstFooter {
        /* line-height: 30px; */
        .imgcon {
          width: 190px;
          height: 48.86px;
          /* background-color: yellow; */
          margin-right: 80px;
          margin-bottom: 15px;
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
  }
`;
