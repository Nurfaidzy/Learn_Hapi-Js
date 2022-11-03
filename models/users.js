// const Connect = require("./../dbconfig/index");
import sequelize from "./../dbconfig/index";
const { DataTypes, Model } = require("sequelize");

// const dbConnect = sequelize.connect;

const users = sequelize.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports.createUser = function (username, password) {
  users.create({ username, password }).then((data) => {
    console.log(data.toJSON());
  });
};

module.exports.updateUser = function (name, pass) {
  // users
  //   .findOne(
  //     {
  //       password: pass,
  //     },
  //     {
  //       where: {
  //         username: name,
  //       },
  //     }
  //   )
  //   .then(function (record) {
  //     console.log(record.update({ password: pass }));
  //   });
  users.update();
  // users
  //   .update(
  //     {
  //       username: name,
  //       password: pass,
  //     },
  //     {
  //       where: {
  //         id: 2,
  //       },
  //     }
  //   )
  //   .then((data) => {
  //     console.log(data.toJSON);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

module.exports.hapusUser = function (id) {
  users
    .destroy({
      where: {
        id: id,
      },
    })
    .then((data) => {
      console.log(data.toJSON);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getUser = function () {
  const find = users.findAll();
  console.log(find);
};
