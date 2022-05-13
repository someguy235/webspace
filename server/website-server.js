const express = require("express");
// const fetch = require("node-fetch");
// const MongoClient = require("mongodb").MongoClient;

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
  res.json({ response: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
