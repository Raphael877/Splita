import React from 'react';
import styled from 'styled-components';
import { FaRegTimesCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ContributionSuccessful = ({ onClose }) => {
  const Navigate = useNavigate();

  return (
    <Payout_content>
      <Payout_wrapper>
        <Inner_wrap>
          <h3>Contribution Successful</h3>
          <p>Your contribution has been confirmed. You’ll receive an update once the payment reflects in your group.</p>
          <div className='btn'>
            <button className='btn1' onClick={onClose}>View group</button>
            <button className='btn2' onClick={() => Navigate('/userdashboard')}>Back To Home</button>
          </div>
        </Inner_wrap>

        <FaRegTimesCircle
          style={{ cursor: 'pointer', position: 'absolute', top: '10%', right: '6%' }}
          onClick={onClose}
        />
      </Payout_wrapper>
    </Payout_content>
  );
};

export default ContributionSuccessful;

const Payout_content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Payout_wrapper = styled.div`
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
  width: 75%;
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

    .btn1 {
      border: none;
      outline: none;
      color: white;
      height: 2.5rem;
      width: 9rem;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #ff7900;
      &:hover {
        background-color: #d68d4e;
      }
    }

    .btn2 {
      border: none;
      outline: none;
      color: white;
      height: 2.5rem;
      width: 9rem;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #7b2cbf;
      &:hover {
        background-color: #ac67e8;
      }
    }
  }
`;
