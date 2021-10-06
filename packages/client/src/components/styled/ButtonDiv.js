import styled from "styled-components";

const ButtonDiv = styled.div.attrs((props) => ({
  flexDirection: props.flexDirection || "row",
  justify: props.justify || "space-between",
  align: props.align || "center",
}))`
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  @media (max-width: 500px) {
    .subButtonDiv {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
    }
    flex-direction: column-reverse;
  }
`;

export default ButtonDiv;
