import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import ProfileUpload from "./ProfileUpload";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Profile = () => {
  const navigate = useNavigate();

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const storedUser = JSON.parse(localStorage.getItem("userData")) || {};
  const storedBank = JSON.parse(localStorage.getItem("bankData")) || {};

  const [formData, setFormData] = useState({
    fullName: storedUser.fullName || "",
    email: storedUser.email || "",
    phone: storedUser.phone || "",
    profilePicture: storedUser.profilePicture || "",
    profilePictureFile: null,
    bankName: storedBank.bankName || "",
    accountNumber: storedBank.accountNumber || "",
    payoutAccountId: storedBank.id || null,
  });

  const [editableField, setEditableField] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`${BaseUrl}/users/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const payoutRes = await axios.get(`${BaseUrl}/groups/payout_accounts`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const userData = userRes.data.data;
        const payoutAccount = payoutRes.data.data[0] || {};

        setFormData({
          fullName: userData.name || "",
          email: userData.email || "",
          phone: userData.phone || "",
          profilePicture: userData.profilePicture || "",
          profilePictureFile: null,
          bankName: payoutAccount.bankName || "",
          accountNumber: payoutAccount.accountNumber || "",
          payoutAccountId: payoutAccount.id || null,
        });

        localStorage.setItem(
          "userData",
          JSON.stringify({
            fullName: userData.name,
            email: userData.email,
            phone: userData.phone,
            profilePicture: userData.profilePicture,
          })
        );
        localStorage.setItem(
          "bankData",
          JSON.stringify({
            bankName: payoutAccount.bankName || "",
            accountNumber: payoutAccount.accountNumber || "",
            id: payoutAccount.id || null,
          })
        );
      } catch (err) {
        console.error("Error fetching profile or payout account:", err);
      }
    };

    fetchData();
  }, []);

  const handleFieldClick = (field) => setEditableField(field);

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleCancel = () => {
    const storedUser = JSON.parse(localStorage.getItem("userData")) || {};
    const storedBank = JSON.parse(localStorage.getItem("bankData")) || {};
    setFormData({
      fullName: storedUser.fullName || "User",
      email: storedUser.email || "Not Available",
      phone: storedUser.phone || "Not Available",
      profilePicture: storedUser.profilePicture || "",
      profilePictureFile: null,
      bankName: storedBank.bankName || "Not Available",
      accountNumber: storedBank.accountNumber || "Not Available",
      payoutAccountId: storedBank.id || null,
    });
    setEditableField(null);
  };

  const handleSave = async () => {
    try {
      const userForm = new FormData();
      userForm.append("name", formData.fullName);
      userForm.append("phone", formData.phone);
      if (formData.profilePictureFile) {
        userForm.append("profilePicture", formData.profilePictureFile);
      }

      const userRes = await axios.put(`${BaseUrl}/users/profile`, userForm, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (formData.payoutAccountId) {
        await axios.put(
          `${BaseUrl}/groups/payout-account/${formData.payoutAccountId}`,
          {
            bankName: formData.bankName,
            accountNumber: formData.accountNumber,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      const updatedUser = userRes.data.data;

      localStorage.setItem(
        "userData",
        JSON.stringify({
          fullName: updatedUser.name,
          email: updatedUser.email,
          phone: updatedUser.phone,
          profilePicture: updatedUser.profilePicture,
        })
      );
      localStorage.setItem(
        "bankData",
        JSON.stringify({
          bankName: formData.bankName,
          accountNumber: formData.accountNumber,
          id: formData.payoutAccountId,
        })
      );

      setFormData((prev) => ({
        ...prev,
        fullName: updatedUser.name,
        phone: updatedUser.phone,
        profilePicture: updatedUser.profilePicture,
      }));

      setEditableField(null);
    } catch (err) {
      console.error(err);
      t("Failed to update profile.");
    }
  };

  const inputStyle = {
    border: "none",
    outline: "none",
    background: "transparent",
    color: "inherit",
    font: "inherit",
    textAlign: "right",
    width: "auto",
    minWidth: "50px",
    whiteSpace: "nowrap",
    overflow: "hidden",
  };

  // Handle the image upload event from modal
  const handleImageUpload = (imageUrl) => {
    setProfileImage(imageUrl);
    localStorage.setItem("profileImage", imageUrl); // persist for refresh
  };

  return (
    <Profile_content>
      <div className="circle_top_left"></div>
      <div className="circle_top_right"></div>
      <div className="circle_mid_left"></div>
      <div className="circle_down_right"></div>

      <div className="back" onClick={() => navigate(-1)}>
        <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
        <p>back home</p>
      </div>

      <Profile_wrapper>
        <h1>My Profile</h1>
        <div className="image_div">
          {formData.profilePicture ? (
            <img
              src={formData.profilePicture}
              alt="Profile"
              style={{ width: 80, height: 80, borderRadius: "50%" }}
            />
          ) : (
            <FaRegUserCircle style={{ color: "#969695", fontSize: "1.5rem" }} />
          )}
          <div className="edit_cont" onClick={() => setShowUploadModal(true)}>
            <FiEdit style={{ cursor: "pointer" }} />
          </div>
        </div>

        <div className="first">
          <div className="top">
            <p>Name</p>
            {editableField === "fullName" ? (
              <input
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                autoFocus
                style={inputStyle}
              />
            ) : (
              <p onClick={() => handleFieldClick("fullName")}>
                {formData.fullName}
              </p>
            )}
          </div>
          <hr />
        </div>

        <div className="first">
          <div className="top">
            <p>Email</p>
            <p className="dim-text">{formData.email}</p>
          </div>
          <hr />
        </div>

        <div className="first">
          <div className="top">
            <p>Phone Number</p>
            {editableField === "phone" ? (
              <input
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                autoFocus
                style={inputStyle}
              />
            ) : (
              <p onClick={() => handleFieldClick("phone")}>{formData.phone}</p>
            )}
          </div>
          <hr />
        </div>

        <div className="first">
          <div className="top">
            <p>Bank Name</p>
            {editableField === "bankName" ? (
              <input
                value={formData.bankName}
                onChange={(e) => handleChange("bankName", e.target.value)}
                autoFocus
                style={inputStyle}
              />
            ) : (
              <p onClick={() => handleFieldClick("bankName")}>
                {formData.bankName}
              </p>
            )}
          </div>
          <hr />
        </div>

        <div className="first">
          <div className="top">
            <p>Account Number</p>
            {editableField === "accountNumber" ? (
              <input
                type="number"
                value={formData.accountNumber}
                onChange={(e) => handleChange("accountNumber", e.target.value)}
                autoFocus
                style={inputStyle}
              />
            ) : (
              <p onClick={() => handleFieldClick("accountNumber")}>
                {formData.accountNumber}
              </p>
            )}
          </div>
          <hr />
        </div>

        <div className="btn">
          <button className="btn1" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn2" onClick={handleSave}>
            Save changes
          </button>
        </div>
      </Profile_wrapper>

      {showUploadModal && (
        <ProfileUpload
          onClose={() => setShowUploadModal(false)}
          onUpload={(imageUrl, file) =>
            setFormData((prev) => ({
              ...prev,
              profilePicture: imageUrl,
              profilePictureFile: file,
            }))
          }
        />
      )}
    </Profile_content>
  );
};

export default Profile;

const Profile_content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  .circle_top_left,
  .circle_top_right,
  .circle_mid_left,
  .circle_down_right {
    position: absolute;
    border-radius: 50%;
  }

  .circle_top_left {
    background-color: #c6bdc8;
    width: 20rem;
    height: 20rem;
    top: -28%;
    left: -17%;
  }
  .circle_top_right {
    background-color: #b4a6b7;
    width: 3rem;
    height: 3rem;
    top: 10%;
    right: 0.5%;
  }
  .circle_mid_left {
    background-color: #f5dcc6;
    width: 3rem;
    height: 3rem;
    top: 60%;
    left: 0.5%;
  }
  .circle_down_right {
    background-color: #f4e2d1;
    width: 20rem;
    height: 20rem;
    bottom: -28%;
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

  .back {
    display: flex;
    align-items: center;
    position: absolute;
    gap: 0.5rem;
    top: 8%;
    left: 7%;
    cursor: pointer;

    @media (max-width: 768px) {
      top: 5%;
    }

    p {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

const Profile_wrapper = styled.div`
  width: 50%;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 4rem;
  }

  .image_div {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .profile_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

    .edit_cont {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: #c0c0b4;
      color: #ffc18a;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      right: 5%;
      backdrop-filter: blur(10px);
    }
  }

  .first {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-inline: 1rem;

      p {
        font-size: 1rem;
        color: #333;
      }

      .dim-text {
        color: #999;
      }
    }
  }

  .btn {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    .btn1 {
      width: 50%;
      height: 2.5rem;
      border-radius: 0.5rem;
      border: none;
      outline: none;
      background-color: #b8b8b8;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #dfcece;
        transition: all 350ms ease-in-out;
      }
    }

    .btn2 {
      width: 50%;
      height: 2.5rem;
      border-radius: 0.5rem;
      border: none;
      outline: none;
      background-color: #7b2cbf;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #9551d0;
        transition: all 350ms ease-in-out;
      }
    }
  }
`;
