import React from "react";
import styled from "styled-components";
import { LuCalendarDays, LuWallet } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineShield } from "react-icons/md";
import { FaEye, FaBell } from "react-icons/fa";

const Benefit = () => {
  return (
    <BenefitStyle>
      <article className="BenefitText">
        <div className="bene">
          <div style={{ display: "flex", gap: "5px" }}>
            <h3 style={{ color: "#7B2CBF" }}>Benefits </h3>
            <h3>for Group admins & Contributors </h3>
          </div>
          <p
            style={{ font: "Montserrat", fontWeight: "500", fontSize: "16px" }}
          >
            Empowering group admins and contributors with transparency and
            control.
          </p>
        </div>
      </article>
      <section className="sect">
        <article className="cont">
          <div className="mini">
            <h3
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "28px",
                color: "#100F0F",
              }}
            >
              For Group admins
            </h3>
            <div className="text1">
              <article className="first">
                <div className="circle">
                  <LuCalendarDays color="pink" />
                </div>
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Simplified Management
                </span>
              </article>
              <article className="first">
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginLeft: "45px",
                    width: 800,
                  }}
                >
                  Create and manage ajo groups, track members’ payments, and
                  automate collections all in one place.
                </span>
              </article>
            </div>
            <div className="text1">
              <article className="first">
                <div className="circle">
                  <FaChartLine color="pink" />
                </div>
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Payout Control & Tracking
                </span>
              </article>
              <article className="first">
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginLeft: "45px",
                    width: 800,
                  }}
                >
                  Schedule and monitor payouts with ease, Splita handles the
                  tracking for you.
                </span>
              </article>
            </div>
            <div className="text1">
              <article className="first">
                <div className="circle">
                  <MdOutlineShield color="pink" />
                </div>
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Increased Accountability
                </span>
              </article>
              <article className="first">
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginLeft: "45px",
                    width: 800,
                  }}
                >
                  Reduce misunderstandings with transparent records and digital
                  receipts for every transaction.
                </span>
              </article>
            </div>
          </div>
        </article>
        <article className="cont">
          <div className="mini">
            <h3
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "28px",
                color: "#100F0F",
              }}
            >
              For Contributors
            </h3>
            <div className="text1">
              <article className="first">
                <div className="circle">
                  <LuWallet color="pink" />
                </div>
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Seamless Contributions
                </span>
              </article>
              <article className="first">
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginLeft: "45px",
                    width: 800,
                  }}
                >
                  Create and manage ajo groups, track members’ payments, and
                  automate collections all in one place.
                </span>
              </article>
            </div>
            <div className="text1">
              <article className="first">
                <div className="circle">
                  <FaEye color="pink" />
                </div>
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Transparency You Can Trust
                </span>
              </article>
              <article className="first">
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginLeft: "45px",
                    width: 800,
                  }}
                >
                  Track your savings, payout schedules, and group activity in
                  real-time.
                </span>
              </article>
            </div>
            <div className="text1">
              <article className="first">
                <div className="circle">
                  <FaBell color="pink" />
                </div>
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Automated Notifications
                </span>
              </article>
              <article className="first">
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginLeft: "45px",
                    width: 800,
                  }}
                >
                  Stay updated with contribution alerts, payout notices, and
                  group updates effortlessly.
                </span>
              </article>
            </div>
          </div>
        </article>
      </section>
    </BenefitStyle>
  );
};

export default Benefit;

const BenefitStyle = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5cc;

  .BenefitText {
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .bene {
      height: 65%;
      width: 50%;
      font-family: Montserrat;
      font-size: 22px;
      line-height: 1.5;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .sect {
    height: 80%;
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;

    .cont {
      height: 90%;
      width: 40%;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      .mini {
        height: 100%;
        width: 100%;
        background-color: white;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        border-radius: 0.5rem;
        padding: 2rem;

        .text1 {
          height: 25%;

          .first {
            height: 50%;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;

            .circle {
              height: 35px;
              width: 35px;
              border-radius: 50%;
              background-color: #f967ad1a;
              display: flex;
              justify-content: center;
              align-items: center;
              color: "pink";
            }
          }
        }
      }
    }
  }
`;
