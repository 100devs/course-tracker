import styled from "styled-components";

const PostHeader = styled.div`
  text-align: left;
  background-color: #e5e5e5;
  padding: ${(props) => (props.edit ? "1.5rem" : "1rem 3rem")};
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
`;

export default PostHeader;
