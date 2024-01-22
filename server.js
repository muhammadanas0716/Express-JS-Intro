const express = require("express");
const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();
const PORT = 3000;

// DATA

// EXPRESS MIDDLEWARE
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`Received ${req.method} request for ${req.url} in ${delta} ms`);
});

app.use(express.json());

// FRIENDS FUNCIONALITY
app.get(["/", "/friends"], friendsController.getFriends);
app.get("/friends/:friendId", friendsController.getFriend);
app.post("/friends", friendsController.postFriend);

// MESSAGES FUNCTIONALITY
app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
