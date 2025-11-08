import React from 'react'
import styled from 'styled-components'
import { TbCurrencyNaira } from "react-icons/tb";
import { CiTrash } from "react-icons/ci";

const WomenMembers = () => {

    const AllData = [
        {
            member: 'Chidinma',
            contribution: (<><TbCurrencyNaira/>10,000</>),
            order: '1st',
            id: 1,
            delete: <CiTrash/>
        },  
        {
            member: 'Demola',
            contribution: (<><TbCurrencyNaira/>10,000</>),
            order: '2nd',
            id: 1,
            delete: <CiTrash/>
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
                                <h3>Cycle</h3>
                            </div>
                            <div className='header'>
                                <h3 style={{color: 'transparent'}}>Delete</h3>
                            </div>
                        </div>
                        {AllData.map((items) =>
                        <div className='all_data'>
                            <div className='member'>
                                <p>{items.member}</p>
                            </div>
                            <div className='contribution'>
                                <p style={{display: 'flex', alignItems: 'center'}}>{items.contribution}</p>
                            </div>
                            <div className='order'>
                                <p>{items.order}</p>
                            </div>
                            <div className='delete' style={{cursor: "pointer"}}>
                                {items.delete}
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

export default WomenMembers

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

            @media (max-width: 768px) {
                background-color: transparent;
            }

            .all_header{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                @media (max-width: 768px) {
                display: none;
            }
            }

            .all_data{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1.5rem;
                border-radius: 0.5rem;

                @media (max-width: 768px) {
                    width: 100%;
                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                    background-color: white;
                    padding-block: 1rem;
                    padding-inline: 0.5rem;
                }

                .member{
                    width: 25%;

                    @media (max-width: 768px) {
                        width: 40%;
                    }
                }

                .delete{
                    width: 25%;
                    display: flex;
                    justify-content: flex-end;

                    @media (max-width: 768px) {
                        width: 5%;
                    }
                }

                .order{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 25%;
                    padding-left: 3rem;

                    @media (max-width: 768px) {
                        padding-left: 0;
                        width: 20%;
                    }
                }

                .contribution{
                    display: flex;
                    padding-left: 4rem;
                    align-items: center;
                    width: 25%;

                    @media (max-width: 768px) {
                        padding-left: 0;
                        width: 35%;
                    }
                }
            }
        }
    }


`