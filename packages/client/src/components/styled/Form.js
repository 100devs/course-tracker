import styled from "styled-components";
const Form = styled.form.attrs((props) => ({
  padding: props.padding || "2rem",
  height: props.height || "100vh",
}))`
  height: ${(props) => props.height};
  width: 100%;
  background-color: #e5e5e5;
  padding: ${(props) => props.padding};
`;
export default Form;
