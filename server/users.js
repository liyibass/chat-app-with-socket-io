const users = [];

// 整合id、name、room合成一個user物件並回傳，若有問題則回傳error
const addUser = ({ id, name, room }) => {
  // 1整理string格式
  name = name.trim().toLowerCase();
  room = room.trim();
  // 2檢查是否有重複使用者
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) {
    return { error: "Username is taken" };
  }
  // 3打包成user物件 更新到users列表中並回傳user
  const user = { id, name, room };

  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
