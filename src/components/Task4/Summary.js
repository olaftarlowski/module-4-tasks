import React from "react";
import styled from "styled-components";

const SummaryWrapper = styled.div`
  span {
    color: ${(props) => (props.isPositive ? "green" : "red")};
  }
`;

const Summary = ({ incomeAmount, expenseAmount }) => {
  const total = incomeAmount - expenseAmount;
  let positive;

  if (total < 0) {
    positive = false;
  } else {
    positive = true;
  }

  return (
    <SummaryWrapper isPositive={positive}>
      Summary: <span> {total}</span>
    </SummaryWrapper>
  );
};

export default Summary;
