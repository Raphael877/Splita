import React from 'react'
import styled from 'styled-components'
import { TbCurrencyNaira } from "react-icons/tb";

const AdminMemberDashboard = () => {

    const AllData = [
        {
            date: 'Sept 10',
            amount: 'N 10,000',
            cycle: 'Cycle1',
            id: 1,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
        },
        {
            date: 'Sept 18',
            amount: 'N 10,000',
            cycle: 'Cycle2',
            id: 2,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
        },
        {
            date: 'Sept 25',
            amount: 'N 10,000',
            cycle: 'Cycle3',
            id: 3,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
        },
        {
            date: 'Oct 3',
            amount: 'N 10,000',
            cycle: 'Cycle4',
            id: 4,
            bgcolor: '#ffe4cc',
            color: '#ff7900',
            status: 'Unpaid',
        },  
        {
            date: 'Oct 10',
            amount: 'N 10,000',
            cycle: 'Cycle5',
            id: 5,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
        },             
    ]
  return (
    <AdminMemberDashboard_content>
        <AdminMemberDashboard_wrapper>

            <Table>
                <div className='table_wrap'>
                    <div className='top'>
                        <h2>Contributions</h2>
                    </div>

                    <div className='main_table'>
                        <div className='all_header'>
                            <div className='header'>
                                <h3>Cycle</h3>
                            </div>
                            <div className='header'>
                                <h3>Amount</h3>
                            </div>
                            <div className='header'>
                                <h3>Date</h3>
                            </div>
                            <div className='header'>
                                <h3>Status</h3>
                            </div>
                        </div>
                        {AllData.map((items) =>
                        <div className='all_data'>
                            <div className='cycle'>
                                <p>{items.cycle}</p>
                            </div>
                            <div className='amount'>
                                <p>{items.amount}</p>
                            </div>
                            <div className='date'>
                                <p>{items.date}</p>
                            </div>
                            <div className='status'>
                                <div className='status_wrap'  style={{backgroundColor: items.bgcolor, color: items.color}}>
                                {items.status}
                                </div>
                            </div>
                            
                        </div>
                        )}
                    </div>
                </div>
            </Table>
        </AdminMemberDashboard_wrapper>
    </AdminMemberDashboard_content>
  )
}

export default AdminMemberDashboard

const AdminMemberDashboard_content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f5f0;
`

const AdminMemberDashboard_wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

                .cycle{
                    width: 25%;
                }

                .status{
                    width: 25%;
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
                    justify-content: center;
                    align-items: center;
                    width: 25%;
                    padding-left: 3rem;

                    @media (max-width: 768px) {
                        padding-left: 0;
                    }
                }

                .amount{
                    display: flex;
                    padding-left: 4rem;
                    align-items: center;
                    width: 25%;

                    @media (max-width: 768px) {
                        padding-left: 0;
                    }
                }
            }
        }
    }


`