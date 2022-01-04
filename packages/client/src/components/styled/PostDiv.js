import styled from "styled-components";

const PostDiv = styled.div`
  width: 65%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  @media (max-width: 900px) {
    width: 85%;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
`;

export default PostDiv;
