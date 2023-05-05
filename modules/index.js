const express = require("express");
const router = express.Router();

router.use("/users", require("./users/routes/index"));
router.use("/orders", require("./orders/routes/index"));

module.exports = router;
