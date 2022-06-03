import styled from "styled-components";

const ErrorMessageWrapper = styled.p`
  margin: 0;
  font-size: 0.6em;
  color: #f00505;
`;

const ErrorMessage = ({ children }) => {
  return <ErrorMessageWrapper>{children}</ErrorMessageWrapper>;
};

export default ErrorMessage;
