import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
  padding: props.padding || "1.5rem",
  minHeight: props.minHeight || "auto",
}))`
  min-height: ${(props) => props.minHeight};
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 600px){
    .createPost{
      margin-top: 3rem;
    }
  }
`;

export default Container;
