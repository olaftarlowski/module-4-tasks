import React from "react";
import styled from "styled-components";

const FullListWrapper = styled.div`
  text-align: left;
  border: 1px solid red;

  li {
    display: flex;
    justify-content: space-between;
    margin: 4px 0;
  }
`;

const FullList = ({ data, deleteItem }) => {
  return (
    <FullListWrapper>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {item.name} ** {item.amount} ** {item.category} **{" "}
              <button onClick={() => deleteItem(item)}>delete</button>
            </li>
          );
        })}
      </ul>
    </FullListWrapper>
  );
};

export default FullList;
