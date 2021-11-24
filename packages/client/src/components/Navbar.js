import { useState, useContext } from "react";
import { Wrapper, NavContainer, ListItem } from "./styled/NavStyle";
import { IconContext, PlusCircle } from "phosphor-react";
import { externalLinks } from "./NavbarData";
import TextLink from "./TextLink";
import { AuthContext } from "../context/AuthContext";

const Navbar = (props) => {
  const { logout, isAdmin } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const logoutFunc = () => {
    logout();
    setSidebar(!sidebar);
  };
  const NavButton = () => {
    return (
      <PlusCircle
        weight="fill"
        color="black"
        clicked={sidebar.toString()}
        onClick={() => showSidebar()}
        className="plusCircle"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="0.4s"
          fill="freeze"
          from={`${sidebar ? 0 : 45} 0 0`}
          to={`${sidebar ? 45 : 0} 0 0`}
        ></animateTransform>
      </PlusCircle>
    );
  };

  return (
    <IconContext.Provider value={{ color: "#CCC", size: 16 }}>
      <Wrapper>
        <NavButton />
        <TextLink link="/" text="Task Lemon" flexDirection="row" />
        <NavContainer clicked={sidebar}>
          <ul>
            <ListItem>
              <TextLink
                text="Home"
                link="/"
                align="left"
                onClick={() => showSidebar()}
              />
            </ListItem>
            {isAdmin && (
              <>
                <ListItem>
                  <TextLink
                    text="Create a Post"
                    link="/create-post"
                    align="left"
                    onClick={() => showSidebar()}
                  />
                </ListItem>
                <ListItem>
                  <TextLink
                    text="Logout"
                    link="/"
                    align="left"
                    onClick={() => logoutFunc()}
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
