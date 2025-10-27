import React from 'react'
import styled from 'styled-components'
import UserDashboardHeader from '../Components/AdminDashboardHeader.jsx'
import UserDashboardFooter from '../Components/UserDashboardFooter.jsx';
import { Outlet, useNavigate } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { BsCash } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineEventNote } from "react-icons/md";
import { PiCoinsLight } from "react-icons/pi";

const WomenDashboard = () => {

    const navigate = useNavigate();

    const Array = [
        {   id: 1,
            top: 'Contribution Amount',
            mid: 'N200,000 ',
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
            mid: 'N300,000' ,
            bottom: 'Group Wallet',
            icon : <PiCoinsLight/>,
            bgcolor: "#d6ecd1",
            color: '#34a218'
        },
    ];

  return (
    <AdminDashboard_content>
        <AdminDashboard_wrapper>
            <UserDashboardHeader />
            <div className='groupname'><h1>Women in Tech Ajo</h1></div>
            <div className='round'>
                <div className='left'>
                    <p>Round <span>5/5</span></p>
                    <div className='ongoing'>
                        <p style={{color: '#3b82f6', fontSize: '0.8rem'}}>Ongoing</p>
                    </div>
                </div>
                <div className='right'>
                    <button className='btn1'><FiSend style={{fontSize: '1rem'}} /><p>Trigger Payout</p></button>
                    <button className='btn2'><TbCurrencyNaira style={{fontSize: '1rem'}}/><p>Make Contribution</p></button>
                </div>
            </div>
            <div className="back" style={{ cursor: "pointer" }}>
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
                        <div className='mem' onClick={() => navigate('')}>
                            <p>Members</p>
                        </div>
                        <div className='cont' onClick={() => navigate('women_contribution')}>
                            <p>Contributions</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
            <UserDashboardFooter />
        </AdminDashboard_wrapper>
    </AdminDashboard_content>
  )
}

export default WomenDashboard

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
        width: 75%;
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
                    width: 40%;
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
                    width: 40%;
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

