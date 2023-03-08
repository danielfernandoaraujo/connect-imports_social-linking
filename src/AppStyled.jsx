import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .img-banner-top {
    img {
      border-radius: 0 0 45px 45px;
    }
    @media screen and (max-width: 768px) {
      width: 100vw;
    }
  }
  .img-icon {
    position: absolute;

    img {
      border-radius: 100%;
    }
    @media screen and (max-width: 768px) {
      width: 100vw;
      top: 10%;
    }
  }

  /* Define as propriedades de responsividade */
  @media screen and (max-width: 768px) {
    max-width: 90%;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
    padding: 5px;
  }
`;