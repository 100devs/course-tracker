import styled from "styled-components";

const InputDiv = styled.div.attrs((props) => ({
  flexDirection: props.flexDirection || "column",
  justify: props.justify || "flex-start",
  align: props.align || "auto",
}))`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  margin-bottom: 1.5rem;
`;

export default InputDiv;
