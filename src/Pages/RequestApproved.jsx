import React, { useState } from "react";
import styled from "styled-components";
import AdminDashboardHeader from "../Components/AdminDashboardHeader.jsx";
import UserDashboardFooter from "../Components/UserDashboardFooter.jsx";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import SelectPayout from "../Components/CreategroupModal/SelectPayout.jsx";
import AutomaticRotation from "../Components/CreategroupModal/AutomaticRotation.jsx";
import PayoutManually from "../Components/Payout/PayoutManually.jsx";
import PayoutManuallySuccessful from "../Components/Payout/PayoutManuallySuccessful.jsx";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const RequestApproved = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const groupName =
    (location?.state && location.state.groupName) ||
    (typeof window !== "undefined"
      ? localStorage.getItem("createdGroupName")
      : null) ||
    "Not Available";
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  // const groupId = localStorage.getItem("createdGroupId");
  const { groupId } = useParams();

  const token = localStorage.getItem("user_token");
  const handleStartCycle = async () => {
    try {
      const res = await axios.post(
        `${BaseUrl}/groups/${groupId}/start-cycle`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(res.data?.message || "Cycle started successfully!");
      setShowSelectPayout(true);
    } catch (error) {
      console.log(error?.response?.data?.message || error);
    }
  };
  const [showSelectPayout, setShowSelectPayout] = useState(false);
  const [showAutomaticRotation, setShowAutomaticRotation] = useState(false);
  const [showPayoutManually, setShowPayoutManually] = useState(false);
  const [showPayoutManuallySuccessful, setShowPayoutManuallySuccessful] =
    useState(false);

  const AllData = [
    {
      member: "Chidera",
      phone: "07038204858",
      date: "sept 10",
      icon: <SlOptionsVertical />,
    },
    {
      member: "Chisom",
      phone: "09015456368",
      date: "sept 18",
      icon: <SlOptionsVertical />,
    },
    {
      member: "Ademola",
      phone: "07038204858",
      date: "sept 25",
      icon: <SlOptionsVertical />,
    },
    {
      member: "Habeeb",
      phone: "07038204858",
      date: "sept 25",
      icon: <SlOptionsVertical />,
    },
    {
      member: "Dinma",
      phone: "07038204858",
      date: "sept 25",
      icon: <SlOptionsVertical />,
    },
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
          <button onClick={handleStartCycle}>
            <FiSend /> Start Cycle
          </button>
        </div>

        <div
          className="back"
          onClick={() => navigate("/userdashboard")}
          style={{ cursor: "pointer" }}
        >
          <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
          <p>back home</p>
        </div>

        <Table>
          <div className="table_wrap">
            <div className="top">
              <h2>Members</h2>
            </div>
            <div className="main_table">
              <div className="all_header">
                <div className="header">
                  <h3>Name</h3>
                </div>
                <div className="header">
                  <h3>Phone Number</h3>
                </div>
                <div className="header">
                  <h3>Date</h3>
                </div>
                <div className="header">
                  <h3 style={{ color: "white" }}>Action</h3>
                </div>
              </div>
              {AllData.map((items, i) => (
                <div className="all_data" key={i}>
                  <div className="member">
                    <p>{items.member}</p>
                  </div>
                  <div className="phone">
                    <p>{items.phone}</p>
                  </div>
                  <div className="date">
                    <p>{items.date}</p>
                  </div>
                  <div className="icon">
                    <p style={{ cursor: "pointer", color: "#c0c0c0" }}>
                      {items.icon}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Table>

        <UserDashboardFooter />

        {showSelectPayout && (
          <SelectPayout
            onClose={() => setShowSelectPayout(false)}
            onAutomaticRotation={() => setShowAutomaticRotation(true)}
            onManualSelection={() => setShowPayoutManually(true)}
          />
        )}

        {showAutomaticRotation && (
          <AutomaticRotation onClose={() => setShowAutomaticRotation(false)} />
        )}

        {showPayoutManually && (
          <PayoutManually
            onClose={() => setShowPayoutManually(false)}
            onSave={() => setShowPayoutManuallySuccessful(true)}
          />
        )}

        {showPayoutManuallySuccessful && (
          <PayoutManuallySuccessful
            onClose={() => setShowPayoutManuallySuccessful(false)}
          />
        )}
      </AdminDashboard_wrapper>
    </AdminDashboard_content>
  );
};

export default RequestApproved;

const AdminDashboard_content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: #f8f5f0;
`;

const AdminDashboard_wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .groupname {
    width: 80%;
    margin-top: 18vh;
  }

  .create {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1.5rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.7rem;
      color: #ff7900;
      border: 1.5px solid #ff7900;
      border-radius: 0.5rem;
      background-color: transparent;
      width: 12rem;
      height: 2.5rem;
      cursor: pointer;
      &:hover {
        background-color: #ff7900;
        color: white;
        transition: all 350ms ease-in-out;
      }
    }
  }
  .back {
    width: 85%;
    display: flex;
    align-items: center;
  }
`;

const Table = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-block: 15vh;

  .table_wrap {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 85%;

    .main_table {
      background-color: white;
      border-radius: 0.5rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .all_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .all_data {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
      }
    }
  }
`;
