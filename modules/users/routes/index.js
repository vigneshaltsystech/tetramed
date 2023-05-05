const express = require("express");
const { validateUser } = require("../services/users.service");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from users.");
});

router.post("/validate", async (req, res) => {
    const result = await validateUser(req.body);

    res.json(result);
});

module.exports = router;
