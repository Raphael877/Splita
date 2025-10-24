import React from 'react'
import styled from "styled-components"
import Splita_logo from '../assets/Splita_logo.png'
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate()
  return (
    <ForgotPassword_content>
        <div className='circle_top_left'></div>
        <div className='circle_top_right'></div>
        <div className='circle_mid_left'></div>
        <div className='circle_down_right'></div>
        <div className='brand_name'>
            <img src={Splita_logo} />
        </div>
        <ForgotPassword_wrapper>
            <h1 style={{textAlign: 'center'}}>Forgot Password</h1>
            <p style={{color:'#888888', textAlign: 'center', marginBlock: '1rem'}}>Enter your email to reset your password</p>

            <form>
                <div className='inp'>
                    <div className='label'>
                        <MdOutlineEmail/>
                        <p style={{color: '#3d3c3c'}}>Email Address</p>
                    </div>
                    <div className='input_div'>
                        <input type='text' placeholder='e.g John@gmail.com' />
                    </div>
                </div>

                <button onClick={() => navigate('/forgotcheckemail')}>Send Instructions</button>

                <p style={{color: '#7b2cbf', cursor: 'pointer', textAlign: 'center'}} onClick={() => navigate('/signin')}>Go back</p>

            </form>
        </ForgotPassword_wrapper>
    </ForgotPassword_content>    
  )
}

export default ForgotPassword


const ForgotPassword_content = styled.div`
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

const ForgotPassword_wrapper = styled.div`
    width: 50%;
    height: 100%;
    padding-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;

    h1{
        font-size: 2.5rem;
    }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 85%;
  }

  h1{
    @media (max-width: 768px) {
      font-size: 1.5rem;
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
            margin-block: 1rem;
            &:hover{
                background-color: #9472b2;
                transition: all 350ms ease-in-out;
            }
        }
    }
`
