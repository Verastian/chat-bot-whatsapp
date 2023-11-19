"use strict";

var express = require("express");
var router = require("./routers/routes");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/whatsapp", router);
app.listen(PORT, function () {
  console.log("⚡ servidor conectado!! en el puerto ", PORT);
});