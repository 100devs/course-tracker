import { useState, useEffect } from "react";
import { Wrapper, NavContainer } from "./styled/NavStyle";
import NavButton from "./NavButton";
import NavList from "./NavList";
import { IconContext } from "phosphor-react";
import Logo from "./Logo";
import TextLink from "./TextLink";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar((prev) => !prev);
  const [lemonView, setLemonView] = useState(window.innerWidth < 400);

  const updateView = () => setLemonView(window.innerWidth < 400);

  useEffect(() => {
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  });
  return (
    <IconContext.Provider value={{ size: 16 }}>
      <Wrapper>
        <NavButton sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <Logo lemonView={lemonView} />
        <NavContainer clicked={sidebar}>
          <NavList toggleSidebar={toggleSidebar} />
        </NavContainer>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default Navbar;
