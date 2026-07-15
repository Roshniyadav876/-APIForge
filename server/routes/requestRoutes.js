const express = require("express");
const router = express.Router();

const { handleRequest } = require("../controllers/requestController");

router.post("/request", handleRequest);

module.exports = router;