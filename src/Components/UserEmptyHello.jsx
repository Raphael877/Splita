import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import { TiGroupOutline } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const UserEmptyHello = () => {
  const [user, setuser] = useState("");
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("userid"));

  console.log(userId);

  return (
    <UserEmptyHello_content>
      <UserEmptyHello_wrapper>
        <Hello>
          <div className="left">
            <h1>Hello {userId?.name}</h1>
            <h2>Greetings 👋🏽</h2>
            <p style={{ color: "#240046" }}>
              Lets kickstart your savings journey today
            </p>
          </div>
          <div className="hello_btn">
            <button
              className="hello_btn1"
              onClick={() => navigate("/creategroup")}
            >
              + Create New Group
            </button>
            <button className="hello_btn2" onClick={() => navigate("/join_group")}>Join Group</button>
          </div>
        </Hello>
        <Oops>
          <div className="oops_wrapper">
            <p>oops</p>
            <p>
              You have <strong>NO active </strong> group yet.
            </p>
          </div>
        </Oops>
        <Create_join>
          <div className="two_cards">
            <div className="card1" onClick={() => navigate("/creategroup")}>
              <div className="main">
                <FaPlus />
                <p>Create a group</p>
              </div>
              <p className="content">
                Start fresh and invite your family,<br></br> team, or friends.
              </p>
            </div>
            <div className="card2" onClick={() => navigate("/join_group")}>
              <div className="main">
                <TiGroupOutline style={{ fontSize: "1.3rem" }} />
                <p>Join a group</p>
              </div>
              <p className="content">
                Join top trusted groups that match <br></br>your goal.
              </p>
            </div>
          </div>
        </Create_join>
        <Recent_Activities>
          <h1>Recent Activities</h1>
          <div className="bottom">
            <div className="icon_cont">
              <TiTick style={{ cursor: "pointer", color: "#a772d4" }} />
            </div>
            <div className="just">
              <p>
                <strong>Just registered.</strong>
              </p>
              <p>
                <small>10 mins ago</small>
              </p>
            </div>
          </div>
        </Recent_Activities>
      </UserEmptyHello_wrapper>
    </UserEmptyHello_content>
  );
};

export default UserEmptyHello;

const UserEmptyHello_content = styled.div`
  width: 100%;
  margin-top: 14vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 16vh;
  }
`;

const UserEmptyHello_wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Hello = styled.div`
  width: 100%;
  min-height: 30vh;
  display: flex;
  justify-content: space-between;
  padding: 1.8rem;
  align-items: center;
  border-radius: 1rem;
  border: 1.5px solid #7b2cbf;
  background-color: #f2eaf9;

  @media (max-width: 768px) {
    min-height: 46vh;
    flex-direction: column;
    padding: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .left {
    color: #240046;

    p {
      padding-block: 1rem;
    }
  }

  .hello_btn {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;

    @media (max-width: 768px) {
      min-height: 50%;
      width: 100%;
      flex-direction: column;
      gap: 1rem;
      justify-content: flex-start;
    }

    .hello_btn1 {
      width: 50%;
      height: 3rem;
      border: none;
      outline: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      color: white;
      background-color: #7b2cbf;
      &:hover {
        background-color: #5c248d;
        transition: all 500ms ease-in-out;
      }

      @media (max-width: 768px) {
        width: 100%;
        height: 3rem;
        font-size: 1rem;
      }
    }

    .hello_btn2 {
      width: 50%;
      height: 3rem;
      border: 1.5px solid #ff7900;
      outline: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      background-color: white;
      color: #ff7900;
      &:hover {
        background-color: #ff7900;
        color: white;
        transition: all 500ms ease-in-out;
      }

      @media (max-width: 768px) {
        width: 100%;
        height: 3rem;
        font-size: 1rem;
      }
    }
  }
`;

const Oops = styled.div`
  width: 100%;
  height: 35vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 2rem;

  @media (max-width: 768px) {
    height: 25vh;
    border-radius: 0.5rem;
  }

  .oops_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    color: #b7b7b7;
  }
`;

const Create_join = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 40vh;
  }

  .two_cards {
    display: flex;
    width: 75%;
    gap: 2rem;
    height: 80%;

    @media (max-width: 768px) {
      width: 100%;
      gap: 1rem;
      flex-direction: column;
      height: 100%;
    }

    .card1 {
      width: 50%;
      height: 100%;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      cursor: pointer;
      &:hover {
        border: 1.5px solid #ff7900;
      }

      @media (max-width: 768px) {
        width: 100%;
        gap: 1rem;
      }

      .main {
        display: flex;
        gap: 0.5rem;
        font-weight: 600;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
          font-size: 1.2rem;
        }
      }

      .content {
        text-align: center;
        color: #b7b7b7;
      }
    }

    .card2 {
      width: 50%;
      height: 100%;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      cursor: pointer;
      &:hover {
        border: 1.5px solid #7b2cbf;
      }

      @media (max-width: 768px) {
        width: 100%;
        gap: 1rem;
      }

      .main {
        display: flex;
        gap: 0.5rem;
        font-weight: 600;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
          font-size: 1.2rem;
        }
      }

      .content {
        text-align: center;
        color: #b7b7b7;
      }
    }
  }
`;

const Recent_Activities = styled.div`
  width: 100%;
  height: 25vh;
  background-color: white;
  display: flex;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 15vh;
    width: 100%;
    background-color: transparent;
    padding: 0;
    gap: 1rem;

    h1 {
      font-size: 1rem;
    }
  }

  .bottom {
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;

    @media (max-width: 768px) {
      height: 10vh;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      padding-left: 1rem;
    }

    .icon_cont {
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.2rem;
      font-size: 1.5rem;
      background-color: #d8e6fd;
    }
  }
`;
