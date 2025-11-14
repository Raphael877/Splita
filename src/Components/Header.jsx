import React, { useState } from "react";
import styled from "styled-components";
import Splita_logo from "../assets/Splita_logo.png";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <Header_content>
      <Header_wrapper>
        <img
          src={Splita_logo}
          className="brand_logo"
          onClick={() => scrollToSection("home")}
          alt="Splita Logo"
        />
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("benefit")}>Benefits</li>
          <li onClick={() => scrollToSection("about")}>About Us</li>
          <li onClick={() => scrollToSection("how-it-works")}>How it works</li>
        </ul>
        <div className="header_btn">
          <button className="header_btn1" onClick={() => navigate("/signin")}>
            Sign In
          </button>
          <button className="header_btn2" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
        {isOpen ? (
          <MdClose
            style={{ cursor: "pointer", fontSize: "1.8rem" }}
            className="menu"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <IoMdMenu
            style={{ cursor: "pointer", fontSize: "1.8rem" }}
            className="menu"
            onClick={() => setIsOpen(true)}
          />
        )}
      </Header_wrapper>

      <MobileMenu isOpen={isOpen}>
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("benefit")}>Benefits</li>
          <li onClick={() => scrollToSection("about")}>About Us</li>
          <li onClick={() => scrollToSection("how-it-works")}>How it works</li>
        </ul>
        <div className="mobile_btns">
          <button className="mobile_btn1" onClick={() => navigate("/signin")}>
            Sign In
          </button>
          <button className="mobile_btn2" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </MobileMenu>
    </Header_content>
  );
};

export default Header;

const Header_content = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  z-index: 10;
`;

const Header_wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  .brand_logo {
    width: 12%;
    height: 65%;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 30%;
      height: 50%;
    }
  }

  ul {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      cursor: pointer;
      &:hover {
        color: #9556cc;
        transition: all 350ms ease-in-out;
      }
    }
  }

  .header_btn {
    width: 17%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }

    .header_btn1 {
      background-color: transparent;
      width: 45%;
      height: 2rem;
      cursor: pointer;
      color: #7b2cbf;
      border: 1px solid #7b2cbf;
      border-radius: 0.5rem;
      &:hover {
        color: #9556cc;
        transition: all 350ms ease-in-out;
      }
    }

    .header_btn2 {
      background-color: #ff7900;
      width: 45%;
      height: 2rem;
      cursor: pointer;
      border: none;
      border-radius: 0.5rem;
      color: white;
      &:hover {
        background-color: #ff9433;
        transition: all 350ms ease-in-out;
      }
    }
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 12vh;
  right: 0;
  width: 100%;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.4s ease-in-out;
  z-index: 9;
  display: none;

  @media (max-width: 768px) {
    display: flex
  }

  ul {
    list-style-type: none;
    width: 100%;
    padding: 1rem 0;
    text-align: center;

    li {
      padding: 0.75rem 0;
      cursor: pointer;
      &:hover {
        color: #9556cc;
        transition: all 350ms ease-in-out;
      }
    }
  }

  .mobile_btns {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 0.5rem;
    margin-bottom: 1rem;

    .mobile_btn1 {
      background-color: transparent;
      border: 1px solid #7b2cbf;
      color: #7b2cbf;
      padding: 0.6rem;
      border-radius: 0.5rem;
      cursor: pointer;
      &:hover {
        color: #9556cc;
      }
    }

    .mobile_btn2 {
      background-color: #ff7900;
      color: white;
      border: none;
      padding: 0.6rem;
      border-radius: 0.5rem;
      cursor: pointer;
      &:hover {
        background-color: #ff9433;
      }
    }
  }
`;
