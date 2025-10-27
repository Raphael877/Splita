import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";
import { PiBank } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Add_payout_bank = ({ onSave, onClose }) => {
  const navigate = useNavigate(); 

  const handleSave = () => {
    if (onSave) onSave(); 
    navigate("/group_created");
  };

  return (
    <Add_payout_bank_content>
      <Add_payout_bank_wrapper>
        <Inner_wrap>
          <Header>
            <h3>Add Payout Bank</h3>
            <FaRegTimesCircle
              style={{ fontSize: "1.3rem", cursor: "pointer" }}
              onClick={onClose}
            />
          </Header>
          <hr
            style={{ height: "2px", backgroundColor: "black", border: "none" }}
          ></hr>
          <form>
            <div className="main_label">
              <div className="label">
                <PiBank style={{ fontSize: "1.3rem" }} />
                <p>Bank name</p>
              </div>
              <div className="input_div">
                <input type="text" placeholder="e.g Splita Bank" />
              </div>
            </div>

            <div className="main_label">
              <div className="label">
                <PiBank style={{ fontSize: "1.3rem" }} />
                <p>Account Number</p>
              </div>
              <div className="input_div">
                <input type="text" placeholder="e.g 7038204858" />
              </div>
            </div>

            <button type="button" onClick={handleSave}>
              Save Bank
            </button>
          </form>
        </Inner_wrap>
      </Add_payout_bank_wrapper>
    </Add_payout_bank_content>
  );
};

export default Add_payout_bank;


const Add_payout_bank_content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;


const Add_payout_bank_wrapper = styled.div`
    width: 40%;
    height: 60%;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Inner_wrap = styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1.5rem;

        .main_label{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

        .label{
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

        .input_div{
            width: 100%;
            height: 2.5rem;
            border-radius: 0.5rem;
            border: 1.5px solid #bbbbbb;
            overflow: hidden;

            input{
                width: 100%;
                height: 100%;
                outline: none;
                border: none;
                padding-left: 0.8rem;
            }
        }
    }

    button {
        width: 100%;
        height: 3rem;
        background-color: #7b2cbf;
        color: white;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #9472b2;
            transition: all 350ms ease-in-out;
            }
        }
    }

`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
