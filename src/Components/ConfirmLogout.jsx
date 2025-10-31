import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ConfirmLogout = ({ onClose }) => {
  const handleLogout = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("userid");

    navigate("/signin");
  };
  const navigate = useNavigate();
  return (
    <Content>
      <Wrapper>
        <Inner_wrap>
          <h3>Confirm Logout</h3>
          <p>
            Are you sure you want to log out? You will need to log in again to
            continue
          </p>
          <div className="btn">
            <button className="btn1" onClick={onClose}>
              Cancel
            </button>
            <button className="btn2" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </Inner_wrap>
      </Wrapper>
    </Content>
  );
};

export default ConfirmLogout;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  width: 35%;
  height: 40%;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Inner_wrap = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  .btn {
    display: flex;
    gap: 1.3rem;
    width: 100%;

    .btn2 {
      border: none;
      outline: none;
      color: white;
      height: 2.5rem;
      width: 50%;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #e74c3c;

      &:hover {
        background-color: #e2695b;
        transition: all 350ms ease-in-out;
      }
    }

    .btn1 {
      border: none;
      outline: none;
      color: white;
      height: 2.5rem;
      width: 50%;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #777777;

      &:hover {
        background-color: #a19c9c;
        transition: all 350ms ease-in-out;
      }
    }
  }
`;
