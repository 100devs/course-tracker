import styled from "styled-components";
const Form = styled.form.attrs((props) => ({
  padding: props.padding || "2em 18%",
}))`
  height: fit-content;
  width: 100%;
  background-color: #e5e5e5;
  padding: ${(props) => props.padding};
`;
export default Form;
