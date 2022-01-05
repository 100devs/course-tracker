import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 1000000;
  width: 100%;
  position: fixed;
  box-shadow: 0 0 25px rgba(140, 152, 164, 0.25);
  background: ${(props) => props.theme.color.light};
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .plusCircle {
    width: 3rem;
    height: 3rem;
    color: ${(props) => props.theme.color.dark};
  }
  .textLogo {
    height: 1.9rem;
  }
  .textLogo text {
    fill: ${(props) => props.theme.color.dark};
    font-family: "WorkSans-Bold", "Work Sans", sans-serif;
    font-size: 7px;
    font-weight: 700;
  }
  .lemonLogo {
    height: 2.5rem;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 2rem;
    .textLogo {
      height: 2.6rem;
    }
  }
  span:hover {
    text-decoration: none;
  }
`;

export const NavContainer = styled.nav`
  width: fit-content;
  text-align: left;
  background-color: ${(props) => props.theme.color.dark};
  border: none;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 3rem 1.5rem;
  margin-top: 5rem;
  align-self: flex-start;
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
  line-height: 2rem;
  font-weight: 600;

  p {
    color: ${(props) => props.theme.color.accentA};
    padding-top: 2.5rem;
    margin: 0;
    font-size: 1.5rem;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    font-size: 1.2rem;
    color: ${(props) => props.theme.color.light};
  }

  span {
    color: ${(props) => props.theme.color.light};
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
