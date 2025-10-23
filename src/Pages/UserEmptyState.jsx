import React from 'react'
import styled from 'styled-components'
import UserDashboardHeader from '../Components/UserDashboardHeader'
import UserDashboardFooter from '../Components/UserDashboardFooter'
import UserEmptyHello from '../Components/UserEmptyHello'

const UserEmptyState = () => {
  return (
    <Empty>
        <UserDashboardHeader />
        <UserEmptyHello />
        <UserDashboardFooter />
    </Empty>
  )
}

export default UserEmptyState

const Empty = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #f8f5f0;
`
