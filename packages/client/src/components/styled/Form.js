import styled from "styled-components";
const Form = styled.form.attrs((props) => ({
  padding: props.padding || "3rem",
  height: props.height || "100%",
  marginTop: props.marginTop || "0",
}))`
  width: 100%;
  box-shadow: 0 0 35px rgba(140, 152, 164, 0.125);
  margin-top: ${(props) => props.marginTop};
  border-radius: 1rem;
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.color.light};
  padding: ${(props) => props.padding};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
`;
export default Form;
