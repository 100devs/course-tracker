import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
  minHeight: props.minHeight || "auto",
}))`
  min-height: ${(props) => props.minHeight};
  padding-top: 1.5rem;
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15%;
  margin-right: 15%;

  @media (max-width: 900px) {
    margin-left: 7%;
    margin-right: 7%;
  }
  @media (max-width: 600px) {
    margin-left: 5%;
    margin-right: 5%;

    .createPost {
      margin-top: 3rem;
    }
  }
`;

export default Container;
