// import React, { useState } from "react";
// import styled from "styled-components";
// import { TbCurrencyNaira } from "react-icons/tb";
// import { CiTrash } from "react-icons/ci";
// import DeleteMember from "./Deletefolder/DeleteMember";
// import { useOutletContext } from "react-router-dom";
// const WomenMembers = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const handleDeleteClick = (member) => {
//     setSelectedMember(member);
//     setShowModal(true);
//   };
//   const { members, contributionAmount } = useOutletContext();
//   return (
//     <AdminMemberDashboard_content>
//       <AdminMemberDashboard_wrapper>
//         <Table>
//           <div className="table_wrap">
//             <div className="top">
//               <h2>Members</h2>
//             </div>

//             <div className="main_table">
//               <div className="all_header">
//                 <div className="header">
//                   <h3>Member</h3>
//                 </div>
//                 <div className="header">
//                   <h3>Contribution</h3>
//                 </div>
//                 <div className="header">
//                   <h3>Payout Order</h3>
//                 </div>
//                 <div className="header">
//                   <h3 style={{ color: "transparent" }}>Delete</h3>
//                 </div>
//               </div>

//               {members && members.length > 0 ? (
//                 members.map((member, index) => (
//                   <div className="all_data" key={member.id || index}>
//                     <div className="member">
//                       <p>{member.name}</p>
//                     </div>
//                     <div className="contribution">
//                       <p style={{ display: "flex", alignItems: "center" }}>
//                         <TbCurrencyNaira /> {contributionAmount}
//                       </p>
//                     </div>
//                     <div className="order">
//                       <p>{`${index + 1}${
//                         ["st", "nd", "rd"][index] || "th"
//                       }`}</p>
//                     </div>
//                     <div
//                       className="delete"
//                       style={{ cursor: "pointer" }}
//                       onClick={() => handleDeleteClick(member.name)}
//                     >
//                       <CiTrash />
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div style={{ textAlign: "center", padding: "20px" }}>
//                   <p>No members found yet.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </Table>
//       </AdminMemberDashboard_wrapper>

//       {showModal && (
//         <DeleteMember
//           memberName={selectedMember}
//           onClose={() => setShowModal(false)}
//         />
//       )}
//     </AdminMemberDashboard_content>
//   );
// };

// export default WomenMembers;
import React, { useState } from "react";
import styled from "styled-components";
import { TbCurrencyNaira } from "react-icons/tb";
import DeleteMember from "./Deletefolder/DeleteMember";
import { useOutletContext } from "react-router-dom";

const WomenMembers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  // Safe context handling
  const {
    members = [],
    contributions = [],
    contributionAmount = 0,
  } = useOutletContext() || {};

  const handleDeleteClick = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  if (!members.length)
    return <p style={{ textAlign: "center" }}>Loading members...</p>;

  // Helper function to find contribution for a member
  const getContribution = (memberId) => {
    return contributions.find((c) => c.userId === memberId) || {};
  };

  return (
    <AdminMemberDashboard_content>
      <AdminMemberDashboard_wrapper>
        <Table>
          <div className="table_wrap">
            <div className="top">
              <h2>Members</h2>
            </div>

            <div className="main_table">
              <div className="all_header">
                <div className="mbr">
                  <h3>Member</h3>
                </div>
                <div className="header">
                  <h3>Contribution</h3>
                </div>
                <div className="header">
                  <h3>Status</h3>
                </div>
                <div className="header">
                  <h3>Payout Order</h3>
                </div>
                <div className="header">
                  <h3>Late Payment</h3>
                </div>
              </div>

              {members.map((member, index) => {
                const contribution = getContribution(member.id);
                const status = contribution.status || "pending";
                const latePayment = contribution.isLate
                  ? contribution.penaltyFee
                  : 0;
                const amount = contribution.amount || contributionAmount;

                return (
                  <div className="all_data" key={member.id}>
                    <div className="member">
                      <p>{member.name}</p>
                    </div>
                    <div className="contribution">
                      <p style={{ display: "flex", alignItems: "center" }}>
                        <TbCurrencyNaira /> {amount}
                      </p>
                    </div>

                    <div className="status">
                      <div className="inner_status">
                        <p>{status}</p>
                      </div>
                    </div>

                    <div className="order">
                      <p>{`${index + 1}${
                        ["st", "nd", "rd"][index] || "th"
                      }`}</p>
                    </div>
                    <div className="late_payment">
                      <p>{latePayment}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Table>
      </AdminMemberDashboard_wrapper>

      {showModal && (
        <DeleteMember
          memberName={selectedMember}
          onClose={() => setShowModal(false)}
        />
      )}
    </AdminMemberDashboard_content>
  );
};

export default WomenMembers;
const AdminMemberDashboard_content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f5f0;
`;

const AdminMemberDashboard_wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    overflow-x: auto;
    max-width: max-content;
    scrollbar-width: none;
    align-items: flex-start;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Table = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 1.5rem;

  @media (max-width: 768px) {
    width: 300vw;
  }

  .table_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 100%;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 90%) {
      width: 100%;
    }

    .top {
      width: 100%;
    }

    .main_table {
      width: 100%;
      height: auto;
      background-color: white;
      border-radius: 0.5rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .all_header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f6f6f6;
        height: 4rem;
        border-radius: 0.5rem;
        padding-inline: 1rem;

        .mbr {
          width: 25%;
        }

        .header {
          .member {
            @media (max-width: 768px) {
              width: 30%;
            }
          }
        }
      }

      .all_data {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
        border-radius: 0.5rem;
        padding-inline: 1rem;
        padding-block: 1rem;
        border-block: 2px solid #f6f6f6;

        .member {
          width: 25%;
          display: flex;
          justify-content: flex-start;

          @media (max-width: 768px) {
            width: 30%;
          }
        }

        .order {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 25%;
          padding-left: 3rem;
        }

        .contribution {
          display: flex;
          justify-content: flex-start;
          padding-left: 4rem;
          align-items: center;
          width: 25%;
        }

        .status {
          width: 10%;
          display: flex;
          justify-content: flex-start;

          .inner_status {
            padding-block: 0.5rem;
            padding-inline: 0.8rem;
            background-color: #d6ecd1;
            color: #34a218;
            border-radius: 2rem;
          }
        }

        .late_payment {
          width: 5%;
          display: flex;
          justify-content: flex-start;
        }
      }
    }
  }
`;
