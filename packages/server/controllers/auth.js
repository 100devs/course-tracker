const User = require("../models/User");
const bcrypt = require("bcrypt");

module.export = {
  getSession: async (req, res) => {
    res.json({ session: req.session });
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: "User not found" });
    }
    try {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        req.session.isAdmin = user.isAdmin;
        return res.status(200).json({ message: "User logged in successfully" });
      }
    } catch (err) {
      console.log(err);
    }
    res.status(401).json({ message: "Invalid credentials" });
  },
  createUser: async (req, res) => {
    const { username, email, password } = req.body;

    const user = new User({
      email,
      username,
      password,
      isAdmin: true,
    });

    try {
      await user.save();

      res.status(201).json({ message: "User created" });
    } catch (err) {
      console.log(err);

      res.status(422).json({ message: err.message });
    }
  },
  getUser: async (req, res) => {
    res.json(await User.findOne({ _id: req.params.id }));
  },
  updatePassword: async (req, res) => {
    const { password } = req.body;

    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { password: password },
      { new: true }
    );
    user.save();
    console.log(user);
    res.status(200).json({ message: "Password updated successfully" });
  },
};
