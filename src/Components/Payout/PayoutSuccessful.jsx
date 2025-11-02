import React from 'react'
import styled from 'styled-components'
import { TbCurrencyNaira } from "react-icons/tb";

const ConfirmPayout = ({ onClose }) => {
  return (
    <Payout_content>
        <Payout_wrapper>
            <Inner_wrap>
                <h3>Payout Successful</h3>
                <p> <TbCurrencyNaira/>100,000 has been sent to Dera.</p>
                <button className='btn' onClick={onClose}>Done</button>
            </Inner_wrap>
        </Payout_wrapper>
    </Payout_content>
  )
}

export default ConfirmPayout

const Payout_content = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
`

const Payout_wrapper = styled.div`
    width: 35%;
    height: 35%;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
        border: none;
        outline: none;
        color: white;
        height: 2.5rem;
        width: 7rem;
        border-radius: 0.5rem;
        cursor: pointer;
        background-color: #7b2cbf;
    }
    
`    
