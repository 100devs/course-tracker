import styled from "styled-components";

const FormHeader = styled.div.attrs((props) => ({
  justify: props.justify || "center",
  align: props.align || "center",
}))`
  width: 100%;
  text-align: center;
  justify-content: ${(props) => props.justify};
  display: flex;
  align-items: ${(props) => props.align};
  margin: 0;
  padding: 0 0 1.5rem 0;
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default FormHeader;
