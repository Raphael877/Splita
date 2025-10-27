import React from 'react'
import { FaRegTimesCircle } from "react-icons/fa";
import styled from 'styled-components'


const PayoutManually = () => {
  return (
    <Content>
        <Wrapper>
            <Inner>
                <h3>Select Payout Numbers</h3>
                <p style={{color: '#777777'}}>Enter a payout number between 1 and the total number of members in your group. Each number represents a payout position.</p>
                <div className='cont'>
                    <div className='one_main'>
                        <p>Member Name</p>
                        <p>Payout Order</p>
                    </div>
                    <div className='one'>
                        <p>Dera</p>
                        <div className='input_div'>
                            <input type='text' placeholder='e.g 1' />
                        </div>
                    </div>
                    <div className='one'>
                        <p>Chisom</p>
                        <div className='input_div'>
                            <input type='text' placeholder='e.g 2' />
                        </div>
                    </div>
                    <div className='one'>
                        <p>Dinma</p>
                        <div className='input_div'>
                            <input type='text' placeholder='e.g 3' />
                        </div>
                    </div>
                    <div className='one'>
                        <p>Ademola</p>
                        <div className='input_div'>
                            <input type='text' placeholder='e.g 4' />
                        </div>
                    </div>
                    <div className='one'>
                        <p>Habeeb</p>
                        <div className='input_div'>
                            <input type='text' placeholder='e.g 5' />
                        </div>
                    </div>
                </div>
                <button>Save Order</button>
            </Inner>
            <FaRegTimesCircle style={{cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '5%', right: '10%'}}/>
        </Wrapper>
    </Content>
  )
}

export default PayoutManually

const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: rgb(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    background-color: white;
    position: relative;
    border-radius: 1rem;
`

const Inner = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    .cont{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 80%;
        gap: 1rem;

        .one_main{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding-right: 1rem;
        }

        .one{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;

            p{
                width: 60%;
                display: flex;
                justify-content: flex-start;
                padding-left: 2rem;
            }

            .input_div{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40%;
                height: 2rem;
                border: 1.5px solid #cccccc;
                border-radius: 0.3rem;
                overflow: hidden;

                input{
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    text-align: center;
                }
            }
        }
    }

    button{
        width: 100%;
        height: 2.5rem;
        border: none;
        border-radius: 2rem;
        margin-top: 3rem;
        cursor: pointer;
        background-color: #7b2cbf;
        color: white;
    }
`