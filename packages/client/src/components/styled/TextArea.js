import styled from "styled-components";
const TextArea = styled.textarea.attrs((props) => ({
  border: props.border || "none",
}))`
  height: 10rem;
  min-width: 100%;
  border: ${(props) => props.border};
  border-radius: .15rem;
  padding: .75rem;
  font-size: 1rem;
`;

export default TextArea;
