import styled from "styled-components";

const TextLinkDiv = styled.div.attrs((props) => ({
  flexDirection: props.flexDirection || "column",
  justify: props.justify || "flex-start",
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
  a {
    text-decoration: none;
    color: black;
  }
  span {
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .spanMargin {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`;

export default TextLinkDiv;
