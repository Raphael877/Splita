import React from 'react'
import styled from 'styled-components'

const AccessRestricted = () => {
  return (
    <Payout_content>
        <Payout_wrapper>
            <Inner_wrap>
                <h3 style={{color: '#df2a44'}}>Access Restricted</h3>
                <p>You need a valid invitation link to access the<br></br> registration page.</p>
                <button className='btn'>Return to Home page</button>
            </Inner_wrap>
        </Payout_wrapper>
    </Payout_content>
  )
}

export default AccessRestricted

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
    height: 40%;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

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

        .btn{
            border: none;
            outline: none;
            color: white;
            height: 2.5rem;
            width: 70%;
            border-radius: 0.5rem;
            cursor: pointer;
            background-color: #7b2cbf;
        }
`    
