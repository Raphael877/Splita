import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AdminDashboardHeader from "../Components/AdminDashboardHeader";
import UserDashboardFooter from "../Components/UserDashboardFooter";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GiPartyPopper } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const GroupCreated = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // ✅ New states for invite link input
  const [inviteInputShown] = useState(false);
  const [fetchedInviteLink, setFetchedInviteLink] = useState("");

  const [inviteValue] = useState("");

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

  const groupId = localStorage.getItem("createdGroupId");
  useEffect(() => {
    const fetchGroupAndLink = async () => {
      try {
        const inviteRes = await axios.get(
          `${BaseUrl}/groups/generate_invite/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (inviteRes.data && inviteRes.data.inviteLink) {
          setFetchedInviteLink(inviteRes.data.inviteLink);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingInvite(false);
      }
    };

    if (groupId) fetchGroupAndLink();
  }, [groupId]);

  const handleCopyInstant = () => {
    const textToCopy = fetchedInviteLink;

    if (!textToCopy) {
      toast.error("Invite link not ready yet. Please refresh.");
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast.success("Invite Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Async copy failed, trying fallback", err);
          fallbackCopy(textToCopy);
        });
    } else {
      fallbackCopy(textToCopy);
    }
  };

  const fallbackCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    textarea.contentEditable = true;
    textarea.readOnly = false;

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    textarea.setSelectionRange(0, 99999);

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        toast.success("Invite Link copied to clipboard!");
      } else {
        toast.error("Unable to copy link automatically.");
      }
    } catch (err) {
      console.error("Fallback copy failed", err);
      toast.error("Failed to copy link.");
    }

    document.body.removeChild(textarea);
  };

  return (
    <Content>
      <AdminDashboardHeader />
      <Main>
        <Inner_main>
          <h1>{groupName}</h1>
          <p style={{ color: "#666666" }}>Created on Nov 20, 2025</p>
          <div
            className="back"
            onClick={() => navigate("/userdashboard")}
            style={{ cursor: "pointer" }}
          >
            <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
            <p>back home</p>
          </div>
          <Own>
            <Created>
              <div className="inner">
                <GiPartyPopper className="party_icon" />
                <h2>Your group has been created successfully!</h2>
                <p>
                  Invite trusted members to join and start your saving cycle
                </p>
                <p style={{ color: "#777777", marginBlock: "1.5rem" }}>
                  Be sure to invite only trusted people to your group, such as
                  friends or family. Splita does not take responsibility for
                  payment delays or defaults by any member. As an admin, you're
                  in charge of who joins your group.
                </p>
                <div className="btn">
                  <button className="btn1" onClick={handleCopyInstant}>
                    {loading ? "loading..." : " Copy Invite Link"}
                  </button>

                  {/* ✅ Input field appears after clicking button */}
                  {inviteInputShown && (
                    <input
                      value={inviteValue}
                      readOnly
                      style={{
                        marginTop: "10px",
                        padding: "10px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        width: "100%",
                      }}
                      onFocus={(e) => e.target.select()}
                    />
                  )}

                  <button
                    className="btn2"
                    onClick={() => navigate("/start_group")}
                  >
                    View Members
                  </button>
                </div>
              </div>
            </Created>
          </Own>
        </Inner_main>
      </Main>
      <UserDashboardFooter />
      <ToastContainer position="top-right" autoClose={2000} />
    </Content>
  );
};

export default GroupCreated;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #f8f5f0;
  align-items: center;
`;

const Main = styled.div`
  margin-block: 20vh;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Inner_main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .back {
    display: flex;
    align-items: center;
  }
`;

const Own = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Created = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  .inner {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 90%;
      gap: 0.5rem;
    }

    h2 {
      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
    }

    .party_icon {
      font-size: 10rem;
      color: #7b2bbd;
      animation: move 3s infinite;

      @keyframes move {
        0% {
          scale: 0.5;
        }
        50% {
          scale: 0.7;
        }
        100% {
          scale: 1;
        }
      }

      @media (max-width: 768px) {
        font-size: 7rem;
      }
    }

    .btn {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
      }

      .btn1 {
        width: 50%;
        height: 3rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        color: white;
        background-color: #7b2cbf;
        cursor: pointer;
        &:hover {
          background-color: #b088d3;
          transition: all 350ms ease-in-out;
        }

        @media (max-width: 768px) {
          width: 100%;
        }
      }

      .btn2 {
        width: 50%;
        height: 3rem;
        border-radius: 0.5rem;
        border: 1.5px solid #ff7900;
        background-color: transparent;
        color: #ff7900;
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
  }
`;
