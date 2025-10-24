import React from 'react'
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiGroupOutline } from "react-icons/ti";
import { FaRegClock } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { BsCash } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Create_group = () => {
    const navigate = useNavigate()
  return (
    <Create_group_content>
        <div className="circle_top_left"></div>
        <div className="circle_top_right"></div>
        <div className="circle_mid_left"></div>
        <div className="circle_down_right"></div>
        <div className="brand_name">
            <h1 style={{ letterSpacing: "1px", paddingBottom: '1rem' }}>Splita</h1>
        </div>
        <div className='back' style={{cursor: 'pointer'}} onClick={() => navigate('/userdashboard')}>
            <IoIosArrowRoundBack/>
            <p>back home</p>
        </div>
        <Create_group_wrapper>
            <h1 style={{ paddingBottom: '1rem' }}>Create group</h1>
            <p>Track ajo with ease on Splita</p>

            <form>

                <div className="inp">
                    <div className="label">
                        <TiGroupOutline />
                        <p style={{ color: "#3d3c3c" }}>Group Name</p>
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="e.g Obele" />
                    </div>
                </div>

                <div className="inp">
                    <div className="label">
                        <BsCash />
                        <p style={{ color: "#3d3c3c" }}>Contribution Amount</p>
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="e.g 50,000" />
                    </div>
                </div>

                <div className="inp">
                    <div className="label">
                        <FaRegClock />
                        <p style={{ color: "#3d3c3c" }}>Contribution Frequency</p>
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="e.g Weekly" />
                    </div>
                </div>

                <div className="inp">
                    <div className="label">
                        <BsCash />
                        <p style={{ color: "#3d3c3c" }}>Payout Frequency</p>
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="e.g Weekly" />
                    </div>
                </div>

                <div className="inp">
                    <div className="label">
                        <IoWarningOutline />
                        <p style={{ color: "#3d3c3c" }}>Penalty fee</p>
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="e.g 10%" />
                    </div>
                </div>

                <div className="inp">
                    <div className="label">
                        <IoWarningOutline />
                        <p style={{ color: "#3d3c3c" }}>Describe Group</p>
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="e.g Tell us about the group" />
                    </div>
                </div>

                <button onClick={() => navigate('/userdashboard')}>Submit</button>

            </form>
        </Create_group_wrapper>
    </Create_group_content>
  )
}

export default Create_group

const Create_group_content= styled.div`
    width: 100%;
  height: 130vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) and (min-width: 768px) {
    height: 150vh;
  }

  @media (max-width: 768px) {
    height: auto;
  }

  .circle_top_left {
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

  .circle_top_right {
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

  .circle_mid_left {
    position: absolute;
    border-radius: 50%;
    background-color: #f5dcc6;
    width: 3rem;
    height: 3rem;
    top: 45%;
    left: 0.5%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .circle_down_right {
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

  .brand_name {
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

  .back{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 0.5rem;
    top: 4%;
    right: 7%;

    @media (max-width: 768px) {
      right: 7%;

      p{
        display: none;
      }
    }
  }
`

const Create_group_wrapper= styled.div`
    width: 45%;
  height: 100%;
  padding-top: 4rem;
  z-index: 1;

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 85%;
    padding-top: 8rem;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 6rem;
    padding-bottom: 2rem;
  }

  h1{
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  form {
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .inp {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .label {
        display: flex;
        gap: 0.5rem;
      }

      .input_div {
        width: 100%;
        height: 2.3rem;
        border: 1px solid #a6a6a6;
        border-radius: 0.2rem;
        display: flex;
        align-items: center;
        padding-right: 0.5rem;

        input {
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
          background-color: transparent;
          padding-left: 0.5rem;
        }
       }
    } 
    
    button {
        margin-top: 1rem;
        width: 100%;
        height: 2.7rem;
        color: white;
        background-color: #ff7900;
        border-radius: 0.7rem;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #e79751;
            transition: all 350ms ease-in-out;
        }
    }
  }  
`