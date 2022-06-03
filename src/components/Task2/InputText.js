import styled from "styled-components";

const InputTextWrapper = styled.div`
  label {
    width: 100%;
  }

  input {
    height: 28px;
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

const InputText = ({
  elemName,
  type,
  label,
  value,
  onchange,
  onblur,
  isValid,
}) => {
  return (
    <InputTextWrapper isValid={isValid}>
      <label htmlFor={elemName}>{label}</label>
      <input
        id={elemName}
        name={elemName}
        type={type}
        value={value}
        onChange={onchange}
        onBlur={onblur}
      />
    </InputTextWrapper>
  );
};

export default InputText;
