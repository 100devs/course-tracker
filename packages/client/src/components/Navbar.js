import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MinusCircle, PlusCircle, IconContext } from "phosphor-react";
import NavbarData from "./NavbarData";

const NavStyle = styled.div`
  text-align: left;
  background-color: black;
  width: 10vw;
  padding: 2rem;
  color: #ccc;
`;

const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  color: #cccccc;
`;

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#CCC", size: 16 }}>
      <NavStyle>
        <div className="navbar" style={{ backgroundColor: "white" }}>
          <NavLink to="#" className="show-nav">
            <PlusCircle size={48} color="black" onClick={showSidebar} />
          </NavLink>
        </div>
        <nav className={sidebar ? "nav-menu on" : "nav-menu"}>
          <ul className="nav-menu-options" onClick={showSidebar}>
            <ListItem className="nav-toggle">
              <NavLink to="#">
                <MinusCircle className="show-nav" size={48} color="#cccccc" />
              </NavLink>
            </ListItem>
            {NavbarData.map((item, index) => {
              return (
                <ListItem key={index} className={item.cName}>
                  <NavLink to={item.path}>
                    {item.title} {item.icon}
                  </NavLink>
                </ListItem>
              );
            })}
          </ul>
        </nav>
      </NavStyle>
    </IconContext.Provider>
  );
}

export default Navbar;
