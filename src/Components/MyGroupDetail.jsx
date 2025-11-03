import React from 'react'
import styled from 'styled-components'
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import UserDashboardHeader from './UserDashboardHeader';

const MyGroupDetail = () => {
    const navigate = useNavigate()
  return (
    <MyGroupDetail_content>
        <MyGroupDetail_wrapper>
            <UserDashboardHeader />
            <p onClick={() => navigate('/useremptystate')}><IoIosArrowRoundBack style={{fontSize:'1.5rem', fontWeight: 'bold'}}/>Back home</p>
            <div className='main_top_group'>
                <div className='group'>
                    <div className='wrapper'>
                        <div className='women'>
                            <p><strong>Women in Tech Ajo</strong></p>
                            <div className='in_prog1'>
                                <p><small>in progress</small></p>
                            </div>
                        </div>
                        <div className='p_cont'>
                            <p><small>Progress</small></p>
                            <p><small>4/10 Payouts</small></p>
                        </div>
                        <div className='progress_parent1' style={{marginBottom: '1rem'}}>
                            <div className='progress_child1'></div>
                        </div>
                        <div className='total_naira'>
                            <p><small>Total Pot</small></p>
                            <p><TbCurrencyNaira/><small>300,000</small></p>
                        </div>
                        <div className='last_date'>
                            <p><small>Last contribution</small></p>
                            <p><small>Oct 12, 2025</small></p>
                        </div>
                        <div className='cycle_round'>
                            <p><small>Cycle</small></p>
                            <p><small>Round 3/10</small></p>
                        </div>
                        <div className='role_mem'>
                            <p><small>Role</small></p>
                            <p><small>Member</small></p>
                        </div>
                        <button onClick={() => navigate('/womendashboard')}>View group details</button>
                    </div>
                </div>

                <div className='group'>
                    <div className='wrapper'>
                        <div className='women'>
                            <p><strong>Vacation Ajo</strong></p>
                            <div className='in_prog2'>
                                <p><small>Due soon</small></p>
                            </div>
                        </div>
                        <div className='p_cont'>
                            <p><small>Progress</small></p>
                            <p><small>8/10 Payouts</small></p>
                        </div>
                        <div className='progress_parent2' style={{marginBottom: '1rem'}}>
                            <div className='progress_child2'></div>
                        </div>
                        <div className='total_naira'>
                            <p><small>Total Pot</small></p>
                            <p><TbCurrencyNaira/><small>500,000</small></p>
                        </div>
                        <div className='last_date'>
                            <p><small>Last contribution</small></p>
                            <p><small>Oct 1, 2025</small></p>
                        </div>
                        <div className='cycle_round'>
                            <p><small>Cycle</small></p>
                            <p><small>Round 6/10</small></p>
                        </div>
                        <div className='role_mem'>
                            <p><small>Role</small></p>
                            <p><small>Admin</small></p>
                        </div>
                        <button onClick={() => navigate('/userdashboard')}>View group details</button>
                    </div>
                </div>

                <div className='group'>
                    <div className='wrapper'>
                        <div className='women'>
                            <p><strong>Obele Ajo</strong></p>
                            <div className='in_prog3'>
                                <p><small>Completed</small></p>
                            </div>
                        </div>
                        <div className='p_cont'>
                            <p><small>Progress</small></p>
                            <p><small>5/5 Payouts</small></p>
                        </div>
                        <div className='progress_parent3' style={{marginBottom: '1rem'}}>
                            <div className='progress_child3'></div>
                        </div>
                        <div className='total_naira'>
                            <p><small>Total Pot</small></p>
                            <p><TbCurrencyNaira/><small>1,000,000</small></p>
                        </div>
                        <div className='last_date'>
                            <p><small>Last contribution</small></p>
                            <p><small>Oct 12, 2025</small></p>
                        </div>
                        <div className='cycle_round'>
                            <p><small>Cycle</small></p>
                            <p><small>Round 6/6</small></p>
                        </div>
                        <div className='role_mem'>
                            <p><small>Role</small></p>
                            <p><small>Member</small></p>
                        </div>
                        <button onClick={() => navigate('/obele')}>View group details</button>
                    </div>
                </div>

                <div className='group'>
                    <div className='wrapper'>
                        <div className='women'>
                            <p><strong>Women in Tech Ajo</strong></p>
                            <div className='in_prog1'>
                                <p><small>in progress</small></p>
                            </div>
                        </div>
                        <div className='p_cont'>
                            <p><small>Progress</small></p>
                            <p><small>4/10 Payouts</small></p>
                        </div>
                        <div className='progress_parent1' style={{marginBottom: '1rem'}}>
                            <div className='progress_child1'></div>
                        </div>
                        <div className='total_naira'>
                            <p><small>Total Pot</small></p>
                            <p><TbCurrencyNaira/><small>300,000</small></p>
                        </div>
                        <div className='last_date'>
                            <p><small>Last contribution</small></p>
                            <p><small>Oct 12, 2025</small></p>
                        </div>
                        <div className='cycle_round'>
                            <p><small>Cycle</small></p>
                            <p><small>Round 3/10</small></p>
                        </div>
                        <div className='role_mem'>
                            <p><small>Role</small></p>
                            <p><small>Member</small></p>
                        </div>
                        <button>View group details</button>
                    </div>
                </div>

                <div className='group'>
                    <div className='wrapper'>
                        <div className='women'>
                            <p><strong>Vacation Ajo</strong></p>
                            <div className='in_prog2'>
                                <p><small>Due soon</small></p>
                            </div>
                        </div>
                        <div className='p_cont'>
                            <p><small>Progress</small></p>
                            <p><small>8/10 Payouts</small></p>
                        </div>
                        <div className='progress_parent2' style={{marginBottom: '1rem'}}>
                            <div className='progress_child2'></div>
                        </div>
                        <div className='total_naira'>
                            <p><small>Total Pot</small></p>
                            <p><TbCurrencyNaira/><small>500,000</small></p>
                        </div>
                        <div className='last_date'>
                            <p><small>Last contribution</small></p>
                            <p><small>Oct 1, 2025</small></p>
                        </div>
                        <div className='cycle_round'>
                            <p><small>Cycle</small></p>
                            <p><small>Round 6/10</small></p>
                        </div>
                        <div className='role_mem'>
                            <p><small>Role</small></p>
                            <p><small>Admin</small></p>
                        </div>
                        <button>View group details</button>
                    </div>
                </div>

                <div className='group'>
                    <div className='wrapper'>
                        <div className='women'>
                            <p><strong>Obele Ajo</strong></p>
                            <div className='in_prog3'>
                                <p><small>Completed</small></p>
                            </div>
                        </div>
                        <div className='p_cont'>
                            <p><small>Progress</small></p>
                            <p><small>5/5 Payouts</small></p>
                        </div>
                        <div className='progress_parent3' style={{marginBottom: '1rem'}}>
                            <div className='progress_child3'></div>
                        </div>
                        <div className='total_naira'>
                            <p><small>Total Pot</small></p>
                            <p><TbCurrencyNaira/><small>1,000,000</small></p>
                        </div>
                        <div className='last_date'>
                            <p><small>Last contribution</small></p>
                            <p><small>Oct 12, 2025</small></p>
                        </div>
                        <div className='cycle_round'>
                            <p><small>Cycle</small></p>
                            <p><small>Round 6/6</small></p>
                        </div>
                        <div className='role_mem'>
                            <p><small>Role</small></p>
                            <p><small>Member</small></p>
                        </div>
                        <button>View group details</button>
                    </div>
                </div>

            </div>                            
        </MyGroupDetail_wrapper>
    </MyGroupDetail_content>
  )
}

export default MyGroupDetail

const MyGroupDetail_content = styled.div`
    width: 100%;
    height: 120vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 15vh;

    @media (max-width: 768px) {
        height: auto;
    }
`

const MyGroupDetail_wrapper = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

     p{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 500;
        cursor: pointer;
    }
    
    .main_top_group{
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;


        .group{
            width: 30%;
            height: 45%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

            @media (max-width: 768px) {
                width: 100%;
                height: 18rem;
            }

            .wrapper{
                width: 90%;
                height: 85%;
                display: flex;
                flex-direction: column;
                gap: 0.8rem;

                .women{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .in_prog1{
                        padding-block: 0.2rem;
                        padding-inline: 1rem;
                        background-color: #d6ecd1;
                        border-radius: 0.8rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #34a218;
                        font-weight: 600;
                    }

                    .in_prog2{
                        padding-block: 0.2rem;
                        padding-inline: 1rem;
                        background-color: #ffe4cc;
                        border-radius: 0.8rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #ec7000;
                        font-weight: 600;
                    }

                    .in_prog3{
                        padding-block: 0.2rem;
                        padding-inline: 1rem;
                        background-color: #d8e6fd;
                        border-radius: 0.8rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #3b82f6;
                        font-weight: 600;
                    }
                }

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

                .last_date{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .cycle_round{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .role_mem{
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