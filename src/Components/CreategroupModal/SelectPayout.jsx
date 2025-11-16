// import React from "react";
// import styled from "styled-components";
// import { FaRegTimesCircle } from "react-icons/fa";

// const SelectPayout = ({ onClose, onAutomaticRotation, onManualSelection }) => {
//   const randomizePayoutOrder = async () => {
//     try {
//       const res = await axios.post(
//         `${BaseUrl}/groups/${groupId}/randomize_payout_order`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(groupId);
//       toast.success("Payout order randomized successfully");
//     } catch (error) {
//       console.error("Error randomizing payout order:", error);
//       toast.error("Could not randomize payout order");
//     }
//   };
//   return (
//     <Payout_content>
//       <Payout_wrapper>
//         <Inner_wrap>
//           <h3>Select payout type</h3>
//           <div className="btn">
//             <button
//               className="btn1"
//               onClick={() => {
//                 onClose();
//                 setTimeout(() => onAutomaticRotation(), 150);
//               }}
//             >
//               Automatic Rotation
//             </button>
//             <button
//               className="btn2"
//               onClick={() => {
//                 onClose();
//                 setTimeout(() => onManualSelection(), 150);
//               }}
//             >
//               Manual Selection
//             </button>
//           </div>
//         </Inner_wrap>

//         <FaRegTimesCircle
//           onClick={onClose}
//           style={{
//             cursor: "pointer",
//             position: "absolute",
//             top: "15%",
//             right: "6%",
//           }}
//         />
//       </Payout_wrapper>
//     </Payout_content>
//   );
// };

// export default SelectPayout;
import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";

const SelectPayout = ({ onClose, onAutomaticRotation, onManualSelection }) => {
  return (
    <Payout_content>
      <Payout_wrapper>
        <Inner_wrap>
          <h3>Select payout type</h3>
          <div className="btn">
            <button
              className="btn1"
              onClick={() => {
                onClose();
                setTimeout(() => onAutomaticRotation(), 150);
              }}
            >
              Automatic Rotation
            </button>
            <button
              className="btn2"
              onClick={() => {
                onClose();
                setTimeout(() => onManualSelection(), 150);
              }}
            >
              Manual Selection
            </button>
          </div>
        </Inner_wrap>

        <FaRegTimesCircle
          onClick={onClose}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "15%",
            right: "6%",
          }}
        />
      </Payout_wrapper>
    </Payout_content>
  );
};

export default SelectPayout;

const Payout_content = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const Payout_wrapper = styled.div`
  width: 35%;
  height: 25%;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translateY(100vh); 
  animation: slideIn 1s forwards; 

  @keyframes slideIn {
    to {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Inner_wrap = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
      color: #7028ae;
      height: 2.5rem;
      width: 50%;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #e4e9ff;
    }

    .btn1 {
      border: none;
      outline: none;
      color: white;
      height: 2.5rem;
      width: 50%;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: #7b2cbf;
    }
  }
`;
