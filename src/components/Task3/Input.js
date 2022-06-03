import React from "react";
import styled from "styled-components";

const InputHookWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    width: 100%;
    text-transform: capitalize;
  }

  input {
    border: 2px solid ${(props) => (props.error ? "#b40e0e" : "#fff")};

    &:focus {
      outline: none;
      border-color: #fcba03;
      background-color: #e0d4fd;
    }
  }
`;

const InputHook = React.forwardRef(
  ({ hasError, onChange, onBlur, name, type }, ref) => {
    return (
      <InputHookWrapper error={hasError}>
        <label htmlFor={name}>{name}: </label>
        <input
          id={name}
          type={type}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
      </InputHookWrapper>
    );
  }
);

export default InputHook;
