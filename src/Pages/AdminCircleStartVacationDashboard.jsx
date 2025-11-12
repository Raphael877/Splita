import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AdminDashboardHeader from "../Components/AdminDashboardHeader.jsx";
import UserDashboardFooter from "../Components/UserDashboardFooter.jsx";
import { TbCurrencyNaira } from "react-icons/tb";
import { CiTrash } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { BsCash } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineEventNote } from "react-icons/md";
import { PiCoinsLight } from "react-icons/pi";
import { useLocation, useNavigate, useParams, Outlet } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import SelectPayout from "../Components/CreategroupModal/SelectPayout.jsx";
import Payout from "../Components/Payout/Payout.jsx";
import PayoutSuccessful from "../Components/Payout/PayoutSuccessful.jsx";
import PayoutDetails from "../Components/Payout/PayoutDetails.jsx";
import ConfirmPayout from "../Components/Payout/ConfirmPayout.jsx";
import PayoutManually from "../Components/Payout/PayoutManually.jsx";

const storedToken = localStorage.getItem(import.meta.env.VITE_USERTOKEN);
const token = storedToken ? JSON.parse(storedToken) : null;
const BaseUrl = import.meta.env.VITE_BaseUrl;

const AdminCircleStartVacationDashboard = () => {
  const [group, setGroup] = useState("");
  const { groupId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [groupDetails, setGroupDetails] = useState([]);
  const [currentModal, setCurrentModal] = useState(null);
  const [nextMember, setNextMember] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    try {
      const res = await axios.get(
        `${BaseUrl}/groups/generate-invite/${groupId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const inviteLink = res.data.inviteLink;
      localStorage.setItem(
        "latestInvite",
        JSON.stringify({ groupId, inviteLink })
      );
      await navigator.clipboard.writeText(inviteLink);
      toast.success("Invite Link copied successfully");
    } catch (error) {
      console.error("Error generating invite link:", error);
    }
  };

  const handleStartCycle = async () => {
    try {
      const res = await axios.post(
        `${BaseUrl}/groups/${groupId}/start-cycle`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data?.message || "Cycle started successfully!");
      setCurrentModal("selectPayout"); // Open SelectPayout modal after starting cycle
    } catch (error) {
      console.error("Error starting cycle:", error.response || error);
    }
  };

  const fetchNextPayoutMember = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BaseUrl}/groups/${groupId}/payout-order`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNextMember(res.data?.data?.payoutSchedule?.[0] || null);
      setCurrentModal("payoutDetails");
    } catch (error) {
      console.error("Error fetching next payout member:", error);
      toast.error("Failed to fetch next payout member");
    } finally {
      setLoading(false);
    }
  };

  const handleContribute = async () => {
    try {
      setLoading(true);
      const initRes = await axios.post(
        `${BaseUrl}/Payments/initialize-contribution`,
        { groupId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const { authorizationUrl } = initRes?.data?.data || {};
      if (!authorizationUrl) {
        toast.error("Payment initialization failed");
        return;
      }

      toast.success("Redirecting to payment gateway...");
      window.location.href = authorizationUrl;
    } catch (error) {
      console.error("Error contributing:", error);
      toast.error(
        error?.response?.data?.message || "Failed to process contribution"
      );
    } finally {
      setLoading(false);
    }
  };

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
        setGroup(res.data?.group);
      } catch (error) {
        console.error("Error fetching group:", error);
      }
    };
    if (groupId) fetchGroup();
  }, [groupId]);

  const Array = [
    {
      id: 1,
      top: "Contribution Amount",
      mid: (
        <>
          <TbCurrencyNaira /> {groupDetails?.group?.contributionAmount || 0}
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
      mid: groupDetails?.group?.contributionFrequency,
      bottom: "Frequency",
      icon: <MdOutlineEventNote />,
      bgcolor: "#fee1ef",
      color: "#f967ad",
    },
    {
      id: 3,
      top: "Total Members",
      mid:
        groupDetails?.group?.members?.length ||
        groupDetails?.group?.totalMembers,
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
          <TbCurrencyNaira /> 0
        </>
      ),
      bottom: "Group Wallet",
      icon: <PiCoinsLight />,
      bgcolor: "#d6ecd1",
      color: "#34a218",
    },
  ];

  const handleModalFlow = (modalName) => {
    setCurrentModal(modalName);
  };

  return (
    <AdminCircleStartVacationDashboard_content>
      <ToastContainer />
      <AdminCircleStartVacationDashboard_wrapper>
        <AdminDashboardHeader />
        <div className="groupname">
          <h1>{groupDetails?.group?.groupName}</h1>
        </div>

        <div className="round">
          <div className="left">
            <p>
              Round <span>0/3</span>
            </p>
            <div className="ongoing">
              <p style={{ color: "#3b82f6", fontSize: "0.8rem" }}>Ongoing</p>
            </div>
          </div>
          {group?.contributions?.length === 0 ? (
            <div className="btn">
              <button className="btn1" onClick={handleCreate}>
                Copy Invite Link
              </button>
              <button className="btn2" onClick={handleStartCycle}>
                <FiSend /> Start Cycle
              </button>
            </div>
          ) : (
            <div className="right">
              <button
                className="btn1"
                onClick={() => handleModalFlow("payout")}
              >
                <FiSend style={{ fontSize: "1rem" }} />
                <p>Trigger Payout</p>
              </button>
              <button onClick={handleContribute} className="btn2">
                <TbCurrencyNaira style={{ fontSize: "1rem" }} />
                {loading ? "loading...." : <p>Make Contribution</p>}
              </button>
            </div>
          )}
        </div>

        <div
          className="back"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
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
                style={{ backgroundColor: " #7b2cbf", color: "white" }}
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

        <Outlet
          context={{
            members: groupDetails?.group?.members || [],
            contributionAmount: groupDetails?.group?.contributionAmount,
            contributions: groupDetails?.group?.contributions || [],
          }}
        />
        <UserDashboardFooter />
      </AdminCircleStartVacationDashboard_wrapper>

      {currentModal && (
        <ModalWrapper onClose={() => setCurrentModal(null)}>
          {currentModal === "payout" && (
            <Payout onContinue={fetchNextPayoutMember} />
          )}
          {currentModal === "payoutDetails" && (
            <PayoutDetails
              loading={loading}
              nextMember={nextMember}
              onProceed={() => setCurrentModal("confirmPayout")}
            />
          )}
          {currentModal === "confirmPayout" && (
            <ConfirmPayout
              loading={loading}
              nextMember={nextMember}
              onConfirm={() => setCurrentModal("payoutSuccessful")}
            />
          )}
          {currentModal === "payoutSuccessful" && (
            <PayoutSuccessful loading={loading} nextMember={nextMember} />
          )}
          {currentModal === "selectPayout" && (
            <SelectPayout
              onAutomaticRotation={() =>
                toast.info("Automatic rotation selected!")
              }
              onManualSelection={() => setCurrentModal("manualPayout")}
            />
          )}
          {currentModal === "manualPayout" && (
            <PayoutManually
              onSave={() => {
                toast.success("Payout order saved successfully!");
                setCurrentModal(null);
              }}
            />
          )}
        </ModalWrapper>
      )}
    </AdminCircleStartVacationDashboard_content>
  );
};

export default AdminCircleStartVacationDashboard;

const AdminCircleStartVacationDashboard_content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f5f0;
`;

const AdminCircleStartVacationDashboard_wrapper = styled.div`
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
      height: 25vh;
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

      .btn1 {
        width: 50%;
        height: 100%;
        gap: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        cursor: pointer;
        background-color: #7b2cbf;
        color: white;
        &:hover {
          background-color: #9472b2;
          transition: all 350ms ease-in-out;
        }
      }

      .btn2 {
        width: 50%;
        height: 100%;
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        border: 1.5px solid #ff7900;
        color: #ff7900;
        border-radius: 0.5rem;
        cursor: pointer;
        background-color: transparent;
        &:hover {
          background-color: #ff7900;
          color: white;
          transition: all 350ms ease-in-out;
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
    height: 60vh;
  }

  .Ad_wrap {
    width: 85%;
    height: 80%;
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
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
        width: 48%;
        height: 50%;
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

const Table = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 1.5rem;

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
      width: 100%;
      height: auto;
      background-color: white;
      border-radius: 0.5rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .all_header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .all_data {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;

        .member {
          width: 25%;
        }

        .delete {
          width: 25%;
          display: flex;
          justify-content: flex-end;
        }

        .contribution {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25%;
        }

        .payout_order {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 25%;
        }

        .delete {
          color: #bbbbbb;
          font-weight: 800;
        }
      }
    }
  }
`;
