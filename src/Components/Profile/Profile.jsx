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

  return (
    <Profile_content>
      
      <div className='circle_top_left'></div>
      <div className='circle_top_right'></div>
      <div className='circle_mid_left'></div>
      <div className='circle_down_right'></div>

      <div className="back" style={{ cursor: "pointer" }} onClick={() => navigate('/useremptystate')}>
        <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
        <p>back home</p>
      </div>

      <Profile_wrapper>
        <h1>My Profile</h1>
        <div className='image_div'>
          <FaRegUserCircle style={{color: '#969695', fontSize: '1.5rem'}}/>
          <div 
            className='edit_cont' 
            onClick={() => setShowUploadModal(true)}
          >
            <FiEdit style={{ cursor: "pointer" }}/>
          </div>
        </div>

        <div className='first'>
          <div className='top'>
            <p>Name</p>
            <p>{userData.fullName || 'User'}</p>
          </div>
          <hr></hr>
        </div>

        <div className='first'>
          <div className='top'>
            <p>Email</p>
            <p>{userData.email || 'User'}</p>
          </div>
          <hr></hr>
        </div>

        <div className='first'>
          <div className='top'>
            <p>Phone Number</p>
            <p>{userData.phone || 'User'}</p>
          </div>
          <hr></hr>
        </div>

        <div className='first'>
          <div className='top'>
            <p>Bank Name</p>
            <p>Splita Bank</p>
          </div>
          <hr></hr>
        </div>

        <div className='first'>
          <div className='top'>
            <p>Account Number</p>
            <p>7038204858</p>
          </div>
          <hr></hr>
        </div>
      </Profile_wrapper>

      {showUploadModal && (
        <ProfileUpload onClose={() => setShowUploadModal(false)} />
      )}
    </Profile_content>
  );
};

export default Profile;


const Profile_content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EFEFEF;
    position: relative;
    overflow: hidden;

    .circle_top_left{
        position: absolute;
        border-radius: 50%;
        background-color: #c6bdc8;
        width: 20rem;
        height: 20rem;
        top: -28%;
        left: -17%;
    }

    .circle_top_right{
        position: absolute;
        border-radius: 50%;
        background-color: #b4a6b7;
        width: 3rem;
        height: 3rem;
        top: 10%;
        right: 0.5%;
    }

    .circle_mid_left{
        position: absolute;
        border-radius: 50%;
        background-color: #f5dcc6;
        width: 3rem;
        height: 3rem;
        top: 60%;
        left: 0.5%;
    }

    .circle_down_right{
        position: absolute;
        border-radius: 50%;
        background-color: #f4e2d1;
        width: 20rem;
        height: 20rem;
        bottom: -28%;
        right: -17%;
    }

        @media (max-width: 768px) {
            .circle_down_right, .circle_mid_left, .circle_top_left, .circle_top_right{
            display: none;
        }
    }

    .back {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        gap: 0.5rem;
        top: 8%;
        left: 7%;
        cursor: pointer;

        @media (max-width: 768px) {
            top: 5%;
        }
    }
`

const Profile_wrapper = styled.div`
    width: 50%;
    height: 100%;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        width: 85%;
        padding-top: 4rem;
    }

    .image_div{
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

        .edit_cont{
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

    .first{
        display: flex;
        gap: 1.5rem;
        flex-direction: column;

        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-inline: 1rem;
        }
    }
`