const express = require("express");

const adminControllers = require("../controllers/admin-controllers");

const router = express.Router();

router.post("/login", adminControllers.login);

module.exports = router;
