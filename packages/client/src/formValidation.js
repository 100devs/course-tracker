module.exports = {
  emailValidation: function (email) {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return null;
    }
    if (email.trim() === "") {
      return "Email is required";
    }
    return "Please enter a valid email";
  },

  passwordValidation: function (password) {
    if (password.trim() === "") {
      return "Password is required";
    }
  },
  // loginValidation: function (values) {
  //   let errors = {};
  //   // email
  //   if (!values.email.trim()) {
  //     errors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = "Email address is invalid";
  //   }

  //   // password
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   }
  //   return errors;
  // },
};
