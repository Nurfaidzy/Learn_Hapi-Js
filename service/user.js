// khusus buat CRUD DB
const users = require("./../models/users");

async function getUsers() {
  try {
    const getall = users.findAll({ raw: true });
    return getall;
  } catch (error) {
    console.log(error);
    return;
  }
}

async function insertUser() {
  try {
    const insert = users.create({ username: "keempat", password: "keempat" });
    return insert;
  } catch (error) {
    return error;
  }
}

async function updateUser() {
  try {
    const update = users.update(
      { username: "kedua", password: "kedua" },
      { where: { id: 2 } }
    );
    return update;
  } catch (error) {
    return error;
  }
}

async function delate(id) {
  try {
    const hapus = users.destroy({
      where: {
        id: id,
      },
    });
    return hapus;
  } catch (error) {
    return error;
  }
}

module.exports.delate = delate;
// module.exports.allUser = { getUsers, insertUser, updateUser, delate };
