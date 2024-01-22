const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messageRouter = require("./routes/messages.router");

const app = express();
const PORT = 3000;

// EXPRESS MIDDLEWARE
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`Received ${req.method} request for ${req.url} in ${delta} ms`);
});

app.use(express.json());

// EXPRESS ROUTING (MIDDLEWARE)
app.use("/friends", friendsRouter);
app.use("/messages", messageRouter);

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
