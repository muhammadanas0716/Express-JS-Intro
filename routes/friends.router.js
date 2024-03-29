const express = require("express");
const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

// ENDPOINTS
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);
friendsRouter.post("/", friendsController.postFriend);

// EXPORT
module.exports = friendsRouter;
