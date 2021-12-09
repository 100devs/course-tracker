import styled from "styled-components";

const PostHeader = styled.div`
  border-radius: 0.25rem;
  text-align: left;
  background-color: ${(props) => props.theme.color.bgPrimary};
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  &:hover {
    cursor: pointer;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${(props) => props.theme.color.tertiary};
  }
  svg.published {
    color: ${(props) => props.theme.color.secondary};
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 1.8rem;
    }
    svg {
      width: 2rem;
      height: 2rem;
    }
    padding: 2rem;
  }
  @media (max-width: 500px) {
    svg {
      width: 1.9rem;
      height: 1.9rem;
    }
    padding: 1.5rem;
  }
`;

export default PostHeader;
