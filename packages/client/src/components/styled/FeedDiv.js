import styled from "styled-components";

const FeedDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 8rem;
  @media (max-width: 600px) {
    padding-top: 6rem;
  }
`;

export default FeedDiv;
