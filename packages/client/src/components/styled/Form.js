import styled from "styled-components";
const Form = styled.form.attrs((props) => ({
  padding: props.padding || "3rem",
  height: props.height || "100%",
}))`
  height: ${(props) => props.height};
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgPrimary};
  padding: ${(props) => props.padding};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;
export default Form;
