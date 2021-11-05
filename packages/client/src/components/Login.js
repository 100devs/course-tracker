import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
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
import { emailValidation, passwordValidation } from "../formValidation";

//need to figure out how to work this validation into form, maybe create a useForm useEffect, change/submit handlers, handle errors for backend
//add touched logic rendering?
const validate = {
  email: emailValidation,
  password: passwordValidation,
};

const Login = () => {
  const history = useHistory();

  //set errors state
  const [errors, setErrors] = useState({});

  //importing user object and login function from AuthContext
  const { user, login } = useContext(AuthContext);

  //creating state for user object set to empty email/pw values
  const [userObj, setUserObj] = useState({
    email: "",
    password: "",
  });

  //handle change
  function updateUser(e) {
    const { name, value } = e.target;
    setUserObj({
      ...userObj,
      [name]: value,
    });
  }
  //handle blur and validate
  function handleBlur(e) {
    const { name, value } = e.target;
    // replace this console log with a setErrorObject()
    console.log(validate[name](value));
  }

  //handle submit - add validation logic
  const loginFunc = async (e) => {
    e.preventDefault();
    //should this be await? if the logic check out, call login, otherwise, display frontend errors
    login(userObj);
    //handle backend errors
  };

  const cancel = () => {
    history.goBack();
  };

  return (
    <Container minHeight="100vh">
      <AuthForm validate={validate} height="auto">
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
            onBlur={handleBlur}
          />
        </InputDiv>
        {/* email error div goes here */}
        {/* errorObject.email && display div */}
        <InputDiv>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={updateUser}
            onBlur={handleBlur}
          />
        </InputDiv>

        <ButtonDiv>
          <TextLink text="Cancel" onClick={cancel} />
          <Button fontSize="1.5rem" size="11rem" onClick={loginFunc}>
            Login
          </Button>
        </ButtonDiv>
      </AuthForm>
    </Container>
  );
};

export default Login;
