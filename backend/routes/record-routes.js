const express = require("express");

const recordControllers = require("../controllers/record-controllers");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/", recordControllers.getRecords);

router.use(checkAuth);

router.get("/:rid", recordControllers.getSpecificRecord);

router.post("/new", recordControllers.addRecord);

router.patch("/:rid", recordControllers.editRecord);

router.delete("/:rid", recordControllers.deleteRecord);

module.exports = router;
