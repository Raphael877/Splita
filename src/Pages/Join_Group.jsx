import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import Splita_logo from "../assets/Splita_logo.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Join_Group = () => {
  const navigate = useNavigate();
  const [inviteLink, setInviteLink] = useState("");
  const [error, setError] = useState("");
  const { groupid, invite } = useParams();
  console.log("di9in9", groupid, "new", invite);
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = JSON.parse(localStorage.getItem("createdGroupId"));
    console.log("userid", id);
    const token = JSON.parse(
      localStorage.getItem(import.meta.env.VITE_USERTOKEN)
    );
    console.log(id);

    try {
      const res = await axios.post(
        `${BaseUrl}/groups/join/${id}/${invite}`,
        { invite: inviteLink || invite },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("res", res);
      toast.success(res?.data?.message || "Joined group successfully!");
      setError("");
    } catch (error) {
      console.log("ERR", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <Content>
      <ToastContainer />

      <div className="circle_top_left"></div>
      <div className="circle_top_right"></div>
      <div className="circle_mid_left"></div>
      <div className="circle_down_right"></div>

      <div className="brand_name">
        <img src={Splita_logo} alt="Splita Logo" />
      </div>

      <div
        className="back"
        onClick={() => navigate("/userdashboard")}
        style={{ cursor: "pointer" }}
      >
        <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
        <p>back home</p>
      </div>

      <Wrapper>
        <h1 style={{ paddingBottom: "1rem" }}>Join an existing group</h1>

        <form onSubmit={handleSubmit}>
          <div className="input_div">
            <input
              type="text"
              placeholder="Paste your invite link here"
              value={inviteLink}
              onChange={(e) => setInviteLink(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit">Join Group</button>
        </form>
      </Wrapper>
    </Content>
  );
};

export default Join_Group;

const Content = styled.div`
  width: 100%;
  padding-bottom: 10vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  .circle_top_left {
    position: absolute;
    border-radius: 50%;
    background-color: #c6bdc8;
    width: 20rem;
    height: 20rem;
    top: -20%;
    left: -17%;
  }
  .circle_top_right {
    position: absolute;
    border-radius: 50%;
    background-color: #b4a6b7;
    width: 3rem;
    height: 3rem;
    top: 10%;
    right: 0.5%;
  }
  .circle_mid_left {
    position: absolute;
    border-radius: 50%;
    background-color: #f5dcc6;
    width: 3rem;
    height: 3rem;
    top: 45%;
    left: 0.5%;
  }
  .circle_down_right {
    position: absolute;
    border-radius: 50%;
    background-color: #f4e2d1;
    width: 20rem;
    height: 20rem;
    bottom: -20%;
    right: -17%;
  }

  @media (max-width: 768px) {
    .circle_down_right,
    .circle_mid_left,
    .circle_top_left,
    .circle_top_right {
      display: none;
    }
  }

  .brand_name {
    position: absolute;
    top: 3%;
    left: 10%;
    z-index: 1;

    img {
      width: 40%;
      height: 100%;
    }
  }

  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 0.5rem;
    top: 4%;
    right: 7%;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 6rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 85%;
  }

  h1 {
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  form {
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .input_div {
      display: flex;
      width: 100%;
      height: 3.2rem;
      border: 1px solid #a6a6a6;
      border-radius: 0.4rem;
      align-items: center;
      overflow: hidden;

      input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background-color: transparent;
        padding-left: 0.8rem;
      }
    }

    .error {
      color: red;
      font-size: 0.9rem;
      margin-top: -0.5rem;
    }

    button {
      margin-top: 1rem;
      width: 100%;
      height: 3.5rem;
      color: white;
      background-color: #7b2cbf;
      border-radius: 0.7rem;
      border: none;
      cursor: pointer;
      font-weight: 500;

      &:hover {
        background-color: #9472b2;
        transition: all 350ms ease-in-out;
      }
    }
  }
`;
