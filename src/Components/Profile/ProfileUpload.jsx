import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegImage, FaRegTimesCircle } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileUpload = ({ onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
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
            
            <h3>Tap to change</h3>
            <FaRegTimesCircle className='cancel_icon'
              style={{ fontSize: '1.4rem', cursor: 'pointer' }}
              onClick={onClose}
            />
          

          <div className='img_div'>
            <FaRegImage style={{ cursor: 'pointer', fontSize: '1.8rem' }} />
            <p>Upload a picture</p>
          </div>

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
`

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
`

const Inner_wrap = styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .cancel_icon{
        position: absolute;
        top: 10%;
        right: 5%;
    }

    .img_div{
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

    &:hover {
      border-color: #7b2cbf;
      color: #7b2cbf;
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
`
