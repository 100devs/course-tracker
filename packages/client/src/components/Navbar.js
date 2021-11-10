import { React, useState, useContext } from "react";
import { Wrapper, NavContainer, Button, ListItem } from "./styled/NavStyle";
import { IconContext } from "phosphor-react";
import { externalLinks } from "./NavbarData";
import TextLink from "./TextLink";
import { AuthContext } from "../context/AuthContext";

const Navbar = (props) => {
  const { logout } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#CCC", size: 16 }}>
      <Wrapper>
        <Button clicked={sidebar} onClick={() => showSidebar()}>
          +
        </Button>
        <TextLink link="/" text="Task Lemon" flexDirection={`row`} />
        <NavContainer clicked={sidebar}>
          <ul>
            <ListItem>
              <TextLink text="Home" link="/" align={`left`} />
            </ListItem>
            {props.isAdmin && (
              <>
                <ListItem>
                  <TextLink
                    text="Create a Post"
                    link="/create-post"
                    align={`left`}
                  />
                </ListItem>
                <ListItem>
                  <TextLink
                    text="Logout"
                    link="/"
                    align={`left`}
                    onClick={() => logout()}
                  />
                </ListItem>
              </>
            )}
            <ListItem>
              <p>Other helpful links:</p>
            </ListItem>
            {externalLinks.map((item, index) => {
              return (
                <ListItem key={index}>
                  <a href={item.path} target="_blank" rel="noreferrer">
                    {item.title}
                    {item.icon}
                  </a>
                </ListItem>
              );
            })}
          </ul>
        </NavContainer>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default Navbar;
