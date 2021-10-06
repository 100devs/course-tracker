import styled from "styled-components";
const TextLink = styled.div.attrs((props) => ({
  flexDirection: props.flexDirection || "column",
  justify: props.justify || "flext-start",
  align: props.align || "center",
  margin: props.margin || "0",
  padding: props.padding || "auto",
}))`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  span {
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default TextLink;
