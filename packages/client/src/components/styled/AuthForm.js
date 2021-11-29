import styled from "styled-components";
const AuthForm = styled.form.attrs((props) => ({
  padding: props.padding || "3rem",
  height: props.height || "100%",
}))`
  border-radius: 0.25rem;
  height: ${(props) => props.height};
  width: 50%;
  background-color: ${(props) => props.theme.colors.bgPrimary};
  padding: ${(props) => props.padding};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    padding: 1.5rem;
    width: 90%;
  }
`;
export default AuthForm;
