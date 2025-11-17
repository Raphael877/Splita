import React from "react";
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
import { useEffect, useState } from "react";
import Payout from "../Components/Payout/Payout.jsx";
import PayoutSuccessful from "../Components/Payout/PayoutSuccessful.jsx";
import PayoutDetails from "../Components/Payout/PayoutDetails.jsx";
import ConfirmPayout from "../Components/Payout/ConfirmPayout.jsx";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import SelectPayout from "../Components/CreategroupModal/SelectPayout.jsx";
import PayoutManually from "../Components/Payout/PayoutManually.jsx";

const token = JSON.parse(localStorage.getItem(import.meta.env.VITE_USERTOKEN));
// const token = storedToken ? JSON.parse(storedToken) : null;

const BaseUrl = import.meta.env.VITE_BaseUrl;
const AdminCircleStartVacationDashboard = () => {
  const [group, setGroup] = useState("");
  const [payoutInfo, setPayoutInfo] = useState("");
  const { groupId } = useParams();
  const [cycleId, setCycleId] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const [groupDetails, setGroupDetails] = useState([]);
  const [currentModal, setCurrentModal] = useState(null);
  const [nextMember, setNextMember] = useState(null);
  const [payoutType, setPayoutType] = useState(null);

  const [loading, setLoading] = useState(false);
  const handleAutomaticRotation = async () => {
    try {
      await axios.post(
        `${BaseUrl}/groups/${groupId}/randomize_payout_order`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const startRes = await axios.post(
        `${BaseUrl}/groups/${groupId}/start_cycle`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(startRes?.data?.data?.message || "Cycle started");

      const payoutRes = await axios.get(
        `${BaseUrl}/groups/${groupId}/payout_order`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const schedule = payoutRes?.data?.data?.payoutSchedule || [];

      setNextMember({
        current: schedule[0] || null,
        next: schedule[1] || null,
      });

      const infoRes = await axios.get(
        `${BaseUrl}/groups/${groupId}/payout_info`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCycleId(infoRes?.data?.data?.cycleId);
    } catch (error) {
      console.error("Error in starting cycle:", error);
      toast.error(error?.response?.data?.message || "Failed to start cycle");
    }
  };

  const handleCreate = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/groups/generate_invite/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `"application/json"`,
        },
      });
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
        setGroup(res?.data?.group);
        localStorage.setItem("selectedGroupId", groupId);

        const response = await axios.get(
          `${BaseUrl}/groups/${groupId}/payout_info`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setPayoutInfo(response?.data?.data);
        setCycleId(response?.data?.data?.cycleId);
        console.log("Payout info:", response?.data?.data);
      } catch (error) {
        console.error("Error fetching group:", error);
      }
    };

    if (groupId) fetchGroup();
  }, [groupId, token]); // 👈 add dependencies here

  const handleCreatePayout = async () => {
    try {
      const res = await axios.post(
        `${BaseUrl}/payouts/create`,
        { groupId, cycleId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      toast.success("Payout created successfully!");
      localStorage.setItem("payoutId");

      setTimeout(() => handleModalFlow("payout"), 800);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create payout");
    }
  };

  const id = groupId;
  const fetchNextPayoutMember = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BaseUrl}/groups/${id}/payout_order`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(groupId);
      setNextMember(res.data?.data?.payoutSchedule?.[0] || null);
      setCurrentModal("payoutDetails");
      console.log("res", res);
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
        { groupId: id, cycleId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Initialize response:", initRes.data);

      const { authorizationUrl } = initRes?.data?.data || {};

      toast.success("Redirecting to payment gateway...");

      window.location.href = authorizationUrl;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const groupName =
    (location?.state && location.state.groupName) ||
    (typeof window !== "undefined"
      ? localStorage.getItem("createdGroupName")
      : null) ||
    "Not Available";

  // ✅ Fixed this function
  const handleModalFlow = (modalName) => {
    setCurrentModal(modalName);
  };

  const Array = [
    {
      id: 1,
      top: "Contribution Amount",
      mid: (
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <TbCurrencyNaira />
          {groupDetails?.group?.contributionAmount || 0}
        </span>
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
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <TbCurrencyNaira />
          {payoutInfo?.pot?.totalCollected || 0}
        </span>
      ),
      bottom: "Group Wallet",
      icon: <PiCoinsLight />,
      bgcolor: "#d6ecd1",
      color: "#34a218",
    },
  ];

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
              Round{" "}
              <span>
                {payoutInfo?.currentRound} / {payoutInfo?.totalRounds}
              </span>
            </p>
            <div className="ongoing">
              <p style={{ fontSize: "0.8rem" }}>
                {group?.status} 
              </p>
            </div>
          </div>
          {group?.status !== "active" || group?.status === "completed" ? (
            <div className="btn">
              <button className="btn1" onClick={handleCreate}>
                Copy Invite Link
              </button>
              <button
                className="btn2"
                onClick={() => handleModalFlow("selectPayout")}
              >
                <FiSend />
                Start Cycle
              </button>
            </div>
          ) : (
            <div className="right">
              <button className="btn1" onClick={handleCreatePayout}>
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
          onClick={() => navigate("/userdashboard")}
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
                className={`mem ${
                  location.pathname.endsWith(
                    `/admincirclestartvacationdashboard/${groupId}`
                  )
                    ? "active"
                    : ""
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
                onClick={() =>
                  navigate("requestjoingroup", {
                    state: { group },
                  })
                }
              >
                <p>Request</p>
              </div>
            </div>
          </div>
        </div>

        {groupDetails?.group ? (
          <Outlet
            context={{
              members: groupDetails.group.members,
              contributions: groupDetails.group.contributions,
              contributionAmount: groupDetails.group.contributionAmount,
              groupDetails: groupDetails,
            }}
          />
        ) : (
          <p>Loading group members...</p>
        )}

        <UserDashboardFooter />
      </AdminCircleStartVacationDashboard_wrapper>

      {currentModal === "payout" && (
        <Payout
          onClose={() => setCurrentModal(null)}
          onContinue={fetchNextPayoutMember}
        />
      )}

      {currentModal === "payoutDetails" && (
        <PayoutDetails
          loading={loading}
          nextMember={nextMember}
          onClose={() => setCurrentModal(null)}
          onProceed={() => handleModalFlow("confirmPayout")}
        />
      )}

      {currentModal === "confirmPayout" && (
        <ConfirmPayout
          loading={loading}
          nextMember={nextMember}
          onClose={() => setCurrentModal(null)}
          onConfirm={() => handleModalFlow("payoutSuccessful")}
        />
      )}

      {currentModal === "payoutSuccessful" && (
        <PayoutSuccessful
          loading={loading}
          nextMember={nextMember}
          onClose={() => setCurrentModal(null)}
        />
      )}

      {currentModal === "selectPayout" && (
        <SelectPayout
          onClose={() => setCurrentModal(null)}
          onAutomaticRotation={() => {
            setPayoutType("automatic");
            handleAutomaticRotation();
            setCurrentModal(null);
          }}
          onManualSelection={() => {
            setPayoutType("manual");
            setCurrentModal("manualPayout");
          }}
        />
      )}

      {currentModal === "manualPayout" && (
        <PayoutManually
          onClose={() => setCurrentModal(null)}
          onSave={() => {
            toast.success("Payout order saved successfully!");
            setCurrentModal(null);
          }}
        />
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
    width: 85%;
    margin-top: 18vh;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  .round {
    width: 85%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      align-items: start;
      flex-direction: column;
      width: 90%;
      height: 30vh;
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
        height: 30%;
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
        background-color: #fef5d0;
        color: #facc15;

        p{
          color: #facc15;
        }
      }
    }
    .btn {
      display: flex;
      gap: 1rem;

      @media (max-width: 768px) {
        height: 50%;
        flex-direction: column;
        width: 100%;
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
          background-color: #571f88;
          transition: all 350ms ease-in-out;
        }

        @media (max-width: 768px) {
          width: 100%;
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
          width: 100%;
        }
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
          background-color: #571f88;
          transition: all 350ms ease-in-out;
        }

        @media (max-width: 768px) {
          width: 100%;
          height: 38px;
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

        @media (max-width: 768px) {
          width: 100%;
          height: 38px;
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

    p {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .option {
    width: 89%;
    height: 20vh;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      width: 95%;
    }

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
            transition: all 350ms ease-in-out;
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
  }

  .Ad_wrap {
    width: 85%;
    height: 80%;
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      min-height: 80%;
      width: 88%;
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
