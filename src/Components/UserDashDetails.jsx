import React from 'react'
import styled from 'styled-components'
import { TiGroupOutline } from "react-icons/ti";
import { MdEventNote } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { CiTrophy } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { BsCash } from "react-icons/bs";
import { MdOutlinePersonAddAlt } from "react-icons/md";

const UserDashDetails = () => {
    const navigate = useNavigate()
    const userData = (() => {
      try {
        return JSON.parse(localStorage.getItem('userData')) || {};
      } catch {
        return {};
      }
    })();
  return (
    <UserDashDetails_content>
        <UserDashDetails_wrapper>
            <Hello>
                <div className='left'>
                    <h1>Welcome Back,</h1>
                    <h2>{userData.firstName || 'User'} ! 👋🏽</h2>
                    <p style={{color: '#240046'}}>You have 2 active groups and 1 payout coming up this week.</p>
                </div>
                <div className='hello_btn'>
                    <button className='hello_btn1' 
                    onClick={() => navigate('/creategroup')}
                        >+ Create New Group</button>
                </div>
            </Hello>

            <Details>
                <div className='inner_details'>
                    <div className='card1'>
                        <div className='card_wrapper'>
                            <div className='icon_cont'>
                                <CiTrophy />
                            </div>
                            <p>Completed cycles</p>
                            <p style={{fontWeight:'bold'}}>3 cycles</p>
                        </div>
                    </div>

                    <div className='card2'>
                        <div className='card_wrapper'>
                            <div className='icon_cont'>
                                <TiGroupOutline />
                            </div>
                            <p>Active groups</p>
                            <p style={{fontWeight:'bold'}}>3 groups</p>
                        </div>
                    </div>

                    <div className='card3'>
                        <div className='card_wrapper'>
                            <div className='first'>
                                <div className='icon_cont'>
                                    <MdEventNote />
                                </div>
                                <div className='right'>
                                    <p><strong>Oct 3rd,25</strong></p>
                                </div>
                            </div>
                            <p>Next Payouts</p>
                            <p style={{fontWeight:'bold'}}>View details</p>
                        </div>
                    </div>

                    <div className='card4'>
                        <div className='card_wrapper'>
                            <div className='first'>
                                <div className='icon_cont'>
                                    <CiBellOn />
                                </div>
                                <div className='right'>
                                    <p>2</p>
                                </div>
                            </div>
                            <p>Reminders</p>
                            <p style={{fontWeight:'bold'}}>Pending contributions</p>
                        </div>
                    </div>

                </div>
            </Details>

            <Main_bottom>

                <Left>
                    <My_groups>
                        <div className='top'>
                            <h1>My groups</h1>
                            <p onClick={() => navigate('/mygroup')} style={{color: '#7b2cbf', fontWeight: 'bolder', cursor: 'pointer'}}><small>View all</small></p>
                        </div>
                        <div className='main_top_group'>
                            <div className='group'>
                                <div className='wrapper'>
                                    <div className='women'>
                                        <p><strong>Women in Tech Ajo</strong></p>
                                        <div className='in_prog'>
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
                                    <button onClick={() => navigate('/womendashboard')}>View Details</button>
                                </div>
                            </div>

                            <div className='group'>
                                <div className='wrapper'>
                                    <div className='women'>
                                        <p><strong>Obele Ajo</strong></p>
                                        <div className='in_prog'>
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
                                    <button onClick={() => navigate('/obele')}>View Details</button>
                                </div>
                            </div>
                        </div>
                    </My_groups>
                    <Recent>
                        <h1>Recent Updates</h1>
                        <div className='recent_updates'>
                            <div className='recent_update_wrapper'>
                                <div className='one'>
                                    <div className='left1'>
                                        <TiTick/>
                                    </div>
                                    <div className='right'>
                                        <p style={{fontWeight: 'bold'}}>You contributed 10,000 to Women in Tech Ajo</p>
                                        <p style={{color: '#939393'}}>2 hours ago</p>
                                    </div>
                                </div>

                                <div className='one'>
                                    <div className='left2'>
                                        <BsCash/>
                                    </div>
                                    <div className='right'>
                                        <p style={{fontWeight: 'bold'}}>Chisom received payout last week</p>
                                        <p style={{color: '#939393'}}>1 week ago</p>
                                    </div>
                                </div>

                                <div className='one'>
                                    <div className='left3'>
                                        <MdOutlinePersonAddAlt />
                                    </div>
                                    <div className='right'>
                                        <p style={{fontWeight: 'bold'}}>New members joined vacation circle</p>
                                        <p style={{color: '#939393'}}>3 days ago</p>
                                    </div>
                                </div>

                                <div className='one'>
                                    <div className='left4'>
                                        < CiTrophy/>
                                    </div>
                                    <div className='right'>
                                        <p style={{fontWeight: 'bold'}}>Cycle 3 completed for Hackathon circle</p>
                                        <p style={{color: '#939393'}}>6 days ago</p>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Recent>
                </Left>
                <Right>
                    <h3>Contribution Summary</h3>
                    <div className='card_container'>
                        <div className="contribution-card">
        <p style={{paddingLeft: '0.8rem', paddingTop: '0.8rem'}}>Women in Tech</p>
      <div className="content">
        <div className="row">
          <p>Your Contribution</p>
          <p className="amount">₦ 60,000</p>
        </div>

        <div className="progress-circle">
          <div className="circle1">
            <div className="inner-circle">
              <span>40%</span>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="row">
            <p>Next contribution Date</p>
            <p>Oct 25, 2025</p>
          </div>
          <div className="row">
            <p>Yet to Pay</p>
            <p>4 members</p>
          </div>
        </div>
      </div>
    </div>

    <div className="contribution-card">
        <p style={{paddingLeft: '0.8rem', paddingTop: '0.8rem'}}>Vacation Ajo</p>
      <div className="content">
        <div className="row">
          <p>Your Contribution</p>
          <p className="amount">₦ 400,000</p>
        </div>

        <div className="progress-circle">
          <div className="circle2">
            <div className="inner-circle">
              <span>70%</span>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="row">
            <p>Next contribution Date</p>
            <p>Oct 25, 2025</p>
          </div>
          <div className="row">
            <p>Yet to Pay</p>
            <p>4 members</p>
          </div>
        </div>
      </div>
    </div>

    <div className="contribution-card">
        <p style={{paddingLeft: '0.8rem', paddingTop: '0.8rem'}}>Obele Ajo</p>
      <div className="content">
        <div className="row">
          <p>Your Contribution</p>
          <p className="amount">₦ 50,000</p>
        </div>

        <div className="progress-circle">
          <div className="circle3">
            <div className="inner-circle">
              <span>100%</span>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="row">
            <p>Next contribution Date</p>
            <p>Oct 25, 2025</p>
          </div>
          <div className="row">
            <p>Yet to Pay</p>
            <p>4 members</p>
          </div>
        </div>
      </div>
    </div>
                    </div>
                </Right>

            </Main_bottom>   

        </UserDashDetails_wrapper>
    </UserDashDetails_content>
  )
}

export default UserDashDetails

const UserDashDetails_content = styled.div`
    width: 100%;
    margin-top: 16vh;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

`

const UserDashDetails_wrapper = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Hello = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: space-between;
    padding: 1.8rem;
    align-items: center;
    border-radius: 1rem;
    border: 2px solid #7b2cbf;
    background-color: #f2eaf9;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 1rem;
        gap: 1rem
    }

    .left{
        color: #240046;
        width: 40%;

        @media (max-width: 768px){
            width: 100%;
        }

        h1{
            font-size: 2.5rem;

        @media (max-width: 768px){
            font-size: 1.5rem;
        }
        }

        p{
            padding-block: 1rem;
        }
    }

    .hello_btn{
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;

        @media (max-width: 768px){
            width: 100%;

        }

        .hello_btn1{
            width: 100%;
            height: 3.5rem;
            border: none;
            outline: none;
            border-radius: 0.5rem;
            background-color: #7b2cbf;
            font-weight: 500;
            letter-spacing: 1px;
            color: white;
            cursor: pointer;
            &:hover{
                border: none;
                background-color: #c29ee2;
                color: white;
                transition: all 500ms ease-in-out;
            }

            @media (max-width: 768px){
                height: 3rem;
            }
        } 
    }
`

const Details = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        margin-block: 2rem;
    }

    .inner_details{
        width: 100%;
        height: 60%;
        display: flex;
        gap: 1.5rem;

        @media (max-width: 768px){
            height: 100%;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .card1{
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border-radius: 0.5rem;

            @media (max-width: 768px){
                width: 47%;
                height: 47%;
            }

            .card_wrapper{
                width: 85%;
                height: 80%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                .icon_cont{
                    width: 2.2rem;
                    height: 2.2rem;
                    font-size: 1.5rem;
                    border-radius: 50%;
                    background-color: #c2e4ba;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 1rem;
                    color: #34a218;
                }
            }
        }

        .card2{
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border-radius: 0.5rem;

            @media (max-width: 768px){
                width: 47%;
                height: 47%;
            }

            .card_wrapper{
                width: 85%;
                height: 80%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                .icon_cont{
                    width: 2.2rem;
                    height: 2.2rem;
                    font-size: 1.5rem;
                    border-radius: 50%;
                    background-color: #c5dafd;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 1rem;
                    color: #3b82f6;
                }
            }
        }

        .card3{
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border-radius: 0.5rem;

            @media (max-width: 768px){
                width: 47%;
                height: 47%;
            }

            .card_wrapper{
                width: 85%;
                height: 80%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                .first{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;

                    .icon_cont{
                        width: 2.2rem;
                        height: 2.2rem;
                        font-size: 1.5rem;
                        border-radius: 50%;
                        background-color: #ffeddc;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #FF7900;
                    }

                    .right{
                        width: 50%;
                        height: 1.8rem;
                        border-radius: 3rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #ffeddc;
                        color: #FF7900;
                    }
                }    
            }
        }

        .card4{
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border-radius: 0.5rem;

            @media (max-width: 768px){
                width: 47%;
                height: 47%;
            }

            .card_wrapper{
                width: 85%;
                height: 80%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                .first{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 1rem;
                
                    .icon_cont{
                        width: 2.2rem;
                        height: 2.2rem;
                        font-size: 1.5rem;
                        border-radius: 50%;
                        background-color: #fed2e7;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #F967ad;
                    }

                    .right{
                        width: 1.5rem;
                        height: 1.5rem;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #fed2e7;
                        color: #F967ad;
                    }
                }
            }
        }
    }
`

const Main_bottom = styled.div`
    width: 100%;
    height: 120vh;
    display: flex;
    gap: 2rem;
    margin-bottom: 15vh;

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
    }
`

const Left = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px){
        width: 100%;
    }
`

const My_groups = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .main_top_group{
        width: 100%;
        height: 95%;
        display: flex;
        gap: 1rem;

        @media (max-width: 768px){
            flex-direction: column;
            height: 100%;
        }

        .group{
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

            @media (max-width: 768px){
                width: 100%;
                height: 18rem;
            }

            .wrapper{
                width: 90%;
                height: 85%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                @media (max-width: 768px){
                    gap: 0.6rem;
                }

                .women{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .in_prog{
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

const Recent = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 768px){
        h1{
            font-size: 1.3rem;
            margin-top: 2rem;
        }
    }

    .recent_updates{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        
        @media (max-width: 768px){
            height: 25rem;
            padding-inline: 1rem;
        }


        .recent_update_wrapper{
            width: 95%;
            height: 85%;
            display: flex;
            flex-direction: column;
            align-content: space-between;
            
            @media (max-width: 768px){
                gap: 1rem;
        }

            .one{
                display: flex;
                width: 100%;
                height: 25%;
                align-items: center;
                gap: 1rem;

                .left1{
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 0.5rem;
                    background-color: #d6ecd1;
                    color: #34a218;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                }

                .right{
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }

                .left2{
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 0.5rem;
                    color: #ff7900;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    background-color: #ffe4cc;
                }

                .right{
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }

                .left3{
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 0.5rem;
                    background-color: #d6ecd1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    background-color: #d8e6fd;
                    color: #3b82f6;
                }

                .right{
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }

                .left4{
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 0.5rem;
                    background-color: #d6ecd1;
                    color: #34a218;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                }

                .right{
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }
            }
        }
    }
`
const Right = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px){
    width: 100%;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .card_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    height: 100%;
    max-height: 110vh;
    overflow-y: auto;
    scrollbar-width: none;
    padding-block: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 768px){
    gap: 2rem;
  }

    .contribution-card {
      width: 100%;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      border-radius: 0.5rem;
      padding-bottom: 1rem;
      transition: transform 0.2s ease-in-out;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem;
    }

    .amount {
      font-weight: 600;
    }

    .progress-circle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1.5rem;
    }

    .circle1 {
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
      background: conic-gradient(#3b82f6 0% 40%, #d8e6fd 40% 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .circle2 {
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
      background: conic-gradient(#ff7900 0% 70%, #ffe4cc 70% 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .circle3 {
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
      background: conic-gradient(#34a218 0% 100%, #e0f2dd 100% 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .inner-circle {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .inner-circle span {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .info p {
      font-size: 0.85rem;
      color: #555;
    }
  }
`