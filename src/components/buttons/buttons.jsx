import React from "react";
import styled from "styled-components";
import {MdArrowForwardIos} from "react-icons/md";

const StyledButton = styled.a`
  background-image: radial-gradient(
    circle at 120.71% 50%,
    #ff5d60 0,
    #ff415d 25%,
    #ff0058 50%,
    #ee0054 75%,
    #df0054 100%
  );
  color: white;
  width: 100%;
  padding: 15px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px ;
  div {
    display: flex;
    align-items: center;
    justify-content: left;
  }
  box-shadow: 0px 26px 21px -23px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  :hover {
    color: white;
    background-color: #b2003e;
    transition: 0.4s;
  }
  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`;

const ButtonIcon = styled.span`
  margin-right: 10px;
  display: flex ;
  align-items: center ;
  justify-content: center ;
`;

const ArrowIcon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Button = ({ text, color, icon, link }) => {
  return (
    <StyledButton target="_blank" href={link} color={color}>
      <div>
        {icon && <ButtonIcon>{icon}</ButtonIcon>}
        {text}
      </div>
      <ArrowIcon>
        <MdArrowForwardIos />
      </ArrowIcon>
    </StyledButton>
  );
};

export default Button;
