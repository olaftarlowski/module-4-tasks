import styled from "styled-components";

export const UserFormWrapper = styled.div`
  text-align: left;
  border: 2px solid steelblue;
  width: 360px;
  height: auto;
  padding: 36px;
  font-size: 1.5rem;
  box-sizing: border-box;

  form {
    display: flex;
    flex-direction: column;
  }

  p.success {
    text-align: center;
    font-size: 1em;
    font-weight: bold;
    color: green;
  }
`;
