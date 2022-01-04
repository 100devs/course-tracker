import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
  fontSize: props.fontSize || ".875rem",
  size: props.size || "8rem",
  background: props.background,
  hoverBG: props.hoverBG || props.theme.color.bgHover,
  margin: props.margin || "0",
}))`
  border-radius: 2rem;
  min-width: ${(props) => props.size};
  background-color: ${(props) =>
    props.dark ? props.theme.color.buttonDark : props.theme.color.buttonLight};
  color: ${(props) =>
    props.dark
      ? props.theme.color.buttonTextDark
      : props.theme.color.buttonTextLight};
  font-size: ${(props) => props.fontSize};
  border: 0;
  padding: 0.5rem 2rem;
  margin: ${(props) => props.margin};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 0 0 1.5rem 0;
  }
`;

export default Button;
