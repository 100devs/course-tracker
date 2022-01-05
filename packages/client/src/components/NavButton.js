import { PlusCircle } from "phosphor-react";

const NavButton = ({ sidebar, toggleSidebar }) => {
  return (
    <PlusCircle
      weight="fill"
      clicked={sidebar.toString()}
      onClick={toggleSidebar}
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

export default NavButton;
