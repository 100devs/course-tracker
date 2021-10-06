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
import TextLink from "./styled/TextLink";
import axios from "axios";
import { Redirect } from "react-router-dom";

const backend = process.env.REACT_APP_BACKEND;

const Login = () => {
  const [cancel, setCancel] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
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

  const login = async (e) => {
    e.preventDefault();
    // make call to api/auth/login endpoint and send user object
    const res = await axios.post(`${backend}api/auth/login`, userObj);
    // use data returned from the call to set global context with dispatch
    dispatch(res.data);
  };

  if (cancel) {
    return <Redirect to="/" />;
  }

  return (
    <Container height="100vh">
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
          <TextLink onClick={() => setCancel(true)}>
            <span>Cancel</span>
          </TextLink>
          <Button fontSize="1.5rem" size="11rem" onClick={login}>
            Login
          </Button>
        </ButtonDiv>
      </AuthForm>
    </Container>
  );
};

export default Login;
