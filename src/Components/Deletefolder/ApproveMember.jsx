import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const ApproveMember = ({ onClose, group, request, refreshRequests }) => {
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = JSON.parse(localStorage.getItem("user_token"));
  const groupId = localStorage.getItem("selectedGroupId");

  const handleRequestAction = async (userId, action) => {
    try {
      const res = await axios.post(
        `${BaseUrl}/groups/${groupId}/join_request/${userId}`,
        { action },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success(res?.data?.message || `Request ${action}ed successfully`);
      refreshRequests(); // Notify parent to reload requests
      onClose(); // Close modal
    } catch (error) {
      console.error(`Error performing ${action}:`, error.response || error);
      toast.error(
        error.response?.data?.message || `Failed to ${action} request`
      );
    }
  };

  return (
    <Payout_content>
      <Payout_wrapper>
        <Inner_wrap>
          <h3>Approve Member</h3>
          <p>
            Are you sure you want to approve{" "}
            <strong>{request.user.name}</strong>?
          </p>
          <div className="btn">
            <button className="btn1" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn2"
              onClick={() => handleRequestAction(request.user.id, "approve")}
            >
              Approve
            </button>
          </div>
        </Inner_wrap>
        <FaRegTimesCircle
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "10%",
            right: "6%",
          }}
          onClick={onClose}
        />
      </Payout_wrapper>
    </Payout_content>
  );
};

export default ApproveMember;

const Payout_content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
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
      width: 7rem;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #9d9d9d;
      &:hover {
        background-color: #c9c3c3;
      }
    }

    .btn2 {
      border: none;
      outline: none;
      color: white;
      height: 2.5rem;
      width: 7rem;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #d62c2c;
      &:hover {
        background-color: #fc6e6e;
      }
    }
  }
`;
