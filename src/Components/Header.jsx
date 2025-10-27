import React from 'react'
import styled from 'styled-components'
import Splita_logo from '../assets/Splita_logo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <Header_content>
        <Header_wrapper>
            <img src={Splita_logo} className='brand_logo' onClick={() => navigate("/")}/>
            <ul>
                <li>Home</li>
                <li>Benefits</li>
                <li>About Us</li>
                <li>How it works</li>
            </ul>
            <div className='header_btn'>
                <button className='header_btn1' onClick={()=> navigate('/signin')}>Sign In</button>
                <button className='header_btn2' onClick={()=> navigate('/signup')}>Sign Up</button>
            </div>
        </Header_wrapper>
    </Header_content>
  )
}

export default Header

const Header_content = styled.div`
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

const Header_wrapper = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .brand_logo{
        width: 12%;
        height: 65%;
    }

    ul{
        width: 40%;
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

    .header_btn{
        width: 17%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header_btn1{
            background-color: transparent;
            width: 45%;
            height: 2rem;
            cursor: pointer;
            color: #7B2CBF;
            border: 1px solid #7B2CBF;
            border-radius: 0.5rem;
            &:hover{
                color: #9556CC;
                transition: all 350ms ease-in-out;
            }
        }

        .header_btn2{
            background-color: #FF7900;
            width: 45%;
            height: 2rem;
            cursor: pointer;
            border: none;
            border-radius: 0.5rem;
            color: white;
            &:hover{
                background-color: #FF9433;
                transition: all 350ms ease-in-out;
            }
        }
    }
`