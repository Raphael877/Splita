import React from 'react'
import styled from 'styled-components'

const Contribution = () => {
  return (
    <Content>
        <Wrapper>
            <h3>Oops</h3>
            <p>Your group is waiting to begin! Invite and approve members to start your first round of contributions.</p>
        </Wrapper>
    </Content>
  )
}

export default Contribution

const Content = styled.div`
    width: 85%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-bottom: 5rem;
`

const Wrapper = styled.div`
    color: #B7B7B7;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
`

