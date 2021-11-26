import styled from "styled-components";

const FooterDiv = styled.footer`
  background-color: #1f321d;
  padding: 4.5rem 1.5rem 1.5rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  color: #effbee;
  .flex {
    display: flex;
  }
  .subDiv,
  .linkDiv {
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
  }
  .linkDiv {
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 1.5rem;
  }
  .copyright {
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 750px) {
    .subDiv {
      flex-direction: column-reverse;
      justify-content: flex-end;
    }
    .iconDiv {
      margin-bottom: 1.5rem;
    }
  }
  @media (max-width: 500px) {
    .iconDiv,
    .copyright {
      width: 100%;
      justify-content: space-between;
    }
    .copyright {
      justify-content: center;
    }
    .linkDiv {
      align-items: center;
      margin-bottom: 3rem;
    }
  }
`;

export default FooterDiv;
