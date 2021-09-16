const router = require("express").Router();
const authController = require("../controllers/auth");
const { checkAdmin } = require("../middleware/auth");

router.get("/getSession", authController.getSession);
router.post("/login", authController.login);
router.post("/admin/create-user", checkAdmin, authController.createUser);
router.put(
  "/admin/update-password/:id",
  checkAdmin,
  authController.updatePassword
);

module.exports = router;
