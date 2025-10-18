import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

const ForgotCheckEmail = () => {
    const navigate = useNavigate()
  return (
    <ForgotCheckEmail_content>
        <div className='circle_top_left'></div>
        <div className='circle_top_right'></div>
        <div className='circle_mid_left'></div>
        <div className='circle_down_right'></div>
        <div className='brand_name'>
            <h1 style={{letterSpacing: '1px'}}>Splita</h1>
        </div>
        <ForgotCheckEmail_wrapper>
            <h1 style={{textAlign: 'center'}}>Check your email</h1>
            <p style={{color:'#4e4a4a', textAlign: 'center', marginBlock: '1.5rem'}}>Enter the 6 digits reset code Splita sent to your email address and create a new password.</p>

            <form>
                <div className='inp'>
                    <div className='label'>
                        <p style={{color: '#3d3c3c'}}>Enter reset code</p>
                    </div>
                    <div className='input_div'>
                        <input type='password' placeholder='e.g 123456'/>
                    </div>
                </div>

                <div className='inp'>
                    <div className='label'>
                        <p style={{color: '#3d3c3c'}}>Enter your New Password</p>
                    </div>
                    <div className='input_div'>
                        <input type='password' placeholder='New password'/>
                    </div>
                </div>

                <div className='inp'>
                    <div className='label'>
                        <p style={{color: '#3d3c3c'}}>Re-type New Password</p>
                    </div>
                    <div className='input_div'>
                        <input type='password'/>
                    </div>
                </div>

                <button>Create New Password</button>

                <p style={{color: '#7b2cbf', cursor: 'pointer', textAlign: 'center'}} onClick={() => navigate('/forgotpassword')}>Go Back</p>

            </form>
            
        </ForgotCheckEmail_wrapper>
    </ForgotCheckEmail_content>    
  )
}

export default ForgotCheckEmail


const ForgotCheckEmail_content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EFEFEF;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        height: auto;
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

        @media (max-width: 768px) {
            font-size: 1rem;
            left: 7%;
        }
    }
`

const ForgotCheckEmail_wrapper = styled.div`
    width: 45%;
    height: 100%;
    padding-top: 4rem;
    z-index: 1;

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 5rem;
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
        gap: 1.5rem;

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
                height: 2.3rem;
                border: 1px solid #A6A6A6;
                border-radius: 0.2rem;
                display: flex;
                align-items: center;
                padding-right: 0.5rem;

                input{
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    background-color: transparent;
                    padding-left: 0.5rem;
                }
            }
        }

        button{
            width: 100%;
            height: 2.7rem;
            color: white;
            background-color: #ff7900;
            border-radius: 0.7rem;
            border: none;
            cursor: pointer;
            &:hover{
                background-color: #e79751;
                transition: all 350ms ease-in-out;
            }
        }

    }    
`
