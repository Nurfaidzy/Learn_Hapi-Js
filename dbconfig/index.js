const Sequelize = require("sequelize");
const sequelize = new Sequelize("belajar", "postgres", "pgakulaku", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});
// module.exports.sequelize = sequelize;

export default async function getUsers() {
  try {
    await sequelize.authenticate();
    const [result, metadata] = await sequelize.query("select * from users");
    return result;
  } catch (error) {
    return "Error see data on database";
  }
}
