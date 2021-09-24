import styled from "styled-components";
const Checkbox = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  width: auto;
  margin: 0 0.3em;
`;

export default Checkbox;
