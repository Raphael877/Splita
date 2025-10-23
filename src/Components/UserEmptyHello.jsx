import React from 'react'
import styled from 'styled-components'
import { FaPlus } from "react-icons/fa6";
import { TiGroupOutline } from "react-icons/ti";
import { TbCurrencyNaira } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


const UserEmptyHello = () => {
    const navigate = useNavigate();
  return (
    <UserEmptyHello_content>
        <UserEmptyHello_wrapper>
            <Hello>
                <div className='left'>
                    <h1>Hello Chidera</h1>
                    <h2>Greetings 👋🏽</h2>
                    <p style={{color: 'black'}}>Lets kickstart your savings journey today</p>
                </div>
                <div className='hello_btn'>
                    <button className='hello_btn1' onClick={() => navigate('/creategroup')}>+ Create New Group</button>
                    <button className='hello_btn2'>Join Group</button>
                </div>
            </Hello>
            <Oops>
                <div className='oops_wrapper'>
                    <p>oops</p>
                    <p>You have <strong>NO active </strong> group yet.</p>
                </div>
            </Oops>
            <Create_join>
                <div className='two_cards'>
                    <div className='card1'>
                        <div className='main'>
                            <FaPlus/>
                            <p>Create a group</p>
                        </div>
                        <p className='content'>Start fresh and invite your family,<br></br> team, or friends.</p>
                    </div>
                    <div className='card1'>
                        <div className='main'>
                            <TiGroupOutline style={{fontSize: '1.3rem'}}/>
                            <p>Join a group</p>
                        </div>
                        <p className='content'>Join top trusted groups that match <br></br>your goal.</p>
                    </div>
                </div>
            </Create_join>
            <TopGroup>
                <h1>Top Groups</h1>
                <div className='top_groups_content'>

                    <div className='group'>
                        <div className='wrapper'>
                            <p><strong>Women in Tech Ajo</strong></p>
                            <div className='p_cont'>
                                <p><small>Progress</small></p>
                                <p><small>4/10 contributions</small></p>
                            </div>
                            <div className='progress_parent1' style={{marginBottom: '1rem'}}>
                                <div className='progress_child1'></div>
                            </div>
                            <div className='total_naira'>
                                <p><small>Total Pot</small></p>
                                <p><TbCurrencyNaira/><small>300,000</small></p>
                            </div>
                            <p><small>Women learning and growing together.</small></p>
                            <div className='mem_num'>
                                <p><small>Members</small></p>
                                <p><small>10</small></p>
                            </div>
                            <button>Join Group</button>
                        </div>
                    </div>

                    <div className='group'>
                        <div className='wrapper'>
                            <p><strong>Vacation Ajo</strong></p>
                            <div className='p_cont'>
                                <p><small>Progress</small></p>
                                <p><small>8/10 contributions</small></p>
                            </div>
                            <div className='progress_parent2' style={{marginBottom: '1rem'}}>
                                <div className='progress_child2'></div>
                            </div>
                            <div className='total_naira'>
                                <p><small>Total Pot</small></p>
                                <p><TbCurrencyNaira/><small>500,000</small></p>
                            </div>
                            <p><small>Save together, Unwind together.</small></p>
                            <div className='mem_num'>
                                <p><small>Members</small></p>
                                <p><small>10</small></p>
                            </div>
                            <button>Join Group</button>
                        </div>
                    </div>

                    <div className='group'>
                        <div className='wrapper'>
                            <p><strong>Obele Ajo</strong></p>
                            <div className='p_cont'>
                                <p><small>Progress</small></p>
                                <p><small>5/5 contributions</small></p>
                            </div>
                            <div className='progress_parent3' style={{marginBottom: '1rem'}}>
                                <div className='progress_child3'></div>
                            </div>
                            <div className='total_naira'>
                                <p><small>Total Pot</small></p>
                                <p><TbCurrencyNaira/><small>1,000,000</small></p>
                            </div>
                            <p><small>Small savings, big wins.</small></p>
                            <div className='mem_num'>
                                <p><small>Members</small></p>
                                <p><small>5</small></p>
                            </div>
                            <button>Join Group</button>
                        </div>
                    </div>

                </div>
            </TopGroup>
            <Recent_Activities>
                <h1>Recent Activities</h1>
                <div className='bottom'>
                    <div className='icon_cont'>
                        <TiTick style={{cursor: 'pointer', color: '#a772d4'}}/>
                    </div>
                    <div className='just'>
                        <p><strong>Just registered.</strong></p>
                        <p><small>10 mins ago</small></p>
                    </div>
                </div>
            </Recent_Activities>
        </UserEmptyHello_wrapper>
    </UserEmptyHello_content>
  )
}

export default UserEmptyHello

const UserEmptyHello_content = styled.div`
    width: 100%;
    margin-top: 14vh;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserEmptyHello_wrapper = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Hello = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: space-between;
    padding: 1.8rem;
    align-items: center;
    border-radius: 1rem;
    border: 2px solid #7b2cbf;

    .left{
        color: #240046;

        p{
            padding-block: 1rem;
        }
    }

    .hello_btn{
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;

        .hello_btn1{
            width: 50%;
            height: 2.5rem;
            border: none;
            outline: none;
            border-radius: 0.5rem;
            cursor: pointer;
            color: white;
            background-color: #FF7900;
            &:hover{
                background-color: #FF9433;
                transition: all 500ms ease-in-out;
            }
        }

        .hello_btn2{
            width: 50%;
            height: 2.5rem;
            border: 1px solid #7b2cbf;
            outline: none;
            border-radius: 0.5rem;
            cursor: pointer;
            background-color: white;
            color: #7b2cbf;
            &:hover{
                border: none;
                background-color: #c29ee2;
                transition: all 500ms ease-in-out;
            }
        }    
    }
`

const Oops = styled.div`
    width: 100%;
    height: 35vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 2rem;

    .oops_wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        color: #b7b7b7;
    }
`

const Create_join = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .two_cards{
        display: flex;
        width: 75%;
        gap: 2rem;
        height: 80%;

        .card1{
            width: 50%;
            height: 100%;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 2rem;
            cursor: pointer;

            .main{
                display: flex;
                gap: 0.5rem;
                font-weight: 600;
                justify-content: center;
                align-items: center;
            }

            .content{
                text-align: center;
                color: #b7b7b7;
            }
        }
        
    }
`

const TopGroup = styled.div`
    width: 100%;
    height: auto;
    margin-block: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .top_groups_content{
        width: 100%;
        height: 40vh;
        display: flex;
        gap: 1rem;

        .group{
            width: 33%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

            .wrapper{
                width: 90%;
                height: 80%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                .p_cont{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .progress_parent1{
                    width: 100%;
                    height: 3%;
                    border-radius: 1rem;
                    background-color: #dddcdc;

                    .progress_child1{
                        height: 100%;
                        border-radius: 1rem;
                        width: 40%;
                        background-color: #3b82f6;
                    }
                }

                .progress_parent2{
                    width: 100%;
                    height: 3%;
                    border-radius: 1rem;
                    background-color: #dddcdc;

                    .progress_child2{
                        height: 100%;
                        border-radius: 1rem;
                        width: 80%;
                        background-color: #ff7900;
                    }
                }

                .progress_parent3{
                    width: 100%;
                    height: 3%;
                    border-radius: 1rem;
                    background-color: #dddcdc;

                    .progress_child3{
                        height: 100%;
                        border-radius: 1rem;
                        width: 100%;
                        background-color: #34a218;
                    }
                }

                .total_naira{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    p{
                        display: flex;
                        align-items: center;
                    }
                }

                .mem_num{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                button{
                    width: 100%;
                    height: 2rem;
                    border: none;
                    outline: none;
                    border-radius: 0.5rem;
                    color: white;
                    background-color: #a772d4;
                    cursor: pointer;
                    &:hover{
                        background-color: #c29ee2;
                        transition: all 500ms ease-in-out;
                    }
                }
            }
        }
    }
`

const Recent_Activities = styled.div`
    width: 100%;
    height: 25vh;
    background-color: white;
    display: flex;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    justify-content: space-between;
    flex-direction: column;

    .bottom{
        padding-left: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.7rem;

        .icon_cont{
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.2rem;
            font-size: 1.5rem;
            background-color: #d8e6fd;
        }
    }
`