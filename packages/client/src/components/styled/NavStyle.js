import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 1000000;
  width: 100%;
  position: fixed;
  background: white;
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: space-between;

  span:hover {
    text-decoration: none;
  }
`;

export const NavContainer = styled.nav`
  width: fit-content;
  text-align: left;
  background-color: black;
  color: #ccc;
  border: none;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
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
  }

  a {
    color: #ccc;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  span:hover {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  background-color: black;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  &::before,
  &::after {
    content: " ";
    background-color: #ccc;
    position: absolute;
    transition: all 0.3s ease;
    left: 25%;
    right: 25%;
    width: 50%;
    height: 10%;
    top: 45%;
  }

  &::before {
    transform: ${(props) => (props.clicked ? "rotate(0)" : "rotate(90deg)")};
  }
  &::after {
    transform: ${(props) => (props.clicked ? "rotate(0)" : "rotate(0)")};
  }
`;
