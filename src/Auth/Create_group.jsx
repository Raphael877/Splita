import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import Splita_logo from "../assets/Splita_logo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiGroupOutline } from "react-icons/ti";
import { FaRegClock } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { BsCash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Group_details from "../Components/CreategroupModal/Group_details";
import Add_payout_bank from "../Components/CreategroupModal/Add_payout_bank";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Create_group = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    groupName: "",
    contributionAmount: "",
    contributionFrequency: "",
    payoutFrequency: "",
    description: "",
    totalMembers: "",
  });

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setOpenDropdown(null);
  };

  const handleSubmit = () => {
    setShowDetailsModal(true);
  };

  const handleContinue = () => {
    setShowDetailsModal(false);
    setShowBankModal(true);
  };

  const handleSaveBank = () => {
    setShowBankModal(false);
    try {
      localStorage.setItem("createdGroupName", formData.groupName || "");
    } catch (e) {
      console.warn("Could not save groupName", e);
    }
    navigate("/groupcreated", { state: { groupName: formData.groupName } });
  };

  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.groupName.trim()) newErrors.groupName = "Group name is required.";
    if (!formData.contributionAmount.trim()) newErrors.contributionAmount = "Contribution amount is required.";
    if (!formData.contributionFrequency.trim()) newErrors.contributionFrequency = "Select a contribution frequency.";
    if (!formData.payoutFrequency.trim()) newErrors.payoutFrequency = "Select a payout frequency.";
    if (!formData.description.trim()) newErrors.description = "Please describe your group.";
    if (!formData.totalMembers.trim()) newErrors.totalMembers = "Select total members.";
    return newErrors;
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);
      const res = await axios.post(`${BaseUrl}/groups/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const groupId = res?.data?.group?.id;
      localStorage.setItem("createdGroupId", JSON.stringify(groupId));
      console.log(groupId);
      console.log(res);
      toast.success(res?.data?.message);
      handleSubmit();
    } catch (error) {
      toast.error(error?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Create_group_content>
      <ToastContainer />
      <div className="circle_top_left"></div>
      <div className="circle_top_right"></div>
      <div className="circle_mid_left"></div>
      <div className="circle_down_right"></div>

      <div className="brand_name">
        <img src={Splita_logo} alt="Splita Logo" onClick={() => navigate('/')} />
      </div>

      <div
        className="back"
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      >
        <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
        <p>back home</p>
      </div>

      <Create_group_wrapper>
        <h1 style={{ paddingBottom: "1rem" }}>Create group</h1>
        <p>Track ajo with ease on Splita</p>

        <form>
          <div className="inp">
            <div className="label">
              <TiGroupOutline />
              <p style={{ color: "#3d3c3c" }}>Group Name</p>
            </div>
            <div className="input_div">
              <input
                type="text"
                placeholder="e.g Obele"
                value={formData.groupName}
                onChange={(e) =>
                  setFormData({ ...formData, groupName: e.target.value })
                }
              />
            </div>
            {errors.groupName && <p className="error">{errors.groupName}</p>}
          </div>

          <div className="inp">
            <div className="label">
              <BsCash />
              <p style={{ color: "#3d3c3c" }}>Contribution Amount</p>
            </div>
            <div className="input_div">
              <input
                type="text"
                placeholder="e.g 50,000"
                value={formData.contributionAmount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contributionAmount: e.target.value,
                  })
                }
              />
            </div>
            {errors.contributionAmount && <p className="error">{errors.contributionAmount}</p>}
          </div>

          <div className="inp">
            <div className="label">
              <FaRegClock />
              <p style={{ color: "#3d3c3c" }}>Contribution Frequency</p>
            </div>
            <div
              className="input_div"
              style={{ paddingInline: "0.8rem" }}
              onClick={() => toggleDropdown("contribution")}
            >
              <p>{formData.contributionFrequency || "e.g Weekly"}</p>
              <RiArrowDropDownLine style={{ fontSize: "1.5rem" }} />
            </div>
            {openDropdown === "contribution" && (
              <div className="cont_freq_dropdown">
                {["Daily", "Weekly", "Monthly"].map((freq) => (
                  <p
                    key={freq}
                    onClick={() => handleSelect("contributionFrequency", freq)}
                  >
                    {freq}
                  </p>
                ))}
              </div>
            )}
            {errors.contributionFrequency && <p className="error">{errors.contributionFrequency}</p>}
          </div>

          <div className="inp">
            <div className="label">
              <BsCash />
              <p style={{ color: "#3d3c3c" }}>Payout Frequency</p>
            </div>
            <div
              className="input_div"
              style={{ paddingInline: "0.8rem" }}
              onClick={() => toggleDropdown("payout")}
            >
              <p>{formData.payoutFrequency || "e.g Weekly"}</p>
              <RiArrowDropDownLine style={{ fontSize: "1.5rem" }} />
            </div>
            {openDropdown === "payout" && (
              <div className="pay_freq_dropdown">
                {["Daily", "Weekly", "Monthly"].map((freq) => (
                  <p
                    key={freq}
                    onClick={() => handleSelect("payoutFrequency", freq)}
                  >
                    {freq}
                  </p>
                ))}
              </div>
            )}
            {errors.payoutFrequency && <p className="error">{errors.payoutFrequency}</p>}
          </div>

          <div className="inp">
            <div className="label">
              <IoWarningOutline />
              <p style={{ color: "#3d3c3c" }}>Describe Group</p>
            </div>
            <div className="input_div">
              <input
                type="text"
                placeholder="e.g Tell us about the group"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
              />
            </div>
            {errors.description && <p className="error">{errors.description}</p>}
          </div>

          <div className="inp">
            <div className="label">
              <TiGroupOutline />
              <p style={{ color: "#3d3c3c" }}>Total members</p>
            </div>
            <div
              className="input_div"
              style={{ paddingInline: "0.8rem" }}
              onClick={() => toggleDropdown("members")}
            >
              <p>{formData.totalMembers || "e.g Min 2, Max 12"}</p>
              <RiArrowDropDownLine style={{ fontSize: "1.5rem" }} />
            </div>
            {openDropdown === "members" && (
              <div className="total_mem_dropdown">
                {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <p
                    key={num}
                    onClick={() => handleSelect("totalMembers", num.toString())}
                  >
                    {num}
                  </p>
                ))}
              </div>
            )}
            {errors.totalMembers && <p className="error">{errors.totalMembers}</p>}
          </div>

          {loading ? (
            <button style={{ cursor: "progress" }}>loading...</button>
          ) : (
            <button onClick={handleCreate}>Submit</button>
          )}
        </form>
      </Create_group_wrapper>

      {showDetailsModal && (
        <Group_details
          onContinue={handleContinue}
          onClose={() => setShowDetailsModal(false)}
          formData={formData}
        />
      )}

      {showBankModal && (
        <Add_payout_bank
          onSave={handleSaveBank}
          onClose={() => setShowBankModal(false)}
        />
      )}
    </Create_group_content>
  );
};

export default Create_group;

const Create_group_content = styled.div`
  width: 100%;
  padding-bottom: 10vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  .circle_top_left {
    position: absolute;
    border-radius: 50%;
    background-color: #c6bdc8;
    width: 20rem;
    height: 20rem;
    top: -20%;
    left: -17%;
  }
  .circle_top_right {
    position: absolute;
    border-radius: 50%;
    background-color: #b4a6b7;
    width: 3rem;
    height: 3rem;
    top: 10%;
    right: 0.5%;
  }
  .circle_mid_left {
    position: absolute;
    border-radius: 50%;
    background-color: #f5dcc6;
    width: 3rem;
    height: 3rem;
    top: 45%;
    left: 0.5%;
  }
  .circle_down_right {
    position: absolute;
    border-radius: 50%;
    background-color: #f4e2d1;
    width: 20rem;
    height: 20rem;
    bottom: -20%;
    right: -17%;
  }

  @media (max-width: 768px) {
    .circle_down_right,
    .circle_mid_left,
    .circle_top_left,
    .circle_top_right {
      display: none;
    }
  }

  .brand_name {
    position: absolute;
    top: 3%;
    left: 10%;
    z-index: 1;

    img {
      width: 40%;
      height: 100%;
    }
  }

  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 0.5rem;
    top: 4%;
    right: 7%;
    cursor: pointer;

    @media (max-width: 768px) {
      top: 9%;
      left: -65%;
    }

    p{
    @media (max-width:768px) {
      display: none;
    }
    }
  }
`;

const Create_group_wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 6rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 8rem;
  }

  h1 {
    font-size: 2.5rem;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 2rem;
    }
  }

  p {
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  form {
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .inp {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      position: relative;

      .cont_freq_dropdown,
      .pay_freq_dropdown,
      .total_mem_dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: white;
        border-radius: 0.5rem;
        display: flex;
        padding-left: 1rem;
        padding-block: 0.5rem;
        flex-direction: column;
        width: 100%;
        max-height: 7rem;
        overflow-y: auto;
        z-index: 5;

        p {
          cursor: pointer;
          font-size: 0.85rem;
          padding-block: 0.2rem;
          &:hover {
            color: #7b2cbf;
          }
        }
      }

      .label {
        display: flex;
        gap: 0.5rem;

        @media (max-width: 768px) {
          font-size: 0.8rem;
        }
      }

      .input_div {
        width: 100%;
        height: 3.2rem;
        border: 1px solid #a6a6a6;
        border-radius: 0.4rem;
        display: flex;
        align-items: center;
        padding-right: 0.5rem;
        justify-content: space-between;
        overflow: hidden;

        @media (max-width: 768px) {
          height: 2.8rem;
        }

        p {
          color: #9c9a9a;
          font-size: 0.9rem;
        }

        input {
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
          background-color: transparent;
          padding-left: 0.8rem;
        }
      }
    }

    .error {
      color: #d93025; 
      font-size: 0.8rem;
      margin-top: 0.2rem;
      margin-left: 0.3rem;
      font-weight: 500;

      @media (max-width: 768px) {
        display: flex;
        width: 100%;
      }
    }

    button {
      margin-top: 1rem;
      width: 100%;
      height: 3.5rem;
      color: white;
      background-color: #7b2cbf;
      border-radius: 0.7rem;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: #9472b2;
        transition: all 350ms ease-in-out;
      }

      @media (max-width: 768px) {
        height: 3rem;
      }
    }
  }
`;
