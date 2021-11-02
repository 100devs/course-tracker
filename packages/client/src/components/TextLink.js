import { useHistory } from "react-router-dom";
import TextLinkDiv from "./styled/TextLinkDiv";

const TextLink = (props) => {
  const history = useHistory();
  return (
    <TextLinkDiv
      flexDirection={props.flexDirection}
      align={props.align}
      justify={props.justify}
      margin={props.margin}
      padding={props.padding}
      onClick={props.onClick}
    >
      <span onClick={() => history.push(props.onClickGoTo)}>{props.text}</span>
    </TextLinkDiv>
  );
};
export default TextLink;
