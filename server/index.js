const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connect", (socket) => {
  console.log("We have a new connection!!!");

  /*
  --------join--------
  從client端取得name和room後
  向client端發送請求：「發布訊息」--歡迎登入
  向其他使用者client端發送請求：「發布訊息」--有新人加入
  */
  socket.on("join", ({ name, room }, callback) => {
    // 1-1 藉由addUser將他們整理成一個user物件 並將socket.id作為id
    const { error, user } = addUser({ id: socket.id, name, room });

    // 1-2 如果有問題（有重複使用者）藉由client的callback來顯示error
    if (error) return callback(error);

    // 1-3 向client端發送請求：發文，夾帶的message包含user跟text
    socket.emit("message", {
      user: "admin",
      text: `${user.name} welcome to the room ${user.room}.`,
    });

    // --------broadcast--------
    // 對該特定房間的其他使用者client端發送請求：發文「有新人加入」
    socket.broadcast
      .to(user.room) //該特定房間
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    // 尚未用到
    socket.join(user.room);
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  /*
  --------sendMessage--------
  使用者輸入訊息後 夾帶著message
  對房間內所有人server端提出請求：「發布訊息」--此人的Po文內容
  */
  socket.on("sendMessage", (message, callback) => {
    // 1-1 得到該使用著的資料
    const user = getUser(socket.id);

    // 1-2 對房間內所有人server端提出請求：「發布訊息」--此人的Po文內容
    io.to(user.room).emit("message", { user: user.name, text: message });

    // 尚未用到
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  // --------disconnect--------
  socket.on("disconnect", () => {
    console.log("User had left.");
    const user = removeUser(socket.id);

    // 對房間所有人提出請求：「發布訊息」說此人已離開
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });
    }
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
