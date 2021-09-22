import styled from "styled-components";
const TextArea = styled.textarea.attrs((props) => ({
  border: props.border || "none",
}))`
  height: 10em;
  min-width: 100%;
  border: ${(props) => props.border};
  border-radius: 1px;
  padding: 1em;
  margin: 0 0 1em 0;
`;

export default TextArea;
