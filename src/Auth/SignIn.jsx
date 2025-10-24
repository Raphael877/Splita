import React from 'react'
import styled from "styled-components"
import Splita_logo from '../assets/Splita_logo.png'
import { GoEye } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go"; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
  return (
    <SignIn_content>
        <div className='circle_top_left'></div>
        <div className='circle_top_right'></div>
        <div className='circle_mid_left'></div>
        <div className='circle_down_right'></div>
        <div className='brand_name'>
            <img src={Splita_logo} />
        </div>
        <SignIn_wrapper>
            <h1 style={{textAlign: 'center'}}>Welcome Back!</h1>
            <p style={{color:'#888888', textAlign: 'center', marginBlock: '1.5rem'}}>Please enter your details to sign in</p>

            <form>

                <div className='inp'>
                    <div className='label'>
                        <MdOutlineEmail/>
                        <p style={{color: '#3d3c3c'}}>Email Address</p>
                    </div>
                    <div className='input_div'>
                        <input type='text' placeholder='Enter your email address' />
                    </div>
                </div>

                <div className='inp'>
                    <div className='label'>
                        <MdLockOutline/>
                        <p style={{color: '#3d3c3c'}}>Password</p>
                    </div>
                    <div className='input_div'>
                        <input type={show ? 'text' : "password"} placeholder='Enter your password' />
                        <div className='icon' onClick={() => setShow(!show)}>
                            {show ? <GoEye style={{cursor: 'pointer'}}/> : <GoEyeClosed style={{cursor: 'pointer'}}/>}
                        </div>
                    </div>
                </div>

                <p style={{color: '#7b2cbf', cursor: 'pointer', marginBlock: '0.5rem'}} onClick={() => navigate('/forgotpassword')}>Forgot Password?</p>

                <button style={{cursor: 'pointer'}} onClick={() => navigate('/useremptystate')}>Sign In</button>

                <p style={{textAlign: 'center'}}>Don't have an account? <span style={{color: '#7b2cbf', cursor: 'pointer'}} onClick={() => navigate('/signup')}>Sign Up</span></p>

            </form>
            
        </SignIn_wrapper>
    </SignIn_content>    
  )
}

export default SignIn


const SignIn_content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EFEFEF;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 100vh;
    }

    .circle_top_left{
        position: absolute;
        border-radius: 50%;
        background-color: #c6bdc8;
        width: 20rem;
        height: 20rem;
        top: -28%;
        left: -17%;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .circle_top_right{
        position: absolute;
        border-radius: 50%;
        background-color: #b4a6b7;
        width: 3rem;
        height: 3rem;
        top: 10%;
        right: 0.5%;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .circle_mid_left{
        position: absolute;
        border-radius: 50%;
        background-color: #f5dcc6;
        width: 3rem;
        height: 3rem;
        top: 60%;
        left: 0.5%;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .circle_down_right{
        position: absolute;
        border-radius: 50%;
        background-color: #f4e2d1;
        width: 20rem;
        height: 20rem;
        bottom: -28%;
        right: -17%;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .brand_name{
        position: absolute;
        color: #240046;
        top: 3%;
        left: 10%;
        z-index: 1;

        img{
            width: 40%;
            height: 100%;
        }

        @media (max-width: 768px) {
            left: 7%;
        }
    }
`

const SignIn_wrapper = styled.div`
    width: 50%;
    height: 100%;
    padding-top: 6rem;
    z-index: 1;

    h1{
        font-size: 2.5rem;
    }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 5rem;
  }

  h1{
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

    form{
        width: 100%;
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .inp{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .label{
                display: flex;
                gap: 0.5rem;
            }

            .input_div{
                width: 100%;
                height: 3.2rem;
                border: 1px solid #A6A6A6;
                border-radius: 0.4rem;
                display: flex;
                align-items: center;
                padding-right: 0.5rem;

                input{
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    background-color: transparent;
                    padding-left: 0.8rem;
                }
            }
        }
        
        button{
            width: 100%;
            height: 3.5rem;
            background-color: #7b2cbf;
            color: white;
            border-radius: 0.8rem;
            border: none;
            cursor: pointer;
            &:hover{
                background-color: #9472b2;
                transition: all 350ms ease-in-out;
            }
        }
    }    
`
