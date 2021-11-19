import * as Yup from "yup";

const emailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const passwordSchema = Yup.object().shape({
  password: Yup.string().min(6).max(21).required("Password is required"),
});

export { emailSchema, passwordSchema };

// below are yup methods using regEx that could be added to passwordSchema for further validation:
// .matches(/^(?=.*?[#?!@$ %^&*-])/)  must contain a symbol
// .matches(/^(?=.*?[A-Z])/)          must contain a capital letter
