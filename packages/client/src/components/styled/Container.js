import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
  padding: props.padding || "1.5rem",
  height: props.height || "auto",
}))`
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Container;
