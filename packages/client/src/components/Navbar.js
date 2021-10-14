import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, NavContainer, Button, ListItem } from "./styled/NavStyle";
import { IconContext } from "phosphor-react";
import { internalLinks, externalLinks } from "./NavbarData";

const StyledLink = styled(NavLink)`
  color: #ccc;
  text-decoration: none;
  position: relative;
`;

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#CCC", size: 16 }}>
      <Wrapper>
        <StyledLink to="#">
          <Button clicked={sidebar} onClick={() => showSidebar()}>
            +
          </Button>
        </StyledLink>

        <NavContainer clicked={sidebar}>
          <ul>
            {internalLinks.map((item, index) => {
              return (
                <ListItem className="internal-link" key={index}>
                  <StyledLink to={item.path} exact>
                    {item.title} {item.icon}
                  </StyledLink>
                </ListItem>
              );
            })}
            <ListItem>
              <p>Other helpful links:</p>
            </ListItem>
            {externalLinks.map((item, index) => {
              return (
                <ListItem key={index}>
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
