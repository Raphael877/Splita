import React, { useState } from "react";
import styled from "styled-components";
import AdminDashboardHeader from "../Components/AdminDashboardHeader";
import UserDashboardFooter from "../Components/UserDashboardFooter";
import SelectPayout from "../Components/CreategroupModal/SelectPayout";
import AutomaticRotation from "../Components/CreategroupModal/AutomaticRotation.jsx";
import PayoutManually from "../Components/Payout/PayoutManually.jsx";
import PayoutManuallySuccessful from "../Components/Payout/PayoutManuallySuccessful.jsx";
import Members from "../Components/Members";
import Contribution from "../Components/Contribution";
import RequestJoinGroup from "./RequestJoinGroup";
import { FiSend } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsCash } from "react-icons/bs";
import { MdOutlineEventNote } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiCoinsLight } from "react-icons/pi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Start_group = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [saved, setSave] = useState([]);
  const [showSelectPayout, setShowSelectPayout] = useState(false);
  const [showAutomaticRotation, setShowAutomaticRotation] = useState(false);
  const [showPayoutManually, setShowPayoutManually] = useState(false);
  const [showPayoutManuallySuccessful, setShowPayoutManuallySuccessful] =
    useState(false);

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

  const id = localStorage.getItem("selectedGroupId");
  const handleCreate = async () => {
    try {
      const res = await axios.get(
        ` ${BaseUrl}/groups/generate-invite/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": `"application/json"`,
          },
        }
      );
      const inviteLink = res.data.inviteLink;
      localStorage.setItem(
        "latestInvite",
        JSON.stringify({ groupId: id, inviteLink })
      );
      await navigator.clipboard.writeText(inviteLink);
      toast.success("Invite Link copied successfully");
    } catch (error) {
      console.log("error", error);
      console.log("id:", id);
    } finally {
    }
  };

  const handleStartCycle = async () => {
    const groupId = localStorage.getItem("selectedGroupId");

    try {
      const res = await axios.post(
        `${BaseUrl}/groups/${groupId}/start_cycle`,

        {}
      );

      toast.success(res.data?.message || "Cycle started successfully!");
      setShowSelectPayout(true);
    } catch (error) {
      console.error("Error starting cycle:", error.response || error);
    }
  };

  const Array = [
    {
      id: 1,
      top: "Contribution Amount",
      mid: (
        <>
          <TbCurrencyNaira />
          10,000
        </>
      ),
      bottom: "Per member",
      icon: <BsCash />,
      bgcolor: "#efd5f2",
      color: "#7b2cbf",
    },
    {
      id: 2,
      top: "Cycle duration",
      mid: "Weekly",
      bottom: "Frequency",
      icon: <MdOutlineEventNote />,
      bgcolor: "#fee1ef",
      color: "#f967ad",
    },
    {
      id: 3,
      top: "Total Members",
      mid: "0",
      bottom: "Active",
      icon: <HiOutlineUserGroup />,
      bgcolor: "#ffe4cc",
      color: "#ff7900",
    },
    {
      id: 4,
      top: "Current Pot",
      mid: (
        <>
          <TbCurrencyNaira />0
        </>
      ),
      bottom: "Group Wallet",
      icon: <PiCoinsLight />,
      bgcolor: "#d6ecd1",
      color: "#34a218",
    },
  ];

  return (
    <Content>
      <Wrapper>
        <AdminDashboardHeader />
        <div className="groupname">
          <h1>{groupName}</h1>
        </div>

        <div className="round">
          <div className="left">
            <p>
              Round <span>0/0</span>
            </p>
            <div className="ongoing">
              <p style={{ color: "#3b82f6", fontSize: "0.8rem" }}>pending</p>
            </div>
          </div>
          <div className="btn">
            <button className="btn1" onClick={handleCreate}>
              Copy Invite Link
            </button>
            <button className="btn2" onClick={handleStartCycle}>
              <FiSend />
              Start Cycle
            </button>
          </div>
        </div>

        <div
          className="back"
          onClick={() => navigate("/userdashboard")}
          style={{ cursor: "pointer" }}
        >
          <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
          <p>back home</p>
        </div>

        <Ad>
          <div className="Ad_wrap">
            {Array.map((items) => (
              <div className="card" key={items.id}>
                <div className="card_wrapper">
                  <div className="left">
                    <p>{items.top}</p>
                    <h3 style={{ display: "flex", alignItems: "center" }}>
                      {items.mid}
                    </h3>
                    <p>
                      <small style={{ color: "#828181" }}>{items.bottom}</small>
                    </p>
                  </div>
                  <div
                    className="right"
                    style={{
                      backgroundColor: items.bgcolor,
                      color: items.color,
                    }}
                  >
                    {items.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Ad>

        <div className="option">
          <div className="option_wrap">
            <div className="inner_wrap">
              <div
                style={{ backgroundColor: "transparent" }}
                className={`mem ${
                  location.pathname.endsWith("") ? "active" : ""
                }`}
                onClick={() => navigate("")}
              >
                <p>Members</p>
              </div>
              <div
                className={`cont ${
                  location.pathname.includes("contribution") ? "active" : ""
                }`}
                onClick={() => navigate("contribution")}
              >
                <p>Contributions</p>
              </div>
              <div
                className={`req ${
                  location.pathname.includes("requestjoingroup") ? "active" : ""
                }`}
                onClick={() => navigate("requestjoingroup")}
              >
                <p>Request</p>
              </div>
            </div>
          </div>
        </div>

        <Outlet />

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
            onSave={(payoutData) => {
              const groupId = localStorage.getItem("createdGroupId");
              setSave({ payoutData, groupId });
              setShowPayoutManually(false);
              setShowPayoutManuallySuccessful(true);
            }}
          />
        )}

        {showPayoutManuallySuccessful && saved && (
          <PayoutManuallySuccessful
            onClose={() => setShowPayoutManuallySuccessful(false)}
            payoutData={saved.payoutData}
            groupId={saved.groupId}
          />
        )}

        <UserDashboardFooter />
      </Wrapper>
    </Content>
  );
};

export default Start_group;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f5f0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .groupname {
    width: 80%;
    margin-top: 18vh;

    @media (max-width: 768px) {
      width: 90%;
      word-spacing: 10px;
      letter-spacing: 5px;
    }
  }

  .round {
    width: 81%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      align-items: start;
      flex-direction: column;
      width: 90%;
      /* gap: 0.5rem; */
      min-height: 18vh;
    }

    .btn {
      display: flex;
      gap: 1rem;

      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
      }
    }

    .btn1 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.7rem;
      border-radius: 0.5rem;
      border: none;
      outline: none;
      color: white;
      background-color: #7b2cbf;
      width: 12rem;
      height: 2.5rem;
      cursor: pointer;
      &:hover {
        background-color: #b088d3;
        transition: all 350ms ease-in-out;
      }

      @media (max-width: 768px) {
        width: 22rem;
      }
    }

    .btn2 {
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

      @media (max-width: 768px) {
        width: 22rem;
      }
    }

    .left {
      width: 18%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
        width: 45%;
        height: 30%;
      }

      p {
        color: #666666;

        span {
          color: #afadab;
        }
      }

      .ongoing {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.8rem;
        padding-block: 0.3rem;
        padding-inline: 1rem;
        background-color: #d2def1;
      }
    }

    .right {
      width: 35%;
      height: 70%;
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
      }
    }
  }

  .back {
    width: 85%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      margin-top: 4rem;
    }
  }

  .option {
    width: 85%;
    height: 20vh;
    display: flex;
    align-items: center;

    .option_wrap {
      width: 45%;
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        width: 100%;
      }

      .inner_wrap {
        width: 90%;
        height: 75%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #d6beeb;
        border-radius: 0.5rem;

        .mem,
        .cont,
        .req {
          width: 25%;
          height: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.5rem;
          cursor: pointer;
          background-color: transparent;
          color: inherit;
          transition: all 350ms ease-in-out;

          &:hover {
            background-color: rgba(123, 44, 191, 0.15);
            color: #7b2cbf;
          }
        }

        .cont {
          width: 30%;
          @media (max-width: 768px) {
            width: 40%;
          }
        }

        .active {
          background-color: #7b2cbf !important;
          color: white !important;
        }
      }
    }
  }
`;

const Ad = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
    margin-top: 2rem;
  }

  .Ad_wrap {
    width: 85%;
    height: 80%;
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      height: 100%;
      flex-wrap: wrap;
    }

    .card {
      width: 24%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

      @media (max-width: 768px) {
        width: 100%;
        height: 23%;
      }

      .card_wrapper {
        width: 85%;
        height: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .right {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          font-size: 1.3rem;
        }
      }
    }
  }
`;
