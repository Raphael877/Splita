import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Splita_logo from "../assets/Splita_logo.png";
import Avatar from "../assets/Avatar.png";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { MdLogout, MdOutlineCancel } from "react-icons/md";
import ConfirmLogout from "../Components/ConfirmLogout";

const UserDashboardHeader = ({ onMyGroupClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const userId = JSON.parse(localStorage.getItem("userid"));
  const userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeDropdown = () => setShowDropdown(false);

  return (
    <UserDashboardHeader_content>
      <UserDashboardHeader_wrapper>
        <img
          src={Splita_logo}
          className="brand_logo"
          onClick={() => navigate("/")}
        />
        <ul>
          <li
            className={location.pathname === "/dashboard" ? "active" : ""}
            onClick={() => navigate("/userdashboard")}
          >
            Home
          </li>
          <li
            className={location.pathname === "/mygroupdetail" ? "active" : ""}
            onClick={() => {
              navigate("/mygroupdetail");
              setTimeout(() => {
                if (onMyGroupClick) onMyGroupClick();
              }, 300);
            }}
          >
            My groups
          </li>
          <li
            className={location.pathname === "/mycontribution" ? "active" : ""}
            onClick={() => navigate("/mycontribution")}
          >
            Contributions
          </li>
        </ul>
        <div className="right">
          <div className="profile" onClick={toggleDropdown}>
            <div className="dp">
              <img
                src={
                  userId?.profilePicture || userData?.profilePicture || Avatar
                }
                alt="User Profile"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <p>{userId?.name || userData?.fullName}</p>
            <IoIosArrowDown />
          </div>

          {showDropdown && (
            <div className="dropdown">
              <div className="dropdown_wrap">
                <div className="top">
                  <img
                    src={
                      userId?.profilePicture ||
                      userData?.profilePicture ||
                      Avatar
                    }
                    alt="User Profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <p>{userId.name || userData?.fullName}</p>
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
                <p className="nav" onClick={() => navigate("/useremptystate")}>
                  Home
                </p>
                <p className="nav" onClick={() => navigate("/groups")}>
                  Groups
                </p>
                <p className="nav" onClick={() => navigate("/contributions")}>
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
      </UserDashboardHeader_wrapper>

      {showLogoutModal && (
        <ConfirmLogout onClose={() => setShowLogoutModal(false)} />
      )}
    </UserDashboardHeader_content>
  );
};

export default UserDashboardHeader;

const UserDashboardHeader_content = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 9999;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */

  @media (max-width: 768px) {
    background-color: #f8f5f0;
    box-shadow: none;
  }
`;

const UserDashboardHeader_wrapper = styled.div`
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
    height: 55%;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 30%;
      height: 35%;
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
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;

    .dp {
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      @media (max-width: 768px) {
        display: none;
      }

      img {
        width: 100%;
        height: 100%;
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

        .prof {
          cursor: pointer;
          color: #100f0f;
          padding-block: 0.2rem;
          &:hover {
            background-color: #f2eaf9;
          }
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

        .top {
          display: flex;
          gap: 1rem;
          align-items: center;

          img {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
          }
        }

        .log {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }

    .profile {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.5rem;
      cursor: pointer;

      @media (max-width: 768px) {
        justify-content: flex-end;
      }

      .arrow {
        @media (max-width: 768px) {
          display: none;
        }
      }

      .menu {
        display: none;
        font-size: 1.5rem;

        @media (max-width: 768px) {
          display: flex;
        }
      }

      p {
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
`;
