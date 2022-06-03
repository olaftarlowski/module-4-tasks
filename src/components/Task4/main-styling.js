import styled from "styled-components";

export const UserFormWrapper = styled.div`
  text-align: left;
  border: 2px solid steelblue;
  width: 360px;
  height: auto;
  padding: 36px;
  font-size: 1.5rem;
  box-sizing: border-box;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;

    .form__radios {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    input {
        
        margin: 6px 0 ;
    }
    select {
        margin: 10px 0 ;
    }
  }

  p.success {
    text-align: center;
    font-size: 1em;
    font-weight: bold;
    color: green;
  }
`;

export const ListsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
