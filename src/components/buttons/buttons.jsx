import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const ButtonIcon = styled.span`
  margin-right: 5px;
`;

const Button = ({ text, color, icon }) => {
  return (
    <StyledButton color={color}>
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      {text}
    </StyledButton>
  );
};

export default Button;
