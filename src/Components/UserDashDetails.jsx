import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { TiGroupOutline, TiTick } from "react-icons/ti";
import { MdEventNote, MdOutlinePersonAddAlt } from "react-icons/md";
import { CiBellOn, CiTrophy } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsCash } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

const UserDashDetails = ({ payoutInfo }) => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );
  const userId = JSON.parse(localStorage.getItem("userid"));
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/groups/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setGroups(res.data?.data || []);
      } catch (err) {
        console.error("Error fetching groups:", err);
      }
    };
    if (userId) fetchGroups();
  }, []);

  if (!groups) return <p>Loading groups...</p>;

   const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return { backgroundColor: "#Fef5d0", color: "#Facc15", fontSize: "0.8rem"};// Orange
      case "active":
        return { backgroundColor: "#D6ECD1", color: "#34A218", fontSize: "0.8rem" }; // Green
      case "completed":
        return { backgroundColor: "#D6ECD1", color: "#34A218" , fontSize: "0.8rem"}; // Green
      default:
        return { backgroundColor: "#F6F6F6", color: "#000000", fontSize: "0.8rem" }; // Default
    }
  };

  return (
    <UserDashDetails_content>
      <UserDashDetails_wrapper>
        <Hello>
          <div className="left">
            <h1>Welcome Back,</h1>
            <h2>{userId?.name} 👋🏽</h2>
            <p style={{ color: "#240046" }}>
              You have {groups?.length ?? 0} active groups and{" "}
              {payoutInfo?.data?.hasActiveCycle
                ? "1 payout coming up this week"
                : "no payouts this week"}
              .
            </p>
          </div>
          <div className="hello_btn">
            <button
              className="hello_btn1"
              onClick={() => navigate("/creategroup")}
            >
              + Create New Group
            </button>
            <button
              className="hello_btn2"
              onClick={() => navigate("/AccessRestricted")}
            >
              Join Group
            </button>
          </div>
        </Hello>

        <Details>
          <div className="inner_details">
            <div className="card1">
              <div className="card_wrapper">
                <div className="icon_cont">
                  <CiTrophy />
                </div>
                <p>Completed cycles</p>
                <p style={{ fontWeight: "bold" }}>
                  {payoutInfo?.data?.contributions?.total || 0}
                </p>
              </div>
            </div>

            <div className="card2">
              <div className="card_wrapper">
                <div className="icon_cont">
                  <TiGroupOutline />
                </div>
                <p>Active groups</p>
                <p style={{ fontWeight: "bold" }}>
                  {groups?.length ?? 0} groups
                </p>
              </div>
            </div>

            <div className="card3">
              <div className="card_wrapper">
                <div className="first">
                  <div className="icon_cont">
                    <MdEventNote />
                  </div>
                  <div className="right">
                    <p>
                      <strong>Dec 3rd,25</strong>
                    </p>
                  </div>
                </div>
                <p>Next Payouts</p>
                <p style={{ fontWeight: "bold" }}>Payout Info</p>
              </div>
            </div>

            <div className="card4">
              <div className="card_wrapper">
                <div className="first">
                  <div className="icon_cont">
                    <CiBellOn />
                  </div>
                  <div className="right">
                    <p>2</p>
                  </div>
                </div>
                <p>Reminders</p>
                <p style={{ fontWeight: "bold" }}>Pending contributions</p>
              </div>
            </div>
          </div>
        </Details>

        <Main_bottom>
          <Left>
            <My_groups>
              <div className="top">
                <h1>My groups</h1>
                <p
                  onClick={() => navigate("/mygroupdetail")}
                  style={{
                    color: "#7b2cbf",
                    fontWeight: "bolder",
                    cursor: "pointer",
                  }}
                >
                  <small>View all</small>
                </p>
              </div>

              <div className="main_top_group" style={{ overflowY: "auto" }}>
                {groups?.length > 0 ? (
                  groups.slice(0, 2).map((group, index) => (
                    <div className="group" key={index}>
                      <div className="wrapper">
                        <div className="women">
                          <p>
                            <strong>{group.groupName}</strong>
                          </p>
                          <div className="in_prog" 
                        style={getStatusStyles(group.status)}>
                            <p>{group?.status}</p>
                          </div>
                        </div>

                        <div className="p_cont">
                          <p>{group?.status}</p>
                          <p>
                            {payoutInfo?.data?.currentRound ?? 0} /{" "}
                            {payoutInfo?.data?.totalRounds ?? 0}
                          </p>
                        </div>

                        <div
                          className="progress_parent1"
                          style={{ marginBottom: "1rem" }}
                        >
                          <div className="progress_child1"></div>
                        </div>

                        <div
                          className="total_naira"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <p>Total Pot</p>
                          <p>
                            <TbCurrencyNaira />

                            {payoutInfo?.data?.pot?.totalCollected || 0.0}
                          </p>
                        </div>

                        <div className="last_date">
                          <p>Last contribution</p>
                          <p>
                            {payoutInfo?.data?.contributions?.received ?? 0} /{" "}
                            {payoutInfo?.data?.contributions?.total ?? 0}
                          </p>
                        </div>

                        <div className="cycle_round">
                          <p>Cycle</p>
                          <p>{group?.status}</p>
                        </div>

                        <div className="role_mem">
                          <p>Role</p>
                          <p>{group.myRole ?? "Member"}</p>
                        </div>

                        <button
                          onClick={() => {
                            if (group.myRole === "admin") {
                              navigate(
                                `/admincirclestartvacationdashboard/${group.id}`
                              );
                            } else if (group.myRole === "member") {
                              navigate(`/womendashboard/${group.id}`);
                            } else {
                              console.log("Unknown role");
                            }
                          }}
                        >
                          View group details
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    Loading groups...
                  </p>
                )}
              </div>
            </My_groups>

            {/* Recent Updates */}
            <Recent>
              <h1>Recent Updates</h1>
              <div className="recent_updates">
                <div className="recent_update_wrapper">
                  <div className="one">
                    <div className="left1">
                      <TiTick />
                    </div>
                    <div className="right">
                      <p style={{}}>
                        Chidera contributed 10,000 to Women in Tech Ajo
                      </p>
                      <p style={{ color: "#939393" }}>2 hours ago</p>
                    </div>
                  </div>
                  <div className="one">
                    <div className="left2">
                      <BsCash />
                    </div>
                    <div className="right">
                      <p style={{}}>Chisom received payout last week</p>
                      <p style={{ color: "#939393" }}>1 week ago</p>
                    </div>
                  </div>
                  <div className="one">
                    <div className="left3">
                      <MdOutlinePersonAddAlt />
                    </div>
                    <div className="right">
                      <p style={{}}>New members joined vacation cycle</p>
                      <p style={{ color: "#939393" }}>3 days ago</p>
                    </div>
                  </div>
                  <div className="one">
                    <div className="left4">
                      <CiTrophy />
                    </div>
                    <div className="right">
                      <p style={{}}>Cycle 3 completed for Hackathon cycle</p>
                      <p style={{ color: "#939393" }}>6 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </Recent>
          </Left>

          {/* Contribution Summary */}
          <Right>
            <h3>Contribution Summary</h3>
            <div className="card_container">
              {groups?.map((group, index) => (
                <div className="contribution-card" key={index}>
                  <p style={{ paddingLeft: "0.8rem", paddingTop: "0.8rem" }}>
                    {group.groupName}
                  </p>
                  <div className="content">
                    <div className="row">
                      <p>Your Contribution</p>
                      <p className="amount">
                        ₦ {group.contributionAmount ?? 0}
                      </p>
                    </div>
                    <div className="progress-circle">
                      <div className="circle1">
                        <div className="inner-circle">
                          <span>{group.progressPercentage ?? "0%"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <div className="row">
                        <p>Next contribution Date</p>
                        <p>{group.nextContributionDate ?? "N/A"}</p>
                      </div>
                      <div className="row">
                        <p>Yet to Pay</p>
                        <p>{group.yetToPay ?? "N/A"} members</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Right>
        </Main_bottom>
      </UserDashDetails_wrapper>
    </UserDashDetails_content>
  );
};

export default UserDashDetails;

const UserDashDetails_content = styled.div`
  width: 100%;
  margin-top: 16vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserDashDetails_wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Hello = styled.div`
  width: 100%;
  min-height: 35vh;
  display: flex;
  justify-content: space-between;
  padding: 1.8rem;
  align-items: center;
  border-radius: 1rem;
  border: 2px solid #7b2cbf;
  background-color: #f2eaf9;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  .left {
    color: #240046;
    width: 40%;

    @media (max-width: 768px) {
      width: 100%;
    }

    h1 {
      font-size: 2.5rem;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

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
      width: 100%;
      flex-direction: column;
    }

    .hello_btn1 {
      width: 50%;
      height: 3rem;
      border: none;
      outline: none;
      border-radius: 0.5rem;
      background-color: #7b2cbf;
      font-weight: 500;
      letter-spacing: 1px;
      color: white;
      cursor: pointer;
      &:hover {
        border: none;
        background-color: #c29ee2;
        color: white;
        transition: all 500ms ease-in-out;
      }

      @media (max-width: 768px) {
        min-height: 2.5rem;
        width: 100%;
      }
    }

    .hello_btn2 {
      width: 50%;
      height: 3rem;
      border: 1.5px solid #ff7900;
      outline: none;
      border-radius: 0.5rem;
      font-weight: 500;
      letter-spacing: 1px;
      cursor: pointer;
      background-color: transparent;
      color: #ff7900;
      &:hover {
        background-color: #ff7900;
        color: white;
        transition: all 500ms ease-in-out;
      }

      @media (max-width: 768px) {
        min-height: 2.5rem;
        width: 100%;
      }
    }
  }
`;

const Details = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-block: 2rem;
    height: 25vh;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .inner_details {
    width: 100%;
    height: 60%;
    display: flex;
    gap: 1.5rem;

    @media (max-width: 768px) {
      height: 100%;
      gap: 1rem;
    }

    .card1 {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      border-radius: 0.5rem;

      @media (max-width: 768px) {
        min-width: 95%;
        min-height: 90%;
      }

      .card_wrapper {
        width: 85%;
        height: 80%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .icon_cont {
          width: 2.2rem;
          height: 2.2rem;
          font-size: 1.5rem;
          border-radius: 50%;
          background-color: #c2e4ba;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          color: #34a218;
        }
      }
    }

    .card2 {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      border-radius: 0.5rem;

      @media (max-width: 768px) {
        min-width: 95%;
        min-height: 90%;
      }

      .card_wrapper {
        width: 85%;
        height: 80%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .icon_cont {
          width: 2.2rem;
          height: 2.2rem;
          font-size: 1.5rem;
          border-radius: 50%;
          background-color: #c5dafd;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          color: #3b82f6;
        }
      }
    }

    .card3 {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      border-radius: 0.5rem;

      @media (max-width: 768px) {
        min-width: 95%;
        min-height: 90%;
      }

      .card_wrapper {
        width: 85%;
        height: 80%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .first {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;

          .icon_cont {
            width: 2.2rem;
            height: 2.2rem;
            font-size: 1.5rem;
            border-radius: 50%;
            background-color: #ffeddc;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ff7900;
          }

          .right {
            width: 50%;
            height: 1.8rem;
            border-radius: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ffeddc;
            color: #ff7900;
          }
        }
      }
    }

    .card4 {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      border-radius: 0.5rem;

      @media (max-width: 768px) {
        min-width: 95%;
        min-height: 90%;
      }

      .card_wrapper {
        width: 85%;
        height: 80%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .first {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 1rem;

          .icon_cont {
            width: 2.2rem;
            height: 2.2rem;
            font-size: 1.5rem;
            border-radius: 50%;
            background-color: #fed2e7;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #f967ad;
          }

          .right {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fed2e7;
            color: #f967ad;
          }
        }
      }
    }
  }
`;

const Main_bottom = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  gap: 2rem;
  margin-bottom: 15vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Left = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const My_groups = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }

  .main_top_group {
    width: 100%;
    height: 95%;
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      height: 100%;
    }

    .group {
      width: 50%;
      min-height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

      @media (max-width: 768px) {
        width: 100%;
        height: 18rem;
      }

      .wrapper {
        width: 90%;
        height: 85%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        @media (max-width: 768px) {
          gap: 0.6rem;
        }

        .women {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .in_prog {
            padding-inline: 1rem;
            padding-block: 0.1rem;
            border-radius: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .p_cont {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .progress_parent1 {
          width: 100%;
          height: 3%;
          border-radius: 1rem;
          background-color: #d8e6fd;

          .progress_child1 {
            height: 100%;
            border-radius: 1rem;
            /* width: 40%;
            background-color: #3b82f6; */
          }
        }

        .progress_parent2 {
          width: 100%;
          height: 3%;
          border-radius: 1rem;
          background-color: #dddcdc;

          .progress_child2 {
            height: 100%;
            border-radius: 1rem;
            width: 80%;
            background-color: #ff7900;
          }
        }

        .total_naira {
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            display: flex;
            align-items: center;
          }
        }

        .last_date {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cycle_round {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .role_mem {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        button {
          width: 100%;
          min-height: 2rem;
          border: none;
          outline: none;
          border-radius: 0.5rem;
          color: white;
          background-color: #7b2cbf;
          cursor: pointer;
          &:hover {
            background-color: #571f88;
            transition: all 500ms ease-in-out;
          }
        }
      }
    }
  }
`;

const Recent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    h1 {
      font-size: 1.3rem;
      margin-top: 2rem;
    }
  }

  .recent_updates {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media (max-width: 768px) {
      height: 25rem;
      padding-inline: 1rem;
    }

    .recent_update_wrapper {
      width: 95%;
      height: 85%;
      display: flex;
      flex-direction: column;
      align-content: space-between;

      @media (max-width: 768px) {
        gap: 1rem;
        width: 98%;
      }

      .one {
        display: flex;
        width: 100%;
        height: 25%;
        align-items: center;
        gap: 1rem;

        .left1 {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
          background-color: #d6ecd1;
          color: #34a218;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;

          @media (max-width: 768px) {
            height: 2.3rem;
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .left2 {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
          color: #ff7900;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          background-color: #ffe4cc;

          @media (max-width: 768px) {
            height: 2.3rem;
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .left3 {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
          background-color: #d6ecd1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          background-color: #d8e6fd;
          color: #3b82f6;

          @media (max-width: 768px) {
            height: 2.3rem;
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .left4 {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
          background-color: #d6ecd1;
          color: #34a218;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;

          @media (max-width: 768px) {
            height: 2.3rem;
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
      }
    }
  }
`;

const Right = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .card_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    height: 100%;
    max-height: 110vh;
    overflow-y: auto;
    scrollbar-width: none;
    padding-block: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 768px) {
      gap: 2rem;
      overflow-x: auto;
      scrollbar-width: none;
      flex-direction: row;
    }

    .contribution-card {
      width: 100%;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      border-radius: 0.5rem;
      padding-bottom: 1rem;
      transition: transform 0.2s ease-in-out;

      @media (max-width: 768px) {
        min-width: 100%;
      }
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem;
    }

    .amount {
      font-weight: 600;
    }

    .progress-circle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1.5rem;
    }

    .circle1 {
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
      background: conic-gradient(#3b82f6 0% 0%, #d8e6fd 0% 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .circle2 {
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
      background: conic-gradient(#ff7900 0% 70%, #ffe4cc 70% 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .circle3 {
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
      background: conic-gradient(#34a218 0% 100%, #e0f2dd 100% 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .inner-circle {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .inner-circle span {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .info p {
      font-size: 0.85rem;
      color: #555;
    }
  }
`;
