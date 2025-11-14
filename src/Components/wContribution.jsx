import React from "react";
import styled from "styled-components";
import { TbCurrencyNaira } from "react-icons/tb";
import { useOutletContext } from "react-router-dom";

const WomenContribution = () => {
  const { contributions = [], groupDetails = [] } = useOutletContext() || {};

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "-";

  return (
    <AdminMemberDashboard_content>
      <AdminMemberDashboard_wrapper>
        <Table>
          <div className="table_wrap">
            <div className="top">
              <h2>Contributions</h2>
            </div>

            <div className="main_table">
              <div className="all_header">
                <div className="header">
                  <h3>Name</h3>
                </div>
                <div className="header">
                  <h3>Amount</h3>
                </div>
                <div className="header">
                  <h3>Date</h3>
                </div>
                <div className="header">
                  <h3>Status</h3>
                </div>
              </div>

              {contributions.length > 0 ? (
                contributions.map((item, index) => {
                  const member = groupDetails?.group?.members?.find(
                    (m) => m.id === item.userId
                  );

                  return (
                    <div className="all_data" key={item.id || index}>
                      <div className="cycle">
                        <p>{member?.name}</p>
                      </div>
                      <div className="amount">
                        <p style={{display: 'flex', alignItems: "center"}}>
                          <TbCurrencyNaira style={{fontSize: "1.2rem"}}/>
                          {item.amount
                            ? Number(item.amount).toLocaleString()
                            : "0"}
                        </p>
                      </div>
                      <div className="date">
                        <p>{formatDate(item.contributionDate)}</p>
                      </div>
                      <div className="status">
                        <div
                          className="status_wrap"
                          style={{
                            backgroundColor:
                              item.status === "paid" ? "#d6ecd1" : "#ffe4cc",
                            color:
                              item.status === "paid" ? "#34a218" : "#ff7900",
                          }}
                        >
                          {item.status || "Unpaid"}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <p>No contributions yet.</p>
                </div>
              )}
            </div>
          </div>
        </Table>
      </AdminMemberDashboard_wrapper>
    </AdminMemberDashboard_content>
  );
};

export default WomenContribution;

const AdminMemberDashboard_content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f5f0;
`;

const AdminMemberDashboard_wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    overflow-x: auto;
    max-width: max-content;
    scrollbar-width: none;
    align-items: flex-start;

    &::-webkit-scrollbar {
      display: none;
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

  @media (max-width: 768px) {
      width: 250vw;
    }

  .table_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 100%;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 768px) {
      width: 90%;
    }

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

        .header{
          .member{
            @media (max-width: 768px) {
              width: 30%;
            }
          }
        }
      }

      .all_data {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;

        .cycle {
          width: 25%;
        }

        .status {
          width: 25%;
          display: flex;
          justify-content: flex-end;

          .status_wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1rem;
            padding-block: 0.3rem;
            padding-inline: 0.8rem;
          }
        }

        .date {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25%;
          padding-left: 3rem;
        }

        .amount {
          display: flex;
          padding-left: 4rem;
          align-items: center;
          width: 25%;
        }
      }
    }
  }
`;
