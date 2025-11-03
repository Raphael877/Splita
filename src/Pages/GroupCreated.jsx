import React from "react";
import styled from "styled-components";
import AdminDashboardHeader from "../Components/AdminDashboardHeader";
import UserDashboardFooter from "../Components/UserDashboardFooter";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GiPartyPopper } from "react-icons/gi";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const GroupCreated = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const CopyLink = () => {
  //   toast.success("Link copied! Share with friends.");
  // };

  const groupName =
    (location?.state && location.state.groupName) ||
    (typeof window !== "undefined"
      ? localStorage.getItem("createdGroupName")
      : null) ||
    "Not Available";
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );

  const id = JSON.parse(localStorage.getItem("createdGroupId"));
  const handleCreate = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/groups/${id}/invite`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
      // console.log("BaseUrl:", BaseUrl);
      console.log("id:", id);
      // console.log("token:", token);
    } finally {
      // CopyLink();
    }
  };
  return (
    <Content>
      <AdminDashboardHeader />
      <Main>
        <Inner_main>
          <h1>{groupName}</h1>
          <p style={{ color: "#666666" }}>Created on Aug 21, 2025</p>
          <div className="back" style={{ cursor: "pointer" }}>
            <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
            <p>back home</p>
          </div>

          <Created>
            <div className="inner">
              <GiPartyPopper className="party_icon" />
              <h2>Your group has been created successfully!</h2>
              <p>Invite trusted members to join and start your saving cycle</p>
              <p style={{ color: "#777777", marginBlock: "1.5rem" }}>
                Be sure to invite only trusted people to your group, such as
                friends or family. Splita does not take responsibility for
                payment delays or defaults by any member. As an admin, you're in
                charge of who joins your group.
              </p>
              <div className="btn">
                <button className="btn1" onClick={handleCreate}>
                  Copy Invite Link
                </button>
                <button
                  className="btn2"
                  onClick={() => navigate("/requestjoingroup")}
                >
                  View Members
                </button>
              </div>
            </div>
          </Created>
        </Inner_main>
      </Main>
      <UserDashboardFooter />
      <ToastContainer position="top-right" autoClose={2000} />
    </Content>
  );
};

export default GroupCreated;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #f8f5f0;
  align-items: center;

  @media (max-width: 768px) {
    background-color: transparent;
  }
`;

const Main = styled.div`
  margin-block: 20vh;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Inner_main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .back {
    display: flex;
    align-items: center;
  }
`;

const Created = styled.div`
  width: 100%;
  height: 85vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.5rem;

    @media (max-width: 768px) {
      width: 90%;
      gap: 0.5rem;
    }

    .party_icon {
      font-size: 10rem;
      color: #7b2bbd;

      @media (max-width: 768px) {
        font-size: 7rem;
      }
    }

    .btn {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
      }

      .btn1 {
        width: 50%;
        height: 3rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        color: white;
        background-color: #7b2cbf;
        cursor: pointer;
        &:hover {
          background-color: #b088d3;
          transition: all 350ms ease-in-out;
        }

        @media (max-width: 768px) {
          width: 100%;
        }
      }

      .btn2 {
        width: 50%;
        height: 3rem;
        border-radius: 0.5rem;
        border: 1.5px solid #ff7900;
        background-color: transparent;
        color: #ff7900;
        cursor: pointer;
        &:hover {
          background-color: #ff7900;
          color: white;
          transition: all 350ms ease-in-out;
        }

        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
`;
