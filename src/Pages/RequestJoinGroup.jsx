import React from 'react'
import styled from 'styled-components'
import AdminDashboardHeader from '../Components/AdminDashboardHeader.jsx'
import UserDashboardFooter from '../Components/UserDashboardFooter.jsx';
// import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const RequestJoinGroup = () => {

    // const navigate = useNavigate();

    const Array = [
        {
            name: 'Chidera',
            num: '07038204858',
            date: 'sept 10'
        },
        {
            name: 'Chisom',
            num: '07038204858',
            date: 'sept 18'
        },
        {
            name: 'Ademola',
            num: '07038204858',
            date: 'sept 25'
        },
        {
            name: 'Habeeb',
            num: '07038204858',
            date: 'sept 25'
        },
    ]

  return (
    <AdminDashboard_content>
        <AdminDashboard_wrapper>
            <AdminDashboardHeader />
            <div className='groupname'><h1>Vacation Ajo</h1></div>
            <div className='create'>
                <p style={{color: '#666666'}}>Created on Aug 21, 2025</p>
            </div>
            <div className="back" style={{ cursor: "pointer" }}>
                <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
                <p>back home</p>
            </div>
            <Block>
                <div className='inner_block'>
                    <div className='block_wrap'>
                        <h2>Requests</h2>
                        <div className='table_wall'>
                            <div className='table_wrap'>
                                <div className='header'>
                                        <h3>Name</h3>
                                        <h3>Phone Number</h3>
                                        <h3>Date</h3>
                                        <h3>Action</h3>
                                </div>
                                <div className='body'>
                                    {Array.map((array) =>
                                    <div className='data'>
                                        <div className='name'>{array.name}</div>
                                        <div className='num'>{array.num}</div>
                                        <div className='date'>{array.date}</div>
                                        <div className='btn'>
                                            <button className='btn1'>Approve</button>
                                            <button className='btn2'>Decline</button>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Block>
            <UserDashboardFooter />
        </AdminDashboard_wrapper>
    </AdminDashboard_content>
  )
}

export default RequestJoinGroup

const AdminDashboard_content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f5f0;
`

const AdminDashboard_wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;

    .groupname{
        width: 80%;
        margin-top: 18vh;
    }

    .create{
        width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-block: 1.5rem;

        p{
            width: 100%;
        }
    }

    .back{
        width: 85%;
        display: flex;
        align-items: center;
    }
`

const Block = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 1rem;

    .inner_block{
        width: 85%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 1rem;

        .block_wrap{
            width: 90%;
            height: 100%;
            flex-direction: column;
            display: flex;
            gap: 1rem;
            padding-block: 2rem;

            .table_wall{
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid #f8f5f0;
                border-radius: 0.5rem;

                .table_wrap{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 98%;
                    height: 90%;
                    padding-block: 1rem;
                    gap: 1rem;

                    .header{
                        width: 98%;
                        padding: 1rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: #f8f5f0;
                        border-radius: 0.5rem;
                        
                        h3{
                            width: 25%;
                        }
                    }

                    .body{
                        width: 98%;
                        height: 100%;
                        display: flex;               
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;

                        .data{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            height: 12vh;
                            border-top: 1.5px solid #f8f5f0;
                            padding-left: 1rem;

                            .name, .num, .date, .btn{
                                width: 25%;
                            }

                            .btn{
                                display: flex;
                                align-items: center;
                                gap: 1rem;
                                height: 100%;

                                .btn1{
                                    height: 60%;
                                    width: 50%;
                                    border: none;
                                    outline: none;
                                    border-radius: 0.5rem;
                                    cursor: pointer;
                                    color: white;
                                    background-color: #005028;
                                }

                                .btn2{
                                    height: 60%;
                                    width: 50%;
                                    border: none;
                                    outline: none;
                                    border-radius: 0.5rem;
                                    cursor: pointer;
                                    color: white;
                                    background-color: #e60303;
                                }
                            }
                        }
                    }
                }
            }
        }
    }    
`