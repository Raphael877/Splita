import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import UserDashboardHeader from "../Components/UserDashboardHeader.jsx";
import UserDashboardFooter from "../Components/UserDashboardFooter.jsx";
import { toast, ToastContainer } from "react-toastify";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsCash } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineEventNote } from "react-icons/md";
import { PiCoinsLight } from "react-icons/pi";
import axios from "axios";

const WomenDashboard = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [payoutInfo, setPayoutInfo] = useState("");
  const [groupDetails, setGroupDetails] = useState(
    JSON.parse(localStorage.getItem("groupDetails")) || null
  );

  const storedToken = localStorage.getItem(import.meta.env.VITE_USERTOKEN);
  const token = storedToken ? JSON.parse(storedToken) : null;
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/groups/${groupId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setGroupDetails(res.data);
        localStorage.setItem("groupDetails", JSON.stringify(res.data));
        localStorage.setItem("selectedGroupId", groupId);
      } catch (error) {
        console.error("Error fetching group:", error);
        toast.error("Failed to refresh group details");
      }
    };

    if (groupId) fetchGroup();
  }, [groupId]);

  const handleContribute = async () => {
    const id = localStorage.getItem("selectedGroupId");
    try {
      const initRes = await axios.post(
        `${BaseUrl}/Payments/initialize-contribution`,
        { groupId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const { authorizationUrl } = initRes?.data?.data || {};
      if (!authorizationUrl) {
        toast.error("Payment initialization failed. No URL returned.");
        return;
      }

      toast.success("Redirecting to payment gateway...");
      window.location.href = authorizationUrl;
    } catch (error) {
      console.error("Error contributing:", error);
      toast.error(
        error?.response?.data?.message ||
          "Failed to process contribution. Please try again."
      );
    }
  };

  if (!groupDetails)
    return (
      <p style={{ textAlign: "center", marginTop: "3rem" }}>
        No group data found.
      </p>
    );

  const stats = [
    {
      id: 1,
      top: "Contribution Amount",
      mid: groupDetails?.group?.contributionAmount || 0,
      bottom: "Per member",
      icon: <BsCash />,
      bgcolor: "#efd5f2",
      color: "#7b2cbf",
    },
    {
      id: 2,
      top: "Cycle duration",
      mid: groupDetails?.group?.contributionFrequency || "-",
      bottom: "Frequency",
      icon: <MdOutlineEventNote />,
      bgcolor: "#fee1ef",
      color: "#f967ad",
    },
    {
      id: 3,
      top: "Total Members",
      mid: groupDetails?.group?.members?.length || 0,
      bottom: "Active",
      icon: <HiOutlineUserGroup />,
      bgcolor: "#ffe4cc",
      color: "#ff7900",
    },
    {
      id: 4,
      top: "Current Pot",
      mid: groupDetails?.group?.contributionAmount || 0,
      bottom: "Group Wallet",
      icon: <PiCoinsLight />,
      bgcolor: "#d6ecd1",
      color: "#34a218",
    },
  ];

  return (
    <AdminDashboard_content>
      <ToastContainer />
      <AdminDashboard_wrapper>
        <UserDashboardHeader />

        <div className="groupname">
          <h1>{groupDetails.group.groupName}</h1>
        </div>

        <div className="round">
          <div className="left">
            <p>
              Round{" "}
              <span>
                {payoutInfo?.currentRound || 1} / {payoutInfo?.totalRounds || 1}
              </span>
            </p>
            <div className="ongoing">
              <p style={{ color: "#3b82f6", fontSize: "0.8rem" }}>
                {groupDetails?.group?.status || "Active"}
              </p>
            </div>
          </div>
          <div className="right">
            <button className="btn2" onClick={handleContribute}>
              <TbCurrencyNaira style={{ fontSize: "1rem" }} />
              Make Contribution
            </button>
          </div>
        </div>

        <div
          className="back"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/userdashboard")}
        >
          <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
          <p>Back Home</p>
        </div>

        <Ad>
          <div className="Ad_wrap">
            {stats.map((item) => (
              <div className="card" key={item.id}>
                <div className="card_wrapper">
                  <div className="left">
                    <p>{item.top}</p>
                    <h3>{item.mid}</h3>
                    <p>
                      <small style={{ color: "#828181" }}>{item.bottom}</small>
                    </p>
                  </div>
                  <div
                    className="right"
                    style={{ backgroundColor: item.bgcolor, color: item.color }}
                  >
                    {item.icon}
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
                className={`mem ${!location.pathname.includes("women_contribution")
                    ? "active"
                    : ""
                }`}
                onClick={() => navigate("")}
              >
                <p>Members</p>
              </div>
              <div
                className={`cont ${
                  location.pathname.includes("women_contribution")
                    ? "active"
                    : ""
                }`}
                onClick={() => navigate("women_contribution")}
              >
                <p>Contributions</p>
              </div>
            </div>
          </div>
        </div>

        <Outlet
          context={{
            members: groupDetails.group.members || [],
            contributions: groupDetails.group.contributions || [],
            contributionAmount: groupDetails.group.contributionAmount || 0,
          }}
        />

        <UserDashboardFooter />
      </AdminDashboard_wrapper>
    </AdminDashboard_content>
  );
};

export default WomenDashboard;

const AdminDashboard_content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f5f0;
`;

const AdminDashboard_wrapper = styled.div`
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
      gap: 0.5rem;
      height: 17vh;
    }

    .left {
      width: 18%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        gap: 1rem;
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
      width: 30%;
      height: 70%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      @media (max-width: 768px) {
        width: 100%;
      }

      .btn2 {
        width: 65%;
        height: 100%;
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        background-color: #7b2cbf;
        color: white;
        &:hover {
          background-color: #9472b2;
          transition: all 350ms ease-in-out;
        }

        @media (max-width: 768px) {
          width: 12rem;
        }
      }
    }
  }

  .back {
    width: 85%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      margin-top: 0.5rem;
    }
  }

  .option {
    width: 89%;
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

        .cont {
          width: 40%;
          height: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.5rem;
          background-color: transparent;
          cursor: pointer;
          &:hover {
            background-color: rgba(123, 44, 191, 0.15);
            color: #7b2cbf;
            transition: all 350ms ease-in-out;
          }
        }

        .mem{
          width: 40%;
          height: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.5rem;
          background-color: transparent;
          cursor: pointer;
          &:hover {
            background-color: rgba(123, 44, 191, 0.15);
            color: #7b2cbf;
            transition: all 350ms ease-in-out;
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
  }

  .Ad_wrap {
    width: 85%;
    height: 80%;
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      min-height: 80%;
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
        height: 25%;
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
