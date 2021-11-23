import styled from "styled-components";

const DisplayMarkdown = styled.section`
  text-align: left;
  padding: 1.5rem 2rem;
  color: black;
  width: 100%;
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  p,
  a {
    font-size: 1rem;
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 1.2rem;
    }
    p,
    a {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 1rem;
    }
    padding: 1.5rem;
  }
`;

export default DisplayMarkdown;
