import styled from "styled-components";
const TextArea = styled.textarea.attrs((props) => ({
  border: props.border || "none",
}))`
  height: 10rem;
  min-width: 100%;
  border: ${(props) => props.border};
  border-radius: ${(props) => (props.error ? "4px" : ".5rem")};
  padding: 0.75rem;
  font-size: 1rem;
  background: ${(props) => props.theme.color.formBackground};
`;

export default TextArea;
