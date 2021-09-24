import styled from "styled-components";
const InputLabel = styled.label.attrs((props) => ({
  fontSize: props.fontSize || "smaller",
}))`
  font-size: ${(props) => props.fontSize};
  font-weight: lighter;
  text-align: left;
  margin-bottom: 6px;
`;

export default InputLabel;
