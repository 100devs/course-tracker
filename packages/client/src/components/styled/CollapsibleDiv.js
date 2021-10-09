import styled from "styled-components";
//TODO: fine-tune transition behavior (line 6)
const CollapsibleDiv = styled.div`
  max-height: ${(props) => (props.hidden ? "0" : "7500px")};
  opacity: ${(props) => (props.hidden ? "0" : "1")};
  transition: ${(props) =>
    props.hidden
      ? "opacity 150ms ease-in-out 150ms"
      : "opacity 100ms ease-in-out"};
  transition: ${(props) =>
    props.hidden ? "max-height 50ms" : "max-height 2000ms"};
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
`;

/*
Extra declarations for CollapsibleDiv's CSS rule:
border: solid red 2px;
width: 100%;
justify-content: center;
align-content: center;
position: static;
transform: scaleY(1);
transform-origin: top;
*/

export default CollapsibleDiv;
