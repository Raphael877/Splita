import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ApproveMember from "../Components/Deletefolder/ApproveMember.jsx";
import DeclineMember from "../Components/Deletefolder/DeclineMember.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const RequestJoinGroup = ({ groupDetails }) => {
  const location = useLocation();
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const token = JSON.parse(localStorage.getItem("user_token"));
  const groupId = localStorage.getItem("selectedGroupId");

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [group, setGroup] = useState(null);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showDeclineModal, setShowDeclineModal] = useState(false);

  const groupName =
    group?.groupName ||
    groupDetails?.group?.groupName ||
    location?.state?.groupName ||
    localStorage.getItem("createdGroupName") ||
    "Not Available";

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${BaseUrl}/groups/${groupId}/pending_requests`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setRequests(res?.data?.requests || []);
      setGroup(res?.data?.group || null); // ✅ store full group object, not just id
    } catch (error) {
      console.error("Error fetching requests", error);
      toast.error("Failed to fetch requests");
    } finally {
      setLoading(false);
    }
  };

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
      fetchRequests();
    } catch (error) {
      console.error(`Error performing ${action}:`, error.response || error);
      toast.error(
        error.response?.data?.message || `Failed to ${action} request`
      );
    }
  };

  useEffect(() => {
    fetchRequests();

    const interval = setInterval(fetchRequests, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AdminDashboard_content>
      <AdminDashboard_wrapper>
        <Block>
          <div className="inner_block">
            <div className="block_wrap">
              {/* ✅ Group name now shows correctly */}
              <h2>Requests for {groupName}</h2>

              <div className="table_wall">
                <div className="table_wrap">
                  <div className="header">
                    <h3>Name</h3>
                    <h3>Email</h3>
                    <h3>Date</h3>
                    <h3>Action</h3>
                  </div>
                  <div className="body">
                    {loading ? (
                      <p>Loading requests...</p>
                    ) : requests.length === 0 ? (
                      <p>No pending join requests.</p>
                    ) : (
                      requests.map((req) => (
                        <div className="data" key={req.id}>
                          <div className="name">{req.user?.name || "N/A"}</div>
                          <div className="num">{req.user?.email || "N/A"}</div>
                          <div className="date">
                            {new Date(req.createdAt).toLocaleDateString()}
                          </div>
                          <div className="btn">
                            <button
                              className="btn1"
                              onClick={(group) =>
                                handleRequestAction(
                                  req.user.id,
                                  "approve",
                                  group
                                )
                              }
                            >
                              Approve
                            </button>
                            <button
                              className="btn2"
                              onClick={(group) =>
                                handleRequestAction(
                                  req.user.id,
                                  "reject",
                                  group
                                )
                              }
                            >
                              Decline
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Block>
      </AdminDashboard_wrapper>

      {showApproveModal && (
        <ApproveMember
          onClose={() => setShowApproveModal(false)}
          group={group}
        />
      )}
      {showDeclineModal && (
        <DeclineMember
          onClose={() => setShowDeclineModal(false)}
          group={group}
        />
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
