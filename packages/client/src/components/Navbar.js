import { useState, useContext, useEffect } from "react";
import { Wrapper, NavContainer, ListItem } from "./styled/NavStyle";
import { IconContext, PlusCircle } from "phosphor-react";
import { externalLinks } from "./NavbarData";
import TextLink from "./TextLink";
import { AuthContext } from "../context/AuthContext";
import Logo from "./Logo";

const Navbar = (props) => {
  const { logout, isAdmin } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);
  const [lemonView, setLemonView] = useState(window.innerWidth < 400);

  const updateView = () => setLemonView(window.innerWidth < 400);

  useEffect(() => {
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  });

  const showSidebar = () => setSidebar(!sidebar);
  const logoutFunc = () => {
    logout();
    setSidebar(!sidebar);
  };

  const NavButton = () => {
    return (
      <PlusCircle
        weight="fill"
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
    <IconContext.Provider value={{ size: 16 }}>
      <Wrapper>
        <NavButton aria-label="Expand Navigation Menu" />
        <h1 aria-label="Task Lemon">
          <Logo lemonView={lemonView} />
        </h1>
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
