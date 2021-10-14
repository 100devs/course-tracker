import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "phosphor-react";
import NavbarData from "./NavbarData";

const Wrapper = styled.div`
  width: 10vw;
  margin-top: 3rem;
`;

const NavContainer = styled.nav`
  text-align: left;
  background-color: black;
  color: #ccc;
  border: none;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  padding: 0.5rem 0 1.5rem 0;
`;

const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  color: #ccc;
  line-height: 2rem;
`;

const StyledLink = styled(NavLink)`
  color: #ccc;
  text-decoration: none;
  position: relative;
  font-weight: 600;
`;

const Button = styled.button`
  background-color: black;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  &::before,
  &::after {
    content: " ";
    background-color: white;
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

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#CCC", size: 16 }}>
      <Wrapper>
        <StyledLink to="#" className="show-nav">
          <Button clicked={sidebar} onClick={showSidebar}>
            +
          </Button>
        </StyledLink>

        <NavContainer className={sidebar ? "nav-menu on" : "nav-menu"}>
          <ul className="nav-menu-options" onClick={showSidebar}>
            {NavbarData.map((item, index) => {
              return (
                <ListItem key={index} className={item.cName}>
                  <StyledLink to={item.path} exact>
                    {item.title} {item.icon}
                  </StyledLink>
                </ListItem>
              );
            })}
          </ul>
        </NavContainer>
      </Wrapper>
    </IconContext.Provider>
  );
}

export default Navbar;
