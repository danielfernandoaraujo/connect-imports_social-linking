import React from "react";
import styled from "styled-components";
import {MdArrowForwardIos} from "react-icons/md";

const StyledButton = styled.a`
  background-color: ${(props) => props.color};
  color: white;
  width: 100%;
  padding: 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between ;
  div {
    display: flex ;
    align-items: center;
    justify-content: left;
  }

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
