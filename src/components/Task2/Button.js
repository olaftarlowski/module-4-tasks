import React from "react";

import styled from "styled-components";

const ButtonWrapper = styled.button`
font: inherit;
  margin: 12px 0;
  background-color: #240370;
  color: white;
  border: 1px solid #240370;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #33059e;
    border-color: #33059e;
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: #ccc;
    color: #292929;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const Button = ({ formValid, children }) => {
  return (
    <ButtonWrapper type="submit" disabled={!formValid}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
