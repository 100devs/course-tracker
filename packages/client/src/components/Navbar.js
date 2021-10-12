import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MinusCircle, PlusCircle, IconContext } from "phosphor-react";
import NavbarData from "./NavbarData";

const NavStyle = styled.div`
  text-align: left;
  background-color: black;
  width: 35vw;
  padding: 2rem;
  color: #666;
`;

const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  color: #cccccc;
`;

// const  = styled.a`
//    color: #cccccc;

// `;

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#CCC", size: 16 }}>
      <NavStyle>
        <div className="navbar">
          <Link to="#" className="show-nav">
            <PlusCircle size={48} color="#cccccc" onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu on" : "nav-menu"}>
          <ul className="nav-menu-options" onClick={showSidebar}>
            <ListItem className="nav-toggle">
              <Link>
                <MinusCircle className="show-nav" size={48} color="#cccccc" />
              </Link>
            </ListItem>
            {NavbarData.map((item, index) => {
              return (
                <ListItem key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.title} {item.icon}
                  </Link>
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
