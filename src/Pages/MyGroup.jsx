import React from 'react'
import styled from 'styled-components'
import UserDashboardHeader from '../Components/UserDashboardHeader'
import UserDashboardFooter from '../Components/UserDashboardFooter'
import MyGroupDetail from '../Components/MyGroupDetail'

const MyGroup = () => {
  return (
    <MyGroup_content>
        <UserDashboardHeader />
        <MyGroupDetail />
        <UserDashboardFooter />
    </MyGroup_content>
  )
}

export default MyGroup

const MyGroup_content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #f8f5f0;
`
