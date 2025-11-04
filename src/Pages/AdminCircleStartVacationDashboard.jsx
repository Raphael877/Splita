import React from 'react'
import styled from 'styled-components'
import AdminDashboardHeader from '../Components/AdminDashboardHeader.jsx'
import UserDashboardFooter from '../Components/UserDashboardFooter.jsx';
import { TbCurrencyNaira } from "react-icons/tb";
import { CiTrash } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { BsCash } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineEventNote } from "react-icons/md";
import { PiCoinsLight } from "react-icons/pi";
// import LoadingSpinner from "./LoadingSpinner";
import { useState } from 'react';
import Payout from '../Components/Payout/Payout.jsx';
import PayoutSuccessful from '../Components/Payout/PayoutSuccessful.jsx';
import PayoutDetails from '../Components/Payout/PayoutDetails.jsx';
import ConfirmPayout from '../Components/Payout/ConfirmPayout.jsx';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminCircleStartVacationDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const groupName =
    (location?.state && location.state.groupName) ||
    (typeof window !== "undefined" ? localStorage.getItem("createdGroupName") : null) ||
      "Not Available";

    const [currentModal, setCurrentModal] = useState(null);
    
    const handleModalFlow = (modalName) => {
        setCurrentModal(modalName);
    };

    const Array = [
        {   id: 1,
            top: 'Contribution Amount',
            mid: 'N10000 ',
            bottom: 'Per member',
            icon : <BsCash/>,
            bgcolor: "#efd5f2",
            color: '#7b2cbf'
        },
        {   id: 2,
            top: 'Cycle duration',
            mid: 'Weekly' ,
            bottom: 'Frequency',
            icon : <MdOutlineEventNote/>,
            bgcolor: "#fee1ef",
            color: '#f967ad'
        },
        {   id: 3,
            top: 'Total Members',
            mid: '10' ,
            bottom: 'Active',
            icon : <HiOutlineUserGroup/>,
            bgcolor: "#ffe4cc",
            color: '#ff7900'
        },
        {   id: 4,
            top: 'Current Pot',
            mid: 'N0' ,
            bottom: 'Group Wallet',
            icon : <PiCoinsLight/>,
            bgcolor: "#d6ecd1",
            color: '#34a218'
        },
    ];

    const AllData = [
        {
            member: 'Chisom',
            contribution: 'N 0',
            payout_order: '2nd',
            delete: <CiTrash />,
        },
        {
            member: 'Dera',
            contribution: 'N 0',
            payout_order: '1st',
            delete: <CiTrash />,
        },
        {
            member: 'Dinma',
            contribution: 'N 0',
            payout_order: '3rd',
            delete: <CiTrash />,
        },
        {
            member: 'Zeal',
            contribution: 'N 0',
            payout_order: '4th',
            delete: <CiTrash />,
        },
        {
            member: 'Habeeb',
            contribution: 'N 0',
            payout_order: '5th',
            delete: <CiTrash />,
        },
        {
            member: 'Felix',
            contribution: 'N 0',
            payout_order: '6th',
            delete: <CiTrash />,
        },
        {
            member: 'Raphael',
            contribution: 'N 0',
            payout_order: '7th',
            delete: <CiTrash />,
        },
        {
            member: 'Arinze',
            contribution: 'N 0',
            payout_order: '8th',
            delete: <CiTrash />,
        },
        {
            member: 'Darasimi',
            contribution: 'N 0',
            payout_order: '9th',
            delete: <CiTrash />,
        },
        {
            member: 'Michael',
            contribution: 'N 0',
            payout_order: '10th',
            delete: <CiTrash />,
        },
    ]
  return (
    <AdminCircleStartVacationDashboard_content>
        <AdminCircleStartVacationDashboard_wrapper>
            <AdminDashboardHeader />
            <div className='groupname'><h1>{groupName}</h1></div>
            <div className='round'>
                <div className='left'>
                    <p>Round <span>0/3</span></p>
                    <div className='ongoing'>
                        <p style={{color: '#3b82f6', fontSize: '0.8rem'}}>Ongoing</p>
                    </div>
                </div>
                <div className='right'>
                    <button 
                        className='btn1'
                        onClick={() => handleModalFlow('payout')}
                    >
                        <FiSend style={{fontSize: '1rem'}} />
                        <p>Trigger Payout</p>
                    </button>
                    <button className='btn2'>
                        <TbCurrencyNaira style={{fontSize: '1rem'}} />
                        <p>Make Contribution</p>
                    </button>
                </div>

            </div>
            <div className="back" onClick={() => navigate('/userdashboard')} style={{ cursor: "pointer" }}>
                <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
                <p>back home</p>
            </div>

            <Ad>
                <div className='Ad_wrap'>
                    {Array.map((items) =>
                    <div className='card' id={items.id}>
                        <div className='card_wrapper'>
                            <div className='left'>
                                <p>{items.top}</p>
                                <h3>{items.mid}</h3>
                                <p><small style={{color: '#828181'}}>{items.bottom}</small></p>
                            </div>
                            <div className='right' style={{backgroundColor: items.bgcolor, color: items.color}}>
                                {items.icon}
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </Ad>
            <div className='option'>
                <div className='option_wrap'>
                    <div className='inner_wrap'>
                        <div className='mem'>
                            <p>Members</p>
                        </div>
                        <div className='cont'>
                            <p>Contributions</p>
                        </div>
                        <div className='req'>
                            <p>Request</p>
                        </div>
                    </div>
                </div>
            </div>

            <Table>
                <div className='table_wrap'>
                    <div className='top'>
                        <h2>Members</h2>
                    </div>

                    <div className='main_table'>
                        <div className='all_header'>
                            <div className='header'>
                                <h3>Member</h3>
                            </div>
                            <div className='header'>
                                <h3>Contribution</h3>
                            </div>
                            <div className='header'>
                                <h3>Payout Order</h3>
                            </div>
                            <div className='header' style={{color: 'white'}}>
                            </div>
                        </div>
                        {AllData.map((items) =>
                        <div className='all_data'>
                            <div className='member'>
                                <p>{items.member}</p>
                            </div>
                            <div className='contribution'>
                                <p>{items.contribution}</p>
                            </div>
                            <div className='payout_order'>
                                <p>{items.payout_order}</p>
                            </div>
                            <div className='delete'>
                                {items.delete}
                            </div>
                            
                        </div>
                        )}
                    </div>
                </div>
            </Table>
            <UserDashboardFooter />
        </AdminCircleStartVacationDashboard_wrapper>
        {currentModal === 'payout' && (
                <Payout 
                    onClose={() => setCurrentModal(null)}
                    onContinue={() => handleModalFlow('payoutDetails')}
                />
            )}

            {currentModal === 'payoutDetails' && (
                <PayoutDetails 
                    onClose={() => setCurrentModal(null)}
                    onProceed={() => handleModalFlow('confirmPayout')}
                />
            )}

            {currentModal === 'confirmPayout' && (
                <ConfirmPayout 
                    onClose={() => setCurrentModal(null)}
                    onConfirm={() => handleModalFlow('payoutSuccessful')}
                />
            )}

            {currentModal === 'payoutSuccessful' && (
                <PayoutSuccessful 
                    onClose={() => setCurrentModal(null)}
                />
            )}
    </AdminCircleStartVacationDashboard_content>
  )
}

export default AdminCircleStartVacationDashboard

const AdminCircleStartVacationDashboard_content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f5f0;
`

const AdminCircleStartVacationDashboard_wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .groupname{
        width: 80%;
        margin-top: 18vh;
    }

    .round{
        width: 81%;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left{
            width: 18%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            p{
                color: #666666;

                span{
                    color: #afadab;
                }
            }

            .ongoing{
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 0.8rem;
                padding-block: 0.3rem;
                padding-inline: 1rem;
                background-color: #d2def1;
            }
        }

        .right{
            width: 35%;
            height: 70%;
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;

            .btn1{
                width: 50%;
                height: 100%;
                gap: 0.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                outline: none;
                border-radius: 0.5rem;
                cursor: pointer;
                background-color: #7b2cbf;
                color: white;
                &:hover{
                    background-color: #9472b2;
                    transition: all 350ms ease-in-out;
                }
            }

            .btn2{
                width: 50%;
                height: 100%;
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                align-items: center;
                border: 1.5px solid #ff7900;
                color: #ff7900;
                border-radius: 0.5rem;
                cursor: pointer;
                background-color: transparent;
                &:hover{
                    background-color: #ff7900;
                    color: white;
                    transition: all 350ms ease-in-out;
                }
            }
        }
    }

    .back{
        width: 85%;
        display: flex;
        align-items: center;
    }

    .option{
        width: 85%;
        height: 20vh;
        display: flex;
        align-items: center;

        .option_wrap{
            width: 45%;
            height: 70%;
            display: flex;
            justify-content: center;
            align-items: center;

            .inner_wrap{
                width: 90%;
                height: 75%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background-color: #d6beeb;
                border-radius: 0.5rem;

                .mem{
                    width: 25%;
                    height: 60%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    border-radius: 0.5rem;
                    background-color: #9556cc;
                    cursor: pointer;
                    &:hover{
                        background-color: #9472b2;
                        transition: all 350ms ease-in-out;
                    }
                }

                .cont{
                    width: 25%;
                    height: 60%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    &:hover{
                        background-color: #9472b2;
                        transition: all 350ms ease-in-out;
                        color: white;
                    }
                }

                .req{
                    width: 25%;
                    height: 60%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    &:hover{
                        background-color: #9472b2;
                        transition: all 350ms ease-in-out;
                        color: white;
                    }
                }
            }
        }
    }
`

const Ad = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .Ad_wrap{
        width: 85%;
        height: 80%;
        display: flex;
        gap: 1rem;

        .card{
            width: 24%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

            .card_wrapper{
                width: 85%;
                height: 90%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .left{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .right{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 2.2rem;
                    height: 2.2rem;
                    border-radius: 50%;
                    font-size: 1.3rem;
                }
            }
        }
    }
`

const Table = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 1.5rem;

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
            gap: 1.5rem;

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

                .delete{
                    width: 25%;
                    display: flex;
                    justify-content: flex-end;
                }

                .contribution{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 25%;
                }

                .payout_order{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    width: 25%;
                }

                .delete{
                    color: #bbbbbb;
                    font-weight: 800;
                }
            }
        }
    }


`