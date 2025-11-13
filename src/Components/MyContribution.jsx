// // import React from "react";
// import styled from "styled-components";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import { TbCurrencyNaira } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";
// import UserDashboardHeader from "./UserDashboardHeader";
// import UserDashboardFooter from "./UserDashboardFooter";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const MyContribution = () => {
//     const BaseUrl = import.meta.env.VITE_BaseUrl;
//     const token = JSON.parse(
//       localStorage.getItem(import.meta.env.VITE_USERTOKEN)
//     );
//     const navigate = useNavigate();

//     const [groups, setGroups] = useState([]);

//   const handleDetails = async () => {
//     try {
//       const res = await axios.get(`${BaseUrl}/groups/all`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       console.log("Fetched groups:", res.data);

//       setGroups(res.data?.data);
//     } catch (error) {
//       console.log("Error fetching groups:", error);
//     }
//   };

//   useEffect(() => {
//       handleDetails();
//     }, []);

//   const AllData = [
//     {
//       group: "Obele",
//       date: "Aug 27",
//       contribution: "N 200,000",
//       cycle: "Cycle1",
//       id: 1,
//       bgcolor: "#d6ecd1",
//       color: "#34a218",
//       status: "Paid",
//     },
//     {
//       group: "Vacation",
//       date: "Oct 8th",
//       contribution: "N 10,000",
//       cycle: "Cycle2",
//       id: 2,
//       bgcolor: "#d6ecd1",
//       color: "#34a218",
//       status: "Paid",
//     },
//     {
//       group: "Women in tech",
//       date: "Oct 2nd",
//       contribution: "N 30,000",
//       cycle: "Cycle3",
//       id: 3,
//       bgcolor: "#d6ecd1",
//       color: "#34a218",
//       status: "Paid",
//     },
//   ];
//   return (
//     <MyGroupDetail_content>
//       <MyGroupDetail_wrapper>
//         <UserDashboardHeader />
//         <Inner>
//           <p className="back" onClick={() => navigate("/userdashboard")}>
//             <IoIosArrowRoundBack
//               style={{ fontSize: "1.5rem", fontWeight: "bold" }}
//             />
//             Back home
//           </p>

//           <Table>
//             <div className="table_wrap">
//               <div className="main_table">
//                 <div className="all_header">
//                   <div className="header">
//                     <h3>Group</h3>
//                   </div>
//                   <div className="header">
//                     <h3>Cycle</h3>
//                   </div>
//                   <div className="header">
//                     <h3>Contributions</h3>
//                   </div>
//                   <div className="header">
//                     <h3>Status</h3>
//                   </div>

//                   <div className="header">
//                     <h3>Date</h3>
//                   </div>
//                 </div>
//                 {AllData.map((items) => (
//                   <div className="all_data">
//                     <div className="group">
//                       <p>{items.group}</p>
//                     </div>
//                     <div className="cycle">
//                       <p>{items.cycle}</p>
//                     </div>
//                     <div className="contribution">
//                       <p>{items.contribution}</p>
//                     </div>
//                     <div className="status">
//                       <div
//                         className="status_wrap"
//                         style={{
//                           backgroundColor: items.bgcolor,
//                           color: items.color,
//                         }}
//                       >
//                         {items.status}
//                       </div>
//                     </div>
//                     <div className="date">
//                       <p>{items.date}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Table>
//         </Inner>
//         <UserDashboardFooter />
//       </MyGroupDetail_wrapper>
//     </MyGroupDetail_content>
//   );
// };

// export default MyContribution;

import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import UserDashboardHeader from "./UserDashboardHeader";
import UserDashboardFooter from "./UserDashboardFooter";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyContribution = () => {
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [contributionData, setContributionData] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch all groups
  const handleDetails = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/groups/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Fetched groups:", res.data);
      setGroups(res.data?.data || []);
    } catch (error) {
      console.log("❌ Error fetching groups:", error);
    }
  };

  // ✅ Fetch contribution history for one group
  const handleFetchContribution = async (groupId) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${BaseUrl}/contributions/history/${groupId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Contribution history:", res.data);
      setContributionData(res.data.data);
      setSelectedGroup(groupId);
    } catch (err) {
      console.error("❌ Error fetching contributions:", err);
      setContributionData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleDetails();
  }, []);

  return (
    <MyGroupDetail_content>
      <MyGroupDetail_wrapper>
        <UserDashboardHeader />
        <Inner>
          <p className="back" onClick={() => navigate(-1)}>
            <IoIosArrowRoundBack
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            />
            Back home
          </p>

          {/* ✅ Show all groups */}
          <Table>
            <div className="table_wrap">
              <div className="main_table">
                <div className="all_header">
                  <div className="header">
                    <h3>Group Name</h3>
                  </div>
                  <div className="header">
                    <h3>Cycle</h3>
                  </div>
                  <div className="header">
                    <h3>Amount</h3>
                  </div>
                  <div className="header">
                    <h3>Date</h3>
                  </div>
                </div>

                {groups.length === 0 ? (
                  <p>No groups found.</p>
                ) : (
                  groups.map((group) => (
                    <div key={group.id} className="all_data">
                      {/* Group Name */}
                      <div className="group">
                        <p>
                          {group.groupName || group.name || "Unnamed Group"}
                        </p>
                      </div>

                      {/* Cycle */}
                      <div className="cycle">
                        <p>{group.cycle || "Cycle 1"}</p>
                      </div>

                      {/* Amount */}
                      <div className="amount">
                        <p style={{ display: "flex", alignItems: "center" }}>
                          <TbCurrencyNaira style={{ fontSize: "1rem" }} />
                          {group.contributionAmount?.toLocaleString() || "0"}
                        </p>
                      </div>

                      {/* Date */}
                      <div className="date">
                        <p>
                          {group.createdAt
                            ? new Date(group.createdAt).toLocaleDateString()
                            : "—"}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </Table>
        </Inner>
        <UserDashboardFooter />
      </MyGroupDetail_wrapper>
    </MyGroupDetail_content>
  );
};

export default MyContribution;

const MyGroupDetail_content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f5f0;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const MyGroupDetail_wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .back {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    cursor: pointer;
    padding-block: 15vh;
  }
`;

const Inner = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Table = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 3rem;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  .table_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 100%;
    flex-direction: column;
    gap: 2rem;

    .top {
      width: 100%;
    }

    .main_table {
      width: 90%;
      height: auto;
      background-color: white;
      border-radius: 0.5rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      @media (max-width: 768px) {
        width: 100%;
      }

      .all_header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px) {
          display: none;
        }
      }

      .all_data {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;

        @media (max-width: 768px) {
          flex-wrap: wrap;
          gap: 2rem;
          height: 6rem;
        }

        .cycle {
          width: 20%;
        }

        .group {
          width: 20%;
        }

        .status {
          width: 20%;
          display: flex;
          justify-content: flex-end;

          .status_wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1rem;
            padding-block: 0.3rem;
            padding-inline: 0.8rem;
          }
        }

        .date {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 20%;
          padding-left: 3rem;
        }

        .contribution {
          display: flex;
          padding-left: 2rem;
          align-items: center;
          width: 20%;
        }
      }
    }
  }
`;
