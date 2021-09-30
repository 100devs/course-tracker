import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ButtonDiv from "./styled/ButtonDiv";
import Button from "./styled/Button";
import InputDiv from "./styled/InputDiv";
import Input from "./styled/Input";
import InputLabel from "./styled/InputLabel";
import Form from "./styled/Form";
import FormHeader from "./styled/FormHeader";
import Container from "./styled/Container";
import axios from "axios";

const Login = () => {
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
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      userObj
    );
    // use data returned from the call to set global context with dispatch
    dispatch(res.data);
  };

  return (
    <Container height="100vh" padding="1.5rem 25%">
      <Form padding="3rem" height="auto">
        <FormHeader>
          <h2>Course Tracker</h2>
        </FormHeader>

        <InputDiv>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => updateUser(e)}
          />
        </InputDiv>

        <InputDiv>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => updateUser(e)}
          />
        </InputDiv>

        <ButtonDiv>
          <Button fontSize="1.5rem" size="11rem" onClick={login}>
            Login
          </Button>
        </ButtonDiv>
      </Form>
    </Container>
  );
};

export default Login;
