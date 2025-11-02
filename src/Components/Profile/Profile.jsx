import React, { useState } from 'react';
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import ProfileUpload from './ProfileUpload';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [showUploadModal, setShowUploadModal] = useState(false);

  const userData = (() => {
    try {
      return JSON.parse(localStorage.getItem('userData')) || {};
    } catch {
      return {};
    }
  })();

  const bankData = (() => {
    try {
      return JSON.parse(localStorage.getItem("bankData")) || {};
    } catch {
      return {};
    }
  })();

  const fullName = userData.fullName || 'User';
  const email = userData.email || 'Not Available';
  const phone = userData.phone || 'Not Available';
  const bankName = bankData.bankName || 'Not Available';
  const accountNumber = bankData.accountNumber || 'Not Available';

  return (
    <Profile_content>
      <div className='circle_top_left'></div>
      <div className='circle_top_right'></div>
      <div className='circle_mid_left'></div>
      <div className='circle_down_right'></div>

      <div className="back" onClick={() => navigate('/useremptystate')}>
        <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
        <p>back home</p>
      </div>

      <Profile_wrapper>
        <h1>My Profile</h1>

        <div className='image_div'>
          <FaRegUserCircle style={{color: '#969695', fontSize: '1.5rem'}}/>
          <div className='edit_cont' onClick={() => setShowUploadModal(true)}>
            <FiEdit style={{ cursor: "pointer" }}/>
          </div>
        </div>

        <div className='first'>
          <div className='top'>
            <p>Name</p>
            <p>{fullName}</p>
          </div>
          <hr />
        </div>

        <div className='first'>
          <div className='top'>
            <p>Email</p>
            <p className='dim-text'>{email}</p>
          </div>
          <hr />
        </div>

        <div className='first'>
          <div className='top'>
            <p>Phone Number</p>
            <p>{phone}</p>
          </div>
          <hr />
        </div>

        <div className='first'>
          <div className='top'>
            <p>Bank Name</p>
            <p>{bankName}</p>
          </div>
          <hr />
        </div>

        <div className='first'>
          <div className='top'>
            <p>Account Number</p>
            <p>{accountNumber}</p>
          </div>
          <hr />
        </div>

        <div className='btn'>
          <button className='btn1'>Cancel</button>
          <button className='btn2'>Save changes</button>
        </div>
      </Profile_wrapper>

      {showUploadModal && <ProfileUpload onClose={() => setShowUploadModal(false)} />}
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
  background-color: #EFEFEF;
  position: relative;
  overflow: hidden;

  .circle_top_left, .circle_top_right, .circle_mid_left, .circle_down_right {
    position: absolute;
    border-radius: 50%;
  }

  .circle_top_left { background-color: #c6bdc8; width: 20rem; height: 20rem; top: -28%; left: -17%; }
  .circle_top_right { background-color: #b4a6b7; width: 3rem; height: 3rem; top: 10%; right: 0.5%; }
  .circle_mid_left { background-color: #f5dcc6; width: 3rem; height: 3rem; top: 60%; left: 0.5%; }
  .circle_down_right { background-color: #f4e2d1; width: 20rem; height: 20rem; bottom: -28%; right: -17%; }

  @media (max-width: 768px) {
    .circle_down_right, .circle_mid_left, .circle_top_left, .circle_top_right {
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

    @media (max-width: 768px) {
      align-self: center;
      width: 9rem;
      height: 9rem;
    }

    .edit_cont {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: #969695;
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

  .btn{
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    .btn1{
      width: 50%;
      height: 2.5rem;
      border-radius: 0.5rem;
      border: none;
      outline: none;
      background-color: #b8b8b8;
      color: white;
      cursor: pointer;
      &:hover{
        background-color: #dfcece;
        transition: all 350ms ease-in-out;
      }
    }  

    .btn2{
      width: 50%;
      height: 2.5rem;
      border-radius: 0.5rem;
      border: none;
      outline: none;
      background-color: #7b2cbf;
      color: white;
      cursor: pointer;
      &:hover{
        background-color: #9551d0;
        transition: all 350ms ease-in-out;
      }
    }  
  }
`;
