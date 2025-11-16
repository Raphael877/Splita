// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaRegTimesCircle } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";
// import styled from "styled-components";

// const PayoutManually = ({ onClose, onSave }) => {
//   const [members, setMembers] = useState([]);
//   const [payoutOrder, setPayoutOrder] = useState({});

//   const BaseUrl = import.meta.env.VITE_BaseUrl;
//   const token = JSON.parse(
//     localStorage.getItem(import.meta.env.VITE_USERTOKEN)
//   );
//   const groupId = localStorage.getItem("selectedGroupId");

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const res = await axios.put(
//           `${BaseUrl}/groups/${groupId}/payout-order`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setMembers(res.data.group.members || []);
//         console.log("Members fetched:", res.data);
//       } catch (error) {
//         console.error("Error fetching members:", error);
//         toast.error("Failed to load group members");
//       }
//     };
//     fetchMembers();
//   }, []);

//   const handleInputChange = (userId, value) => {
//     setPayoutOrder((prev) => ({ ...prev, [userId]: value }));
//   };

//   const handleSaveOrder = async () => {
//     const payload = {
//       payoutOrder: members
//         .filter((m) => payoutOrder[m.id])
//         .map((m) => ({
//           userId: m.id,
//           position: Number(payoutOrder[m.id]),
//         })),
//     };

//     if (payload.payoutOrder.length === 0) {
//       toast.error("Please enter at least one payout position");
//       return;
//     }

//     try {
//       const res = await axios.put(
//         `${BaseUrl}/groups/${groupId}/payout-order`,
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       toast.success(res.data.message || "Payout order saved!");
//       onSave(res.data.data);
//     } catch (error) {
//       console.error("Error saving payout order:", error);
//       toast.error(
//         error.response?.data?.message || "Failed to save payout order"
//       );
//     }
//   };

//   return (
//     <Content>
//       <ToastContainer />
//       <Wrapper>
//         <Inner>
//           <h3>Select Payout Numbers</h3>
//           <p style={{ color: "#777777" }}>
//             Enter a payout number between 1 and the total number of members in
//             your group.
//           </p>

//           <div className="cont">
//             <div className="one_main">
//               <p>Member Name</p>
//               <p>Payout Order</p>
//             </div>

//             {members.length > 0 ? (
//               members.map((member, i) => (
//                 <div className="one" key={member.id}>
//                   <p>{member.name}</p>
//                   <div className="input_div">
//                     <input
//                       type="number"
//                       placeholder={`e.g ${i + 1}`}
//                       value={payoutOrder[member.id] || ""}
//                       onChange={(e) =>
//                         handleInputChange(member.id, e.target.value)
//                       }
//                     />
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p style={{ textAlign: "center", color: "#888" }}>
//                 No members found
//               </p>
//             )}
//           </div>

//           <button onClick={handleSaveOrder}>Save Order</button>
//         </Inner>

//         <FaRegTimesCircle
//           onClick={onClose}
//           style={{
//             cursor: "pointer",
//             fontSize: "1rem",
//             position: "absolute",
//             top: "5%",
//             right: "10%",
//           }}
//         />
//       </Wrapper>
//     </Content>
//   );
// };

// export default PayoutManually;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

const PayoutManually = ({ onClose, onSave }) => {
  const [members, setMembers] = useState([]);
  const [payoutOrder, setPayoutOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );
  console.log(token);
  const groupId = localStorage.getItem("selectedGroupId");
  console.log(groupId);
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/groups/${groupId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMembers(res.data.group.members || []);
        console.log("Members fetched:", res.data.group.members);
      } catch (error) {
        console.error("Error fetching members:", error);
        toast.error("Failed to load group members");
      }
    };
    fetchMembers();
  }, []);

  const handleInputChange = (userId, value) => {
    setPayoutOrder((prev) => ({ ...prev, [userId]: value }));
  };

  const handleSaveOrder = async () => {
    const payload = {
      payoutOrder: members
        .filter((m) => payoutOrder[m.id])
        .map((m) => ({
          userId: m.id,
          position: Number(payoutOrder[m.id]),
        })),
    };

    if (payload.payoutOrder.length === 0) {
      toast.error("Please enter at least one payout position");
      return;
    }

    try {
      const res = await axios.put(
        `${BaseUrl}/groups/${groupId}/payout_order`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const response = await axios.post(
        `${BaseUrl}/groups/${groupId}/start_cycle`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      toast.success(res?.data?.data?.messages);
      onSave(res.data.data);
    } catch (error) {
      console.error("Error saving payout order:", error);
      toast.error(
        error.response?.data?.message || "Failed to save payout order"
      );
    }
  };

  return (
    <Content>
      <ToastContainer />
      <Wrapper>
        <Inner>
          <h3>Select Payout Numbers</h3>
          <p style={{ color: "#777777" }}>
            Enter a payout number between 1 and the total number of members in
            your group.
          </p>

          <div className="cont">
            <div className="one_main">
              <p>Member Name</p>
              <p>Payout Order</p>
            </div>

            {members.length > 0 ? (
              members.map((member, i) => (
                <div className="one" key={member.id}>
                  <p>{member.name}</p>
                  <div className="input_div">
                    <input
                      type="number"
                      placeholder={`e.g ${i + 1}`}
                      value={payoutOrder[member.id] || ""}
                      onChange={(e) =>
                        handleInputChange(member.id, e.target.value)
                      }
                    />
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", color: "#888" }}>
                No members found
              </p>
            )}
          </div>

          {loading ? (
            "Saving order ...."
          ) : (
            <button onClick={handleSaveOrder}>Save Order</button>
          )}
        </Inner>

        <FaRegTimesCircle
          onClick={onClose}
          style={{
            cursor: "pointer",
            fontSize: "1rem",
            position: "absolute",
            top: "5%",
            right: "10%",
          }}
        />
      </Wrapper>
    </Content>
  );
};

export default PayoutManually;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgb(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 40%;
  min-height: 50%;
  /* height: auto; */
  padding-block: 2rem;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: relative;
  overflow-x: scroll;
  scrollbar-width: none;
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

const Inner = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding-top: 2rem;

  .cont {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .one_main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-right: 1rem;
    }
    .one {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;

      p {
        width: 60%;
        display: flex;
        justify-content: flex-start;
        padding-left: 2rem;
      }
      .input_div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 2rem;
        border: 1.5px solid #cccccc;
        border-radius: 0.3rem;
        overflow: hidden;

        input {
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
          text-align: center;
        }
      }
    }
  }

  button {
    width: 100%;
    height: 2.5rem;
    border: none;
    border-radius: 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #7b2cbf;
    color: white;
  }
`;
