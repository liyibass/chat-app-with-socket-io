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
  // --------join--------
  // 從client端取得name和room後
  socket.on("join", ({ name, room }, callback) => {
    // 1藉由addUser將他們整理成一個user物件 並將socket.id作為id
    const { error, user } = addUser({ id: socket.id, name, room });

    // 2如果有問題（有重複使用者）藉由client的callback來顯示error
    if (error) return callback(error);

    // 3向client端發送發文請求 夾帶user相關信息message
    socket.emit("message", {
      user: "admin",
      text: `${user.name} welcome to the room ${user.room}.`,
    });
    // broadcast對所有「特定房間」的使用者傳送訊息
    socket.broadcast
      .to(user.room) //特定房間
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    socket.join(user.room);
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });
  // --------sendMessage--------
  // 使用者輸入訊息後 夾帶著message對server端提出請求
  socket.on("sendMessage", (message, callback) => {
    // 得到該使用著的資料
    const user = getUser(socket.id);
    // 指定特定房間，並向client端提出夾帶user相關訊息以及message內容的發文要求
    io.to(user.room).emit("message", { user: user.name, text: message });
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
