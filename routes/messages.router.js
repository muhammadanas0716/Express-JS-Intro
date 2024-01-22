const express = require("express");
const messagesController = require("../controllers/messages.controller");

const messagesRouter = express.Router();

// ENDPOINTS
messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.postMessage);

// EXPORT
module.exports = messagesRouter;
