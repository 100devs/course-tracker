const router = require("express").Router();
const authController = require("../controllers/auth");
const { checkAdmin } = require("../middleware/auth");

// URL paths should be in shish-kebab-case
// router.get("/get-session", authController.getSession);
router.post("/login", authController.login);
router.post("/admin/create-user", checkAdmin, authController.createUser);
router.put(
  "/admin/update-password/:id",
  checkAdmin,
  authController.updatePassword
);
router.post("/logout/:userId", authController.logout);

if (process.env.NODE_ENV !== "production") {
  router.get("/get-user/:id", authController.getUser);
}

module.exports = router;
