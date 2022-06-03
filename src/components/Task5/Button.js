import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: blue;
  width: 150px;
  height: 50px;
  font-size: 24px;
`;

const Button = React.forwardRef(({ children, mouseOver }, ref) => {
  return (
    <ButtonWrapper ref={ref} onMouseOver={mouseOver}>
      {children}
    </ButtonWrapper>
  );
});

export default Button;
