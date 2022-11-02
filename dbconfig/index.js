const Sequelize = require("sequelize");
const sequelize = new Sequelize("hapi_tutorial", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("connect");
//   })
//   .catch(() => {
//     console.log("not connect");
//   });

async function testconnection() {
  try {
    await sequelize.authenticate();
    console.log("Connect");
    const [result, metadata] = await sequelize.query("select * from users");
    console.log(result);
  } catch (error) {
    console.log("failed to connect");
  }
}

testconnection();
