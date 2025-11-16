import React from "react";
import styled from "styled-components";
import { TbCurrencyNaira } from "react-icons/tb";
import axios from "axios";
import Payout from "./Payout";

const ConfirmPayout = ({ onClose, onConfirm, nextMember }) => {
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const token = JSON.parse(localStorage.getItem("user_token"));
  const payoutId = localStorage.getItem("payoutId");
  const handleConfirmPayout = async () => {
    try {
      const res = await axios.post(`${BaseUrl}/payouts/process/${payoutId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Payout_content>
      <Payout_wrapper>
        <Inner_wrap>
          <h3>Confirm Payout</h3>
          <p>
            You are about to send <TbCurrencyNaira />
            {nextMember?.amount} to {nextMember?.name}. Once confirmed, this
            payout will be recorded as completed.
          </p>
          <div className="btn">
            <button className="btn1" onClick={onClose}>
              Cancel
            </button>
            <button className="btn2" onClick={handleConfirmPayout}>
              Confirm & Send
            </button>{" "}
          </div>
        </Inner_wrap>
      </Payout_wrapper>
    </Payout_content>
  );
};

export default ConfirmPayout;

const Payout_content = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const Payout_wrapper = styled.div`
  width: 35%;
  height: 45%;
  background-color: white;
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

  p {
    color: #777777;
  }

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
      background-color: #9d9d9d;
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
    }
  }
`;
