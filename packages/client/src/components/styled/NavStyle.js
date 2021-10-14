import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 3rem;
`;

export const NavContainer = styled.nav`
  width: fit-content;
  text-align: left;
  background-color: black;
  color: #ccc;
  border: none;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding: 0.5rem 2.5rem 1.5rem 0;
  position: absolute;
  left: ${(props) => (props.clicked ? "0px" : "-300px")};
`;

export const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  color: #ccc;
  line-height: 3rem;
  font-weight: 600;

  p {
    color: #666;
    padding-top: 2.5rem;
    margin: 0;
  }
`;

export const Button = styled.button`
  background-color: black;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 1.5rem 1.5rem 1.5rem 5rem;
  cursor: pointer;
  display: flex;
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
