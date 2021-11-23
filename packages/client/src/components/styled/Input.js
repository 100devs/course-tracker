import styled from "styled-components";
const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
  size: props.size || ".75rem",
  border: props.border || "none",
}))`
  width: 100%;
  border: ${(props) => (props.error ? "2px solid #EE5F5F" : props.border)};
  border-radius: ${(props) => (props.error ? "4px" : ".15rem")};
  padding: ${(props) => props.size};
  font-size: 1rem;
`;

export default Input;
