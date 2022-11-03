"use strict";

const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Connection = require("./dbconfig/index");

const users = require("./models/users");

const init = async () => {
  const server = Hapi.Server({
    host: "localhost",
    port: 3200,
  });

  await server.register([
    {
      plugin: require("hapi-geo-locate"),
      option: {
        enableByDefault: false,
      },
    },
    {
      plugin: Inert,
    },
  ]);

  // server.auth.strategy("login", "basic", { validate });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: (request, response) => {
        return "<h1>Hello Word</h1>";
      },
    },
    {
      method: "GET",
      path: "/users/{user}",
      handler: (request, h) => {
        return `<h1>Hello ${request.params.user} </h1>`;
      },
    },
    {
      method: "GET",
      path: "/{any}",
      handler: (request, h) => {
        return "<h1> u cant be here</h1>";
      },
    },
    {
      method: "GET",
      path: "/redirect",
      handler: (request, h) => {
        return h.redirect("/");
      },
    },
    {
      method: "GET",
      path: "/location",
      handler: (request, h) => {
        return request.location;
      },
    },
    {
      method: "GET",
      path: "/unduh",
      handler: (request, h) => {
        return h.file("./pages/index.html", {
          mode: "attachment",
          filename: "welcome-download.html",
        });
      },
    },
    {
      method: "GET",
      path: "/getusers",
      handler: async (request, h) => {
        const dbConnect = await Connection.connect();
        console.log(getDataUsers);
        return "<h1>hai</h1>";
      },
    },
    {
      method: "GET",
      path: "/file",
      handler: (request, h) => {
        return h.file("./pages/index.html");
      },
    },
    {
      method: "POST",
      path: "/login",
      handler: (request, h) => {
        const nama = request.payload.name;
        const pass = request.payload.password;
        users.createUser(nama, pass);
        return `<h1>${nama} ${pass}</h1>`;
      },
    },
    {
      method: "GET",
      path: "/update",
      handler: (request, h) => {
        return h.file("./pages/update.html");
      },
    },
    {
      method: "POST",
      path: "/updatekan",
      handler: (request, h) => {
        const nama = request.payload.username;
        const pass = request.payload.password;
        users.updateUser(nama, pass);
        return `<p>${nama} ${pass}</p>`;
      },
    },
    {
      method: "GET",
      path: "/hapus",
      handler: (request, h) => {
        return h.file("./pages/hapus.html");
      },
    },
    {
      method: "POST",
      path: "/hapuskan",
      handler: (request, h) => {
        const id = request.payload.id;
        users.hapusUser(id);
        return `<p>${id}</p>`;
      },
    },
    {
      method: "GET",
      path: "/takeData",
      handler: (request, h) => {
        users.getUser();
        console.log(h.response);
        return "<h1>sdsd</h1>";
      },
    },
  ]);

  await server.start();
  console.log(`Server Started on :${server.info.uri}`);
};

process.on("reject", (err) => {
  console.log(err);
  process.exit(1);
});

init();
