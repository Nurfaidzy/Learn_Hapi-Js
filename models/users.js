const Connect = require("./../dbconfig/index");
const { DataTypes } = require("sequelize");

const dbConnect = Connect.connect;

const users = dbConnect.define(
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
