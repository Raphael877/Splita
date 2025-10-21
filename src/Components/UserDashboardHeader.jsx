import React from 'react'
import styled from 'styled-components'
import Splita_logo from '../assets/Splita_logo.png'
import Profile_img from '../assets/Profile_img.png'
import { IoSearch } from "react-icons/io5";

const UserDashboardHeader = () => {
  return (
    <UserDashboardHeader_content>
        <UserDashboardHeader_wrapper>
            <img src={Splita_logo} className='brand_logo'/>
            <ul>
                <li>Home</li>
                <li>My groups</li>
                <li>Contributions</li>
            </ul>
            <div className='right'>
                <div className='search_input'>
                    <IoSearch style={{color: '#777777', cursor: 'pointer'}}/>
                    <input type='text' placeholder='Search'/>
                </div>
                <div className='profile'>
                    <img src={Profile_img} />
                    <p>Chidera Benjamin</p>
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
`

const UserDashboardHeader_wrapper = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .brand_logo{
        width: 12%;
        height: 65%;
        cursor: pointer;
    }

    ul{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;

        li{
            cursor: pointer;
            &:hover{
                color: #9556CC;
                transition: all 350ms ease-in-out;
            }
        }
    }
    .right{
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;

        .search_input{
            width: 50%;
            height: 50%;
            display: flex;
            align-items: center;
            border-radius: 4rem;
            background-color: #EEEEEE;
            padding-left: 0.5rem;
            gap: 0.3rem;

            input{
                border: none;
                outline: none;
                width: 100%;
                height: 100%;
                background-color: transparent;
            }
        }
        .profile{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }
    }
`