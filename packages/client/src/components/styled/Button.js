import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
  fontSize: props.fontSize || "1.875rem",
  size: props.size || "12rem",
}))`
  background-color: black;
  border: none;
  color: white;
  width: ${(props) => props.size};
  padding: 1rem 0;
  &:hover {
    cursor: pointer;
  }
  font-size: ${(props) => props.fontSize};
`;

export default Button;
