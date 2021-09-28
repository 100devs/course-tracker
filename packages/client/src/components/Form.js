import styled from "styled-components";
const Form = styled.form.attrs((props) => ({
  padding: props.padding || "2rem",
  // 18% 4rem
}))`
  height: 100vh;
  width: 100%;
  background-color: #e5e5e5;
  padding: ${(props) => props.padding};
`;
export default Form;
