import styled from "styled-components";

const ButtonDiv = styled.div.attrs((props) => ({
  flexDirection: props.flexDirection || "row",
  justify: props.justify || "space-between",
  align: props.align || "center",
}))`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1.5rem;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`;

export default ButtonDiv;
