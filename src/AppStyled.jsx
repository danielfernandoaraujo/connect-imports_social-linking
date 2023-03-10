import styled, { keyframes } from "styled-components";

const animateBorder = keyframes`
   0% {
    border-color: transparent;
  }
  50% {
    border-color: #FF0059;
  }
  100%{
    border-color: transparent;
  }
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  .img-banner-top {
    height: 28vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    img {
      height: 30vh;
      width: 30vw;
      border-radius: 0 0 45px 45px;
      @media screen and (max-width: 768px) {
        height: 30vh;
        width: 90vw;
      }
      @media screen and (max-width: 480px) {
        height: 30vh;
        width: 100vw;
      }
    }
  }
  .img-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0vh;

    img {
      height: 20vh;
      border-radius: 100%;
      border: 2px solid transparent;
      border-radius: 50%;
      animation: ${animateBorder} 3s infinite;
    }
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 480px) {
    }
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
  }
  .title-text {
    height: auto;
    width: 100vw;
    margin-top: 75px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    h2 {
      font-size: 1.4em;
      text-align: center;
    }
  }
  .buttons {
    height: 37vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
`;
