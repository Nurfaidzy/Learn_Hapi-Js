"use strict";

const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");

const service = require("./service/user");

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
      path: "/getData",
      handler: (request, h) => {
        service.allUser.getUsers();
      },
    },
    {
      method: "POST",
      path: "/deletes",
      handler: (request, h) => {
        service.delate(4);
        return "<p>berhasil di hapus</p>";
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
