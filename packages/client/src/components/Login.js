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
import ErrorDiv from "./styled/ErrorDiv";
import TextLink from "./TextLink";
import { emailSchema, passwordSchema } from "../formValidation";

const Login = () => {
  const history = useHistory();
  const { user, login, resErrors } = useContext(AuthContext);

  //creating state for user object set to empty email/pw values
  const [userObj, setUserObj] = useState({
    email: "",
    password: "",
  });

  //set errors state
  const [errors, setErrors] = useState({});

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
    const { name } = e.target;

    const schemas = { emailSchema, passwordSchema };
    schemas[`${name}Schema`].validate({ [name]: userObj[name] })
      .then(_ => setErrors(prevErrors => ({ ...prevErrors, [name]: null })))
      .catch(({ errors }) => setErrors(prevErrors => ({ ...prevErrors, [name]: errors[0] })));
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
            onBlur={handleBlur}
            error={errors.email}
          />
          {errors.email ? <ErrorDiv> {errors.email} </ErrorDiv> : null}
        </InputDiv>

        <InputDiv>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={updateUser}
            onBlur={handleBlur}
            error={errors.password}
          />
          {errors.password ? <ErrorDiv> {errors.password} </ErrorDiv> : null}
        </InputDiv>

        <ButtonDiv>
          <TextLink onClick={() => history.goBack()} text="Cancel" />
          <Button fontSize="1.5rem" size="11rem" onClick={loginFunc}>
            Login
          </Button>
        </ButtonDiv>

        {/* backend errors */}
        {resErrors ? <ErrorDiv> {resErrors} </ErrorDiv> : null}
      </AuthForm>
    </Container>
  );
};

export default Login;
