import React, { useState } from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";
import { PiBank } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add_payout_bank = ({ onSave, onClose }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");

  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    isDefault: true,
  });

  const banks = [
    "Access Bank",
    "Citibank",
    "Ecobank Nigeria",
    "Fidelity Bank",
    "First Bank of Nigeria",
    "First City Monument Bank (FCMB)",
    "Guaranty Trust Bank (GTBank)",
    "Heritage Bank",
    "Keystone Bank",
    "Polaris Bank",
    "Stanbic IBTC Bank",
    "Standard Chartered Bank",
    "Sterling Bank",
    "Union Bank of Nigeria",
    "United Bank for Africa (UBA)",
    "Unity Bank",
    "Wema Bank",
    "Zenith Bank",
    "Kuda",
    "Opay",
    "Moniepoint",
    "PalmPay",
  ];

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
    setFormData({
      ...formData,
      bankName: bank,
    });
    setOpenDropdown(false);
  };

  const handleSave = () => {
    const bankData = {
      bankName: selectedBank,
      accountNumber: formData.accountNumber,
      isDefault: true,
    };

    localStorage.setItem("bankData", JSON.stringify(bankData));

    if (onSave) onSave();
    navigate("/group_created");
  };

  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const handlePayout = async () => {
    try {
      const res = await axios.post(
        `${BaseUrl}/groups/payout-account`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", res.data);
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    } finally {
      handleSave();
    }
  };

  return (
    <Add_payout_bank_content>
      <Add_payout_bank_wrapper>
        <Inner_wrap>
          <Header>
            <h3>Add Payout Bank</h3>
            <FaRegTimesCircle
              style={{ fontSize: "1.3rem", cursor: "pointer" }}
              onClick={onClose}
            />
          </Header>
          <hr
            style={{ height: "2px", backgroundColor: "black", border: "none" }}
          />

          <form>
            <div className="main_label">
              <div className="label">
                <PiBank style={{ fontSize: "1.3rem" }} />
                <p>Bank name</p>
              </div>

              <div
                className="input_div"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                <p>{selectedBank || "Select a Bank"}</p>
                <RiArrowDropDownLine style={{ fontSize: "1.5rem" }} />
              </div>

              {openDropdown && (
                <div className="bank_dropdown">
                  {banks.map((bank) => (
                    <p key={bank} onClick={() => handleBankSelect(bank)}>
                      {bank}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="main_label">
              <div className="label">
                <PiBank style={{ fontSize: "1.3rem" }} />
                <p>Account Number</p>
              </div>
              <div className="input_div">
                <input
                  type="text"
                  placeholder="e.g 7038204858"
                  value={formData.accountNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      accountNumber: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <button type="button" onClick={handlePayout}>
              Save Bank
            </button>
          </form>
        </Inner_wrap>
      </Add_payout_bank_wrapper>
    </Add_payout_bank_content>
  );
};

export default Add_payout_bank;

const Add_payout_bank_content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Add_payout_bank_wrapper = styled.div`
  width: 40%;
  height: 60%;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Inner_wrap = styled.div`
  width: 90%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;

    .main_label {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      position: relative;

      .label {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      .input_div {
        width: 100%;
        height: 2.5rem;
        border-radius: 0.5rem;
        border: 1.5px solid #bbbbbb;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.8rem;
        cursor: pointer;

        p {
          color: #9c9a9a;
          font-size: 0.9rem;
        }

        input {
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
        }
      }

      .bank_dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        width: 100%;
        max-height: 8rem;
        overflow-y: auto;
        margin-top: 0.3rem;
        z-index: 10;

        p {
          padding: 0.5rem 1rem;
          cursor: pointer;
          font-size: 0.9rem;
          &:hover {
            background-color: #f1f1f1;
            color: #7b2cbf;
          }
        }
      }
    }

    button {
      width: 100%;
      height: 3rem;
      background-color: #7b2cbf;
      color: white;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: #9472b2;
        transition: all 350ms ease-in-out;
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
