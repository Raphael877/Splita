import React from 'react'
import styled from 'styled-components'
import AdminDashboardHeader from '../Components/AdminDashboardHeader.jsx'
import UserDashboardFooter from '../Components/UserDashboardFooter.jsx';
// import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiSend } from "react-icons/fi";

import { TbCurrencyNaira } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";

const RequestApproved = () => {

    // const navigate = useNavigate();

    const AllData = [
        {
            member: 'Chidera',
            phone: '07038204858',
            date: 'sept 10',
            icon: < SlOptionsVertical/>,
        },
        {
            member: 'Chisom',
            phone: '09015456368',
            date: 'sept 18',
            icon: < SlOptionsVertical/>,
        },
        {
            member: 'Ademola',
            phone: '07038204858',
            date: 'sept 25',
            icon: < SlOptionsVertical/>,
        },
        
        {
            member: 'Habeeb',
            phone: '07038204858',
            date: 'sept 25',
            icon: < SlOptionsVertical/>,
        },
        
        {
            member: 'Dinma',
            phone: '07038204858',
            date: 'sept 25',
            icon: < SlOptionsVertical/>,
        },
    ]

  return (
    <AdminDashboard_content>
        <AdminDashboard_wrapper>
            <AdminDashboardHeader />
            <div className='groupname'><h1>Vacation Ajo</h1></div>
            <div className='create'>
                <p style={{color: '#666666'}}>Created on Aug 21, 2025</p>
                <button><FiSend/>Start Circle</button>
            </div>
            <div className="back" style={{ cursor: "pointer" }}>
                <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
                <p>back home</p>
            </div>

            <Table>
                <div className='table_wrap'>
                    <div className='top'>
                        <h2>Members</h2>
                    </div>

                    <div className='main_table'>
                        <div className='all_header'>
                            <div className='header'>
                                <h3>Name</h3>
                            </div>
                            <div className='header'>
                                <h3>Phone Number</h3>
                            </div>
                            <div className='header'>
                                <h3>Date</h3>
                            </div>
                            <div className='header'>
                                <h3 style={{color: 'white'}}>Action</h3>
                            </div>
                        </div>
                        {AllData.map((items) =>
                        <div className='all_data'>
                            <div className='member'>
                                <p>{items.member}</p>
                            </div>
                            <div className='phone'>
                                <p>{items.phone}</p>
                            </div>
                            <div className='date'>
                                <p>{items.date}</p>
                            </div>
                            <div className='icon'>
                                <p style={{cursor: 'pointer', color: '#c0c0c0'}}>{items.icon}</p>
                            </div>
                            
                        </div>
                        )}
                    </div>
                </div>
            </Table>
            <UserDashboardFooter />
        </AdminDashboard_wrapper>
    </AdminDashboard_content>
  )
}

export default RequestApproved

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
        justify-content: space-between;
        align-items: center;
        padding-block: 1.5rem;

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.7rem;
            color: #FF7900;
            border: 1.5px solid #FF7900;
            border-radius: 0.5rem;
            background-color: transparent;
            width: 10rem;
            height: 2.5rem;
            cursor: pointer;
        }
    }

    .back{
        width: 85%;
        display: flex;
        align-items: center;
    }
`

const Table = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 15vh;

    .table_wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 85%;
        height: 100%;
        flex-direction: column;
        gap: 2rem;

        .top{
            width: 100%;
        }

        .main_table{
            width: 100%;
            height: auto;
            background-color: white;
            border-radius: 0.5rem;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .all_header{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .all_data{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1.5rem;

                .member{
                    width: 25%;
                }

                .icon{
                    width: 25%;
                    display: flex;
                    justify-content: flex-end;
                }

                .phone{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 25%;
                    padding-right: 2rem;
                }

                .date{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 25%;
                    padding-left: 6rem;
                }

            }
        }
    }


`
