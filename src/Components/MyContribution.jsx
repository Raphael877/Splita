import React from 'react'
import styled from 'styled-components'
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import UserDashboardHeader from './UserDashboardHeader';
import UserDashboardFooter from './UserDashboardFooter';

const MyContribution = () => {
    const navigate = useNavigate()

    const AllData = [
        {
            group: 'Obele',
            date: 'Aug 27',
            contribution: 'N 200,000',
            cycle: 'Cycle1',
            id: 1,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
        },
        {
            group: 'Vacation',
            date: 'Oct 8th',
            contribution: 'N 10,000',
            cycle: 'Cycle2',
            id: 2,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
        },
        {
            group: 'Women in tech',
            date: 'Oct 2nd',
            contribution: 'N 30,000',
            cycle: 'Cycle3',
            id: 3,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
        }    
    ]
  return (
    <MyGroupDetail_content>
        <MyGroupDetail_wrapper>
            <UserDashboardHeader />
                <Inner>
                    <p className='back' onClick={() => navigate('/useremptystate')}><IoIosArrowRoundBack style={{fontSize:'1.5rem', fontWeight: 'bold'}}/>Back home</p>

                    <Table>
                <div className='table_wrap'>

                    <div className='main_table'>
                        <div className='all_header'>
                            <div className='header'>
                                <h3>Group</h3>
                            </div>
                            <div className='header'>
                                <h3>Cycle</h3>
                            </div>
                            <div className='header'>
                                <h3>Contributions</h3>
                            </div>
                            <div className='header'>
                                <h3>Status</h3>
                            </div>
                            
                            <div className='header'>
                                <h3>Date</h3>
                            </div>
                        </div>
                        {AllData.map((items) =>
                        <div className='all_data'>
                            
                            <div className='group'>
                                <p>{items.group}</p>
                            </div>
                            <div className='cycle'>
                                <p>{items.cycle}</p>
                            </div>
                            <div className='contribution'>
                                <p>{items.contribution}</p>
                            </div>
                            <div className='status'>
                                <div className='status_wrap'  style={{backgroundColor: items.bgcolor, color: items.color}}>
                                {items.status}
                                </div>
                            </div>
                            <div className='date'>
                                <p>{items.date}</p>
                            </div>
                            
                            
                        </div>
                        )}
                    </div>
                </div>
            </Table>
                    
                </Inner>     
                <UserDashboardFooter />                    
        </MyGroupDetail_wrapper>
    </MyGroupDetail_content>
  )
}

export default MyContribution

const MyGroupDetail_content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f5f0;

    @media (max-width: 768px) {
        height: auto;
    }
`

const MyGroupDetail_wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

     .back{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 500;
        cursor: pointer;
        padding-block: 15vh;
    }
`    

const Inner = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Table = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 3rem;

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
            width: 90%;
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

                .cycle{
                    width: 20%;
                }

                .group{
                    width: 20%;
                }

                .status{
                    width: 20%;
                    display: flex;
                    justify-content: flex-end;

                    .status_wrap{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 1rem;
                        padding-block: 0.3rem;
                        padding-inline: 0.8rem;
                    }
                }

                .date{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    width: 20%;
                    padding-left: 3rem;
                }

                .contribution{
                    display: flex;
                    padding-left: 2rem;
                    align-items: center;
                    width: 20%;
                }
            }
        }
    }


`