import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ButtonDiv from "./styled/ButtonDiv";
import Button from "./styled/Button";
import InputDiv from "./styled/InputDiv";
import Input from "./styled/Input";
import InputLabel from "./styled/InputLabel";
import AuthForm from "./styled/AuthForm";
import FormHeader from "./styled/FormHeader";
import Container from "./styled/Container";
import TextLink from "./TextLink";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const { user, login } = useContext(AuthContext);
  const [userObj, setUserObj] = useState({
    email: "",
    password: "",
  });

  function updateUser(e) {
    const { name, value } = e.target;
    setUserObj({
      ...userObj,
      [name]: value,
    });
  }

  const loginFunc = async (e) => {
    e.preventDefault();
    login(userObj);
  };

  return (
    <Container minHeight="100vh">
      <AuthForm height="auto">
        <FormHeader>
          <h2>Task Lemon</h2>
        </FormHeader>

        <InputDiv>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={updateUser}
          />
        </InputDiv>

        <InputDiv>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={updateUser}
          />
        </InputDiv>

        <ButtonDiv>
          <TextLink onClick={() => history.goBack()} text="Cancel" />
          <Button fontSize="1.5rem" size="11rem" onClick={loginFunc}>
            Login
          </Button>
        </ButtonDiv>
      </AuthForm>
    </Container>
  );
};

export default Login;
