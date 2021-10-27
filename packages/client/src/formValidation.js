module.exports = {
  loginValidation: function (values) {
    let errors = {};
    // email
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    // password
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  },
};
