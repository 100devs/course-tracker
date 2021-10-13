import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MinusCircle, PlusCircle, IconContext } from "phosphor-react";
import NavbarData from "./NavbarData";

const NavContainer = styled.div`
  text-align: left;
  background-color: black;
  width: 10vw;
  padding: 2rem;
  color: #ccc;
`;

const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  color: #ccc;
`;

const StyledLink = styled(NavLink)`
  color: #ccc;
  text-decoration: none;
  position: relative;
`;

const Button = styled.button``;

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#CCC", size: 16 }}>
      <div className="navbar" style={{ backgroundColor: "white" }}>
        <StyledLink to="#" className="show-nav">
          <Button onClick={showSidebar}> + </Button>
        </StyledLink>
      </div>
      <NavContainer>
        {/* I wonder if we can make the nav the NavContainer and not have two wrappers  */}
        <nav className={sidebar ? "nav-menu on" : "nav-menu"}>
          <ul className="nav-menu-options" onClick={showSidebar}>
            {/* i commented out the link below bc on the navbar on codepen (link in
            thread) the circle is actually a button and i think that might be
            easier to manipulate and move around than an icon within a div and
            an icon with a list item, inside an unordered list, etc... */}
            {/* <ListItem className="nav-toggle">
              <StyledLink to="#">
                <MinusCircle className="show-nav" size={48} />
              </StyledLink>
            </ListItem> */}
            {NavbarData.map((item, index) => {
              return (
                <ListItem key={index} className={item.cName}>
                  <StyledLink to={item.path}>
                    {item.title} {item.icon}
                  </StyledLink>
                </ListItem>
              );
            })}
          </ul>
        </nav>
      </NavContainer>
    </IconContext.Provider>
  );
}

export default Navbar;
