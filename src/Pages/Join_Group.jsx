import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import Splita_logo from "../assets/Splita_logo.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import AddPayoutBankJoin from "../Components/CreategroupModal/AddPayoutBankJoin";

const Join_Group = () => {
  const navigate = useNavigate();
  const { groupid, invite } = useParams();
  const [loading, setLoading] = useState(false);
  const [addBankModal, setAddBankModal] = useState(false);
  const [groupDetail, setGroupDetail] = useState({});
  const [user, setUser] = useState(null);

  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const getUser = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const groupInfo = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/groups/${groupid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGroupDetail(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!token) {
      localStorage.setItem(
        "join_group_info",
        JSON.stringify({ groupid, invite })
      );
      navigate("/signinjoin");
      return;
    }

    getUser();
    groupInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please log in to join a group.");
      navigate("/signinjoin");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${BaseUrl}/groups/join/${groupid}/${invite}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res?.data?.message || "Joined group successfully!");

      if (!user?.payoutAccount || user?.payoutAccount?.length === 0) {
        setAddBankModal(true);
      } else {
        navigate("/userdashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Content>
      <ToastContainer />

      <div className="brand_name">
        <img
          src={Splita_logo}
          alt="Splita Logo"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="back" onClick={() => navigate(-1)}>
        <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
        <p>back home</p>
      </div>

      <Wrapper>
        <h1>Join {groupDetail?.group?.groupName}</h1>
        <p>by: {groupDetail?.group?.admin?.name}</p>

        <form onSubmit={handleSubmit}>
          <button type="submit" disabled={loading}>
            {loading ? "Joining..." : "Join Group"}
          </button>
        </form>
      </Wrapper>

      {addBankModal && (
        <AddPayoutBankJoin onClose={() => setAddBankModal(false)} />
      )}
    </Content>
  );
};

export default Join_Group;

const Content = styled.div`
  width: 100%;
  padding-bottom: 10vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f5f0;
  position: relative;
  overflow: hidden;

  .circle_top_left {
    position: absolute;
    border-radius: 50%;
    background-color: #c6bdc8;
    width: 20rem;
    height: 20rem;
    top: -20%;
    left: -17%;
  }
  .circle_top_right {
    position: absolute;
    border-radius: 50%;
    background-color: #b4a6b7;
    width: 3rem;
    height: 3rem;
    top: 10%;
    right: 0.5%;
  }
  .circle_mid_left {
    position: absolute;
    border-radius: 50%;
    background-color: #f5dcc6;
    width: 3rem;
    height: 3rem;
    top: 45%;
    left: 0.5%;
  }
  .circle_down_right {
    position: absolute;
    border-radius: 50%;
    background-color: #f4e2d1;
    width: 20rem;
    height: 20rem;
    bottom: -20%;
    right: -17%;
  }

  @media (max-width: 768px) {
    .circle_down_right,
    .circle_mid_left,
    .circle_top_left,
    .circle_top_right {
      display: none;
    }
  }

  .brand_name {
    position: absolute;
    top: 3%;
    left: 10%;
    z-index: 1;

    img {
      width: 40%;
      height: 100%;
    }
  }

  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 0.5rem;
    top: 4%;
    right: 7%;
    cursor: pointer;

    @media (max-width: 768px) {
      top: 12%;
      left: -70%;
    }

    p {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 6rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 85%;
  }

  h1 {
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  form {
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .input_div {
      display: flex;
      width: 100%;
      height: 3.2rem;
      border: 1px solid #a6a6a6;
      border-radius: 0.4rem;
      align-items: center;
      overflow: hidden;

      input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background-color: transparent;
        padding-left: 0.8rem;
      }
    }

    .error {
      color: red;
      font-size: 0.9rem;
      margin-top: -0.5rem;
    }

    button {
      margin-top: 1rem;
      width: 100%;
      height: 3.5rem;
      color: white;
      background-color: #7b2cbf;
      border-radius: 0.7rem;
      border: none;
      cursor: pointer;
      font-weight: 500;

      &:hover {
        background-color: #9472b2;
        transition: all 350ms ease-in-out;
      }
    }
  }
`;
