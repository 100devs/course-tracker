import styled from "styled-components";

const IconAnchor = styled.a`
  background: ${(props) => props.theme.colors.bgSecondary};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin-left: 1.5rem;
  @media (max-width: 500px) {
    margin-left: 0;
    width: 4rem;
    height: 4rem;
  }
`;

export default IconAnchor;
