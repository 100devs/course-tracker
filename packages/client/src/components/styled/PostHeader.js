import styled from "styled-components";

const PostHeader = styled.div`
  text-align: left;
  background-color: #e5e5e5;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  h2 {
    font-size: 3rem;
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 1.5rem;
    }
    padding: 1rem 1.5rem;
  }
`;

export default PostHeader;
