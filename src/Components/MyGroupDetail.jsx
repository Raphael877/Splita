import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import UserDashboardHeader from "./UserDashboardHeader";
import UserDashboardFooter from "./UserDashboardFooter";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MyGroupDetail = () => {
  const { groupId } = useParams();
  console.log("Group ID:", groupId);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);

  const handleDetails = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/groups/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Fetched groups:", res.data);

      setGroups(res.data?.data);
    } catch (error) {
      console.log("Error fetching groups:", error);
    }
  };

  useEffect(() => {
    handleDetails();
  }, []);

  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return { backgroundColor: "#Fef5d0", color: "#Facc15" };// Orange
      case "active":
        return { backgroundColor: "#D6ECD1", color: "#34A218" }; // Green
      case "completed":
        return { backgroundColor: "#D6ECD1", color: "#34A218" }; // Green
      default:
        return { backgroundColor: "#F6F6F6", color: "#000000" }; // Default
    }
  };

  return (
    <MyGroupDetail_content>
      <MyGroupDetail_wrapper>
        <UserDashboardHeader onMyGroupClick={handleDetails} />

        <p className="back" onClick={() => navigate("/userdashboard")}>
          <IoIosArrowRoundBack
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          />
          <span>back home</span>
        </p>

        <div className="main_top_group">
          {groups.length === 0 ? (
            <p style={{ textAlign: "center", marginTop: "50px" }}>
              Groups Loading.......
            </p>
          ) : (
            groups.map((group) => (
              <div className="group" key={group._id}>
                <div className="wrapper">
                  <div className="women">
                    <p>
                      <strong>{group.groupName}</strong>
                    </p>
                    <div
                      className="status_badge"
                      style={getStatusStyles(group.status || "")}
                    >
                      <small>{group.status || "In progress"}</small>
                    </div>
                  </div>

                  <div className="p_cont">
                    <p>Progress</p>
                    <p>
                      {group.progress ||
                        `${group.payoutsCompleted || 0}/${
                          group.totalPayouts || 0
                        } Payouts`}
                    </p>
                  </div>

                  <div
                    className="progress_parent1"
                    style={{ marginBottom: "1rem" }}
                  >
                    <div
                      className="progress_child1"
                      style={{
                        width: `${
                          (group.payoutsCompleted / group.totalPayouts) * 100 ||
                          0
                        }%`,
                      }}
                    ></div>
                  </div>

                  <div
                    className="total_naira"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <p>Total Pot</p>
                    <p>
                      <TbCurrencyNaira />
                      {group.contributionAmount || "0"}
                    </p>
                  </div>

                  <div className="last_date">
                    <p>Last contribution</p>
                    <p>{group.lastContributionDate || "N/A"}</p>
                  </div>

                  <div className="cycle_round">
                    <p>Cycle</p>
                    <p>{group.cycle || "Round 1"}</p>
                  </div>

                  <div className="role_mem">
                    <p>Role</p>
                    <p>{group.myRole || "Member"}</p>
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
                        console.warn("Unknown role:");
                      }
                    }}
                  >
                    View group details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <UserDashboardFooter />
      </MyGroupDetail_wrapper>
    </MyGroupDetail_content>
  );
};

export default MyGroupDetail;

const MyGroupDetail_content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15vh;
  background-color: #f8f5f0;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const MyGroupDetail_wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: #f8f5f0;

  .back {
    display: flex;
    align-items: center;
    justify-self: flex-start;
    gap: 1rem;
    font-weight: 500;
    cursor: pointer;
    width: 100%;

    span {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .main_top_group {
    width: 100%;
    min-height: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    .group {
      width: 30%;
      min-height: 19rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

      @media (max-width: 768px) {
        width: 100%;
        min-height: 19rem;
      }

      .wrapper {
        width: 90%;
        height: 85%;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        .women {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .status_badge {
            padding-block: 0.2rem;
            padding-inline: 1rem;
            border-radius: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .in_prog2 {
            padding-block: 0.2rem;
            padding-inline: 1rem;
            background-color: #ffe4cc;
            border-radius: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ec7000;
            font-weight: 600;
          }

          .in_prog3 {
            padding-block: 0.2rem;
            padding-inline: 1rem;
            background-color: #d8e6fd;
            border-radius: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #3b82f6;
            font-weight: 600;
          }
        }

        .p_cont {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .progress_parent1 {
          width: 100%;
          min-height: 3%;
          border-radius: 1rem;
          background-color: #dddcdc;

          .progress_child1 {
            min-height: 100%;
            border-radius: 1rem;
            width: 40%;
            background-color: #3b82f6;
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

        .progress_parent3 {
          width: 100%;
          height: 3%;
          border-radius: 1rem;
          background-color: #dddcdc;

          .progress_child3 {
            height: 100%;
            border-radius: 1rem;
            width: 100%;
            background-color: #34a218;
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
          height: 2rem;
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

          @media (max-width: 768px) {
            min-height: 28px;
          }
        }
      }
    }
  }
`;
