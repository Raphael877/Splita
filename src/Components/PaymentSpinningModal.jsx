import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const PaymentSpinningModal = () => {
    return (
        <Content>
            <Modal>
                <Spinner />
                <p>Processing payment...</p>
            </Modal>
        </Content>
    );
};


export default PaymentSpinningModal;

const Content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const Modal = styled.div`
    width: 30%;
    height: 15rem;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        width: 70%;
        height: 12rem;
    }
`

const Spinner = styled.div`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
`;
