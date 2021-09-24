import styled from "styled-components";
const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
  size: props.size || "1rem",
  border: props.border || "none",
}))`
  width: 100%;
  border: ${(props) => props.border};
  border-radius: 1px;
  margin: 0 0 ${(props) => props.size} 0;
  padding: ${(props) => props.size};
`;

export default Input;
