import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegImage, FaRegTimesCircle } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileUpload = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Simulate save action
  const handleSave = () => {
    if (!selectedImage) {
      toast.error("Please select an image first!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Upload successful!");
      setTimeout(() => {
        onClose();
      }, 1500);
    }, 1500);
  };

  return (
    <ProfileUpload_content>
      <ToastContainer />
      <ProfileUpload_wrapper>
        <Inner_wrap>
          <FaRegTimesCircle 
            className="cancel_icon"
            style={{ fontSize: '1.4rem', cursor: 'pointer' }}
            onClick={onClose}
          />

          <h3>Tap to change</h3>

          <div className="img_div" onClick={() => document.getElementById('fileInput').click()}>
            {selectedImage ? (
              <img src={selectedImage} alt="Preview" className="preview_img" />
            ) : (
              <>
                <FaRegImage style={{ cursor: 'pointer', fontSize: '1.8rem' }} />
                <p>Click to upload a picture</p>
              </>
            )}
          </div>

          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

          <button type="button" onClick={handleSave} disabled={loading}>
            {loading ? <ClipLoader size={20} color="#fff" /> : "Save Picture"}
          </button>
        </Inner_wrap>
      </ProfileUpload_wrapper>
    </ProfileUpload_content>
  );
};

export default ProfileUpload;

const ProfileUpload_content = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  top: 0;
  left: 0;
`;

const ProfileUpload_wrapper = styled.div`
  width: 40%;
  height: 50%;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  position: relative;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Inner_wrap = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  .cancel_icon {
    position: absolute;
    top: 10%;
    right: 5%;
  }

  .img_div {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border: 2px solid #c0c0c0;
    color: #7e7e7e;
    border-radius: 0.3rem;
    transition: border-color 0.3s ease-in-out;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: #7b2cbf;
      color: #7b2cbf;
    }

    .preview_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  button {
    width: 100%;
    height: 3rem;
    background-color: #7b2cbf;
    color: white;
    border-radius: 0.8rem;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #9472b2;
      transition: all 350ms ease-in-out;
    }
  }
`;
