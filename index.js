const express = require("express");

const app = express();

const PORT = 3000;
let friends = [
  { id: 0, name: "Albert Einstien" },
  { id: 1, name: "Sir Isaac Newton" },
];

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get(["/", "/friends"], (req, res) => {
  res.json(friends);
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>A message by your friend Albert!</li></ul>");
});

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

app.post("/messages", (req, res) => {
  console.log("Updating messages");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
