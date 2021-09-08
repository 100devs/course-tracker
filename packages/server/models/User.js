const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (err) {
    throw new Error(err);
  }
});

// TODO: use this to clean up authRoutes.js post login
// userSchema.methods.comparePassword = function(candidatePassword) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//       if (err) return console.log(err);
//       console.log(isMatch);
//       return isMatch;
//   });
// };

module.exports = model("User", userSchema);
