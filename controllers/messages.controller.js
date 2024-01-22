function getMessages(req, res) {
  res.send("<ul><li>A message by your friend Albert!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
