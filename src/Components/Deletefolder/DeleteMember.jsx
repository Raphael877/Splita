import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const DeleteMember = ({ onClose, memberName }) => {
  const handleDelete = () => {
    toast.success(`${memberName} Deleted Successfully`);
    setTimeout(() => {
      if (onClose) onClose();
    }, 1500);
  };

  return (
    <Payout_content>
      <Payout_wrapper>
        <Inner_wrap>
          <h3>Delete Member</h3>
          <p>
            Are you sure you want to delete <strong>{memberName}</strong>?<br />
            This action cannot be undone.
          </p>
          <div className="btn">
            <button className="btn1" onClick={onClose}>
              Cancel
            </button>
            <button className="btn2" onClick={handleDelete}>
              Delete
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

export default DeleteMember;

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
      width: 7rem;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #9d9d9d;
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
    }
  }
`;
