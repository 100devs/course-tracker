import styled from "styled-components";

const PostHeader = styled.div`
  border-radius: .25rem;
  text-align: left;
  background-color: #e5e5e5;
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
  svg{
    width: 2.5rem;
    height: 2.5rem;
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 1.5rem;
    }
    svg{
      width: 2rem;
      height: 2rem;
    }
    padding: 2rem;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 1.2rem;
    }
    svg{
      width: 1.5rem;
      height: 1.5rem;
    }
    padding: 1.5rem;
  }
  `;
  
  export default PostHeader;