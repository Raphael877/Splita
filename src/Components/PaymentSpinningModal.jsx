// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// const spin = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `;

// const PaymentSpinningModal = () => {
//     return (
//         <Content>
//             <Modal>
//                 <Spinner />
//                 <p>Processing payment...</p>
//             </Modal>
//         </Content>
//     );
// };

// export default PaymentSpinningModal;

// const Content = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     min-height: 100vh;
//     background-color: rgba(0, 0, 0, 0.3);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 1000;
// `;

// const Modal = styled.div`
//     width: 30%;
//     height: 15rem;
//     background-color: white;
//     border-radius: 0.5rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     gap: 1rem;

//     @media (max-width: 768px) {
//         width: 70%;
//         height: 12rem;
//     }
// `

// const Spinner = styled.div`
//     border: 5px solid #f3f3f3;
//     border-top: 5px solid #3498db;
//     border-radius: 50%;
//     width: 50px;
//     height: 50px;
//     animation: ${spin} 1s linear infinite;
// `;
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import PaymentSpinningModal from "../Components/PaymentSpinningModal.jsx";
import WomenDashboardContent from "./WomenDashboardContent.jsx"; // your existing dashboard content

const token = JSON.parse(localStorage.getItem(import.meta.env.VITE_USERTOKEN));
const BaseUrl = import.meta.env.VITE_BaseUrl;

const WomenDashboard = () => {
  const { groupId } = useParams();
  const location = useLocation();

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [reference, setReference] = useState(null);

  useEffect(() => {
    // Check URL query params for reference
    const query = new URLSearchParams(location.search);
    const ref = query.get("reference");

    if (ref) {
      setReference(ref);
      setShowPaymentModal(true);

      // Automatically verify the contribution
      verifyContribution(ref);
    }
  }, [location]);

  const verifyContribution = async (ref) => {
    try {
      const res = await axios.post(
        `${BaseUrl}/Payments/verify-contribution`,
        { reference: ref },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Verify contribution response:", res.data);
      // Optional: show toast or update UI here
    } catch (err) {
      console.error("Failed to verify contribution:", err);
      // Optional: show toast error
    } finally {
      setShowPaymentModal(false); // hide spinner once API finishes
    }
  };

  return (
    <>
      {showPaymentModal && <PaymentSpinningModal />}
      <WomenDashboardContent groupId={groupId} />
    </>
  );
};

export default WomenDashboard;
