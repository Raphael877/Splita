import { useState } from "react";
import styled from "styled-components";
import AdminDashboardHeader from "../Components/AdminDashboardHeader.jsx";
import UserDashboardFooter from "../Components/UserDashboardFooter.jsx";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import ApproveMember from "../Components/Deletefolder/ApproveMember.jsx";
import DeclineMember from "../Components/Deletefolder/DeclineMember.jsx";
import axios from "axios";

const RequestJoinGroup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = JSON.parse(localStorage.getItem("user_token"));
  const userId = localStorage.getItem("userid");
  const groupId = JSON.parse(localStorage.getItem("createdGroupId"));

  const handleRequest = async (action) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      let res;
      if (action === "approve") {
        res = await axios.post(
          `${BaseUrl}/groups/${groupId}/join-request/${userId}`,
          {},
          config
        );
      } else if (action === "delete") {
        res = await axios.post(
          `${BaseUrl}/groups/${groupId}/join-request/${userId}`,
          {},
          config
        );
      }

      console.log(`${action} successful:`, res.data);
    } catch (error) {
      console.log(`Error performing ${action}:`, error.response?.data || error);
    }
  };

  const groupName =
    (location?.state && location.state.groupName) ||
    (typeof window !== "undefined"
      ? localStorage.getItem("createdGroupName")
      : null) ||
    "Not Available";

  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showDeclineModal, setShowDeclineModal] = useState(false);

  const Array = [
    { name: "Chidera", num: "07038204858", date: "Sept 10" },
    { name: "Chisom", num: "07038204858", date: "Sept 18" },
    { name: "Ademola", num: "07038204858", date: "Sept 25" },
    { name: "Habeeb", num: "07038204858", date: "Sept 25" },
  ];

  return (
    <AdminDashboard_content>
      <AdminDashboard_wrapper>
        <AdminDashboardHeader />
        <div className="groupname">
          <h1>{groupName}</h1>
        </div>
        <div className="create">
          <p style={{ color: "#666666" }}>Created on Aug 21, 2025</p>
        </div>
        <div
          className="back"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
          <p>back home</p>
        </div>

        <Block>
          <div className="inner_block">
            <div className="block_wrap">
              <h2>Requests</h2>
              <div className="table_wall">
                <div className="table_wrap">
                  <div className="header">
                    <h3>Name</h3>
                    <h3>Phone Number</h3>
                    <h3>Date</h3>
                    <h3>Action</h3>
                  </div>
                  <div className="body">
                    {Array.map((array, index) => (
                      <div className="data" key={index}>
                        <div className="name">{array.name}</div>
                        <div className="num">{array.num}</div>
                        <div className="date">{array.date}</div>
                        <div className="btn">
                          <button
                            className="btn1"
                            onClick={() => setShowApproveModal(true)}
                            // onClick={() => handleRequest("approve")}
                          >
                            Approve
                          </button>
                          <button
                            className="btn2"
                            onClick={() => handleRequest("delete")}
                          >
                            Decline
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Block>

        <UserDashboardFooter />
      </AdminDashboard_wrapper>

      {showApproveModal && (
        <ApproveMember onClose={() => setShowApproveModal(false)} />
      )}
      {showDeclineModal && (
        <DeclineMember onClose={() => setShowDeclineModal(false)} />
      )}
    </AdminDashboard_content>
  );
};

export default RequestJoinGroup;

const AdminDashboard_content = styled.div`
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

const AdminDashboard_wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;

  .groupname {
    width: 80%;
    margin-top: 18vh;
  }

  .create {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 1.5rem;

    p {
      width: 100%;
    }
  }

  .back {
    width: 85%;
    display: flex;
    align-items: center;
  }
`;

const Block = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 1rem;

  .inner_block {
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 1rem;

    .block_wrap {
      width: 90%;
      height: 100%;
      flex-direction: column;
      display: flex;
      gap: 1rem;
      padding-block: 2rem;

      .table_wall {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #f8f5f0;
        border-radius: 0.5rem;

        .table_wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 98%;
          height: 90%;
          padding-block: 1rem;
          gap: 1rem;

          .header {
            width: 98%;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f8f5f0;
            border-radius: 0.5rem;

            @media (max-width: 768px) {
              display: none;
            }

            h3 {
              width: 25%;
            }
          }

          .body {
            width: 98%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .data {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 12vh;
              border-top: 1.5px solid #f8f5f0;
              padding-left: 1rem;

              @media (max-width: 768px) {
                flex-wrap: wrap;
                height: 15vh;
              }

              .name,
              .num,
              .date {
                width: 25%;
              }

              .btn {
                width: 25%;
                display: flex;
                align-items: center;
                gap: 1rem;
                height: 100%;

                @media (max-width: 768px) {
                  width: 100%;
                  height: 70%;
                  justify-content: center;
                }

                .btn1 {
                  height: 60%;
                  width: 50%;
                  border: none;
                  outline: none;
                  border-radius: 0.5rem;
                  cursor: pointer;
                  color: white;
                  background-color: #34a218;
                  &:hover {
                    background-color: #43b127;
                  }
                }

                .btn2 {
                  height: 60%;
                  width: 50%;
                  border: none;
                  outline: none;
                  border-radius: 0.5rem;
                  cursor: pointer;
                  color: white;
                  background-color: #e60303;
                  &:hover {
                    background-color: #f15b5b;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
