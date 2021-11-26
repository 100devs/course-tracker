import styled from "styled-components";
const Form = styled.form.attrs((props) => ({
  padding: props.padding || "3rem",
  height: props.height || "100%",
  marginTop: props.marginTop || "0",
}))`
  margin-top: ${(props) => props.marginTop};
  border-radius: 0.25rem;
  height: ${(props) => props.height};
  width: 75%;
  background-color: #e5e5e5;
  padding: ${(props) => props.padding};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  @media (max-width: 900px) {
    width: 85%;
  }
  @media (max-width: 600px) {
    width: 95%;
    padding: 1.5rem;
  }
`;
export default Form;
