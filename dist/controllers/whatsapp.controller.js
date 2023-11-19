"use strict";

var verifyToken = function verifyToken(req, res) {
  try {
    var accessToken = "affadfsuf9af9sdf!sSJkijjkDKSJ8i9h9hsd9u767sd8SHuSI";
    var token = req.query["hub.verify_token"];
    var challenge = req.body["hub.challenge"];
    if (challenge != null && token != null && token === accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(400).send();
  }
};
var receivedMessage = function receivedMessage(req, res) {
  res.send("received message");
};
module.exports = {
  verifyToken: verifyToken,
  receivedMessage: receivedMessage
};