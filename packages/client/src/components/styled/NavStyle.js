import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 1000000;
  width: 100%;
  position: fixed;
  background: #effbee;
  padding: 2rem 3rem;
  display: flex;

  justify-content: space-between;
  .plusCircle {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 2rem;
  }
  span:hover {
    text-decoration: none;
  }
`;

export const NavContainer = styled.nav`
  width: fit-content;
  text-align: left;
  background-color: ${(props) => props.theme.colors.primary};
  color: #ccc;
  border: none;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 3rem 1.5rem;
  margin-top: 5rem;
  position: absolute;
  left: ${(props) => (props.clicked ? "0px" : "-3000px")};
  transition: ${(props) => (props.clicked ? "400ms" : "750ms")};

  ul {
    padding: 0;
  }
`;

export const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  color: #ccc;
  line-height: 2rem;
  font-weight: 600;

  p {
    color: #666;
    padding-top: 2.5rem;
    margin: 0;
    font-size: 1.5rem;
  }

  a {
    color: ${(props) => props.theme.colors.navLink};
    font-weight: 600;
    text-decoration: none;
    font-size: 1.2rem;
  }

  span {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 400;
  }

  a:hover {
    text-decoration: underline;
  }

  a > svg {
    margin-left: 0.25rem;
  }

  span:hover {
    text-decoration: underline;
  }
  @media (max-width: 500px) {
    a,
    span {
      font-size: 1rem;
    }
  }
`;
