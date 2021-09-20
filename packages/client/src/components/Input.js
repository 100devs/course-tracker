import styled from "styled-components";
const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
  size: props.size || "1em",
}))`
  width: 100%;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: 0 0 ${(props) => props.size} 0;
  padding: ${(props) => props.size};
`;

export default Input;
