import { useState } from "react";
import { Wrapper, NavContainer } from "./styled/NavStyle";
import NavButton from "./NavButton";
import NavList from "./NavList";
import { IconContext } from "phosphor-react";

import TextLink from "./TextLink";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar((prev) => !prev);

  return (
    <IconContext.Provider value={{ color: "#CCC", size: 16 }}>
      <Wrapper>
        <NavButton sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <TextLink link="/" text="Task Lemon" flexDirection="row" />
        <NavContainer clicked={sidebar}>
          <NavList toggleSidebar={toggleSidebar} />
        </NavContainer>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default Navbar;
