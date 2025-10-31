import React, { useState } from "react";
import styled from "styled-components";
import Splita_logo from "../assets/Splita_logo.png";
import Profile_img from "../assets/Profile_img.png";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { MdLogout, MdOutlineCancel } from "react-icons/md";
import ConfirmLogout from "../Components/ConfirmLogout";

const AdminDashboardHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const userData = (() => {
    try {
      return JSON.parse(localStorage.getItem("userData")) || {};
    } catch {
      return {};
    }
  })();

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeDropdown = () => setShowDropdown(false);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img
          src={Splita_logo}
          className="brand_logo"
          onClick={() => navigate("/")}
          alt="Splita Logo"
        />

        <ul>
          <li
            className={location.pathname === "/admin-dashboard" ? "active" : ""}
            onClick={() => navigate("/admin-dashboard")}
          >
            Home
          </li>
          <li
            className={location.pathname === "/admin-groups" ? "active" : ""}
            onClick={() => navigate("/admin-groups")}
          >
            My groups
          </li>
          <li
            className={location.pathname === "/admin-contributions" ? "active" : ""}
            onClick={() => navigate("/admin-contributions")}
          >
            Contributions
          </li>
        </ul>

        <div className="right">
          <div className="profile" onClick={toggleDropdown}>
            <img src={Profile_img} alt="Admin profile" />
            <p>{userData.fullName || "Admin User"}</p>
            <IoIosArrowDown />
            <div className="admin">
              <small>Admin</small>
            </div>
          </div>

          {showDropdown && (
            <div className="dropdown">
              <div className="dropdown_wrap">
                <div className="top">
                  <img src={Profile_img} alt="Profile" />
                  <p>{userData.fullName || "Admin User"}</p>
                </div>

                <MdOutlineCancel
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    position: "absolute",
                    top: "4%",
                    right: "0",
                    fontSize: "1.5rem",
                  }}
                  onClick={closeDropdown}
                />

                <p className="nav" onClick={() => navigate("/admin-dashboard")}>
                  Home
                </p>
                <p className="nav" onClick={() => navigate("/admin-groups")}>
                  Groups
                </p>
                <p className="nav" onClick={() => navigate("/admin-contributions")}>
                  Contributions
                </p>
                <p
                  className="prof"
                  onClick={() => {
                    navigate("/profile");
                    closeDropdown();
                  }}
                >
                  Profile
                </p>

                <hr
                  style={{
                    border: "none",
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#e74c3c",
                  }}
                />

                <div
                  className="log"
                  style={{ color: "#e74c3c", cursor: "pointer" }}
                  onClick={() => setShowLogoutModal(true)}
                >
                  <p>Logout</p>
                  <MdLogout
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "1.5rem",
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </HeaderWrapper>

      {showLogoutModal && (
        <ConfirmLogout onClose={() => setShowLogoutModal(false)} />
      )}
    </HeaderContainer>
  );
};

export default AdminDashboardHeader;

const HeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 768px) {
    background-color: #f8f5f0;
    box-shadow: none;
  }
`;

const HeaderWrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }

  .brand_logo {
    width: 12%;
    height: 65%;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 30%;
      height: 40%;
    }
  }

  ul {
    width: 30%;
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

      &.active {
        font-weight: 700;
        color: #9556cc;
      }
    }
  }

  .right {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;

    .profile {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.5rem;
      cursor: pointer;
      position: relative;

      .admin {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fef5d0;
        color: #facc15;
        padding-block: 0.2rem;
        padding-inline: 0.8rem;
        border-radius: 1rem;
      }

      @media (max-width: 768px) {
        justify-content: flex-end;

        p {
          display: none;
        }

        .admin {
          padding-inline: 0.6rem;
        }
      }
    }

    .dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      background-color: white;
      width: 20rem;
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      @media (max-width: 768px) {
        height: 18rem;
      }

      .dropdown_wrap {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 90%;
        height: 85%;
        position: relative;

        .top {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .nav {
          cursor: pointer;
          display: none;
          &:hover {
            color: #e74c3c;
          }

          @media (max-width: 768px) {
            display: flex;
          }
        }

        .prof{
          
          cursor: pointer;
          color: #100f0f;
          padding-block: 0.2rem;
          &:hover{
            background-color:  #f2eaf9;
          }
        }

        .log {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
`;
