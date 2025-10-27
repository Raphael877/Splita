import React from 'react'
import styled from 'styled-components'
import { TbCurrencyNaira } from "react-icons/tb";
import { CiTrash } from "react-icons/ci";
import { FiSend } from "react-icons/fi";

const AdminMemberDashboard = () => {


    const AllData = [
        {
            id: 1,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
            late_payment: '-',
            member: 'Chisom',
            contribution: 'N 10,000',
            payout_order: '2nd',
            delete: <CiTrash />,
        },
        {
            id: 2,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
            late_payment: '-',
            member: 'Dera',
            contribution: 'N 10,000',
            payout_order: '1st',
            delete: <CiTrash />,
        },
        {
            id: 3,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
            late_payment: '-',
            member: 'Dinma',
            contribution: 'N 10,000',
            payout_order: '3rd',
            delete: <CiTrash />,
        },
        {
            id: 4,
            bgcolor: '#ffe4cc',
            color: '#ff7900',
            status: 'Unpaid',
            late_payment: 'Oct 5',
            member: 'Zeal',
            contribution: 'N 10,000',
            payout_order: '4th',
            delete: <CiTrash />,
        },
        {
            id: 5,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
            late_payment: '-',
            member: 'Habeeb',
            contribution: 'N 10,000',
            payout_order: '5th',
            delete: <CiTrash />,
        },
        {
            id: 6,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
            late_payment: '-',
            member: 'Felix',
            contribution: 'N 10,000',
            payout_order: '6th',
            delete: <CiTrash />,
        },
        {
            id: 7,
            bgcolor: '#ffe4cc',
            color: '#ff7900',
            status: 'Unpaid',
            late_payment: 'Oct 3',
            member: 'Raphael',
            contribution: 'N 10,000',
            payout_order: '7th',
            delete: <CiTrash />,
        },
        {
            id: 8,
            bgcolor: '#ffe4cc',
            color: '#ff7900',
            status: 'Unpaid',
            late_payment: 'Oct 10',
            member: 'Arinze',
            contribution: 'N 10,000',
            payout_order: '8th',
            delete: <CiTrash />,
        },
        {
            id: 9,
            bgcolor: '#d6ecd1',
            color: '#34a218',
            status: 'Paid',
            late_payment: '-',
            member: 'Darasimi',
            contribution: 'N 10,000',
            payout_order: '9th',
            delete: <CiTrash />,
        },
        {
            id: 10,
            bgcolor: '#ffe4cc',
            color: '#ff7900',
            status: 'Unpaid',
            late_payment: 'Oct 10',
            member: 'Michael',
            contribution: 'N 10,000',
            payout_order: '10th',
            delete: <CiTrash />,
        },
    ]
  return (
    <AdminMemberDashboard_content>
        <AdminMemberDashboard_wrapper>

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
                                <h3>Status</h3>
                            </div>
                            <div className='header'>
                                <h3>Payout Order</h3>
                            </div>
                            <div className='header'>
                                <h3>Late Payment</h3>
                            </div>
                            <div className='header' style={{color: 'white'}}>
                            </div>
                        </div>
                        {AllData.map((items) =>
                        <div className='all_data' id={items.id}>
                            <div className='member'>
                                <p>{items.member}</p>
                            </div>
                            <div className='contribution'>
                                <p>{items.contribution}</p>
                            </div>
                            <div className='status'>
                                <div className='status_wrap' style={{backgroundColor: items.bgcolor, color: items.color}}>
                                    <p>{items.status}</p>
                                </div>
                            </div>
                            <div className='late_payment'>
                                <p>{items.late_payment}</p>
                            </div>
                            <div className='payout_order'>
                                <p>{items.payout_order}</p>
                            </div>
                            <div className='delete'>
                                <p style={{cursor: 'pointer'}}>{items.delete}</p>
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

                .member{
                    width: 16%;
                }

                .delete{
                    width: 16%;
                    display: flex;
                    justify-content: flex-end;
                }

                .contribution{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 16%;
                }

                .payout_order{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    width: 16%;
                }

                .late_payment{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 16%;
                }

                .status{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 16%;

                    .status_wrap{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 1rem;
                        padding-block: 0.3rem;
                        padding-inline: 0.8rem;
                    }
                }

                .delete{
                    font-weight: 900;
                    font-size: 1.2rem;
                }
            }
        }
    }


`