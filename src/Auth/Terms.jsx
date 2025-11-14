import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";

const Terms = ({ closeModal }) => {
  return (
    <Terms_content>
      <Terms_wrapper>
        <Term_container>
          <div className="title">
            <h2>Legal Information</h2>
          </div>
          <div className="subtitle">
            <p>Please read our terms and condition carefully</p>
          </div>
          <div className="one">
            <h3>1. Introduction</h3>
            <p>
              These Terms and Conditions (“Terms”) govern the use of this
              platform (“the Platform”) and all related services provided
              herein.{" "}
            </p>
            <p>
              By accessing or using the Platform, users agree to comply with
              these Terms. If you do not agree, you must discontinue use
              immediately.
            </p>
          </div>
          <div className="two">
            <h3>2. User Eligibility and Accounts</h3>
            <p>
              2.1 Each user is permitted to create only one verified account.
            </p>
            <p>
              2.2 Creating or maintaining multiple accounts for fraudulent or
              manipulative purposes is strictly prohibited and may result in
              account suspension or termination.
            </p>
            <p>
              {" "}
              2.3 Users are permitted to join multiple groups within the
              Platform using their single verified account.
            </p>
          </div>
          <div className="three">
            <h3>3. Group Membership and Administration</h3>
            <p>
              3.1 Group administrators (“Admins”) are solely responsible for
              inviting and approving members into their groups.
            </p>
            <p>
              3.2 Admins are strongly advised to invite only individuals they
              personally know and trust; such as family members, friends, or
              verified acquaintances.
            </p>
            <p>
              3.3 The Platform will not be held liable for any losses,
              unremitted funds, or disputes arising from relationships or trust
              issues among group members.
            </p>
          </div>
          <div className="four">
            <h3>4. Payment Policy</h3>
            <p>
              4.1 All payments are processed directly through the Platform’s
              secure payment system.
            </p>
            <p>
              4.2 Users must ensure that the amount and purpose of payment are
              correct before proceeding.
            </p>
            <p>
              4.3 Funds are held securely until all members of a group have
              completed their payments, after which disbursement is
              automatically made to the eligible recipient for that cycle.
            </p>
          </div>
          <div className="five">
            <h3>5. Transaction Fees</h3>
            <p>
              5.1 A 2% transaction fee applies to every cash-out transaction.
            </p>
            <p>
              5.2 This fee is automatically deducted from the amount being
              withdrawn from the Platform at the time of disbursement.
            </p>
          </div>
          <div className="six">
            <h3>6. Penalty Charges</h3>
            <p>
              6.1 A 5% penalty fee will apply to any delayed payment by a group
              member.
            </p>
            <p>
              6.2 An additional 1% penalty will accrue for every 24-hour period
              that the payment remains outstanding
            </p>
            <p>
              6.3 Penalty charges are automatically calculated and enforced by
              the Platform.
            </p>
          </div>
          <div className="seven">
            <h3>7. Slot Assignment</h3>
            <p>
              7.1 Slot or collection order assignments are determined through
              the Platform’s automated random selection system.
            </p>
            <p>
              7.2 This process is final and cannot be altered or re-balloted.
            </p>
            <p>
              7.3 Users agree to abide by the system’s outcome without contest.
            </p>
          </div>
          <div className="eight">
            <h3>8. Platform Liability</h3>
            <p>
              8.1 The Platform acts solely as a <strong>facilitator</strong> of
              group contributions and disbursements.
            </p>
            <p>
              8.2 It does not assume liability for disputes, non-payment, or
              misconduct among group members.
            </p>
            <p>
              8.3 Users and group administrators are expected to exercise due
              diligence in group creation, membership, and transactions.
            </p>
          </div>
          <div className="nine">
            <h3>9. Suspension and Termination</h3>
            <p>
              9.1 The Platform reserves the right to suspend or terminate any
              account found to be in violation of these Terms, involved in
              fraudulent activities, or posing a risk to other users or the
              integrity of the system.
            </p>
          </div>
          <div className="ten">
            <h3>10. Amendments</h3>
            <p>
              10.1 The Platform reserves the right to modify, update, or revise
              these Terms at any time.
            </p>
            <p>
              10.2 Continued use of the Platform after any such changes
              constitutes acceptance of the updated Terms.
            </p>
          </div>
          <FaRegTimesCircle
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "8%",
              right: "5%",
              fontSize: "1.5rem",
            }}
            onClick={closeModal}
            className="cancel_icon"
          />
        </Term_container>
      </Terms_wrapper>
    </Terms_content>
  );
};

export default Terms;

const Terms_content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`;

const Terms_wrapper = styled.div`
  width: 45%;
  height: 100%;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  padding-top: 5%;
  position: relative;

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 70%;
    padding-top: 10%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 10%;
    border-radius: 0;
  }
`;

const Term_container = styled.div`
  width: 90%;
  height: auto;
  overflow-x: scroll;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;
