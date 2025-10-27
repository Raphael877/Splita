import React from 'react'
import styled from 'styled-components'
import { FaRegTimesCircle } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";

const PayoutDetails = () => {
  return (
    <Payout_content>
        <Payout_wrapper>
            <Inner_wrap>
                <h3>Next Payout Details</h3>
                <div className='content'>
                    <div className='one'>
                        <p>Member</p>
                        <p>Dera</p>
                    </div>
                    <div className='one'>
                        <p>Payout Amount</p>
                        <p className='naira'><TbCurrencyNaira/>100,000</p>
                    </div>
                    <div className='one'>
                        <p>Payment Method</p>
                        <p>Opay bank(7038204858)</p>
                    </div>
                    <div className='one'>
                        <p>Round</p>
                        <p>1 of 10</p>
                    </div>
                </div>
                <div className='btn'>
                    <button className='btn1'>Cancel</button>
                    <button className='btn2'>Proceed to payment</button>
                </div>
            </Inner_wrap>
            <FaRegTimesCircle style={{cursor: 'pointer', position: 'absolute', top: '10%', right: '6%'}}/>
        </Payout_wrapper>
    </Payout_content>
  )
}

export default PayoutDetails

const Payout_content = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Payout_wrapper = styled.div`
    width: 40%;
    height: 55%;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Inner_wrap = styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    .content{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        width: 100%;

        .one{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.2rem;
            width: 100%;

            p{
                width: 50%;
            }

            .naira{
                display: flex;
                align-items: center;
            }
        }
    }

    .btn{
        display: flex;
        gap: 1.3rem;
        width: 100%;

        .btn1{
            border: none;
            outline: none;
            color: white;
            height: 2.5rem;
            width: 50%;
            border-radius: 0.5rem;
            cursor: pointer;
            background-color: #9d9d9d;
        }

        .btn2{
            border: none;
            outline: none;
            color: white;
            height: 2.5rem;
            width: 50%;
            border-radius: 0.5rem;
            cursor: pointer;
            background-color: #7b2cbf;
        }
    }
`    
