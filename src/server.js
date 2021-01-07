const express = require("express");

const server = express();

// server.get("/", (req, res) => res.send("test"));

server.use(express.static("./public"));

const port = 8100;
server.listen(port, () =>
  console.log('\x1b[36m%s \x1b[33m%s\x1b[0m', 'Server running at', `http://localhost:${port}`)
);
