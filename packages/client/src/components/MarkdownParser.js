import Body from "./styled/Body";
import ReactMarkdown from "react-markdown";

const MarkdownParser = (props) => {
  return (
    <Body>
      <ReactMarkdown linkTarget="_blank">{props.markdown}</ReactMarkdown>
    </Body>
  );
};

export default MarkdownParser;
