import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserDashboardHeader from "../UserDashboardHeader";

const AccessRestricted = () => {
  const navigate = useNavigate();
  return (
    <Payout_content>
      <UserDashboardHeader />
      <Payout_wrapper>
        <Inner_wrap>
          <h3 style={{ color: "#df2a44" }}>Access Restricted</h3>
          <p>
            You need a valid invitation link to access the  group
          </p>
          <button className="btn" onClick={() => navigate(-1)}>
            Return to Home page
          </button>
        </Inner_wrap>
      </Payout_wrapper>
    </Payout_content>
  );
};

export default AccessRestricted;

const Payout_content = styled.div`
  background-color: #f8f5f0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
`;

const Payout_wrapper = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Inner_wrap = styled.div`
  width: 75%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;

  .btn {
    border: none;
    outline: none;
    color: white;
    height: 2.5rem;
    width: 70%;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: #7b2cbf;
  }
`;
