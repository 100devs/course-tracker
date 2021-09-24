const router = require("express").Router();
const authController = require("../controllers/auth");
const { checkAdmin } = require("../middleware/auth");

<<<<<<< HEAD
router.get("/getSession", authController.getSession);
router.post("/login", authController.login);
router.post("/admin/create-user", checkAdmin, authController.createUser);
router.put(
  "/admin/update-password/:id",
  checkAdmin,
  authController.updatePassword
);
=======
router
  .get("/get-session", async (req, res) => {
    res.json({ session: req.session });
  })
  .post("/login", async (req, res) => {
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
  })
  .post("/admin/create-user", checkAdmin, async (req, res) => {
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
  })
  .put("/admin/update-password/:id", checkAdmin, async (req, res) => {
    const { password } = req.body;

    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { password: password },
      { new: true }
    );
    user.save();
    console.log(user);
    res.status(200).json({ message: "Password updated successfully" });
  });
>>>>>>> dcab7fe (updated client and server paths to shish-kebab-case)

if (process.env.NODE_ENV !== "production") {
  router.get("/get-user/:id", authController.getUser);
}

module.exports = router;
