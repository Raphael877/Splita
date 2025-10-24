import React from 'react'
import styled from 'styled-components'

const UserDashboardFooter = () => {
  return (
    <UserDashboardFooter_content>
        <UserDashboardFooter_wrapper>
            <p>&copy; 2025 Splita. All rights reserved. </p>
        </UserDashboardFooter_wrapper>
    </UserDashboardFooter_content>
  )
}

export default UserDashboardFooter

const UserDashboardFooter_content = styled.div`
    width: 100%;
    height: 17vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid black;
`

const UserDashboardFooter_wrapper = styled.div`
    color: #535353;
`