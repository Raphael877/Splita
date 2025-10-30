import React from "react";
import styled from "styled-components";

const Stories = () => {
  return (
    <StoriesStyled>
      <div className="contain">
        <article className="first">
          <div className="top">
            <div
              style={{
                display: "flex",
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "15px",
                gap: "5px",
              }} className="sto"
            >
              <h1>Stories from our </h1>
              <h1 style={{ color: "#7B2CBF" }}>community</h1>
            </div>
            <span>Real people. Real groups. Real savings with Splita.</span>
          </div>
        </article>

        <article className="secound">
          <div
            className="small"
            style={{
              boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
            }}
          >
            <div className="smallText">
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                “Splita made our family Ajo so easy to manage. We don’t chase
                anyone for payments anymore, everything’s transparent and
                automatic.”
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(to right, #7028ae, #441869), url('/hero2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "inline-block",
                }}
              >
                <img
                  src="/pics1.jpg"
                  alt=""
                  srcset=""
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "16px",
                    margin: 0,
                  }}
                >
                  Emmanuel I.
                </h4>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "400",
                    fontSize: "12px",
                    margin: 0,
                    color: '#7b2cbf'
                  }}
                >
                  Contributor
                </p>
              </div>
            </div>
          </div>

          <div
            className="small"
            style={{
              boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
            }}
          >
            <div className="smallText">
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                “The automatic payout rotation saved our group! No more
                arguments or confusion. Splita really keeps us accountable.”
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                className="img"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(to right, #7028ae, #441869), url('/hero2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "inline-block",
                }}
              >
                {" "}
                <img
                  src="/pics2.jpg"
                  alt=""
                  srcset=""
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "16px",
                    margin: 0,
                  }}
                >
                  Darasimi I.
                </h4>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "400",
                    fontSize: "12px",
                    margin: 0,
                    color: '#7b2cbf'
                  }}
                >
                  Group Admin
                </p>
              </div>
            </div>
          </div>

          <div
            className="small"
            style={{
              boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
            }}
          >
            <div className="smallText">
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                “I love how simple the dashboard is. I can see everyone’s
                contributions at a glance and know exactly when it’s my turn to
                get paid.”
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(to right, #7028ae, #441869), url('/hero2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "inline-block",
                }}
              >
                {" "}
                <img
                  src="/pics3.jpg"
                  alt=""
                  srcset=""
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "16px",
                    margin: 0,
                  }}
                >
                  Micheal C.
                </h4>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "400",
                    fontSize: "12px",
                    margin: 0,
                    color: '#7b2cbf'
                  }}
                >
                  Contributor
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </StoriesStyled>
  );
};

export default Stories;

const StoriesStyled = styled.div`
  height: 80vh;
  width: 100%;
  padding-block: 1.2rem;

  @media (max-width: 768px) {
    height: auto;
  }

  .contain {
    height: 100%;
    width: 100%;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .first {
      height: 45%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
      }

      .top {
        height: 40%;
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px) {
          width: 85%;
          text-align: center;
          gap: 1rem;
        }

        .sto{
          @media (max-width: 768px) {
            flex-direction: column;
          }
        }
      }
    }

    .secound {
      height: 60%;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 15px;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }

      .small {
        height: 60%;
        width: 27%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 0.5rem;

        @media (max-width: 768px) {
          width: 85%;
          gap: 2rem;
          border-radius: 0.5rem;
        }

        .smallText {
          width: 90%;
          height: 55%;
          color: #777777;
        }
      }
    }
  }
`;
