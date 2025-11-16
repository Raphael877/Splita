import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PayoutManuallySuccessful = ({ onClose, payoutData, groupId }) => {
  const navigate = useNavigate();

  const handleDone = () => {
    if (onClose) onClose();
    navigate(`/admincirclestartvacationdashboard/${groupId}`);
  };

  // Sort by position if needed
  const sortedData = payoutData
    ?.slice()
    .sort((a, b) => a.position - b.position);

  return (
    <Content>
      <Wrapper>
        <Inner>
          <h3>Payout Order Saved Successfully!</h3>
          <p style={{ color: "#777777" }}>Here's your payout rotation:</p>

          <div className="cont">
            {sortedData && sortedData.length > 0 ? (
              sortedData.map((member) => (
                <p key={member.id}>
                  {member.position}nd - {member.name}
                </p>
              ))
            ) : (
              <p>No payout data available</p>
            )}
          </div>

          <button onClick={handleDone}>Done</button>
        </Inner>
      </Wrapper>
    </Content>
  );
};
export default PayoutManuallySuccessful;
const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgb(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 150; /* topmost modal */
`;

const Wrapper = styled.div`
  width: 40%;
  height: 75%;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Inner = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-top: 1rem;
  }

  button {
    width: 80%;
    height: 2.6rem;
    border: none;
    border-radius: 2rem;
    margin-top: 1rem;
    cursor: pointer;
    background-color: #7b2cbf;
    color: white;
  }
`;
