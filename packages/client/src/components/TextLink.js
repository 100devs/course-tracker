import { Link } from "react-router-dom";
import TextLinkDiv from "./styled/TextLinkDiv";

const TextLink = (props) => {
  return (
    <TextLinkDiv
      flexDirection={props.flexDirection}
      align={props.align}
      justify={props.justify}
      margin={props.margin}
      padding={props.padding}
      onClick={props.onClick}
    >
      <Link to={props.link}>
        <span>
          {props.text}
          {props.icon}
        </span>
      </Link>
    </TextLinkDiv>
  );
};
export default TextLink;
