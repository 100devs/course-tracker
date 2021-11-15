import DisplayMarkdown from "./styled/DisplayMarkdown";
import ReactMarkdown from "react-markdown";

const MarkdownParser = (props) => {
  return (
    <DisplayMarkdown>
      <ReactMarkdown linkTarget="_blank">{props.markdown}</ReactMarkdown>
    </DisplayMarkdown>
  );
};

export default MarkdownParser;
