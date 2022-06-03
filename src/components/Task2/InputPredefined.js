import styled from "styled-components";

const InputPredefinedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  label {
    width: 100%;
  }
  input {
    cursor: pointer;
    width: 24px;
    height: 24px;
    font-size: 24px;
  }
`;

const InputPredefined = ({
  elemName,
  type,
  label,
  value,
  clickEvent,
  checked,
}) => {
  return (
    <InputPredefinedWrapper>
      <label htmlFor={elemName}>{label}</label>
      <input
        id={elemName}
        type={type}
        value={value}
        checked={checked}
        onChange={clickEvent}
      />
    </InputPredefinedWrapper>
  );
};

export default InputPredefined;
