import styled from "styled-components";
const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
  size: props.size || "1rem",
  border: props.border || "none",
}))`
  width: 100%;
  border: ${(props) =>
    props.error ? `2px solid ${props.theme.colors.error}` : props.border};
  border-radius: ${(props) => (props.error ? "4px" : "1px")};
  padding: ${(props) => props.size};
  font-size: 1.2rem;
`;

export default Input;
