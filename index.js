const express = require("express");
const app = express();
const PORT = 3000;

// DATA
let friends = [
  { id: 0, name: "Albert Einstien" },
  { id: 1, name: "Sir Isaac Newton" },
];

// EXPRESS MIDDLEWARE
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`Received ${req.method} request for ${req.url} in ${delta} ms`);
});

app.use(express.json());

// ### POST REQUESTS ###
app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = { name: req.body.name, id: friends.length };
  friends.push(newFriend);

  res.status(200).json(newFriend);
});

app.post("/messages", (req, res) => {
  console.log("Updating messages");
});

// ### GET REQUESTS ###

// GET ALL FRIENDS LIST
app.get(["/", "/friends"], (req, res) => {
  res.json(friends);
});

// GET FRIEND'S MESSAGES
app.get("/messages", (req, res) => {
  res.send("<ul><li>A message by your friend Albert!</li></ul>");
});

// GET INFO ON SPECIFIC FRIEND
app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: `No freind at index ${friendId}`,
    });
  }
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
