"use strict";

var express = require("express");
var router = express.Router();
var whatsappController = require("../controllers/whatsapp.controller");
router.get("/", whatsappController.verifyToken).post("/", whatsappController.receivedMessage);
module.exports = router;