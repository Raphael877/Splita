import React from 'react'
import styled from 'styled-components'
import AdminDashboardHeader from '../Components/AdminDashboardHeader'
import UserDashboardFooter from '../Components/UserDashboardFooter'
import { IoIosArrowRoundBack } from "react-icons/io";
import { GiPartyPopper } from "react-icons/gi";

const GroupCreated = () => {
  return (
    <Content>
        <AdminDashboardHeader />
            <Main>
                <Inner_main>
                    <h1>Vacation Ajo</h1>
                    <p style={{ color: '#666666'}}>Created on Aug 21, 2025</p>
                    <div className="back" style={{ cursor: "pointer" }}>
                        <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
                        <p>back home</p>
                    </div>

                    <Created>
                        <div className='inner'>
                            <GiPartyPopper className='party_icon'/>
                            <h2>Your group has been created successfully!</h2>
                            <p>Invite trusted members to join  and start  your saving cycle</p>
                            <p style={{color: '#777777', marginBlock: '1.5rem'}}>Be sure to invite only trusted people to your group, such as friends or family. Splita does not take responsibility for payment delays or defaults by any member. As an admin, you're in charge of who joins your group.</p>
                            <div className='btn'>
                                <button className='btn1'>Copy Invite Link</button>
                                <button className='btn2'>View Members</button>
                            </div>
                        </div>
                    </Created>
                </Inner_main>
            </Main>
        <UserDashboardFooter />
    </Content>
  )
}

export default GroupCreated

const Content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #f8f5f0;
    align-items: center;
`

const Main = styled.div`
    margin-block: 20vh;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Inner_main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .back{
        display: flex;
        align-items: center;
    }
`

const Created = styled.div`
    width: 100%;
    height: 85vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner{
        width: 55%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 1.5rem;

        .party_icon{
            font-size: 10rem;
            color: #7b2bbd;
        }

        .btn{
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            .btn1{
                width: 50%;
                height: 3rem;
                border-radius: 0.5rem;
                border: none;
                outline: none;
                color: white;
                background-color: #7b2cbf;
                cursor: pointer;
                &:hover{
                    background-color: #b088d3;
                    transition: all 350ms ease-in-out;
                }
            }

            .btn2{
                width: 50%;
                height: 3rem;
                border-radius: 0.5rem;
                border: 1.5px solid #ff7900;
                background-color: transparent;
                color: #ff7900;
                cursor: pointer;
                &:hover{
                    background-color: #ff7900;
                    color: white;
                    transition: all 350ms ease-in-out;
                }
            }
        }
    }
`