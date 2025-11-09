// src/Pages/VerifyContribution.jsx
import React, { useEffect, useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const token = JSON.parse(localStorage.getItem(import.meta.env.VITE_USERTOKEN));
const BaseUrl = import.meta.env.VITE_BaseUrl;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const VerifyContribution = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const verifyContribution = useCallback(
    async (reference, groupId) => {
      try {
        setLoading(true);

        const res = axios.post(
          `${BaseUrl}/Payments/verify-contribution`,
          { reference },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        toast.success(
          res?.data?.message || "Contribution verified successfully!"
        );

        setTimeout(() => {
          navigate(`/womendashboard/${groupId}`);
        }, 2000);
      } catch (error) {
        console.error(error);
        toast.error(
          error?.response?.data?.message || "Failed to verify contribution"
        );

        setTimeout(() => {
          navigate(
            `/womendashboard/${localStorage.getItem("selectedGroupId")}`
          );
        }, 2000);
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  useEffect(() => {
    const hash = window.location.hash;
    const query = hash.split("?")[1];
    if (!query) return;

    const params = new URLSearchParams(query);
    const reference = params.get("reference");
    const groupId = localStorage.getItem("selectedGroupId");

    if (reference) verifyContribution(reference, groupId);
  }, [verifyContribution]);

  return (
    <Content>
      <ToastContainer position="top-right" autoClose={2000} />
      {loading && (
        <Modal>
          <Spinner />
          <p>Processing payment...</p>
        </Modal>
      )}
    </Content>
  );
};

export default VerifyContribution;

// 💅 Styles
const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  width: 30%;
  height: 15rem;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 70%;
    height: 12rem;
  }
`;

const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;
