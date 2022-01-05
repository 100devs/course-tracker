import styled from "styled-components";
// TODO: change color of either input, or parent div so that they're different colors/visible
const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
  size: props.size || ".75rem",
  border: props.border || "none",
}))`
  width: 100%;
  border: ${(props) =>
    props.error ? `2px solid ${props.theme.color.error}` : props.border};
  border-radius: ${(props) => (props.error ? "4px" : ".5rem")};
  padding: ${(props) => props.size};
  font-size: 1rem;
  background: ${(props) => props.theme.color.formBackground};
`;

export default Input;
