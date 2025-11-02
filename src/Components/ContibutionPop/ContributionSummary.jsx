import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";

const ContributionSummary = ({ onContinue, onClose, formData }) => {
  return (
    <Group_details_content>
      <Group_details_wrapper>
        <Inner_wrap>
          <Header>
            <h3>Contribution Summary</h3>
            <FaRegTimesCircle
              style={{ fontSize: "1.3rem", cursor: "pointer" }}
              onClick={onClose}
            />
          </Header>
          <hr
            style={{ height: "2px", backgroundColor: "black", border: "none" }}
          ></hr>
          <div className="one">
            <p>Name</p>
            <p>{formData.groupName || "—"}</p>
          </div>
          <div className="one">
            <p>Contribution Amount</p>
            <p>
              {formData.contributionAmount
                ? `₦${formData.contributionAmount}`
                : "—"}
            </p>
          </div>
          <div className="one">
            <p>Payment Method</p>
            <p>Kora</p>
          </div>
          <div className="one">
            <p>Due date</p>
            <p>Oct 30, 2025</p>
          </div>
          <div className="one">
            <p>Late payment</p>
            <p>500</p>
          </div>
          <div className="one">
            <p>Total</p>
            <p>10,000</p>
          </div>

          <button onClick={onContinue}>Continue</button>
        </Inner_wrap>
      </Group_details_wrapper>
    </Group_details_content>
  );
};

export default ContributionSummary;

const Group_details_content = styled.div`
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

const Group_details_wrapper = styled.div`
  width: 40%;
  height: 65%;
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
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  .one {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 0.2rem;
  }

  button {
    width: 100%;
    height: 3rem;
    background-color: #7b2cbf;
    color: white;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #9472b2;
      transition: all 350ms ease-in-out;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
