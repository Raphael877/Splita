import React from 'react'
import styled from 'styled-components'
import { FaRegTimesCircle } from "react-icons/fa";

const DeleteMember = () => {
  return (
    <Payout_content>
        <Payout_wrapper>
            <Inner_wrap>
                <h3>Delete Member</h3>
                <p>Are you sure you want to delete this member?<br></br>This action cannot be undone
                `</p>
                <div className='btn'>
                    <button className='btn1'>Cancel</button>
                    <button className='btn2'>Delete</button>
                </div>
            </Inner_wrap>
                <FaRegTimesCircle style={{cursor: 'pointer', position: 'absolute', top: '10%', right: '6%'}}/>
        </Payout_wrapper>
    </Payout_content>
  )
}

export default DeleteMember

const Payout_content = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Payout_wrapper = styled.div`
    width: 35%;
    height: 45%;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        width: 85%;
    }
`

const Inner_wrap = styled.div`
    width: 75%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    p{
        color: #777777;
    }

    .btn{
        display: flex;
        gap: 1.3rem;

        .btn1{
            border: none;
            outline: none;
            color: white;
            height: 2.5rem;
            width: 7rem;
            border-radius: 0.5rem;
            cursor: pointer;
            background-color: #9d9d9d;
        }

        .btn2{
            border: none;
            outline: none;
            color: white;
            height: 2.5rem;
            width: 7rem;
            border-radius: 0.5rem;
            cursor: pointer;
            background-color: #d62c2c;
        }
    }
`    
