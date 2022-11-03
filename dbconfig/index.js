const Sequelize = require("sequelize");
const sequelize = new Sequelize("belajar", "postgres", "pgakulaku", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

module.exports.sequelize = sequelize;
