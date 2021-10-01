import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
  fontSize: props.fontSize || "1.875rem",
  size: props.size || "12rem",
  background: props.background || "black",
  hoverBG: props.hoverBG || "#3D3D3D",
  margin: props.margin || "0",
}))`
  width: ${(props) => props.size};
  background-color: ${(props) => props.background};
  color: white;
  font-size: ${(props) => props.fontSize};
  border: none;
  padding: 1rem 0;
  margin: ${(props) => props.margin};
  &:hover {
    background-color: ${(props) => props.hoverBG};
    cursor: pointer;
  }
`;

export default Button;
