import React from "react";
import styled from "styled-components";
import UserDashboardHeader from "../Components/UserDashboardHeader";
import UserDashboardFooter from "../Components/UserDashboardFooter";
import UserDashDetails from "../Components/UserDashDetails";

const UserDashboard = ({ payoutInfo }) => {
  return (
    <Dashboard>
      <UserDashboardHeader />
      <UserDashDetails payoutInfo={payoutInfo} />
      <UserDashboardFooter />
    </Dashboard>
  );
};

export default UserDashboard;

const Dashboard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #f8f5f0;
`;
