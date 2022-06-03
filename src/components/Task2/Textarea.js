import React from "react";
import styled from "styled-components";

const TextareaWrapper = styled.div`
  label {
    width: 100%;
  }
  textarea {
    resize: none;
    height: 56px;
    font-size: 1rem;
    padding: 2px;
    box-sizing: border-box;
    margin: 3px 0;
    width: 100%;
    background-color: ${(props) => (props.isValid ? "#fddddd" : "#fff")};
    border: 2px solid ${(props) => (props.isValid ? "#b40e0e" : "#000")};

    &:focus {
      outline: none;
      border-color: #fcba03;
      background-color: #e0d4fd;
    }
  }
`;

const Textarea = ({ elemName, label, value, isValid, onchange, onblur }) => {
  return (
    <TextareaWrapper isValid={isValid}>
      <label htmlFor={elemName}>{label}</label>
      <textarea
        name={elemName}
        id={elemName}
        value={value}
        onChange={onchange}
        onBlur={onblur}
      ></textarea>
    </TextareaWrapper>
  );
};

export default Textarea;
