import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, NavContainer, Button, ListItem } from "./styled/NavStyle";
import { IconContext } from "phosphor-react";
import { internalLinks, externalLinks } from "./NavbarData";
import TextLink from "./TextLink";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#CCC", size: 16 }}>
      <Wrapper>
        <Link to="#">
          <Button clicked={sidebar} onClick={() => showSidebar()}>
            +
          </Button>
        </Link>
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
                    onClick={props.logout}
                  />
                </ListItem>
                {/* {internalLinks.map((item, index) => {
                  return (
                    <ListItem key={index}>
                      <TextLink
                        text={item.title}
                        link={item.path}
                        align={`left`}
                        exact
                      />
                    </ListItem>
                  );
                })} */}
              </>
            )}
            <ListItem>
              <p>Other helpful links:</p>
            </ListItem>
            {externalLinks.map((item, index) => {
              return (
                <ListItem key={index}>
                  <TextLink
                    text={item.title}
                    icon={item.icon}
                    link={item.path}
                    align={`left`}
                    exact
                  />
                </ListItem>
              );
            })}
          </ul>
        </NavContainer>
        <TextLink text="Task Lemon" align={`right`} />
      </Wrapper>
    </IconContext.Provider>
  );
};

export default Navbar;
