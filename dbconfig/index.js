const Sequelize = require("sequelize");
const sequelize = new Sequelize("hapi_tutorial", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});
module.exports.connect = sequelize;

module.exports.getUsers = async function () {
  try {
    await sequelize.authenticate();
    const [result, metadata] = await sequelize.query("select * from users");
    return result;
  } catch (error) {
    return "Error see data on database";
  }
};
