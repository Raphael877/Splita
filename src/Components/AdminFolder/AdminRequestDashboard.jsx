import React from 'react'
import styled from 'styled-components'
import { TbCurrencyNaira } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";

const AdminRequestDashboard = () => {

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
    ]
  return (
    <AdminRequestDashboard_content>
        <AdminRequestDashboard_wrapper>

            <Table>
                <div className='table_wrap'>
                    <div className='top'>
                        <h2>Requests</h2>
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
                                <h3>Action</h3>
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
                                <p style={{cursor: 'pointer'}}>{items.icon}</p>
                            </div>
                            
                        </div>
                        )}
                    </div>
                </div>
            </Table>
        </AdminRequestDashboard_wrapper>
    </AdminRequestDashboard_content>
  )
}

export default AdminRequestDashboard 

const AdminRequestDashboard_content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f5f0;
`

const AdminRequestDashboard_wrapper = styled.div`
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

                    @media (max-width: 768px) {
                        padding-right: 0;
                    }
                }

                .date{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 25%;
                    padding-left: 6rem;

                    @media (max-width: 768px) {
                        padding-left: 0;
                        justify-content: flex-end;
                    }
                }


            }
        }
    }


`