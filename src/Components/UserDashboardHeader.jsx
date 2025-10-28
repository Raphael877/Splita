import React from 'react'
import styled from 'styled-components'
import Splita_logo from '../assets/Splita_logo.png'
import Profile_img from '../assets/Profile_img.png'
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router-dom';

const UserDashboardHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userData = (() => {
      try {
        return JSON.parse(localStorage.getItem('userData')) || {};
      } catch {
        return {};
      }
    })();

  return (
    <UserDashboardHeader_content>
        <UserDashboardHeader_wrapper>
            <img src={Splita_logo} className='brand_logo' onClick={() => navigate("/")}/>
            <ul>
                <li className={location.pathname === '/useremptystate' ? 'active' : ''} onClick={() => navigate('/useremptystate')}>Home</li>
                <li className={location.pathname === '/mygroup' ? 'active' : ''} onClick={() => navigate('/mygroup')}>My groups</li>
                <li className={location.pathname === '/mycontribution' ? 'active' : ''} onClick={() => navigate('/mycontribution')}>Contributions</li>
            </ul>
            <div className='right'>
                <div className='profile' onClick={() => navigate('/profile')}>
                    <img src={Profile_img} />
                    <p>{userData.fullName || 'Guest User'}</p>
                    <IoIosArrowDown/>
                </div>
            </div>
        </UserDashboardHeader_wrapper>
    </UserDashboardHeader_content>
  )
}

export default UserDashboardHeader

const UserDashboardHeader_content = styled.div`
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: fixed;
    top: 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media (max-width: 768px) {
      background-color: #f8f5f0;
      box-shadow: none;
    }
`

const UserDashboardHeader_wrapper = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      width: 90%;
    }

    .brand_logo{
        width: 12%;
        height: 65%;
        cursor: pointer;

        @media (max-width: 768px) {
            width: 30%;
            height: 40%;
        }
    }

    ul{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;

        @media (max-width: 768px) {
            display: none;
        }

        li{
            cursor: pointer;
            &:hover{
                color: #9556CC;
                transition: all 350ms ease-in-out;
            }

            &.active{
                font-weight: 700;
            }
        }
    }
    .right{
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;

        .profile{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 0.5rem;
            cursor: pointer;

            @media (max-width: 768px) {
                justify-content: flex-end;
            }

            p{
                @media (max-width: 768px) {
                    display: none;
                }
            }
        }
    }
`