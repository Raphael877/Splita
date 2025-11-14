import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AutomaticRotation = ({ onClose }) => {
  const navigate = useNavigate();
  const handleStartCycle = async () => {
    const BaseUrl = import.meta.env.VITE_BaseUrl;
    const groupId = localStorage.getItem("createdGroupId");
    const storedToken = localStorage.getItem(import.meta.env.VITE_USERTOKEN);
    const token = storedToken ? JSON.parse(storedToken) : null;

    if (!token) {
      toast.error("No valid token found. Please log in again.");
      return;
    }

    try {
      const res = await axios.post(
        `${BaseUrl}/groups/${groupId}/randomize_payout_order`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res?.data?.data?.message);
      console.log(res);
      navigate("/admindashboard");
    } catch (error) {
      console.error("Error starting cycle:", error.response || error);
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <Payout_content>
      <Payout_wrapper>
        <ToastContainer />
        <Inner_wrap>
          <h3>Start Cycle with Automatic Rotation</h3>
          <p>
            Splita will automatically assign payout turns to all members
            randomly.
          </p>
          <div className="btn">
            <button className="btn1" onClick={onClose}>
              Cancel
            </button>
            <button className="btn2" onClick={handleStartCycle}>
              Confirm & Start
            </button>
          </div>
        </Inner_wrap>
        <FaRegTimesCircle
          onClick={onClose}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "10%",
            right: "6%",
          }}
        />
      </Payout_wrapper>
    </Payout_content>
  );
};

export default AutomaticRotation;

const Payout_content = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 100;
`;

const Payout_wrapper = styled.div`
  width: 35%;
  height: 45%;
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
      width: 10rem;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #9d9d9d;
    }

    .btn2 {
      border: none;
      outline: none;
      color: white;
      height: 2.5rem;
      width: 10rem;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #d62c2c;
    }
  }
`;
