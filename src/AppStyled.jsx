import styled, { keyframes } from "styled-components";

const animateBorder = keyframes`
   from {
    border-color: transparent;
  }
  to {
    border-color: #FF0059;
  }
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .img-banner-top {
    height: 40vh;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    img {
      height: 35vh;
      width: 40vw;
      border-radius: 0 0 45px 45px;
      @media screen and (max-width: 768px) {
        height: 35vh;
        width: 75vw;
      }
      @media screen and (max-width: 480px) {
        height: 35vh;
        width: 100vw;
      }
    }
  }
  .img-icon {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    img {
      height: 20vh;
      border-radius: 100%;
      border: 2px solid transparent;
      border-radius: 50%;
      animation: ${animateBorder} 1.4s forwards;
    }
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 480px) {
      top: 31%;
      left: 50%;

      transform: translate(-50%, -50%);
    }
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
