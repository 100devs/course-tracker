import { useContext } from "react";
import { ListItem } from "./styled/NavStyle";
import { externalLinks } from "./NavbarData";
import { AuthContext } from "../context/AuthContext";
import TextLink from "./TextLink";

const NavList = ({ toggleSidebar }) => {
  const { logout, isAdmin } = useContext(AuthContext);
  const logoutFunc = () => {
    logout();
    toggleSidebar();
  };
  return (
    <ul>
      <ListItem>
        <TextLink text="Home" link="/" align="left" onClick={toggleSidebar} />
      </ListItem>
      {isAdmin && (
        <>
          <ListItem>
            <TextLink
              text="Create a Post"
              link="/create-post"
              align="left"
              onClick={toggleSidebar}
            />
          </ListItem>
          <ListItem>
            <TextLink
              text="Logout"
              link="/"
              align="left"
              onClick={logoutFunc}
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
  );
};

export default NavList;
