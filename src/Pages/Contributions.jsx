import React from 'react'
import styled from 'styled-components'
import UserDashboardHeader from '../Components/UserDashboardHeader'
import UserDashboardFooter from '../Components/UserDashboardFooter'
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Contributions = () => {
  const navigate = useNavigate();

  return (
    <Content>
        <Wrapper>
            <UserDashboardHeader />
            <div className='back_wrap'>
                <p className='back' onClick={() => navigate('/userdashboard')}><IoIosArrowRoundBack style={{fontWeight: 'bold', fontSize: '1.5rem'}}/>Back home</p>
            </div>
            <Oops>
                <div className='oops_wrapper'>
                    <p>Oops!</p>
                    <p>No contributions yet. Join a group to start your first savings cycle.</p>
                </div>
            </Oops>
            <UserDashboardFooter />

        </Wrapper>
    </Content>
  )
}

export default Contributions

const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      height: auto;
    }
`;

const Wrapper = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 90%;
    }

    .back_wrap{
        width: 100%;

        .back{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 13vh;
            justify-self: flex-start;
            align-self: flex-start;
            cursor: pointer;
        }
    }
`;

const Oops = styled.div`
    width: 100%;
    height: 35vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 2rem;

    @media (max-width: 768px) {
        height: 25vh;
        border-radius: 0.5rem;
    }

    .oops_wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        color: #b7b7b7;
    }
`