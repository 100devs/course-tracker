import styled from "styled-components";

const FeedDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5rem;
  @media(max-width: 600px){
    padding-top: 4rem;
  }
`;

export default FeedDiv;
