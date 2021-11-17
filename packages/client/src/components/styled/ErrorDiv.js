import styled from "styled-components";

// written as "ErrorDiv", but could be abstracted as "MessageDiv" with style props passed for error or success messages
const ErrorDiv = styled.div.attrs((props) => ({}))`
  color: #ee5f5f;
  padding: 0.75rem 0;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
`;

export default ErrorDiv;