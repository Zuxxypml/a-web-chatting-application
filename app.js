// Dependencies Configs
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 3000;
const homeRoute = "/";
app.set("view engine", "ejs");
app.use(express.static("/public"));

// Routing
// Get requests
app.get(homeRoute, (req, res) => {
  res.render("home");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg, msg2) => {
    io.emit("chat message", msg, msg2);
  });
});
// Post requests
// Custom Routing

// Server Port
server.listen(PORT, () => {
  console.log("listening on *:3000");
});
