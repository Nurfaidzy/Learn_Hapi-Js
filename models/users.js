const sequelize = require("./../dbconfig/index").sequelize;
var Sequelize,
  { DataTypes } = require("sequelize");
const users = sequelize.define(
  "users",
  {
    username: {
      type: Sequelize.DataTypes.STRING,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports.users = users;
