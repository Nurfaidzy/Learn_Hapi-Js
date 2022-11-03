const Sequelize = require("sequelize");
// dimana?
const sequelize = new Sequelize("belajar", "postgres", "pgakulaku", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

// models/User
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
// service/User
// khusus buat CRUD DB
async function getUsers() {
  try {
    return users.findAll({ raw: true });
  } catch (error) {
    console.log(error);
    return;
  }
}

//buat isi

async function insertUser() {
  try {
    const insert = users.create({ username: "keempat", password: "keempat" });
    return insert;
  } catch (error) {
    return error;
  }
}

//update
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

//delete
async function delate() {
  try {
    const hapus = users.destroy({
      where: {
        id: 2,
      },
    });
    return hapus;
  } catch (error) {
    return error;
  }
}

// controller/UserController
// service + email + etc
const update = () => {
  try {
    // h.response() buka promise
    updateUser().then((usr) => {
      console.log(usr);
    });
  } catch (err) {
    console.log(err);
  }
};
const hapus = () => {
  try {
    delate().then((res) => {
      console.log(res);
    });
  } catch (err) {
    console.log(err);
  }
};

hapus();

// UPDATE ROW
// const editIncident = await incidentService.update(request.params.incident_id, {
//   name: request.payload.name,
//   status_id: request.payload.status_id,
//   priority_id: request.payload.priority_id,
//   severity_id: request.payload.severity_id,
//   incident_type: request.payload.incident_type,
//   detail: request.payload.detail,
//   description: request.payload.description,
//   last_updated: checkUser.id,
//   due_date: request.payload.due_date,
// }, transaction);
